//export const BASE_URL: string = import.meta.env.BASE_URL;
export const BASE_URL: string = "/";
export const TASKS_URL: string = BASE_URL + "tasks";

const divider: string = ":";

export type TTask = {
  id: string;
  dateTask: string;
  timeTask: number | string;
  timeExpiredTask: number | string;
  name: string;
  isComplete: boolean;
};

export type TTaskData = TTask[];

export const MyStorage = sessionStorage;

function add_0(param: number) {
  let res = "";
  res = param < 10 ? "0" + param : String(param);
  return res;
}

export function getNowTime() {
  let tmpDate = new Date();
  let Hour: number = tmpDate.getHours();
  //console.log(Minute);
  let HourStr: string = add_0(Hour);
  let Minute: number = tmpDate.getMinutes();
  //console.log(Sec);
  let MinuteStr: string = add_0(Minute);

  return HourStr + divider + MinuteStr;
}

export function getExpiredTime(param: number) {
  let res: string = "";

  const tmpDate = new Date();

  let Minute: number = tmpDate.getMinutes();
  tmpDate.setMinutes(Minute + param);
  let Hour: number = tmpDate.getHours();
  Minute = tmpDate.getMinutes();

  res = add_0(Hour) + divider + add_0(Minute);
  return res;
}

export function getExpiredTimefromString(
  paramDate: string,
  paramTime: string,
  paramOffset: number = 15
) {
  let res: string = "";

  let tmpDate = new Date(paramDate + "T" + paramTime);
  let tempTimeA = paramTime.split(divider);
  //tmpDate.setHours(Number(tempTimeA[0]));
  tmpDate.setMinutes(Number(tempTimeA[1]) + paramOffset);
  let Hour: number = tmpDate.getHours();
  let Minute: number = tmpDate.getMinutes();
  res = add_0(Hour) + divider + add_0(Minute);

  return res;
}

export function getNowDate() {
  let tmpDate = new Date();
  let tmpMounth: number = tmpDate.getMonth() + 1;
  let MonthStr: string = tmpMounth < 10 ? "0" + tmpMounth : String(tmpMounth);
  tmpMounth = tmpDate.getDate();
  let tmpDay: string = tmpMounth < 10 ? "0" + tmpMounth : String(tmpMounth);

  return tmpDate.getFullYear() + "-" + MonthStr + "-" + tmpDay;
}

export function compareTaskExpired(paramExpiredStringDateTime: string) {
  let res: boolean = false;
  const tempDate1 = new Date(paramExpiredStringDateTime);
  const nowDate = new Date();

  //Текущая дата больше конечной
  res = nowDate.getTime() > tempDate1.getTime();
  return res;
}

//Сохранить в локал хранилище
export function SaveTasks(paramKey: string, paramTasks: TTaskData) {
  MyStorage.setItem(paramKey, JSON.stringify(paramTasks));
}
