import { Question } from '@/types/game';
import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

type GameContextType = {
  score: number;
  questions: Question[];
  currentQuestion: Question | null;
  questionNumber: number;
  setScore: (num: number) => void;
  setQuestions: (questions: Question[]) => void;
  setQuestionNumber: (num: number) => void;
} | null;

const GameContext = createContext<GameContextType>(null);

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

const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

export { GameProvider, useGame };
