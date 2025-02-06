import { useGame } from '@/hooks/useGame';

function QuizQuestions() {
  const { currentQuestion } = useGame();

  return (
    <>
      <h2>{currentQuestion?.question}</h2>
    </>
  );
}

export default QuizQuestions;
