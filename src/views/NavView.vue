<template>
  <el-menu class="nav">
    <el-sub-menu v-for="item in ROUTE_LIST" v-bind:key="item.name" :index="item.name">
      <template #title> {{ item.title }} </template>
      <el-menu-item v-for="sub in item.children" v-bind:key="sub.name" v-on:click="handleClick(sub.name)"> {{ sub.title }} </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { ElMenu, ElMenuItem } from 'element-plus'
import { useRouter } from 'vue-router'
import { ROUTE_LIST } from '@/router/constants'
const router = useRouter()

const handleClick = (name: string) => {
  router.push({
    path: `/${name}/路由参数`,
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
