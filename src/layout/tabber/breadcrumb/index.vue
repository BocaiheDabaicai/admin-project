<template>
  <el-icon class="tabber-left-icon" @click="onChangeIcon">
    <component :is="changeIcon.fold?'CaretRight':'CaretLeft'"></component>
  </el-icon>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item class="breadcrumb-detail" v-for="(item,index) in route.matched" :key="index" v-show="item.meta.title" :to="item.path">
        <el-icon>
          <component :is="item.meta.icon" style="color:#fff;"></component>
        </el-icon>
        <span style="margin: 0 5px;color:#fff;">{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts" name="Breadcrumb">

import {ref} from "vue";
import useLayoutSettingStore from "@/store/modules/setting.ts";
import {useRoute} from "vue-router";

// 获取路由对象
const route = useRoute()
// 控制折叠菜单的图标
let changeIcon = useLayoutSettingStore()


const onChangeIcon = function(){
  // 触发界面折叠
  console.log(123)
  changeIcon.fold = !changeIcon.fold
}

const onHandler = function(){
  console.log(route.matched)
}
</script>

<style scoped lang="scss">
.tabber-left-icon{
  margin: 0 10px;
  cursor:pointer;
}
.bread-color{
  color: white;
}
</style>