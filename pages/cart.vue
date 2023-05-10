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

const { data: test } = await useLazyAsyncData('cart', () => $fetch('/api/test'))

</script>
