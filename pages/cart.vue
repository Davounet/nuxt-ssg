<template>
  <div>
    <p>
      I won't be pre-rendered:
      <br>
      <code>
        nitro: {
          prerender: { crawlLinks: true, ignore: ['/cart'] }
        },
      </code>
      <pre class="text-xs">{{ pokemon }}</pre>
    </p>
  </div>
</template>

<script setup>
const { data: pokemon } = await useFetch(`https://pokeapi.co/api/v2/pokemon/${utils.random(1, 500)}`, {
  transform: input => ({ id: input.id, name: input.name })
})
</script>
