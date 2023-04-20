<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
if (!process.server) {
  console.log(window.__NUXT__.data)
}
const story = await useAsyncStoryblok('home', { version: 'draft' }, { customParent: 'http://localhost:3000/' })
</script>
