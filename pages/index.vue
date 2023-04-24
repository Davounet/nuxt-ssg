<template>
  <div>
    <pre class="text-xs">{{ pokemon }}</pre>
  </div>
</template>

<script setup>
const { data: pokemon } = await useAsyncData('home', () => $fetch(`https://pokeapi.co/api/v2/pokemon/${utils.random(1, 500)}`), {
  transform: input => ({ id: input.id, name: input.name })
})
</script>
