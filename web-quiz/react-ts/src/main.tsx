import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import App from '@/App.tsx';
import Game from '@/views/Game.tsx';
import Error from '@/views/Error.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/game" element={<Game />} />
      <Route path="/error" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
