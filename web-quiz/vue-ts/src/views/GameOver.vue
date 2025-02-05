<template>
  <h1>Game Over</h1>
  <h3>Score: {{ gameStore.score }}</h3>
  <button @click="resetGame">Try Again</button>
  <routerLink to="/">Home</routerLink>
</template>

<script setup lang="ts">
import { useGameStore } from '@/store/game';

const gameStore = useGameStore();

const emit = defineEmits(['resetGame']);

const resetGame = () => {
  emit('resetGame');
};
</script>

<style scoped>
button {
  margin-right: 10px;
}
</style>
