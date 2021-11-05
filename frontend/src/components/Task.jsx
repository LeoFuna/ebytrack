import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchUpdateTask } from '../helpers/fetchApi';
import TasksContext from '../context/tasksContext';

function Task({ taskData: { _id, description, status, created } }) {
  const { getTasksFromApi } = useContext(TasksContext);
  async function updateTask({ target }) {
    const token = localStorage.getItem('token');
    const { value } = target;
    await fetchUpdateTask(_id, token, { updatedTask: { status: value } });
    await getTasksFromApi();
  }
  return (
    <div className="task-div">
      <div className="description-div">
        <input type="checkbox" className="task-checkbox" />
        <p className="description-task">{ description }</p>
      </div>
      <div className="status-created-div">
        <select onChange={ (e) => updateTask(e) }>
          <option value={ status }>{ status }</option>
          <option value="pendente">pendente</option>
          <option value="em andamento">em andamento</option>
          <option value="pronto">pronto</option>
        </select>
      </div>
      <div className="status-created-div">
        { created }
      </div>
    </div>
  );
}

Task.propTypes = {
  taskData: PropTypes.shape({
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Task;
