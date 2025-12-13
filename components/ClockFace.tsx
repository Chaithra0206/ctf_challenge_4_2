import React, { useEffect, useState } from 'react';

export const ClockFace: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const secDeg = (seconds / 60) * 360;
  const minDeg = ((minutes + seconds / 60) / 60) * 360;
  const hourDeg = ((hours % 12 + minutes / 60) / 12) * 360;

  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-[8px] md:border-[12px] border-bronze bg-[#1a1a1a] shadow-[0_0_60px_rgba(205,127,50,0.4),inset_0_0_40px_rgba(0,0,0,0.9)] flex items-center justify-center z-20 group">
   
      <div className="absolute inset-0 rounded-full opacity-40 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]"></div>
    
      <div className="absolute inset-0 rounded-full border border-white/10 shadow-inner"></div>

      <div className="absolute inset-4 rounded-full border border-dashed border-white/5"></div>
      
      {[...Array(60)].map((_, i) => {
        const isHour = i % 5 === 0;
        return (
          <div
            key={`tick-${i}`}
            className="absolute inset-0"
            style={{ transform: `rotate(${i * 6}deg)` }}
          >
            <div 
              className={`absolute top-0 left-1/2 -translate-x-1/2 ${isHour ? 'w-1 h-3 md:h-4 bg-brass shadow-[0_0_5px_rgba(181,166,66,0.5)]' : 'w-0.5 h-1.5 md:h-2 bg-copper/60'}`}
              style={{ marginTop: '10px' }} 
            />
          </div>
        );
      })}

      
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{ transform: `rotate(${i * 30}deg)` }}
        >
            <div 
                className="absolute top-6 md:top-8 left-1/2 -translate-x-1/2 text-brass font-steampunk font-bold text-xl md:text-3xl select-none"
                style={{ transform: `rotate(-${i * 30}deg)` }}
            >
                <span className="drop-shadow-md">
                   {['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'][i]}
                </span>
            </div>
        </div>
      ))}

      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center opacity-60">
        <span className="font-mono text-[8px] md:text-[10px] tracking-[0.4em] text-copper block font-bold">AETHER</span>
        <span className="font-mono text-[8px] md:text-[10px] tracking-[0.2em] text-bronze block">CHRONOMETRY</span>
      </div>

    
      <div className="absolute inset-0 z-30 filter drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
         
          <div 
            className="absolute top-0 left-0 w-full h-full"
            style={{ transform: `rotate(${hourDeg}deg)` }}
          >
             <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-2 md:w-3 h-16 md:h-20 bg-gradient-to-t from-brass via-yellow-600 to-yellow-200 rounded-full origin-bottom"></div>
            
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-1.5 h-6 bg-brass rounded-b-full"></div>
          </div>

          
          <div 
            className="absolute top-0 left-0 w-full h-full"
            style={{ transform: `rotate(${minDeg}deg)` }}
          >
            <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-1 md:w-1.5 h-24 md:h-32 bg-gradient-to-t from-copper via-orange-400 to-orange-200 rounded-full origin-bottom"></div>
         
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-1 h-8 bg-copper rounded-b-full"></div>
          </div>

         
          <div 
            className="absolute top-0 left-0 w-full h-full"
            style={{ transform: `rotate(${secDeg}deg)` }}
          >
            <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-0.5 h-28 md:h-36 bg-red-600 shadow-[0_0_2px_rgba(255,0,0,0.5)] origin-bottom"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-1 h-10 bg-red-800 rounded-b-full"></div>
            <div className="absolute bottom-[calc(50%+1.5rem)] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-red-600 ring-2 ring-black/20"></div>
          </div>
      </div>
      
     
      <div className="absolute w-4 h-4 md:w-6 md:h-6 bg-gradient-to-br from-yellow-200 to-yellow-700 rounded-full z-50 shadow-[0_2px_4px_black] border border-black/20"></div>

      
      <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none z-40"></div>
    </div>
  );
};