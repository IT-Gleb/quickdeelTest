<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTasksStore } from "../../Store/store";
import TaskItem from "../TaskItem.vue";

const store = useTasksStore();
const { Size, tasks, thisDate, checkedTasks } = storeToRefs(store);
</script>

<template>
  <div class="w-[100%] border-t-2 border-t-blue-500/20 p-2 mt-4 flex gap-x-4">
    <h2 class="font-bold">
      Задачи на:
      <span class="font-normal text-[1.2rem]/[1.5rem] text-blue-700">{{
        thisDate
      }}</span>
    </h2>
    <h2 class="font-bold">
      Всего задач:
      <span class="font-normal text-[1.2rem]/[1.5rem] text-blue-700">{{
        Size
      }}</span>
    </h2>
    <h2 class="font-bold">
      Выполнено задач:
      <span class="font-normal text-[1.2rem]/[1.5rem] text-blue-700">{{
        checkedTasks
      }}</span>
    </h2>
  </div>

  <div
    v-if="Size > 0"
    :class="
      Size > 1
        ? 'w-fit mx-auto grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-3 xl:grid-cols-3'
        : 'w-fit mx-auto grid grid-cols-1 gap-y-3'
    "
  >
    <transition-group name="listToDo">
      <div
        class="w-fit text-[0.9rem]/[1rem] my-4"
        v-for="(item, ind) in tasks"
        :key="item.id"
      >
        <task-item
          :param-index="ind + 1"
          :param-task="item"
          :is-edit="false"
        ></task-item>
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
.listToDo-move,
.listToDo-enter-active,
.listToDo-leave-active {
  transition: all 0.25s ease;
}
.listToDo-enter-from,
.listToDo-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.listToDo-leave-active {
  position: absolute;
}
</style>
