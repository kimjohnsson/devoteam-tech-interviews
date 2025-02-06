import { Question } from '@/types/game';
import { createContext, useContext } from 'react';

type GameContextType = {
  score: number;
  questions: Question[];
  currentQuestion: Question | null;
  questionNumber: number;
  setScore: (num: number) => void;
  setQuestions: (questions: Question[]) => void;
  setQuestionNumber: (num: number) => void;
} | null;

export const GameContext = createContext<GameContextType>(null);

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
