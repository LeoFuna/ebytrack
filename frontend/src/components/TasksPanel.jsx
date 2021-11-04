import React, { useContext, useState } from 'react';
import TasksContext from '../context/tasksContext';

function TasksPanel() {
  const { tasks, orderByAlphabetical, orderByStatus } = useContext(TasksContext);
  const [orderOnDescription, setOrderOnDescription] = useState(0);
  const [orderOnStatus, setOrderOnStatus] = useState(0);

  function renderTasks() {
    return tasks.map((task, index) => (
      <div className="task-div" key={ index }>
        <div className="description-div">
          <input type="checkbox" className="task-checkbox" />
          <p className="description-task">{ task.description }</p>
        </div>
        <div className="status-created-div">
          <select>
            <option value={ task.status }>{ task.status }</option>
            <option value="pendente">pendente</option>
            <option value="em andamento">em andamento</option>
            <option value="pronto">pronto</option>
          </select>
        </div>
        <div className="status-created-div">
          { task.created }
        </div>
      </div>
    ));
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
    } else if (orderOnStatus === 1) {
      orderByStatus(2);
      setOrderOnDescription(2);
    } else {
      orderByStatus(0);
      setOrderOnDescription(0);
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
