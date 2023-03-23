<template>
  <div class="app">
    <!-- Header -->
    <app-header />

    <!--Main content-->
      <nuxt />

  </div>
</template>

<script>
import AppHeader from "~/components/layout/AppHeader"

export default {
  components: {
    AppHeader
  }, 
}
</script>



