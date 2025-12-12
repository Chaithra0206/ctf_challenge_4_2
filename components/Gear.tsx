import React from 'react';
import { GearProps } from '../types';

export const Gear: React.FC<GearProps> = ({ 
  char, 
  index, 
  size, 
  top, 
  left, 
  teeth, 
  color, 
  direction,
  zIndex 
}) => {
  const asciiValue = char.charCodeAt(0);
  

  const colors = {
    bronze: 'linear-gradient(135deg, #cd7f32 0%, #8b4513 100%)',
    brass: 'linear-gradient(135deg, #e5c100 0%, #b5a642 100%)',
    copper: 'linear-gradient(135deg, #b87333 0%, #8b3a10 100%)',
  };

  const solidColors = {
    bronze: '#cd7f32',
    brass: '#b5a642',
    copper: '#b87333',
  };
  
  const mainGradient = colors[color];
  const solidColor = solidColors[color];
  
  
  const style = {
    [`--gear-r${index + 1}`]: asciiValue, 
    top,
    left,
    width: `${size}px`,
    height: `${size}px`,
    zIndex,
    animationDuration: `calc(var(--gear-r${index + 1}) * 200ms)`,
  } as React.CSSProperties;

  return (
    <div 
      className={`absolute flex items-center justify-center rounded-full drop-shadow-2xl ${direction === 'reverse' ? 'animate-[spin_1s_linear_infinite_reverse]' : 'animate-[spin_1s_linear_infinite]'}`}
      style={style}
      aria-hidden="true"
      title={`Gear Mechanism #${index + 1}`}
    >
      <div className="relative w-full h-full">
       
        {Array.from({ length: teeth }).map((_, i) => (
          <div
            key={i}
            className="absolute w-[12%] h-[18%] -translate-x-1/2 left-1/2 rounded-sm"
            style={{
              background: mainGradient,
              transform: `rotate(${(360 / teeth) * i}deg) translateY(-10%)`,
              transformOrigin: '50% 300%', 
              top: '-10%',
              boxShadow: 'inset 0 0 2px rgba(0,0,0,0.5)'
            }}
          />
        ))}
        
     
        <div 
          className="absolute inset-1 rounded-full border-[6px] border-black/20"
          style={{ background: mainGradient, boxShadow: 'inset 0 0 10px rgba(0,0,0,0.6)' }}
        >
           
           <div className="absolute inset-0 flex items-center justify-center animate-spin-slow" style={{ animationDuration: '0s' }}>
              <div className="w-2/3 h-2/3 rounded-full border-4 border-dashed border-black/30 opacity-60"></div>
           </div>

          
          <div className="absolute inset-0 m-auto w-1/3 h-1/3 rounded-full bg-darkmetal shadow-[inset_0_2px_5px_rgba(0,0,0,0.8)] border-2 border-white/10 flex items-center justify-center">
             <div className="w-1/2 h-1/2 rounded-full bg-black/40"></div>
          </div>
        </div>
      </div>
    </div>
  );
};