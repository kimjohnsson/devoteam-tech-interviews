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

  const toggleItem = (id: string, checked: boolean) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: checked };
        }

        return todo;
      })
    );
  };

  return (
    <>
      <h1>Todo</h1>
      <TodoInput todos={todos} addTodo={addTodo} />
      {todos
        .filter((todo) => !todo.done)
        .map((todo, index) => (
          <TodoItem key={index} todo={todo} toggleItem={toggleItem} />
        ))}
      {todos
        .filter((todo) => todo.done)
        .map((todo, index) => (
          <TodoItem key={index} todo={todo} toggleItem={toggleItem} />
        ))}
    </>
  );
}

export default App;
