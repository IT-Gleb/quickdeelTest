<script setup lang="ts">
import { useRouter } from "vue-router";
import { TASKS_URL } from "../../../lib";
const mRouter = useRouter();

const toLink = () => {
  //event.preventDefault();
  mRouter.push(TASKS_URL);
};
</script>

<template>
  <button
    class="min-w-[80px] p-2 bg-transparent text-blue-600 text-[0.8rem]/[1rem] rounded-md border-2 border-blue-600 transition-all lg:hover:border-blue-900 lg:hover:text-blue-900 active:scale-75 active:bg-blue-200 active:text-blue-950"
    @click.prevent="toLink"
    title="Перети на страницу задач"
  >
    Перейти
  </button>
</template>
