import React from 'react';
import { Gear } from './components/Gear';
import { ClockFace } from './components/ClockFace';
import { GearProps } from './types';

const XOR_MASK = 91;

const KEY_DATA = [
  8, 108, 54, 7, 110, 104, 10, 48, 118, 11, 55, 122, 3, 61
];

const KEY_CHARS = KEY_DATA.map(n =>
  String.fromCharCode(n ^ XOR_MASK)
);

const GEAR_CONFIGS: Omit<GearProps, 'char' | 'index'>[] = [
  { size: 120, top: '10%', left: '10%', teeth: 12, color: 'bronze', direction: 'normal', zIndex: 10 },
  { size: 80, top: '25%', left: '5%', teeth: 8, color: 'brass', direction: 'reverse', zIndex: 5 },
  { size: 150, top: '-5%', left: '70%', teeth: 16, color: 'copper', direction: 'normal', zIndex: 1 },
  { size: 90, top: '15%', left: '85%', teeth: 10, color: 'bronze', direction: 'reverse', zIndex: 8 },
  { size: 200, top: '60%', left: '-5%', teeth: 24, color: 'brass', direction: 'normal', zIndex: 2 },
  { size: 100, top: '80%', left: '15%', teeth: 12, color: 'copper', direction: 'reverse', zIndex: 6 },
  { size: 130, top: '75%', left: '80%', teeth: 14, color: 'bronze', direction: 'normal', zIndex: 4 },
  { size: 70, top: '60%', left: '90%', teeth: 8, color: 'brass', direction: 'reverse', zIndex: 9 },
  { size: 60, top: '40%', left: '2%', teeth: 6, color: 'copper', direction: 'normal', zIndex: 7 },
  { size: 110, top: '5%', left: '40%', teeth: 12, color: 'bronze', direction: 'reverse', zIndex: 0 },
  { size: 180, top: '85%', left: '50%', teeth: 20, color: 'brass', direction: 'normal', zIndex: 3 },
  { size: 85, top: '35%', left: '90%', teeth: 9, color: 'copper', direction: 'reverse', zIndex: 8 },
  { size: 95, top: '50%', left: '8%', teeth: 10, color: 'bronze', direction: 'normal', zIndex: 5 },
  { size: 140, top: '10%', left: '60%', teeth: 15, color: 'brass', direction: 'reverse', zIndex: 2 },
];

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-hidden relative flex flex-col items-center justify-center p-4 bg-[#0a0a0a]">

      
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none opacity-80 blur-[1px] md:blur-0">
        {KEY_CHARS.map((char, index) => {
          const config = GEAR_CONFIGS[index % GEAR_CONFIGS.length];
          return (
            <Gear
              key={index}
              char={char}
              index={index}
              {...config}
            />
          );
        })}
      </div>

     
      <div className="relative z-50 flex flex-col items-center max-w-2xl mx-auto">
        <h1 className="text-6xl font-steampunk text-brass mb-4">
          Clockwork Cipher
        </h1>
        <p className="font-mono text-sm text-brass/70 tracking-widest">
          “THE GEARS NEVER LIE”
        </p>
        <ClockFace />
      </div>

    </div>
  );
}
