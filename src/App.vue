<template>
  <div class="head">
<!--    <el-button :icon="Search"/>-->
<!--    <el-button type="primary" :icon="Edit">123</el-button>-->
<!--    <el-button type="success" :icon="Check"/>-->
<!--    <el-button type="info" :icon="Message"/>-->
<!--    <el-button type="warning" :icon="Star"/>-->
<!--    <el-button type="danger" :icon="Delete"/>-->
<!--    <div class="example-pagination-block">-->
<!--      <div class="example-demonstration">When you have few pages</div>-->
<!--      <el-pagination layout="prev, pager, next" :total="50"/>-->
<!--    </div>-->
<!--    <svgIcon name="phone" color="pink" width="100px" hegiht="100px"></svgIcon>-->
<!--    <h2>1234</h2>-->
<!--    <h2>请求测试</h2>-->
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import {Search, Edit, Check, Message, Star, Delete} from '@element-plus/icons-vue'
import svgIcon from './components/svgIcon/index.vue'
import request from '@/utils/request.ts'
import {reqLogin} from "@/api/user";
import {onMounted} from "vue";

onMounted(() => {
  // request({
  //   url:'/user/login',
  //   method:'post',
  //   data:{
  //     username:'admin',
  //     password:'111111'
  //   }
  // }).then(response=>{
  //   console.log(response)
  // })
  reqLogin({
    username: 'admin',
    password: '111111'
  }).then(response=>{
    console.log(response)
  })
})


</script>

<style scoped lang="scss">
div {
  h2 {
    background-color: $color;
  }
}
</style>