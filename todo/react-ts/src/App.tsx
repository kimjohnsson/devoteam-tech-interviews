import { useState } from 'react';
import './App.css';

import TodoInput from '@/components/TodoInput/TodoInput';

export type Todo = {
  item: string;
  done: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (item: Todo) => {
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
