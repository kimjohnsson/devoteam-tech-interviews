import { useGame } from '@/views/game/GameProvider';

function QuizQuestions() {
  const { currentQuestion } = useGame();

  return (
    <>
      <h2>{currentQuestion?.question}</h2>
    </>
  );
}

export default QuizQuestions;
