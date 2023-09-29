import React, { useState, useContext } from 'react';
import { todoStates } from '../contexts/TodoContext';

const TodoForm = () => {

  const [todoTitle, settodoTitle] = useState('');

  const { addTodo } = useContext(todoStates);

  const submmit = (e) => {
    e.preventDefault();
    if (todoTitle != '') {
      addTodo(todoTitle);
      settodoTitle('');
    }
  }

  return (
    <>
      <form className="flex" onSubmit={submmit}>
        <input
          type="text"
          placeholder="Write Todo..."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          value={todoTitle}
          onChange={(e) => settodoTitle(e.target.value)}
        />
        <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
          Add
        </button>
      </form>
    </>
  );
}

export default TodoForm;
