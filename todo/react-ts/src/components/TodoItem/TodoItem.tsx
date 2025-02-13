import { Todo } from '@/App';
import './TodoItem.css';

const TodoItem = ({
  todo,
  toggleItem,
  removeItem
}: {
  todo: Todo;
  toggleItem: (id: string, checked: boolean) => void;
  removeItem: (id: string) => void;
}) => {
  return (
    <>
      <div className="todo-item">
        <span className={todo.done ? 'done' : ''}>
          <p>{todo.item}</p>
        </span>
        <span className="todo-actions">
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => toggleItem(todo.id, !todo.done)}
          ></input>
          <span title="Delete" onClick={() => removeItem(todo.id)}>
            X
          </span>
        </span>
      </div>
    </>
  );
};

export default TodoItem;
