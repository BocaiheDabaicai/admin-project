<template>
  <div class="logo" v-show="!logoHidden">
    <img :src="src" alt="">
    <p>{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
import setting from '/src/setting.ts'

const {src,title,logoHidden} = setting


</script>

<style scoped lang="scss">
.logo{
  width: 100%;
  height:$base-menu-logo-height;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  background-color: #141517;


  img{
    width: 40px;
  }

  p{
    font-size: $base-logo-title-fontSize;
    margin-left: 20px;
  }

}
</style>