import React, { useState } from "react";

const TodoForm = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className='todo-form'>
      <input
        type='text'
        placeholder='Add item to list'
        value={input}
        name='text'
        className='todo-input'
      />

      <button className='todo-button'>Add item</button>
    </form>
  );
};

export default TodoForm;
