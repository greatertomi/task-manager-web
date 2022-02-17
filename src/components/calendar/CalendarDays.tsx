import React, { FC } from 'react';

interface CalendarDaysProps {
  day: Date;
  changeCurrentDay: (value: any) => void;
}

const CalendarDays: FC<CalendarDaysProps> = ({ day, changeCurrentDay }) => {
  const firstDayOfMonth = new Date(day.getFullYear(), day.getMonth(), 1);
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  const currentDays = [];

  for (let tempDay = 0; tempDay < 42; tempDay += 1) {
    if (tempDay === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (tempDay === 0) {
      firstDayOfMonth.setDate(
        firstDayOfMonth.getDate() + (tempDay - weekdayOfFirstDay)
      );
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    const calendarDay = {
      currentMonth: firstDayOfMonth.getMonth() === day.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: firstDayOfMonth.toDateString() === day.toDateString(),
      year: firstDayOfMonth.getFullYear(),
    };

    currentDays.push(calendarDay);
  }

  console.log('currentDays ->', {
    day,
    currentDays,
    firstDayOfMonth,
    weekdayOfFirstDay,
  });

  return (
    <div className="table-content">
      {currentDays.map((tempDay, index) => (
        <div
          className={`calendar-day ${tempDay.currentMonth ? ' current' : ''} ${
            tempDay.selected ? ' selected' : ''
          }`}
          onClick={() => changeCurrentDay(tempDay)}
          key={`day${index}`}
        >
          <p>{tempDay.number}</p>
        </div>
      ))}
    </div>
  );
};

export default CalendarDays;
