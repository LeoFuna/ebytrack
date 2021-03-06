import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import TasksProvider from './context/tasksProvider';
import UsersProvider from './context/usersProvider';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Tasks from './pages/Tasks';

function App() {
  return (
    <UsersProvider>
      <TasksProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/signup" component={ Signup } />
            <Route exact path="/tasks" component={ Tasks } />
          </Switch>
        </BrowserRouter>
      </TasksProvider>
    </UsersProvider>
  );
}

export default App;
