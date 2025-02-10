import { ReactNode, useState } from 'react';

import { Question } from '@/types/game';
import { GameContext } from '@/hooks/useGame';

const GameProvider = ({ children }: { children: ReactNode }) => {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionNumber, setQuestionNumber] = useState(1);

  const currentQuestion = questionNumber > 10 ? questions[10] : questions[questionNumber - 1];

  const gameOver = questionNumber > 10 ? true : false;

  const nextQuestion = (correct_answer: boolean) => {
    if (correct_answer) {
      setScore((prevScore) => prevScore + 1);
    }
    setQuestionNumber((prev) => prev + 1);
  };

  const remove2incorrectAnswers = () => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question, index) => {
        if (index + 1 === questionNumber) {
          return {
            ...question,
            incorrect_answers: [question.incorrect_answers[0]]
          };
        }

        return question;
      })
    );
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
        remove2incorrectAnswers,
        reset
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider };
