<template>
  <svg :style="{width: width,height:hegiht}">
    <use :xlink:href="prefix+name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  prefix:{
    type:String,
    default:`#icon-`
  },
  name: {
    type: String
  },
  color:{
    type:String,
    default:''
  },
  width:{
    type:String,
    default:'16px'
  },
  hegiht:{
    type:String,
    default:'16px'
  }
})


</script>

<style scoped>

</style>