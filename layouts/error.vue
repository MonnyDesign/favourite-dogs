<template>
  <div class="bg-blue-900 text-white text-center h-screen">
    <div class="relative h-full">
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div>
          <template v-if="error.statusCode === 404">
            <h1 class="mb-2 text-green-500"><big>404</big></h1>
            <h4>Page not found</h4>
          </template>
          <template v-else>
            <h1>An error occurred</h1>
          </template>
        </div>
        <NuxtLink class="text-white" to="/">Home page</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error'
  }
</script>