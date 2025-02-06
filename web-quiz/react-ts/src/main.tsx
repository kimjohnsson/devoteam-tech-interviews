import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import App from '@/App.tsx';
import Game from '@/views/game/Game';
import Error from '@/views/Error.tsx';
import { GameProvider } from './views/game/GameProvider';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="/game"
        element={
          <GameProvider>
            <Game />
          </GameProvider>
        }
      />
      <Route path="/error" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
