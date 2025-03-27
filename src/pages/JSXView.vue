<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { ElButton } from 'element-plus'
const count = ref(0)
const dict = ref({ a: 1 })

const reactiveNum = reactive({ num: 0 })

const count1 = computed((pre) => {
  if (count.value < 3) {
    return count.value
  }
  return pre
})
</script>

<template>
  <div>
    <el-button @click="count++">原始值{{ count }}</el-button>
    <el-button @click="dict.a++">引用值{{ dict.a }}</el-button>
    <el-button @click="reactiveNum.num++">响应式值reactive{{ reactiveNum.num }}</el-button>
    <el-button>计算值count{{ count1 }}</el-button>
  </div>
</template>
