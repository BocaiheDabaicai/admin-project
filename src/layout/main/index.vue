<template>
  <router-view v-slot="{ Component }">
    <transition
        name="animation"
        enter-active-class="animate__animated animate__fadeIn"
    >
      <component :is="Component" v-if="componentRef"/>
    </transition>
  </router-view>
</template>

<script setup lang="ts" name="Main">
import useLayoutSettingStore from "@/store/modules/setting.ts";
import {watch,ref,nextTick} from "vue";

const layoutSettingStore = useLayoutSettingStore()
let componentRef = ref(true)

watch(()=>layoutSettingStore.refresh,()=>{
  // 监听刷新状态的变化
  // 1. 销毁组件
  // 2. nextTick 是等待组件更新完毕后触发的函数
  componentRef.value = false
  nextTick(()=>{
    componentRef.value = true
  })
})

</script>

<style scoped lang="scss">

</style>