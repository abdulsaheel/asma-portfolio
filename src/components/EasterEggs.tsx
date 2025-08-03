import React, { useEffect, useState } from 'react';

const EasterEggs: React.FC = () => {
  const [konamiProgress, setKonamiProgress] = useState(0);
  
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ];

  useEffect(() => {
    let clickCount = 0;
    
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === konamiCode[konamiProgress]) {
        setKonamiProgress(prev => prev + 1);
        
        if (konamiProgress + 1 === konamiCode.length) {
          setKonamiProgress(0);
          
          const message = document.createElement('div');
          message.innerHTML = '🎉 Secret unlocked! You know your way around! 🎮';
          message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            color: white;
            padding: 20px 30px;
            border-radius: 10px;
            font-size: 16px;
            font-weight: bold;
            z-index: 10000;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          `;
          
          document.body.appendChild(message);
          
          setTimeout(() => {
            if (document.body.contains(message)) {
              document.body.removeChild(message);
            }
          }, 3000);
        }
      } else {
        setKonamiProgress(0);
      }
    };

    const welcomeMessage = `
    %c🐱 Welcome to my portfolio! 
    %cLooks like you're checking out the console - I like that! 
    %cFeel free to explore the code. Here's a little secret: try the Konami code! ↑↑↓↓←→←→BA
    `;
    
    console.log(
      welcomeMessage,
      'color: #ff6b6b; font-size: 20px; font-weight: bold;',
      'color: #4ecdc4; font-size: 14px;',
      'color: #95a5a6; font-size: 12px; font-style: italic;'
    );

    const handleTripleClick = () => {
      clickCount++;
      
      if (clickCount === 7) {
        const secretDiv = document.createElement('div');
        secretDiv.innerHTML = `
          <div style="text-align: center;">
            <div style="font-size: 24px; margin-bottom: 10px;">🔍</div>
            <div>You're quite the explorer!</div>
            <div style="font-size: 12px; opacity: 0.7; margin-top: 8px;">
              Recruiters love attention to detail 😉
            </div>
          </div>
        `;
        secretDiv.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          background: rgba(0,0,0,0.9);
          color: white;
          padding: 15px 20px;
          border-radius: 8px;
          font-size: 14px;
          z-index: 10000;
          opacity: 0;
          transition: opacity 0.5s ease;
          max-width: 200px;
        `;
        
        document.body.appendChild(secretDiv);
        
        setTimeout(() => {
          secretDiv.style.opacity = '1';
        }, 100);
        
        setTimeout(() => {
          secretDiv.style.opacity = '0';
          setTimeout(() => {
            if (document.body.contains(secretDiv)) {
              document.body.removeChild(secretDiv);
            }
          }, 500);
        }, 4000);
        
        clickCount = 0;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('click', handleTripleClick);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('click', handleTripleClick);
    };
  }, [konamiProgress, konamiCode]);

  useEffect(() => {
    const hour = new Date().getHours();
    let timeMessage = '';
    
    if (hour >= 22 || hour <= 5) {
      timeMessage = '🌙 Working late? You\'re dedicated!';
    } else if (hour >= 6 && hour <= 9) {
      timeMessage = '🌅 Early bird! I like your style.';
    } else if (hour >= 17 && hour <= 21) {
      timeMessage = '🌆 Perfect time to explore portfolios!';
    }
    
    if (timeMessage) {
      setTimeout(() => {
        console.log(`%c${timeMessage}`, 'color: #f39c12; font-size: 12px;');
      }, 3000);
    }
  }, []);

  return null;
};

export default EasterEggs;