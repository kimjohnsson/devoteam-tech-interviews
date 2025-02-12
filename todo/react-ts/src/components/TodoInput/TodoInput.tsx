import { KeyboardEvent, useState } from 'react';
import { Todo } from '@/App';
import './TodoInput.css';

const TodoInput = ({ todos, addTodo }: { todos: Todo[]; addTodo: (item: Todo) => void }) => {
  const [input, setInput] = useState('');

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTodo({ item: input, done: false, id: `${todos.length}-${input}` });
      setInput('');
    }
  };

  return (
    <>
      <div className="todo-input">
        <input
          value={input}
          placeholder={'Add todo'}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        ></input>
        <button
          onClick={() => addTodo({ item: input, done: false, id: `${todos.length}-${input}` })}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default TodoInput;
