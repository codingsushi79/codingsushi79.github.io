<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-top>
      <div class="wip-banner" role="status">
        <strong>Work in progress</strong>
        <span>Papyrus is under active development — expect breaking changes, incomplete features, and limited production support.</span>
      </div>
    </template>
  </Layout>
</template>
