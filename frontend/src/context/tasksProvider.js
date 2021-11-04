import React from 'react';
import PropTypes from 'prop-types';
import TasksContext from './tasksContext';

function TasksProvider({ children }) {
  return (
    <TasksContext.Provider value="o que vai passar">
      { children }
    </TasksContext.Provider>
  );
}

TasksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TasksProvider;
