<template>
  <div>
    <h1>Hello I am the cart</h1>
    <pre class="text-xs">{{ test }}</pre>
  </div>
</template>

<script setup>
const { data: test } = await useLazyAsyncData('cart', () => $fetch('/api/test'))
</script>
