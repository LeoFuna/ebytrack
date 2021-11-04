import React from 'react';
import HeaderTasks from '../components/HeaderTasks';
import Signature from '../components/Signature';
import TasksCreateInput from '../components/TasksCreateInput';
import TasksPanel from '../components/TasksPanel';
import '../styles/tasks.css';

function Tasks() {
  return (
    <div id="tasks-main-container">
      <HeaderTasks />
      <TasksCreateInput />
      <TasksPanel />
      <Signature />
    </div>
  );
}

export default Tasks;
