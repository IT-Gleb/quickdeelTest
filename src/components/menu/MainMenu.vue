<script setup lang="ts">
import { BASE_URL, TASKS_URL } from "../../lib";
</script>

<template>
  <ul
    class="p-2 flex items-center gap-x-10 justify-start flex-col md:flex-row md:justify-end uppercase font-bold"
  >
    <li>
      <router-link :to="BASE_URL" exact-active-class="text-blue-700"
        >Главная</router-link
      >
    </li>
    <li>
      <router-link :to="TASKS_URL" exact-active-class="text-blue-700"
        >Задачи</router-link
      >
    </li>
  </ul>
</template>
