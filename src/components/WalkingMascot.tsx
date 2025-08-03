import React, { useState, useEffect, useRef } from 'react';

// Import cat images to bundle them
import ltr1 from '../assets/cat/ltr-1.png';
import ltr2 from '../assets/cat/ltr-2.png';
import rtl1 from '../assets/cat/rtl-1.png';
import rtl2 from '../assets/cat/rtl-2.png';
import sleepImg from '../assets/cat/sleep.png';
import stretchImg from '../assets/cat/stretch.png';
import handsupImg from '../assets/cat/handsup.png';
import stuntImg from '../assets/cat/stunt-1.png';

const WalkingMascot: React.FC = () => {
  const [position, setPosition] = useState(50);
  const [sprite, setSprite] = useState(1);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [state, setState] = useState<'walking' | 'sleeping' | 'stretching' | 'handsup' | 'stunt'>('walking');
  const [, setLastActivity] = useState(Date.now());
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const handsUpTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleActivity = () => {
      setLastActivity(Date.now());
      if (state === 'sleeping') {
        setState('stretching');
        setTimeout(() => setState('walking'), 2000);
      }
    };

    const events = ['scroll', 'mousemove', 'click', 'keydown'];
    events.forEach(event => 
      document.addEventListener(event, handleActivity, { passive: true })
    );

    return () => {
      events.forEach(event => 
        document.removeEventListener(event, handleActivity)
      );
    };
  }, [state]);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (state === 'walking') {
      let x = position;
      let dir = direction;
      
      intervalRef.current = setInterval(() => {
        if (dir === 'right') {
          x += 5;
          if (x >= window.innerWidth - 100) {
            dir = 'left';
            setDirection('left');
          }
        } else {
          x -= 5;
          if (x <= 50) {
            dir = 'right';
            setDirection('right');
          }
        }
        setPosition(x);
        setSprite(prev => prev === 1 ? 2 : 1);
      }, 120);

      timeoutRef.current = setTimeout(() => {
        setState('sleeping');
      }, Math.random() * 15000 + 10000);

      if (Math.random() < 0.005) {
        setTimeout(() => {
          if (state === 'walking') {
            setState('stunt');
            setTimeout(() => setState('walking'), 3000);
          }
        }, Math.random() * 30000 + 20000);
      }
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [state, position, direction]);

  const getSprite = () => {
    switch (state) {
      case 'sleeping': return sleepImg;
      case 'stretching': return stretchImg;
      case 'handsup': return handsupImg;
      case 'stunt': return stuntImg;
      default: 
        if (direction === 'right') {
          return sprite === 1 ? ltr1 : ltr2;
        } else {
          return sprite === 1 ? rtl1 : rtl2;
        }
    }
  };

  const handleHover = () => {
    if (state === 'walking') {
      setState('handsup');
      handsUpTimeoutRef.current = window.setTimeout(() => setState('walking'), 2000);
    }
  };

  const handleMouseLeave = () => {
    if (state === 'handsup' && handsUpTimeoutRef.current) {
      clearTimeout(handsUpTimeoutRef.current);
      setState('walking');
    }
  };

  const handleClick = () => {
    if (state === 'sleeping') {
      setState('stretching');
      setTimeout(() => setState('walking'), 2000);
    }
  };

  return (
    <div
      className="fixed z-50 cursor-pointer select-none"
      style={{
        left: `${position}px`,
        bottom: '-8px',
        transition: state === 'walking' ? 'left 0.12s ease-out' : 'all 0.5s ease',
      }}
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      title={state === 'sleeping' ? "Click to wake up! 😴" : "Hover for interaction! 🐾"}
    >
      <img
        src={getSprite()}
        alt="Cat mascot"
        className={`w-16 h-16 object-contain ${
          state === 'sleeping' ? 'animate-pulse' : ''
        }`}
        style={{
          imageRendering: 'pixelated',
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
        }}
      />
      
      {state === 'sleeping' && (
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm animate-pulse">
          💤
        </div>
      )}
    </div>
  );
};

export default WalkingMascot;
