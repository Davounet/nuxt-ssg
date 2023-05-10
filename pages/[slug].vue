<template>
  <div>
    <pre class="text-xs">{{ pokemon }}</pre>
    <pre class="text-xs">{{ test }}</pre>
  </div>
</template>

<script setup>
const route = useRoute()

const { data: pokemon } = await useFetch(`https://pokeapi.co/api/v2/pokemon/${route.params.slug}`, {
  transform: input => ({ id: input.id, name: input.name })
})
</script>
