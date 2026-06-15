<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

type Release = {
  tag_name: string
  name: string
  published_at: string
  prerelease: boolean
  assets: Array<{ name: string; browser_download_url: string; size: number }>
}
type WorkflowRun = {
  id: number
  html_url: string
  head_branch: string
  created_at: string
  conclusion: string
  run_number: number
}

type ResolvedDownload = {
  asset: Release['assets'][number]
  release: Release
}

const REPO = 'codingsushi79/Papyrus'
const WORKFLOW_FILE = 'build.yml'
const RELEASE_JAR_PREFIX = 'Papyrus-'
const DEFAULT_MC = '26.1.2'
const MC_VERSIONS = ['26.1.2', '1.21.11', '1.21.10', '1.21.8', '1.21.4', '1.21.1']

const releases = ref<Release[]>([])
const devRuns = ref<WorkflowRun[]>([])
const selectedMc = ref(DEFAULT_MC)
const selectedDevId = ref('')
const showDev = ref(false)
const menuOpen = ref(false)
const loading = ref(true)
const error = ref('')

async function loadData() {
  loading.value = true
  error.value = ''

  try {
    const [releaseRes, runsRes] = await Promise.all([
      fetch(`https://api.github.com/repos/${REPO}/releases?per_page=30`),
      fetch(`https://api.github.com/repos/${REPO}/actions/workflows/${WORKFLOW_FILE}/runs?branch=main&status=success&per_page=15`),
    ])

    if (!releaseRes.ok) throw new Error('Failed to load releases')
    releases.value = await releaseRes.json()

    if (runsRes.ok) {
      const runsPayload = await runsRes.json()
      devRuns.value = runsPayload.workflow_runs ?? []
    }
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Failed to load download info'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadData()
  document.addEventListener('click', closeMenuOnOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', closeMenuOnOutside)
})

function closeMenuOnOutside() {
  menuOpen.value = false
}

const stableReleases = computed(() =>
  releases.value.filter((release) => !release.prerelease && release.assets.length > 0),
)

const devBuilds = computed(() => devRuns.value.filter((run) => run.conclusion === 'success'))

watch(devBuilds, (list) => {
  if (list.length && !selectedDevId.value) {
    selectedDevId.value = String(list[0].id)
  }
}, { immediate: true })

const selectedDevRun = computed(() =>
  devBuilds.value.find((run) => String(run.id) === selectedDevId.value) ?? devBuilds.value[0],
)

function jarAssetForMc(assets: Release['assets'], mc: string) {
  return assets.find((asset) => asset.name === `${RELEASE_JAR_PREFIX}${mc}.jar`)
}

function findLatestForMc(mc: string): ResolvedDownload | undefined {
  for (const release of stableReleases.value) {
    const asset = jarAssetForMc(release.assets, mc)
    if (asset) return { asset, release }
  }
  return undefined
}

const resolvedDownload = computed((): ResolvedDownload | undefined => {
  if (showDev.value) return undefined
  return findLatestForMc(selectedMc.value)
})

const displayVersion = computed(() => (showDev.value ? DEFAULT_MC : selectedMc.value))

const buildLabel = computed(() => {
  if (showDev.value && selectedDevRun.value) {
    return `CI #${selectedDevRun.value.run_number}`
  }
  const resolved = resolvedDownload.value
  if (!resolved) return 'No release yet'
  return resolved.release.tag_name
})

const downloadUrl = computed(() => {
  if (showDev.value) {
    return selectedDevRun.value ? `${selectedDevRun.value.html_url}#artifacts` : ''
  }
  return resolvedDownload.value?.asset.browser_download_url ?? ''
})

const canDownload = computed(() => Boolean(downloadUrl.value))

const activeAsset = computed(() => resolvedDownload.value?.asset)

type MenuItem = {
  id: string
  label: string
  sub: string
}

const versionMenuItems = computed((): MenuItem[] => {
  if (showDev.value) {
    return devBuilds.value.map((run) => ({
      id: String(run.id),
      label: `main · CI #${run.run_number}`,
      sub: new Date(run.created_at).toLocaleDateString(),
    }))
  }

  return MC_VERSIONS.flatMap((mc) => {
    const found = findLatestForMc(mc)
    if (!found) return []
    return [{
      id: mc,
      label: mc,
      sub: found.release.tag_name,
    }]
  })
})

watch(versionMenuItems, (items) => {
  if (!items.length || showDev.value) return
  if (!items.some((item) => item.id === selectedMc.value)) {
    selectedMc.value = items[0]?.id ?? DEFAULT_MC
  }
}, { immediate: true })

const selectedMenuId = computed({
  get: () => (showDev.value ? selectedDevId.value : selectedMc.value),
  set: (value: string) => {
    if (showDev.value) selectedDevId.value = value
    else selectedMc.value = value
  },
})

function toggleMenu(event: Event) {
  event.stopPropagation()
  menuOpen.value = !menuOpen.value
}

function selectVersion(id: string) {
  selectedMenuId.value = id
  menuOpen.value = false
}

function toggleDev() {
  showDev.value = !showDev.value
  menuOpen.value = false
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}
</script>

<template>
  <section class="dl-hero">
    <div v-if="loading" class="dl-status">Loading releases…</div>
    <div v-else-if="error" class="dl-status dl-error">{{ error }}</div>

    <template v-else>
      <div class="dl-eyebrow">
        <span class="dl-eyebrow-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </span>
        Downloads
      </div>

      <h1 class="dl-title">
        Get Papyrus <span class="dl-version">{{ displayVersion }}</span>
      </h1>

      <p class="dl-lead">
        Download Papyrus, our Paper-compatible Minecraft server software with configurable vanilla parity and performance tuning.
      </p>

      <div class="dl-actions">
        <div class="dl-split" :class="{ open: menuOpen, disabled: !canDownload && !showDev }">
          <a
            class="dl-split-main"
            :href="canDownload ? downloadUrl : undefined"
            :target="canDownload ? '_blank' : undefined"
            :rel="canDownload ? 'noopener noreferrer' : undefined"
            :tabindex="canDownload ? 0 : -1"
          >
            <span class="dl-split-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <polyline points="9 15 12 18 15 15" />
              </svg>
            </span>
            <span class="dl-split-text">
              <span class="dl-split-name">Papyrus {{ displayVersion }}</span>
              <span class="dl-split-build">{{ buildLabel }}</span>
            </span>
          </a>

          <button
            type="button"
            class="dl-split-toggle"
            :disabled="!versionMenuItems.length"
            :aria-expanded="menuOpen"
            aria-label="Choose version"
            @click="toggleMenu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          <div v-if="menuOpen && versionMenuItems.length" class="dl-menu" @click.stop>
            <button
              v-for="item in versionMenuItems"
              :key="item.id"
              type="button"
              class="dl-menu-item"
              :class="{ active: item.id === selectedMenuId }"
              @click="selectVersion(item.id)"
            >
              <span class="dl-menu-label">{{ item.label }}</span>
              <span class="dl-menu-sub">{{ item.sub }}</span>
            </button>
          </div>
        </div>

        <button type="button" class="dl-dev-toggle" :class="{ active: showDev }" @click="toggleDev">
          {{ showDev ? 'Show stable releases' : 'Toggle dev builds from CI' }}
        </button>

        <p v-if="!showDev && !stableReleases.length" class="dl-hint">
          No GitHub releases yet — enable dev builds or download from
          <a href="https://github.com/codingsushi79/Papyrus/actions/workflows/build.yml" target="_blank" rel="noopener noreferrer">CI artifacts</a>.
        </p>

        <p v-else-if="showDev" class="dl-hint">
          Dev artifacts: <code>papyrus-server-&lt;mc&gt;</code> for each supported Minecraft version.
        </p>

        <p v-else-if="activeAsset" class="dl-hint">
          {{ activeAsset.name }} · {{ formatBytes(activeAsset.size) }}
        </p>

        <p v-else-if="!showDev && stableReleases.length" class="dl-hint">
          Selected Minecraft version is not attached to a release yet — pick another version from the menu.
        </p>
      </div>
    </template>
  </section>
</template>

<style scoped>
.dl-hero {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 2.5rem;
  padding: 0;
}

.dl-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 1rem;
  color: var(--vp-c-text-2);
  font-size: 0.9375rem;
  font-weight: 500;
}

