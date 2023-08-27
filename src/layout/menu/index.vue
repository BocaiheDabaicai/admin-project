<template>
  <div>
    <template v-for="(item) in menuList" :key="item.path" >

      <template v-if="!item.children">
        <el-menu-item v-if="item.meta.show" :index="item.path" @click="goRoute">
          <el-icon><component :is="item.meta.icon"></component></el-icon>
          <span>{{item.meta.title}}</span>
        </el-menu-item>
      </template>

      <template v-if="item.children&&item.children.length === 1">
        <el-menu-item v-if="item.children[0].meta.show" :index="item.path" @click="goRoute">
          <el-icon><component :is="item.children[0].meta.icon"></component></el-icon>
          <span>{{item.children[0].meta.title}}</span>
        </el-menu-item>
      </template>


      <template v-if="item.children&&item.children.length > 1">
        <el-sub-menu v-if="item.meta.show"  :index="item.path">
          <template #title>
            <el-icon><component :is="item.meta.icon"></component></el-icon>
            <span>{{item.meta.title}}</span>
          </template>
          <!--    递归实现路由显示    -->
          <Menu :menuList="item.children"></Menu>
          <!--        <el-menu-item v-for="itemChildren in item.children" :key="itemChildren.path">-->
          <!--          <el-icon>3-</el-icon>-->
          <!--          <span>{{itemChildren.meta.title}}</span>-->
          <!--        </el-menu-item>-->
        </el-sub-menu>
      </template>


    </template>
  </div>
</template>

<script setup lang="ts" name="Menu">
defineProps(['menuList'])

import {useRouter} from 'vue-router';


const router = useRouter();

// 路由跳转
const goRoute = function (vc:any){
  router.push(vc.index)
}

</script>

<style scoped lang="scss">

</style>