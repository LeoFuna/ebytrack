import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UsersContext from './usersContext';

function UsersProvider({ children }) {
  const [greeting, setGreeting] = useState('');

  return (
    <UsersContext.Provider
      value={ {
        greeting,
        setGreeting,
      } }
    >
      { children }
    </UsersContext.Provider>
  );
}

UsersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UsersProvider;
