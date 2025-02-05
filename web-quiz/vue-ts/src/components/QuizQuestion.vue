<template>
  <h2 v-html="gameStore.currentQuestion.question"></h2>
  <div class="answers">
    <button
      v-for="answer of answers"
      @click="answerQuestion(answer.correct)"
      v-html="answer.answer"
    ></button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { useGameStore } from '@/store/game';

const gameStore = useGameStore();

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

const answers = computed(() => {
  let currentAnswers = gameStore.currentQuestion.incorrect_answers.map((ans) => ({
    answer: ans,
    correct: false
  }));
  currentAnswers.splice(getRandomInt(3), 0, {
    answer: gameStore.currentQuestion.correct_answer,
    correct: true
  });

  return currentAnswers;
});

const answerQuestion = (correct_answer: boolean) => {
  gameStore.nextQuestion(correct_answer);
};
</script>

<style scoped>
.answers {
  display: grid;
  grid-template-columns: 1fr 1fr;

  button {
    margin: 10px;
  }
}
</style>
