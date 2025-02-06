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

  return (
    <GameContext.Provider
      value={{
        score,
        questions,
        currentQuestion,
        questionNumber,
        setScore,
        setQuestions,
        setQuestionNumber
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider };
