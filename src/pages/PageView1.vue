<template>
  <div>我的第一个VUE3组件</div>
  <div>查询参数{{ queryStr }}</div>
  <div>路由参数{{ JSON.stringify(route.params) }}</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
const query = route.query
const queryStr = JSON.stringify(query)
</script>
