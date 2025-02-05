<template>
  <div class="start">
    <h1>Vue Web Quiz</h1>

    <p>
      10 questions about video games! Multiple choice one is right. Answer every question within 15
      seconds. 2 life lines will be provided one 50/50 and one +10 s. Each lifeline can only be used
      once during a game."
    </p>

    <RouterLink to="game">Start Game</RouterLink>
  </div>
</template>

<style scoped>
.start {
  max-width: 900px;
}
</style>
