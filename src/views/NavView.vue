<template>
  <el-menu class="nav">
    <el-menu-item index="1" v-on:click="handleClick(666)"> 导航1 </el-menu-item>
    <el-menu-item index="2"> 导航2 </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { ElMenu, ElMenuItem } from 'element-plus'
const router = useRouter()
const handleClick = (index: string) => {
  router.push({
    path: '/home',
    query: {
      index: index,
    },
  })
}
</script>

<style scoped lang="less">
.nav {
  width: 100%;
  height: 100%;
  overflow: auto;
  .el-menu-item {
    height: 40px;
  }
}
</style>
