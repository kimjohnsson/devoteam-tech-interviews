import { Todo } from '@/App';
import './TodoItem.css';

const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <>
      <div className="todo-item">
        <span>
          <p>{todo.item}</p>
        </span>
        <span>
          <input type="checkbox" checked={todo.done}></input>
        </span>
      </div>
    </>
  );
};

export default TodoItem;
