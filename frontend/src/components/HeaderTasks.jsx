import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UsersContext from '../context/usersContext';

function HeaderTasks() {
  const { greeting } = useContext(UsersContext);
  console.log(greeting);
  return (
    <header id="header-container-tasks">
      <h1>
        EBYTR
        <span>acker</span>
      </h1>
      <div>
        <p id="greetings-tasks">
          Olá
          {' '}
          {/* Essa parte deve ser dinámica com o que vem do Banco */}
          <span>{ greeting }</span>
        </p>
        <Link to="/" style={ { textDecoration: 'none' } }>
          <p id="loggout-tasks">sair</p>
        </Link>
      </div>
    </header>
  );
}

export default HeaderTasks;
