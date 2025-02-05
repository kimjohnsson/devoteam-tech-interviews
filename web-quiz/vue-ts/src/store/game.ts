import type { Question } from '@/types/game';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGameStore = defineStore('game', () => {
  const questions = ref<Question[]>([]);
  const correctAnswers = ref(0);
  const questionNumber = ref(1);

  const $reset = () => {
    questions.value = [];
    correctAnswers.value = 0;
    questionNumber.value = 1;
  };

  const setQuestions = (val: Question[]) => {
    questions.value = val;
  };

  return {
    questions,
    correctAnswers,
    questionNumber,
    $reset,
    setQuestions
  };
});
