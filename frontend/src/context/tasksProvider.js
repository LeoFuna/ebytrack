import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TasksContext from './tasksContext';

function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  function addNewTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <TasksContext.Provider value={ { tasks, addNewTask } }>
      { children }
    </TasksContext.Provider>
  );
}

TasksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TasksProvider;
