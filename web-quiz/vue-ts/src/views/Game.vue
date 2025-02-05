<template>
  <div>
    <h1 v-if="loading">Loading Quiz...</h1>
    <div v-else></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const loading = ref(true);
const quiz = ref([]);

const fetchQuizData = async () => {
  try {
    const response = await fetch('https://opentdb.com/api.php?amount=10&category=15&type=multiple');
    const json = await response.json();

    if (json.response_code === 5) {
      throw new Error('Too Many Requests');
    }

    loading.value = false;
    quiz.value = json.results;
  } catch {
    router.push({ name: 'error' });
  }
};

onMounted(() => {
  fetchQuizData();
});
</script>
