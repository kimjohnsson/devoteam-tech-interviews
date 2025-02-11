import { KeyboardEvent, useState } from 'react';
import './TodoInput.css';

const TodoInput = ({ addTodo }: { addTodo: (item: string) => void }) => {
  const [input, setInput] = useState('');

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTodo(input);
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
        <button onClick={() => addTodo(input)}>Add</button>
      </div>
    </>
  );
};

export default TodoInput;
