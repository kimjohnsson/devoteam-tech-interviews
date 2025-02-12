import { Todo } from '@/App';
import './TodoItem.css';

const TodoItem = ({
  todo,
  toggleItem
}: {
  todo: Todo;
  toggleItem: (id: string, checked: boolean) => void;
}) => {
  return (
    <>
      <div className="todo-item">
        <span className={todo.done ? 'done' : ''}>
          <p>{todo.item}</p>
        </span>
        <span>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => toggleItem(todo.id, !todo.done)}
          ></input>
        </span>
      </div>
    </>
  );
};

export default TodoItem;
