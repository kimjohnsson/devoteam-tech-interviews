import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import './Game.css';

import QuizQuestions from '@/components/quizQuestions.tsx/QuizQuestion';
import { useGame } from '@/hooks/useGame';
import GameOver from './GameOver';

const Game = () => {
  const navigate = useNavigate();
  const {
    questionNumber,
    score,
    gameOver,
    setQuestions,
    reset,
    nextQuestion,
    remove2incorrectAnswers
  } = useGame();

  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(15);
  const [timeLifeLineUsed, setTimeLifeLineUsed] = useState(false);
  const [fiftyFiftyLifeLineUsed, setFiftyFiftyLifeLineUsed] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        'https://opentdb.com/api.php?amount=10&category=15&type=multiple'
      );
      const json = await response.json();

      if (json.response_code === 5) {
        throw new Error('Too Many Requests');
      }

      setQuestions(json.results);
      setLoading(false);
      setTimer(15);
    } catch {
      navigate('/error');
    }
  }, [navigate, setQuestions]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (gameOver) return;

    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          nextQuestion(false);
          return 15;
        }

        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [questionNumber, nextQuestion, gameOver]);

  const handleNextQuestion = (correct_answer: boolean) => {
    setTimer(15);
    nextQuestion(correct_answer);
  };

  const resetGame = () => {
    reset();
    setLoading(true);
    setTimeLifeLineUsed(false);
    setFiftyFiftyLifeLineUsed(false);
    fetchData();
  };

  const timeLifeline = () => {
    if (timeLifeLineUsed) {
      return;
    }
    setTimer((prevTime) => prevTime + 10);
    setTimeLifeLineUsed(true);
  };

  const fiftyFiftyLifeLine = () => {
    if (fiftyFiftyLifeLineUsed) {
      return;
    }
    remove2incorrectAnswers();
    setFiftyFiftyLifeLineUsed(true);
  };

  return (
    <>
      <div className="game">
        {loading ? (
          <h1>Loading Quiz...</h1>
        ) : gameOver ? (
          <GameOver onResetGame={resetGame} />
        ) : (
          <div>
            <div className="game-info">
              <div className="left">
                <h3> {questionNumber} / 10</h3>
              </div>
              <div className="right">
                <div>
                  <h3>Score: {score}</h3>
                  <h3>Time: {timer}</h3>
                </div>
                <div>
                  <button
                    className={timeLifeLineUsed ? 'disabled' : ''}
                    onClick={() => timeLifeline()}
                  >
                    +10 S
                  </button>
                  <button
                    className={fiftyFiftyLifeLineUsed ? 'disabled' : ''}
                    onClick={() => fiftyFiftyLifeLine()}
                  >
                    50/50
                  </button>
                </div>
              </div>
            </div>
            <QuizQuestions handleNextQuestion={handleNextQuestion} />
          </div>
        )}
      </div>
    </>
  );
};

export default Game;
