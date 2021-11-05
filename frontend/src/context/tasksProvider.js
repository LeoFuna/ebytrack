import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TasksContext from './tasksContext';
import { fetchGetTasksByUser } from '../helpers/fetchApi';

function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  async function getTasksFromApi() {
    const token = localStorage.getItem('token');
    const tasksFromUser = await fetchGetTasksByUser(token);
    setTasks(tasksFromUser.data.tasksFromUser);
  }

  function orderByAlphabetical(order) {
    let positionOnOrder;
    if (order) {
      positionOnOrder = { putBefore: -1, putAfter: 1, equal: 0 };
    } else {
      positionOnOrder = { putBefore: 1, putAfter: -1, equal: 0 };
    }
    // https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript/51897069
    const orderedTasksByDescription = tasks.sort((firstArgument, secondArgument) => {
      if (firstArgument.description < secondArgument.description) {
        return positionOnOrder.putBefore;
      }
      if (firstArgument.description > secondArgument.description) {
        return positionOnOrder.putAfter;
      }
      return positionOnOrder.equal;
    });
    setTasks([...orderedTasksByDescription]);
  }

  async function orderByStatus(status) {
    const doneTasks = tasks.filter((task) => task.status === 'pronto');
    const doingTasks = tasks.filter((task) => task.status === 'em andamento');
    const pendingTasks = tasks.filter((task) => task.status === 'pendente');
    if (status === 1) {
      setTasks([...doneTasks, ...doingTasks, ...pendingTasks]);
    }
    if (status === 2) {
      setTasks([...doingTasks, ...pendingTasks, ...doneTasks]);
    }
    if (status === 0) {
      setTasks([...pendingTasks, ...doneTasks, ...doingTasks]);
    }
  }

  return (
    <TasksContext.Provider
      value={ {
        tasks,
        setTasks,
        getTasksFromApi,
        orderByAlphabetical,
        orderByStatus,
      } }
    >
      { children }
    </TasksContext.Provider>
  );
}

TasksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TasksProvider;
