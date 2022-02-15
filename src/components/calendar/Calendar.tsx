import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import './calendar.css';
import CalendarDays from './CalendarDays';

const Calendar = () => {
  const [currentDay, setCurrentDay] = useState(new Date());
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const changeCurrentDay = (day: any) => {
    setCurrentDay(new Date(day.year, day.month, day.number));
  };

  const nextDay = () => {
    setCurrentDay(new Date(currentDay.setDate(currentDay.getDate() + 1)));
  };

  const previousDay = () => {
    setCurrentDay(new Date(currentDay.setDate(currentDay.getDate() - 1)));
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <div className="title">
          <h2>
            {months[currentDay.getMonth()]}
            {currentDay.getFullYear()}
          </h2>
        </div>
        <div className="tools">
          <IconButton onClick={previousDay}>
            <ArrowBack>arrow_back</ArrowBack>
          </IconButton>
          <p>
            {months[currentDay.getMonth()]?.substring(0, 3)}
            {currentDay.getDate()}
          </p>
          <IconButton onClick={nextDay}>
            <ArrowForward>arrow_forward</ArrowForward>
          </IconButton>
        </div>
      </div>
      <div className="calendar-body">
        <div className="table-header">
          {weekdays.map((weekday, index) => {
            return (
              <div key={`week${index}`}>
                <p>{weekday}</p>
              </div>
            );
          })}
        </div>
        <CalendarDays day={currentDay} changeCurrentDay={changeCurrentDay} />
      </div>
    </div>
  );
};

export default Calendar;
