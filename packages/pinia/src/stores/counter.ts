/*
 * @Description: 
 * @Autor: wxy
 * @Date: 2022-10-28 14:45:49
 * @LastEditors: wxy
 * @LastEditTime: 2022-10-28 15:03:38
 */
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
