import React from 'react';

function TasksCreateInput() {
  return (
    <div id="tasks-create-container">
      <input
        type="text"
        id="create-task-input"
        placeholder="Informe a task a ser adicionada..."
      />
      <button type="button">Adicionar</button>
    </div>
  );
}

export default TasksCreateInput;
