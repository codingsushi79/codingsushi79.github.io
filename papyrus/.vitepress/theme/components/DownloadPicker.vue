<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'

type Channel = 'stable' | 'dev'
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
}

const REPO = 'codingsushi79/Papyrus'
const WORKFLOW_FILE = 'build.yml'
const ARTIFACT_NAME = 'papyrus-server'

const channel = ref<Channel>('stable')
const releases = ref<Release[]>([])
const devRuns = ref<WorkflowRun[]>([])
const selectedTag = ref('')
const loading = ref(true)
const error = ref('')

async function loadData() {
  loading.value = true
  error.value = ''

  try {
    const [releaseRes, runsRes] = await Promise.all([
      fetch(`https://api.github.com/repos/${REPO}/releases?per_page=20`),
      fetch(`https://api.github.com/repos/${REPO}/actions/workflows/${WORKFLOW_FILE}/runs?branch=main&status=success&per_page=10`),
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

onMounted(loadData)

const stableReleases = computed(() =>
  releases.value.filter((release) => !release.prerelease && release.assets.length > 0),
)

const devBuilds = computed(() => devRuns.value.filter((run) => run.conclusion === 'success'))

watch([channel, stableReleases], () => {
  if (channel.value === 'stable' && stableReleases.value.length && !selectedTag.value) {
    selectedTag.value = stableReleases.value[0].tag_name
  }
}, { immediate: true })

const selectedRelease = computed(() =>
  stableReleases.value.find((release) => release.tag_name === selectedTag.value),
)

const jarAsset = computed(() => {
  const assets = channel.value === 'stable'
    ? selectedRelease.value?.assets ?? []
    : []

  return assets.find((asset) =>
    asset.name.includes('paperclip') || asset.name.endsWith('.jar'),
  )
})

const downloadUrl = computed(() => {
  if (channel.value === 'stable') {
    return jarAsset.value?.browser_download_url ?? ''
  }

  const run = devBuilds.value.find((item) => String(item.id) === selectedTag.value)
    ?? devBuilds.value[0]
  if (!run) return ''
  return `${run.html_url}#artifacts`
})

const downloadLabel = computed(() => {
  if (channel.value === 'stable') {
    return jarAsset.value
      ? `Download ${jarAsset.value.name}`
      : 'No release jar available'
  }

  return devBuilds.value.length
    ? 'Open latest dev build artifacts'
    : 'No dev builds available yet'
})

const versionOptions = computed(() => {
  if (channel.value === 'stable') {
    return stableReleases.value.map((release) => ({
      value: release.tag_name,
      label: `${release.tag_name}${release.name ? ` — ${release.name}` : ''}`,
    }))
  }

  return devBuilds.value.map((run) => ({
    value: String(run.id),
    label: `main @ ${new Date(run.created_at).toLocaleString()} (${run.id})`,
  }))
})

const canDownload = computed(() => Boolean(downloadUrl.value))

const helperText = computed(() => {
  if (channel.value === 'stable') {
    if (!stableReleases.value.length) {
      return 'No GitHub releases yet. Use Dev builds from CI until the first release is published.'
    }
    return 'Stable builds are published as GitHub Release assets.'
  }

  if (!devBuilds.value.length) {
    return 'Dev builds come from successful CI runs on main. Trigger a build on GitHub Actions if none exist yet.'
  }

  return 'Dev builds are uploaded as the papyrus-server artifact on the latest successful workflow run.'
})

watch(channel, (next) => {
  if (next === 'stable' && stableReleases.value.length) {
    selectedTag.value = stableReleases.value[0].tag_name
  } else if (next === 'dev' && devBuilds.value.length) {
    selectedTag.value = String(devBuilds.value[0].id)
  } else {
    selectedTag.value = ''
  }
})

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}
</script>

<template>
  <div class="download-picker">
    <div v-if="loading" class="download-status">Loading releases…</div>
    <div v-else-if="error" class="download-status download-error">{{ error }}</div>

    <template v-else>
      <p class="download-lead">{{ helperText }}</p>

      <div class="download-controls">
        <label class="download-field">
          <span>Channel</span>
          <select v-model="channel">
            <option value="stable">Stable (GitHub Releases)</option>
            <option value="dev">Dev (CI / main)</option>
          </select>
        </label>

        <label v-if="versionOptions.length" class="download-field">
          <span>{{ channel === 'stable' ? 'Version' : 'Build' }}</span>
          <select v-model="selectedTag">
            <option v-for="option in versionOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
        </label>
      </div>

      <div class="download-actions">
        <a
          class="download-button"
          :class="{ disabled: !canDownload }"
          :href="canDownload ? downloadUrl : undefined"
          :target="canDownload ? '_blank' : undefined"
          :rel="canDownload ? 'noopener noreferrer' : undefined"
        >
          {{ downloadLabel }}
        </a>

        <a
          class="download-secondary"
          href="https://github.com/codingsushi79/Papyrus/actions/workflows/build.yml"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all CI builds
        </a>
      </div>

      <p v-if="channel === 'stable' && jarAsset" class="download-meta">
        {{ jarAsset.name }} · {{ formatBytes(jarAsset.size) }}
      </p>

      <p v-else-if="channel === 'dev' && devBuilds.length" class="download-meta">
        Download the <code>papyrus-server</code> artifact from the workflow run page.
      </p>
    </template>
  </div>
</template>

<style scoped>
.download-picker {
  margin: 1.5rem 0 2rem;
  padding: 1.25rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}

.download-lead {
  margin: 0 0 1rem;
  color: var(--vp-c-text-2);
}

.download-controls {
  display: grid;
  gap: 0.875rem;
  margin-bottom: 1rem;
}

@media (min-width: 640px) {
  .download-controls {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.download-field {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.download-field select {
  padding: 0.625rem 0.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font: inherit;
}

.download-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}

.download-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.1rem;
  border-radius: 999px;
  background: var(--vp-c-brand-1);
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s;
}

.download-button:hover {
  background: var(--vp-c-brand-2);
}

.download-button.disabled {
  pointer-events: none;
  opacity: 0.55;
}

.download-secondary {
  color: var(--vp-c-brand-1);
  font-weight: 500;
}

.download-meta,
.download-status {
  margin: 0.875rem 0 0;
  color: var(--vp-c-text-3);
  font-size: 0.875rem;
}

.download-error {
  color: var(--vp-c-danger-1, #f66f81);
}
</style>
