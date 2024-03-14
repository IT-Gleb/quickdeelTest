<script setup lang="ts">
const props = withDefaults(defineProps<{ title: string }>(), { title: "OK" });
const theEmit = defineEmits(["work"]);
</script>

<template>
  <button
    :title="props.title"
    class="min-w-[80px] h-[40px] text-[0.85rem]/[1rem] p-2 rounded-md bg-transparent text-blue-600 border-2 border-blue-600 transition-all active:scale-90 active:text-blue-900 lg:hover:border-blue-900 lg:hover:text-blue-900"
    @click="
      (e) => {
        e.preventDefault();
        theEmit('work');
      }
    "
  >
    {{ props.title }}
  </button>
</template>
