import { useGame } from '@/hooks/useGame';
import { Link } from 'react-router';
import './GameOver.css';

const GameOver = ({ onResetGame }: { onResetGame: () => void }) => {
  const { score } = useGame();

  return (
    <>
      <h1>Game Over</h1>
      <h3>Score: {score}</h3>
      <button onClick={() => onResetGame()}>Try Again</button>
      <Link to="/">Home</Link>
    </>
  );
};

export default GameOver;
