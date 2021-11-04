import React, { useState } from 'react';

function TasksCreateInput() {
  const [newTask, setNewTasks] = useState('');

  function handleInput({ target: { value } }) {
    setNewTasks(value);
  }

  return (
    <div id="tasks-create-container">
      <input
        type="text"
        id="create-task-input"
        value={ newTask }
        onChange={ handleInput }
        placeholder="Informe a task a ser adicionada..."
      />
      <button type="button" id="add-task-button">Adicionar</button>
    </div>
  );
}

export default TasksCreateInput;
