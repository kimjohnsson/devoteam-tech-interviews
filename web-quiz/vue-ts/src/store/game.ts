import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

import { getRandomNumber } from '@/helpers/getRandomNumber';
import type { Question } from '@/types/game';

export const useGameStore = defineStore('game', () => {
  const score = ref(0);
  const questionNumber = ref(1);
  const questions = ref<Question[]>([]);

  const gameOver = computed(() => {
    return questionNumber.value > 10 ? true : false;
  });

  const currentQuestion = computed(() => {
    if (questionNumber.value > 10) {
      return questions.value[10];
    }
    return questions.value[questionNumber.value - 1];
  });

  const $reset = () => {
    score.value = 0;
    questionNumber.value = 1;
    questions.value = [];
  };

  const setQuestions = (val: Question[]) => {
    questions.value = val;
  };

  const nextQuestion = (correct_answer: boolean) => {
    if (correct_answer) score.value++;
    questionNumber.value++;
  };

  const remove2incorrectAnswers = () => {
    for (let i = 0; i < 2; i++) {
      questions.value[questionNumber.value - 1].incorrect_answers.splice(getRandomNumber(2 - i), 1);
    }
  };

  return {
    questions,
    score,
    questionNumber,
    currentQuestion,
    gameOver,
    $reset,
    setQuestions,
    nextQuestion,
    remove2incorrectAnswers
  };
});
