"use client"
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const currentDate = new Date();
      const noncapitalizedTime = currentDate.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
      const formattedTime = noncapitalizedTime.replace('am', 'AM').replace('pm', 'PM');
      const formattedDate = currentDate.toLocaleDateString('en-IN', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
      
      setTime(formattedTime);
      setDate(formattedDate);
    };

    updateDateTime();
    const now = new Date();
    const msUntilNextMinute = (60 - now.getSeconds()) * 1000 + (1000 - now.getMilliseconds());

    const timeoutId = setTimeout(() => {
      updateDateTime();
      const intervalId = setInterval(updateDateTime, 60000);

      return () => clearInterval(intervalId);
    }, msUntilNextMinute);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <h1 className='text-4xl font-extrabold lg:text-6xl'>{time}</h1>
      <p className='text-lg font-medium text-sky-1 lg:text-2xl'>{date}</p>
    </div>
  );
};

export default Clock;
