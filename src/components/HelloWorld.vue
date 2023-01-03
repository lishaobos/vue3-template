<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
defineProps<{
  msg: string
}>()

const counterStore = useCounterStore()
</script>

<template>
  <div class="greetings">
    <h1 class="green">
      {{ msg }}
    </h1>
    <button @click="counterStore.increment">
      counter：{{ counterStore.count }}
    </button>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      What's next?
    </h3>
  </div>
</template>
