import React from 'react';
import './App.css';
import { Typography } from '@mui/material';
import NavBar from './components/NavBar';
import Calendar from './components/calendar/Calendar';

const App = () => {
  console.log('App');
  return (
    <div>
      <NavBar />
      <Typography variant="h2">Task Manager</Typography>
      <Calendar />
    </div>
  );
};

export default App;
