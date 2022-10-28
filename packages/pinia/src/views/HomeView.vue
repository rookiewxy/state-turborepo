<template>
  <main><button @click="handleClick">count++</button>:{{ count }}</main>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { trackCount } from '../utils/count'
import { useCounterStore } from "../stores/counter";
const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);
function handleClick() {
  counterStore.increment();
  trackCount()
}
</script>
