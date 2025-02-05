import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

function Game() {
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

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
      } catch {
        navigate('/error');
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <>
      <div className="game"></div>
    </>
  );
}

export default Game;
