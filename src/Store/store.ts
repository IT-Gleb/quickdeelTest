import { defineStore } from "pinia";
import { TTaskData, TTask, SaveTasks, getNowDate, MyStorage } from "../lib";
import { computed, ref } from "vue";
import { orderBy } from "lodash";

export const useTasksStore = defineStore("tasks", () => {
  const tasks = ref<TTaskData>([]);

  const Size = computed(() => {
    return tasks.value.length;
  });

  const getLastTaskTime = computed(() => {
    let res: string = "";
    if (Size.value > 0) {
      res = tasks.value[Size.value - 1].timeTask as string;
    }
    return res;
  });

  const getLastTaskDate = computed(() => {
    let res: string = "";
    if (Size.value > 0) {
      res = tasks.value[Size.value - 1].dateTask as string;
    }
    return res;
  });

  const getLastTaskExparedTime = computed(() => {
    let res: string = "";
    if (Size.value > 0) {
      res = tasks.value[Size.value - 1].timeExpiredTask as string;
    }
    return res;
  });

  const thisDate = computed(() => {
    let tmpData: string = "";
    tmpData = tasks.value.reduce((acc, item) => {
      return String(acc + item.dateTask).replace(acc, "");
    }, "");
    return tmpData;
  });

  const checkedTasks = computed(() => {
    let tmp = tasks.value.filter((item) => item.isComplete);
    return tmp.length;
  });

  function newTask(param: TTask) {
    let found = tasks.value.find((item: TTask) => item.id === param.id);
    if (found === undefined) {
      tasks.value.push(param);
      tasks.value = orderBy(tasks.value, ["timeTask"], ["asc"]);
      let dt = thisDate;
      SaveTasks(dt.value, tasks.value);
    }
  }

  function editTask(param: TTask) {
    let Found = tasks.value.findIndex((item: TTask) => item.id === param.id);
    if (Found !== -1) {
      //console.log(Found);
      tasks.value[Found] = param;
      SaveTasks(thisDate.value, tasks.value);
    }
  }

  function editIsCompleteTask(param: TTask) {
    let Found = tasks.value.findIndex((item: TTask) => item.id === param.id);
    if (Found !== -1) {
      //console.log(Found);
      tasks.value[Found].isComplete = param.isComplete;
      SaveTasks(thisDate.value, tasks.value);
    }
  }

  function deleteTask(paramTask: TTask) {
    tasks.value = tasks.value.filter(
      (item: TTask) => item.id.toLowerCase() !== paramTask.id.toLowerCase()
    );
    if (tasks.value.length > 1)
      tasks.value = orderBy(tasks.value, ["timeTask"], ["asc"]);
    //----------
    let dt = thisDate.value;
    if (dt === "") dt = getNowDate();
    SaveTasks(dt, tasks.value);
  }

  function clearTasks() {
    tasks.value = [];
    MyStorage.clear();
    //SaveTasks(getNowDate(), tasks.value);
  }

  function getTasksFromLocalStore() {
    let dt: string = thisDate.value;
    if (dt === "") dt = getNowDate();
    let tmp = MyStorage.getItem(dt);
    let temp: TTaskData = [];
    if (tmp) {
      temp = Array.from(JSON.parse(tmp));
    }
    if (Array.isArray(temp) && temp.length) {
      tasks.value = temp;
    }
  }

  return {
    tasks,
    Size,
    thisDate,
    checkedTasks,
    newTask,
    editTask,
    editIsCompleteTask,
    deleteTask,
    clearTasks,
    getTasksFromLocalStore,
    getLastTaskTime,
    getLastTaskDate,
    getLastTaskExparedTime,
  };
});
