/*
 * @Description: 
 * @Autor: wxy
 * @Date: 2022-10-28 15:18:32
 * @LastEditors: wxy
 * @LastEditTime: 2022-10-28 15:21:30
 */
import { storeToRefs } from "pinia";
import { useCounterStore } from "../stores/counter";
export function trackCount() {
  const counterStore = useCounterStore();
  const { count } = storeToRefs(counterStore);
  console.log(count.value);
}