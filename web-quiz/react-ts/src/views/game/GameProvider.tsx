import { GameContext } from '@/hooks/useGame';
import { Question } from '@/types/game';
import { ReactNode, useMemo, useState } from 'react';

const GameProvider = ({ children }: { children: ReactNode }) => {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionNumber, setQuestionNumber] = useState(1);

  const currentQuestion = useMemo<Question>(() => {
    if (questionNumber > 10) {
      return questions[10];
    }
    return questions[questionNumber - 1];
  }, [questionNumber, questions]);

  const nextQuestion = (correct_answer: boolean) => {
    if (correct_answer) setScore(score + 1);
    setQuestionNumber(questionNumber + 1);
  };

  return (
    <GameContext.Provider
      value={{
        score,
        questions,
        currentQuestion,
        questionNumber,
        setScore,
        setQuestions,
        setQuestionNumber,
        nextQuestion
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider };
