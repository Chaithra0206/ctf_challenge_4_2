import React, { useState, useMemo, useEffect } from 'react';
import { ClockFace } from './components/ClockFace';
import { Gear } from './components/Gear';
import { GearProps } from './types';

const MECHANICAL_SEQUENCE = [83, 55, 109, 64, 57, 50, 81, 107, 45, 80, 116, 33, 88, 102];

const App: React.FC = () => {
  const [viewportSize, setViewportSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setViewportSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const gears: GearProps[] = useMemo(() => {
    const radius = Math.min(viewportSize.width, viewportSize.height) * 0.35; 
    const cx = 0;
    const cy = 0;
    
    return MECHANICAL_SEQUENCE.map((val, i) => {
      const angle = (i / MECHANICAL_SEQUENCE.length) * 2 * Math.PI - Math.PI / 2;
     
      const r = radius + (i % 2 === 0 ? 25 : -15);
      
      const left = `calc(50% + ${cx + r * Math.cos(angle)}px)`;
      const top = `calc(50% + ${cy + r * Math.sin(angle)}px)`;
      
      const size = 50 + (val % 50); 
      const teeth = 8 + (val % 10);
      
      return {
        value: val,
        index: i,
        size,
        top,
        left,
        teeth,
        color: i % 3 === 0 ? 'bronze' : i % 3 === 1 ? 'brass' : 'copper',
        direction: i % 2 === 0 ? 'normal' : 'reverse',
        zIndex: 10
      };
    });
  }, [viewportSize]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-[#0f0f0f]">
      
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)] z-10"></div>
      
     
      <div className="absolute top-0 left-0 w-full h-48 border-b-[6px] border-bronze/20 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] transform -skew-y-2 origin-top-left"></div>
      <div className="absolute bottom-0 right-0 w-full h-48 border-t-[6px] border-copper/20 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] transform skew-y-2 origin-bottom-right"></div>
      
      
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-500/20 rounded-full blur-[1px] animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-bronze/20 rounded-full blur-[2px] animate-pulse delay-700"></div>
      <div className="absolute top-1/2 right-10 w-1 h-1 bg-white/10 rounded-full blur-[1px] animate-pulse delay-300"></div>

      <div className="relative z-20 flex flex-col items-center">
     
        <div className="relative w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] flex items-center justify-center mb-12">
            
           
            <div className="z-30 relative transition-all duration-1000 hover:scale-[1.02]">
              <ClockFace />
            </div>

           
            {gears.map((gear, i) => (
              <div 
                key={i} 
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-in-out"
                style={{ 
                  top: gear.top, 
                  left: gear.left,
                  transform: `scale(1) translate(-50%, -50%)`
                }}
              >
                <Gear {...gear} />
              </div>
            ))}
        </div>

        <div className="text-center z-50">
            <h2 className="text-brass font-steampunk text-3xl tracking-widest drop-shadow-lg opacity-90">
                AETHER CHRONOMETRY
            </h2>
            <div className="h-0.5 w-32 mx-auto bg-gradient-to-r from-transparent via-bronze to-transparent my-3 opacity-50"></div>
            <p className="text-copper/60 font-mono text-xs italic tracking-widest">
                "THE GEARS WHISPER THE TRUTH"
            </p>
        </div>
      </div>

    
    </div>
  );
};

export default App;