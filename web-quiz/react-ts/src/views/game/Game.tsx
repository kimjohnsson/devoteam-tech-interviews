import { createContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import './Game.css';

const GameContext = createContext([]);

function Game() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(1);

  const currentQuestion = useMemo(() => {
    if (questionNumber > 10) {
      return questions[10];
    }
    return questions[questionNumber - 1];
  }, [questionNumber, questions]);

  useEffect(() => {
    const fetchData = async () => {
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
      } catch {
        navigate('/error');
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <>
      <GameContext.Provider value={currentQuestion}>
        <div className="game">
          {loading ? (
            <h1>Loading Quiz...</h1>
          ) : (
            <div>
              <div className="game-info">
                <div className="left">
                  <h3> {questionNumber} / 10</h3>
                </div>
                <div className="right">
                  <div>
                    <h3>Score: </h3>
                    <h3>Time: </h3>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </GameContext.Provider>
    </>
  );
}

export default Game;
