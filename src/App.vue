<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import mainPage from './components/mainPage.vue'

export default {
  name: 'app',
  components: {
    mainPage
  }
}
</script>

<style>

</style>
