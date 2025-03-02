<template>
  <el-menu class="nav">
    <el-menu-item v-for="item in ROUTE_LIST" v-bind:key="item.name" v-on:click="handleClick(item.name)"> {{ item.title }} </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { ElMenu, ElMenuItem } from 'element-plus'
import { useRouter } from 'vue-router'
import { ROUTE_LIST } from '@/router/constants'
const router = useRouter()
const handleClick = (name: string) => {
  router.push({
    path: `/${name}`,
    query: {
      a: '1',
    },
  })
}
</script>

<style scoped lang="less">
.nav {
  width: 100%;
  height: 100%;
  overflow: auto;
  width: 200px;
  .el-menu-item {
    height: 40px;
  }
}
</style>
