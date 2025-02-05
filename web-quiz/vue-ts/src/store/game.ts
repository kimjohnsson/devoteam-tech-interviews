import type { Question } from '@/types/game';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useGameStore = defineStore('game', () => {
  const questions = ref<Question[]>([]);
  const score = ref(0);
  const questionNumber = ref(1);

  const currentQuestion = computed(() => {
    return questions.value[questionNumber.value];
  });

  const $reset = () => {
    questions.value = [];
    score.value = 0;
    questionNumber.value = 1;
  };

  const setQuestions = (val: Question[]) => {
    questions.value = val;
  };

  const nextQuestion = (correct_answer: boolean) => {
    if (correct_answer) score.value++;
    questionNumber.value++;

    console.log(questionNumber);
  };

  return {
    questions,
    score,
    questionNumber,
    currentQuestion,
    $reset,
    setQuestions,
    nextQuestion
  };
});
