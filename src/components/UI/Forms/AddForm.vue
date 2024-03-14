<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import { getNowTime, getNowDate, TTask } from "../../../lib";
import workBtn from "../Buttons/workBtn.vue";
import { useTasksStore } from "../../../Store/store";
import { storeToRefs } from "pinia";

const inputRef = ref<HTMLInputElement>();

const taskTime = ref<number | string>(0);
const taskText = ref<string>("");
const taskDate = ref<string>("");
const showBtn = ref<boolean>(false);
const store = useTasksStore();
const { newTask } = store;
const { getLastTaskTime, getLastTaskDate } = storeToRefs(store);

const formSubmit = (event: Event) => {
  event.preventDefault();
  //console.log("formSubmit");

  taskTime.value = getNowTime();
  taskText.value = "";

  inputRef.value?.focus();
};

const clickBtn = () => {
  //console.log("ClickBtn");

  let a_Task: TTask = {
    id: crypto.randomUUID(),
    dateTask: taskDate.value,
    timeTask: taskTime.value,
    name: taskText.value,
    isComplete: false,
  };

  newTask(a_Task);

  taskTime.value = "";
  taskText.value = "";

  taskDate.value = getNowDate();
  taskTime.value = getNowTime();

  if (inputRef.value) inputRef.value.focus();
};

onMounted(() => {
  taskDate.value = getNowDate();
  taskTime.value = getNowTime();

  inputRef.value?.focus();
  //console.log(taskDate.value, taskTime.value, taskText.value);
});

watchEffect(() => {
  showBtn.value =
    taskDate.value.trim().length > 8 &&
    String(taskTime.value).trim().length > 4 &&
    taskText.value.trim().length > 3;
});
</script>

<template>
  <div class="w-[100%] lg:w-[50%] my-5 animate-fromLeft">
    <form action="#" @submit.stop="formSubmit">
      <fieldset
        class="p-3 border-2 rounded-md border-b-blue-400/40 flex flex-col gap-y-3 items-sart justify-start"
      >
        <legend class="px-2 text-[0.9rem]/[1rem] font-bold text-slate-800/60">
          Новая задача
        </legend>
        <label class="flex flex-col gap-y-2 text-[0.8rem]/[1rem] font-medium">
          <div class="w-[100%] flex items-center justify-between">
            <span class="font-bold">Дата:</span>
            <span class="text-[0.7rem]/[1rem] text-slate-500">
              Последняя задача, Дата:
              <span class="font-bold">{{ getLastTaskDate }}</span></span
            >
          </div>

          <input
            class="p-2 bg-slate-100 text-[1rem]/[1.2rem] rounded-md focus:border-2 focus:border-blue-700 focus:outline-none focus:bg-slate-300"
            type="date"
            id="tsDate"
            v-model="taskDate"
          />
        </label>
        <label class="flex flex-col gap-y-2 text-[0.8rem]/[1rem] font-medium">
          <div class="w-[100%] flex items-center justify-between">
            <span class="font-bold">Задача начнется:</span>
            <span class="text-slate-500 text-[0.7rem]/[1rem]"
              >Последняя задача, начало:
              <span class="font-bold">{{ getLastTaskTime }}</span></span
            >
          </div>
          <input
            ref="inputRef"
            class="p-2 bg-slate-100 text-[1rem]/[1.2rem] rounded-md focus:border-2 focus:border-blue-700 focus:outline-none focus:bg-slate-300"
            type="time"
            id="tsTime"
            v-model="taskTime"
          />
        </label>

        <label class="flex flex-col gap-y-2 text-[0.8rem]/[1rem] font-medium">
          <span class="font-bold">Наименование задачи:</span>
          <input
            class="p-2 bg-slate-100 text-[1rem]/[1.2rem] rounded-md placeholder:text-slate-600/75 focus:border-2 focus:border-blue-700 focus:outline-none focus:bg-slate-300"
            type="text"
            id="tsText"
            maxlength="100"
            placeholder="Задача...(больше 3-х  меньше 100 символов)"
            autocomplete="off"
            v-model="taskText"
          />
        </label>
        <div v-if="showBtn" class="text-right w-[100%] p-2">
          <work-btn title="Добавить" @work="clickBtn"></work-btn>
        </div>
      </fieldset>
    </form>
  </div>
</template>
