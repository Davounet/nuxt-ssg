<template>
  <div>
    <nav>
      <ul>
        <li v-for="pokemon in pokemons.results" :key="pokemon.name">
          <NuxtLink :to="`/${pokemon.name}`">
            {{ pokemon.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
// const { data: test } = useAsyncData('cart', () => $fetch('/api/test'))
const { data: pokemons } = await useFetch(`https://pokeapi.co/api/v2/pokemon/`)
</script>
