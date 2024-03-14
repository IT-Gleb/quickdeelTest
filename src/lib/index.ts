export const BASE_URL: string = import.meta.env.BASE_URL;
export const TASKS_URL: string = BASE_URL + "tasks";

export type TTask = {
  id: string;
  dateTask: string;
  timeTask: number | string;
  name: string;
  isComplete: boolean;
};

export type TTaskData = TTask[];

export const MyStorage = sessionStorage;

export function getNowTime() {
  let tmpDate = new Date();
  let Hour: number = tmpDate.getHours();
  //console.log(Minute);
  let HourStr: string = Hour < 10 ? "0" + Hour : String(Hour);
  let Minute: number = tmpDate.getMinutes();
  //console.log(Sec);
  let MinuteStr: string = Minute < 10 ? "0" + Minute : String(Minute);

  return HourStr + ":" + MinuteStr;
}

export function getNowDate() {
  let tmpDate = new Date();
  let tmpMounth: number = tmpDate.getMonth() + 1;
  let MonthStr: string = tmpMounth < 10 ? "0" + tmpMounth : String(tmpMounth);
  tmpMounth = tmpDate.getDate();
  let tmpDay: string = tmpMounth < 10 ? "0" + tmpMounth : String(tmpMounth);

  return tmpDate.getFullYear() + "-" + MonthStr + "-" + tmpDay;
}

//Сохранить в локал хранилище
export function SaveTasks(paramKey: string, paramTasks: TTaskData) {
  MyStorage.setItem(paramKey, JSON.stringify(paramTasks));
}
