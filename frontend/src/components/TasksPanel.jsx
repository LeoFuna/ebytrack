import React, { useContext, useState } from 'react';
import TasksContext from '../context/tasksContext';
import Task from './Task';

function TasksPanel() {
  const { tasks, orderByAlphabetical, orderByStatus } = useContext(TasksContext);
  const [orderOnDescription, setOrderOnDescription] = useState(0);
  const [orderOnStatus, setOrderOnStatus] = useState(0);

  /* eslint no-underscore-dangle: 0 */
  // https://stackoverflow.com/questions/44126983/eslint-unexpected-dangling-in-place-no-underscore-dangle
  function renderTasks() {
    return tasks.map((task) => <Task key={ task._id } taskData={ task } />);
  }

  function handleOrderOnDescrition() {
    if (orderOnDescription === 0) {
      orderByAlphabetical('alphabetical');
      setOrderOnDescription(1);
    } else {
      orderByAlphabetical();
      setOrderOnDescription(0);
    }
  }

  function handleOrderOnStatus() {
    if (orderOnStatus === 0) {
      orderByStatus(1);
      setOrderOnStatus(1);
    }
    if (orderOnStatus === 1) {
      orderByStatus(2);
      setOrderOnStatus(2);
    }
    if (orderOnStatus === 2) {
      orderByStatus(0);
      setOrderOnStatus(0);
    }
  }

  return (
    <div id="tasks-container">
      <div id="header-task-panel">
        <div className="description-div">
          <button
            className="description-task"
            onClick={ () => handleOrderOnDescrition() }
            type="button"
          >
            Descrição
          </button>
        </div>
        <div className="status-created-div">
          <button
            className="status-task"
            onClick={ () => handleOrderOnStatus() }
            type="button"
          >
            Status
          </button>
        </div>
        <div className="status-created-div">
          Criado
        </div>
      </div>
      { renderTasks() }
    </div>
  );
}

export default TasksPanel;
