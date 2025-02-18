import { useEffect, useState } from 'react';
import './MenuItems.css';

const MenuItems = ({
  clearTodos,
  clearDoneTodos,
  toggleAllTodos
}: {
  clearTodos: () => void;
  clearDoneTodos: () => void;
  toggleAllTodos: (checked: boolean) => void;
}) => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  useEffect(() => {
    toggleAllTodos(checked);
  }, [checked]);

  return (
    <>
      <div className="menu-items">
        <div className="toggle">
          <label htmlFor="toggle">Toggle all todos</label>
          <input id="toggle" type="checkbox" checked={checked} onChange={handleToggle} />
        </div>
        <button onClick={clearTodos}>Clear list</button>
        <button onClick={clearDoneTodos}>Clear done items</button>
      </div>
    </>
  );
};

export default MenuItems;
