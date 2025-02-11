import { useState } from 'react';
import './App.css';

import TodoInput from '@/components/TodoInput/TodoInput';

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (item: string) => {
    setTodos((todos) => [...todos, item]);
  };

  return (
    <>
      <h1>Todo</h1>
      <TodoInput addTodo={addTodo} />
    </>
  );
}

export default App;
