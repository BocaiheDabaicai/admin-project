<template>
  <div class="logo" v-show="logoShow">
    <img :src="src" alt="">
    <span v-show="!layoutSettingStore.fold">{{title }}</span>
  </div>
</template>

<script setup lang="ts" name="Logo">
import setting from '/src/setting.ts'
import useLayoutSettingStore from "@/store/modules/setting.ts";

const {src,title,logoShow} = setting

let layoutSettingStore = useLayoutSettingStore()


</script>

<style scoped lang="scss">
.logo{
  width: 100%;
  height:$base-menu-logo-height;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;
  background-color: #141517;
  transition: 0.5s all;

  img{
    width: 40px;
  }

  span{
    font-size: $base-logo-title-fontSize;
    margin-left: 20px;
  }

}
</style>