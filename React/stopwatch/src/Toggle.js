import React from 'react'
import { useState } from 'react';

export default function Toggle() {
    const [isToggleOn,setIsToggleOn] = useState(true);

const handleClick = () => {
    setIsToggleOn(!isToggleOn);
}

  return (
    <div>
      <button onClick={handleClick}>
        {isToggleOn ? 'Stop' : 'Start'}
      </button>
    </div>
  );
}
