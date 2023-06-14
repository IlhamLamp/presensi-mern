import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  
  const dateTimeString = format(time, 'EEEE, do MMMM yyyy', { locale: id });

  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
      <p>{dateTimeString}</p>
    </div>
  );
}

export default Clock;
