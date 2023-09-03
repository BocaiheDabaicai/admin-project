<template>
  <div>
    <p>一级路由首页</p>
    <p>你好呀{{userStore.name}}</p>
  </div>

</template>

<script setup lang="ts">
import {onMounted} from "vue";
import useUserStore from "@/store/modules/user.ts";

let userStore = useUserStore()

onMounted(()=>{
  userStore.userInfo()
})


</script>

<style scoped>

</style>