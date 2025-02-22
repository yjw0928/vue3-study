<script setup lang="ts">
import Nav from './views/NavView.vue'
</script>

<template>
  <div class="content">
    <Nav />
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
.content {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 200px 1fr;
}
</style>
