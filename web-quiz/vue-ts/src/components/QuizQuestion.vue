<template>
  <h2 v-html="gameStore.currentQuestion.question"></h2>
</template>

<script setup lang="ts">
import { useGameStore } from '@/store/game';

const gameStore = useGameStore();

const props = defineProps<{ question: Question }>();
</script>
