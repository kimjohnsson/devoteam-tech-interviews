<template>
  <div>
    <h1 v-if="loading">Loading Quiz...</h1>
    <div v-else>
      <span>{{ gameStore.questionNumber }}</span>
      <quiz-question />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

import { useGameStore } from '@/store/game';

import QuizQuestion from '@/components/QuizQuestion.vue';

const router = useRouter();
const gameStore = useGameStore();

const loading = ref(true);

const fetchQuizData = async () => {
  try {
    const response = await fetch('https://opentdb.com/api.php?amount=10&category=15&type=multiple');
    const json = await response.json();

    if (json.response_code === 5) {
      throw new Error('Too Many Requests');
    }

    loading.value = false;
    gameStore.setQuestions(json.results);
  } catch {
    router.push({ name: 'error' });
  }
};

onMounted(() => {
  fetchQuizData();
});
</script>
