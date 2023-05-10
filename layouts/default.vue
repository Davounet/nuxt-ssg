<template>
  <div>
    <ul class="list-none flex space-x-4 items-center p-4 bg-blue-100">
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
      <li>
        <NuxtLink
          class="bg-gray-100 px-4 py-1.5 hover:bg-gray-200"
          to="/cart"
        >
          Cart
        </NuxtLink>
      </li>
    </ul>
    <div>
      <slot />
    </div>
  </div>
</template>
