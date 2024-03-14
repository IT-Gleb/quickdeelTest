<script setup lang="ts">
import HeaderLayout from "./components/Layouts/HeaderLayout.vue";
import FooterLayout from "./components/Layouts/FooterLayout.vue";
</script>

<template>
  <header-layout></header-layout>
  <main class="min-h-[75vh] flex-auto my-10">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </main>
  <footer-layout></footer-layout>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