.dl-eyebrow-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.dl-title {
  display: block;
  width: 100%;
  margin: 0 0 0.75rem;
  font-size: clamp(2rem, 5vw, 2.75rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--vp-c-text-1);
}

.dl-version {
  color: var(--vp-c-brand-1);
}

.dl-lead {
  margin: 0 0 1.75rem;
  max-width: 36rem;
  color: var(--vp-c-text-2);
  font-size: 1.0625rem;
  line-height: 1.65;
}

.dl-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.875rem;
  max-width: 100%;
}

.dl-split {
  position: relative;
  display: flex;
  width: min(100%, 22rem);
  border-radius: 0.75rem;
  background: var(--vp-c-brand-1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
}

.dl-split.disabled .dl-split-main {
  opacity: 0.55;
  pointer-events: none;
}

.dl-split-main {
  display: flex;
  flex: 1;
  align-items: center;
  gap: 0.875rem;
  min-width: 0;
  padding: 0.875rem 1rem 0.875rem 1.25rem;
  color: #fff;
  text-decoration: none;
  border-radius: 0.75rem 0 0 0.75rem;
  transition: background-color 0.15s;
}

.dl-split-main:hover {
  background: color-mix(in srgb, #fff 8%, var(--vp-c-brand-1));
}

.dl-split-icon {
  display: inline-flex;
  flex-shrink: 0;
  opacity: 0.95;
}

.dl-split-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
  min-width: 0;
}

.dl-split-name {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.2;
}

.dl-split-build {
  font-size: 0.8125rem;
  font-weight: 500;
  opacity: 0.88;
}

.dl-split-toggle {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  width: 3rem;
  padding: 0;
  border: 0;
  border-left: 1px solid color-mix(in srgb, #fff 22%, transparent);
  border-radius: 0 0.75rem 0.75rem 0;
  background: transparent;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s;
}

.dl-split-toggle:hover:not(:disabled) {
  background: color-mix(in srgb, #fff 10%, var(--vp-c-brand-1));
}

.dl-split-toggle:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.dl-menu {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  z-index: 20;
  min-width: min(100%, 18rem);
  max-width: 20rem;
  max-height: 16rem;
  overflow: auto;
  padding: 0.375rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.75rem;
  background: var(--vp-c-bg);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
}

.dl-menu-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
  width: 100%;
  padding: 0.625rem 0.75rem;
  border: 0;
  border-radius: 0.5rem;
  background: transparent;
  color: var(--vp-c-text-1);
  text-align: left;
  cursor: pointer;
  transition: background-color 0.15s;
}

.dl-menu-item:hover,
.dl-menu-item.active {
  background: var(--vp-c-bg-soft);
}

.dl-menu-label {
  font-size: 0.9375rem;
  font-weight: 600;
}

.dl-menu-sub {
  font-size: 0.8125rem;
  color: var(--vp-c-text-3);
}

.dl-dev-toggle {
  display: flex;
  align-items: center;
  padding: 0.625rem 1rem;
  border: 1px solid color-mix(in srgb, var(--vp-c-brand-1) 45%, var(--vp-c-divider));
  border-radius: 0.625rem;
  background: transparent;
  color: var(--vp-c-text-1);
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.4;
  cursor: pointer;
  transition: border-color 0.15s, background-color 0.15s, color 0.15s;
}

.dl-dev-toggle:hover,
.dl-dev-toggle.active {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.dl-hint {
  margin: 0;
  max-width: 36rem;
  color: var(--vp-c-text-3);
  font-size: 0.875rem;
  line-height: 1.55;
}

.dl-hint a {
  color: var(--vp-c-brand-1);
}

.dl-status {
  color: var(--vp-c-text-2);
  font-size: 0.9375rem;
}

.dl-error {
  color: var(--vp-c-danger-1, #f66f81);
}
</style>
