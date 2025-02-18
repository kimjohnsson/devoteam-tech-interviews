import { useState } from 'react';
import './App.css';

import TodoInput from '@/components/TodoInput/TodoInput';
import TodoItem from './components/TodoItem/TodoItem';
import MenuItems from './components/MenuItems/MenuItems';

export type Todo = {
  item: string;
  done: boolean;
  id: string;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (item: Todo) => {
    if (!item.item) {
      return;
    }
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

  const clearTodos = () => setTodos([]);

  const clearDoneTodos = () => setTodos((todos) => todos.filter((todo) => !todo.done));

  const toggleAllTodos = (checked: boolean) => {
    setTodos((todos) => todos.map((todo) => ({ ...todo, done: checked })));
  };

  const removeItem = (id: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>Todo</h1>
      <MenuItems
        clearTodos={clearTodos}
        clearDoneTodos={clearDoneTodos}
        toggleAllTodos={toggleAllTodos}
      ></MenuItems>
      <TodoInput todos={todos} addTodo={addTodo} />
      {todos
        .filter((todo) => !todo.done)
        .map((todo, index) => (
          <TodoItem key={index} todo={todo} toggleItem={toggleItem} removeItem={removeItem} />
        ))}
      {todos
        .filter((todo) => todo.done)
        .map((todo, index) => (
          <TodoItem key={index} todo={todo} toggleItem={toggleItem} removeItem={removeItem} />
        ))}
    </>
  );
}

export default App;
