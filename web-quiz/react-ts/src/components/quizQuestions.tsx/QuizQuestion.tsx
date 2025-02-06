import { useMemo } from 'react';
import { useGame } from '@/hooks/useGame';
import { getRandomNumber } from '@/helpers/getRandomNumber';
import './QuizQuestions.css';

const QuizQuestions = () => {
  const { currentQuestion, nextQuestion } = useGame();

  const answers = useMemo(() => {
    if (!currentQuestion) return [];
    const currentAnswers = currentQuestion.incorrect_answers.map((ans) => ({
      answer: ans,
      correct: false
    }));
    currentAnswers.splice(getRandomNumber(3), 0, {
      answer: currentQuestion.correct_answer,
      correct: true
    });

    return currentAnswers;
  }, [currentQuestion]);

  return (
    <>
      <h2 dangerouslySetInnerHTML={{ __html: currentQuestion?.question ?? '' }}></h2>
      <div className="answers">
        {answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => nextQuestion(answer.correct)}
            dangerouslySetInnerHTML={{ __html: answer.answer }}
          ></button>
        ))}
      </div>
    </>
  );
};

export default QuizQuestions;
