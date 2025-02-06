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

  const gameOver = useMemo(() => {
    return questionNumber > 10 ? true : false;
  }, [questionNumber]);

  const nextQuestion = (correct_answer: boolean) => {
    if (correct_answer) setScore(score + 1);
    setQuestionNumber(questionNumber + 1);
  };

  const reset = () => {
    setScore(0);
    setQuestions([]);
    setQuestionNumber(1);
  };

  return (
    <GameContext.Provider
      value={{
        score,
        questions,
        currentQuestion,
        questionNumber,
        gameOver,
        setScore,
        setQuestions,
        setQuestionNumber,
        nextQuestion,
        reset
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider };
