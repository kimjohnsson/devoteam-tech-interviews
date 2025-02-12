import { useState } from 'react';
import './App.css';

import TodoInput from '@/components/TodoInput/TodoInput';
import TodoItem from './components/TodoItem/TodoItem';

export type Todo = {
  item: string;
  done: boolean;
  id: string;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (item: Todo) => {
    setTodos((todos) => [...todos, item]);
  };

  return (
    <>
      <h1>Todo</h1>
      <TodoInput todos={todos} addTodo={addTodo} />
      {todos
        .filter((todo) => !todo.done)
        .map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      {todos
        .filter((todo) => todo.done)
        .map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
    </>
  );
}

export default App;
