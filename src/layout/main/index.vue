<template>
  <router-view v-slot="{ Component }">
    <transition
        name="animation"
        enter-active-class="animate__animated animate__fadeIn"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

</style>