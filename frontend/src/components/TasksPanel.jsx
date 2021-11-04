import React from 'react';

function TasksPanel() {
  return (
    <div id="tasks-container">
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
    </div>
  );
}

export default TasksPanel;
