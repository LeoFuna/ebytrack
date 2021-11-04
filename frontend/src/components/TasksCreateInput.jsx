import React, { useContext, useState } from 'react';
import TasksContext from '../context/tasksContext';

function TasksCreateInput() {
  const [newTask, setNewTasks] = useState('');
  const { addNewTask } = useContext(TasksContext);

  function handleInput({ target: { value } }) {
    setNewTasks(value);
  }

  function addTaskHandler() {
    addNewTask(newTask);
    setNewTasks('');
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
      <button
        type="button"
        onClick={ () => addTaskHandler() }
        id="add-task-button"
      >
        Adicionar
      </button>
    </div>
  );
}

export default TasksCreateInput;
