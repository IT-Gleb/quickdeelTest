<script setup lang="ts">
import MainMenu from "../menu/MainMenu.vue";
</script>

<template>
  <header
    class="w-[100%] min-h-[10vh] relative bg-blue-200 text-slate-800 border-b-[2px] border-b-blue-900 bg-[url('../../assets/images/back.png')] bg-cover bg-top bg-no-repeat"
  >
    <div
      class="absolute left-0 top-0 right-0 bottom-0 backdrop-grayscale backdrop-blur-sm"
    ></div>
    <div class="w-fit mx-auto text-[0.8rem]/[1rem] p-2 relative z-[2]">
      Верстка и программирование by Gleb Torgashin. March 2024.
    </div>

    <div class="w-[60%] mx-auto pt-[4%] relative z-[5]">
      <main-menu></main-menu>
    </div>
  </header>
</template>
