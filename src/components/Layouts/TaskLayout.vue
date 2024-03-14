<script setup lang="ts">
import { onMounted, ref } from "vue";
import AddForm from "../UI/Forms/AddForm.vue";
import workBtn from "../UI/Buttons/workBtn.vue";
import TasksList from "../UI/TasksList.vue";
import { useTasksStore } from "../../Store/store";
import { storeToRefs } from "pinia";

const isShowNewTask = ref<boolean>(false);
const addTitle = ref<string>("Новая задача");

const store = useTasksStore();
const { clearTasks, getTasksFromLocalStore } = store;
const { Size } = storeToRefs(store);

const viewForm = () => {
  isShowNewTask.value = !isShowNewTask.value;
  addTitle.value = isShowNewTask.value ? "Скрыть форму" : "Новая задача";
};

const clearAllTasks = () => {
  clearTasks();
};

onMounted(() => {
  getTasksFromLocalStore();
});
</script>

<template>
  <div>
    <section class="wrapper">
      <div class="flex items-center gap-x-4">
        <work-btn @work="viewForm" :title="addTitle"></work-btn>
        <work-btn
          v-if="Size > 0"
          @work="clearAllTasks"
          title="Очистить все задачи"
        ></work-btn>
      </div>
      <add-form v-if="isShowNewTask"></add-form>
    </section>
    <section class="wrapper">
      <tasks-list></tasks-list>
    </section>
  </div>
</template>
