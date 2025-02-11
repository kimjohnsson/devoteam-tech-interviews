import { KeyboardEvent, useState } from 'react';
import { Todo } from '@/App';
import './TodoInput.css';

const TodoInput = ({ addTodo }: { addTodo: (item: Todo) => void }) => {
  const [input, setInput] = useState('');

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTodo({ item: input, done: false });
    }
  };

  return (
    <>
      <div className="todo-input">
        <input
          placeholder={'Add todo'}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        ></input>
        <button onClick={() => addTodo({ item: input, done: false })}>Add</button>
      </div>
    </>
  );
};

export default TodoInput;
