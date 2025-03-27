<script setup lang="ts">
import NavView from './NavView.vue'
</script>

<template>
  <div class="content">
    <NavView />
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #fff;
  color: #000;
  .main {
    flex: 1;
    padding: 16px;
  }
}
</style>
