import React, { useContext } from 'react';
import TasksContext from '../context/tasksContext';

function TasksPanel() {
  const { tasks } = useContext(TasksContext);

  function renderTasks() {
    return tasks.map((task, index) => (
      <div className="task-div" key={ index }>
        <div>
          { task.description }
        </div>
        <div>
          { task.status }
        </div>
        <div>
          { task.created }
        </div>
      </div>
    ));
  }

  return (
    <div id="tasks-container">
      {/* <div>
        <div name="task-div">
          <div>
            <input type="checkbox" name="minha Task" id="task" />
            <p>minha task</p>
          </div>
        </div>
        <div name="status-div">
          status
        </div>
        <div name="created-div">
          created
        </div>
      </div> */}
      { renderTasks() }
    </div>
  );
}

export default TasksPanel;
