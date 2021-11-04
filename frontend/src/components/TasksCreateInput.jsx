import React, { useContext, useState } from 'react';
import TasksContext from '../context/tasksContext';
import verifyMonth from '../helpers/helpers';

function TasksCreateInput() {
  const [newTask, setNewTasks] = useState('');
  const { addNewTask } = useContext(TasksContext);

  function handleInput({ target: { value } }) {
    setNewTasks(value);
  }

  function addTaskHandler() {
    const date = new Date();
    const month = verifyMonth(date.getMonth());
    const fullDate = `${date.getDate()}:${month}`;
    const completeDataOfTask = {
      description: newTask,
      status: 'pendente',
      created: fullDate,
    };
    addNewTask(completeDataOfTask);
    setNewTasks('');
  }

  return (
    <div id="tasks-create-container">
      <input
        type="text"
        id="create-task-input"
        value={ newTask }
        onChange={ handleInput }
        placeholder="Informe a tarefa a ser adicionada..."
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
