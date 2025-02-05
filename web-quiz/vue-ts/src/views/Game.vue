<template>
  <div class="game">
    <h1 v-if="loading">Loading Quiz...</h1>
    <game-over v-else-if="gameStore.gameOver" @reset-game="resetGame" />
    <div v-else>
      <div class="game-info">
        <div class="left">
          <h3>{{ gameStore.questionNumber }} / 10</h3>
        </div>
        <div class="right">
          <div>
            <h3>Score: {{ gameStore.score }}</h3>
            <h3>Time: {{ timer }}</h3>
          </div>
          <div>
            <button :class="{ disabled: timeLifeLineUsed }" @click="timeLifeline()">+10 S</button>
            <button :class="{ disabled: fiftyFiftyLifeLineUsed }" @click="fiftyFiftyLifeLine()">
              50/50
            </button>
          </div>
        </div>
      </div>
      <quiz-question />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

import { useGameStore } from '@/store/game';

import QuizQuestion from '@/components/QuizQuestion.vue';
import GameOver from '@/views/GameOver.vue';

const router = useRouter();
const gameStore = useGameStore();

const loading = ref(true);
const timer = ref(15);
let timerInterval: number;

const timeLifeLineUsed = ref(false);
const fiftyFiftyLifeLineUsed = ref(false);

const startCountDown = () => {
  timer.value = 15;
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    if (timer.value) {
      timer.value--;
    } else {
      gameStore.nextQuestion(false);
      timer.value = 15;
    }
  }, 1000);
};

const timeLifeline = () => {
  if (timeLifeLineUsed.value) {
    return;
  }
  timer.value += 10;
  timeLifeLineUsed.value = true;
};

const fiftyFiftyLifeLine = () => {
  if (fiftyFiftyLifeLineUsed.value) {
    return;
  }
  gameStore.remove2incorrectAnswers();
  fiftyFiftyLifeLineUsed.value = true;
};

const fetchQuizData = async () => {
  try {
    const response = await fetch('https://opentdb.com/api.php?amount=10&category=15&type=multiple');
    const json = await response.json();

    if (json.response_code === 5) {
      throw new Error('Too Many Requests');
    }

    gameStore.setQuestions(json.results);
    loading.value = false;
    startCountDown();
  } catch {
    router.push({ name: 'error' });
  }
};

const resetGame = () => {
  loading.value = true;
  timeLifeLineUsed.value = false;
  fiftyFiftyLifeLineUsed.value = false;
  gameStore.$reset();
  fetchQuizData();
};

watch(
  () => gameStore.questionNumber,
  () => {
    if (gameStore.gameOver) {
      clearInterval(timerInterval);
    } else {
      startCountDown();
    }
  }
);

onMounted(() => {
  resetGame();
});
</script>

<style scoped>
.game {
  width: 900px;
  margin: auto;
}

.game-info {
  display: flex;
  justify-content: space-between;

  .right {
    display: flex;
    flex-direction: column;

    div {
      margin-bottom: 10px;
    }

    div > * {
      display: inline;
      margin-left: 15px;
    }
  }
}
</style>
