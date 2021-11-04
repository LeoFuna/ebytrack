import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import TasksProvider from './context/tasksProvider';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Tasks from './pages/Tasks';

function App() {
  return (
    <TasksProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/signup" component={ Signup } />
        <Route exact path="/tasks" component={ Tasks } />
      </Switch>
    </TasksProvider>
  );
}

export default App;
