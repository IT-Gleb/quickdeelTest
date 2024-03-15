<script setup lang="ts">
import { ref, watchEffect } from "vue";
import EditBtn from "./UI/Buttons/EditBtn.vue";
import DeleteBtn from "./UI/Buttons/DeleteBtn.vue";
import { TTask, compareTaskExpired } from "../lib";
import { useTasksStore } from "../Store/store";

const props = defineProps<{
  paramIndex: number;
  paramTask: TTask;
  isEdit: boolean;
}>();

const thisTask = ref<TTask>(props.paramTask);
const txtTask = ref<string>(props.paramTask.name);
const isComplete = ref<boolean>(props.paramTask.isComplete);
const isEdit = ref<boolean>(props.isEdit);
const taskRef = ref<HTMLInputElement>();
const isExpire = ref<boolean>(false);

const store = useTasksStore();
const { editTask, editIsCompleteTask, deleteTask } = store;

function setupNameData() {
  thisTask.value.name = txtTask.value;
  editTask(thisTask.value);
}

//Если нажата кнопка Редактирования
const setEditMode = () => {
  isEdit.value = !isEdit.value;
  if (isEdit.value) taskRef.value?.focus();
  if (!isEdit.value) setupNameData();
};

//При активном инпуте если нажата клавиша Enter
const checkEdit = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    setupNameData();
    isEdit.value = false;
  }
};

//При нажатии на checkBox
const setIsComplete = (event: Event) => {
  if (event.target) {
    thisTask.value.isComplete = isComplete.value;
    editIsCompleteTask(thisTask.value);
  }
};
//Удаление задачи
const deleteThisTask = () => {
  if (!isEdit.value) deleteTask(thisTask.value);
};

watchEffect(() => {
  isExpire.value = compareTaskExpired(
    thisTask.value.dateTask + "T" + thisTask.value.timeExpiredTask
  );
});
</script>

<template>
  <div
    class="w-[300px] flex-col gap-y-10 text-[0.9rem]/[1rem] overflow-hidden rounded-md"
    :class="
      isComplete
        ? 'border-none'
        : isExpire
        ? 'border-2 border-black'
        : 'border-2 border-blue-400/50 border-r-blue-600/60 border-b-blue-600/60'
    "
  >
    <header
      class="w-[100%] max-h-[30px] text-black p-2 flex items-center justify-between"
      :class="
        isComplete
          ? ' bg-slate-400/50'
          : isExpire
          ? 'bg-rose-400 text-white/70'
          : ' bg-blue-300/50'
      "
    >
      <span class="text-[0.8rem]/[1rem] font-medium">{{ paramIndex }}.</span>
      <span class="text-[0.7rem]/[1rem] font-semibold"
        >{{ thisTask.timeTask }} - {{ thisTask.timeExpiredTask }}
        {{
          isComplete ? "[Выполнено]" : isExpire ? "[Просрочено]" : "[Период]"
        }}
      </span>

      <div class="flex items-center gap-x-2 p-0 m-0">
        <input
          class="cursor-pointer w-[16px] h-[16px]"
          type="checkbox"
          name="CompletedTask"
          v-model="isComplete"
          :title="isComplete ? 'Отменить выполнена' : 'Пометить как выполнена'"
          @change="setIsComplete"
        />
        <edit-btn v-if="!isComplete" @edit-task-name="setEditMode"></edit-btn>
        <delete-btn @delete-task="deleteThisTask"></delete-btn>
      </div>
    </header>
    <main
      class="p-2"
      :class="
        isComplete
          ? ' bg-slate-100/50'
          : isExpire
          ? 'bg-rose-300 text-black'
          : 'bg-blue-100/50'
      "
    >
      <input
        v-show="isEdit"
        ref="taskRef"
        class="w-[100%] p-2 outline-none border-2 border-blue-900/75 rounded-md"
        :class="isEdit ? ' bg-white' : 'bg-blue-100'"
        type="text"
        placeholder="Введите что-нибудь..."
        autocomplete="off"
        name="TaskName"
        id="TaskName"
        v-model="txtTask"
        @keydown="checkEdit"
      />
      <p
        class="w-[100%] text-blue-700 first-letter:uppercase p-2"
        :class="
          isComplete
            ? ' line-through text-slate-400'
            : isExpire
            ? 'bg-rose-300 text-yellow-200/80'
            : ''
        "
        v-if="!isEdit"
      >
        {{ txtTask }}
      </p>
    </main>
    <footer
      class="w-[100%] min-h-[10px] p-2"
      :class="
        isComplete
          ? ' bg-slate-200/50'
          : isExpire
          ? ' bg-rose-400/80'
          : ' bg-blue-200/50'
      "
    ></footer>
  </div>
</template>
