import React, { useEffect, useState } from 'react';
import Toggle from './Toggle';

export default function Clock() {

const [time,setTime] = useState(new Date());
const timerIdRef = useRef();

useEffect(() => {
    start();
    return() => {
        stop();
    }
},[])

const start = () =>{
    const id = setInterval(() => {
        setTime(new Date());
    },1000)
    timerIdRef.current = id;
}

const stop = () => {
clearInterval(timerIdRef.current);
}

  return (
    <div>
      <p>{time.toLocaleTimeString()}</p>
      <Toggle starttaa={start} stoppaa={stop} />
    </div>
   
  );
}
