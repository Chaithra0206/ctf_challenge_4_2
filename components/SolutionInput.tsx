import React, { useState } from 'react';

interface SolutionInputProps {
  onSolve: (success: boolean) => void;
  validator: (input: string) => boolean;
}

export const SolutionInput: React.FC<SolutionInputProps> = ({ onSolve, validator }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [isSolving, setIsSolving] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSolving(true);
    
   
    setTimeout(() => {
        const isValid = validator(input);
        
        if (isValid) {
            onSolve(true);
            setError(false);
        } else {
            setError(true);
            setTimeout(() => setError(false), 2000);
            onSolve(false);
        }
        setIsSolving(false);
    }, 800);
  };

  return (
    <div className="relative z-50 mt-12 w-full max-w-md p-8 bg-[#0a0a0a]/90 border-[3px] border-bronze rounded-sm backdrop-blur-md shadow-[0_0_30px_rgba(205,127,50,0.15)]">
        
        <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-gradient-to-br from-gray-400 to-gray-700 shadow-md border border-black opacity-80"></div>
        <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-gradient-to-br from-gray-400 to-gray-700 shadow-md border border-black opacity-80"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-gradient-to-br from-gray-400 to-gray-700 shadow-md border border-black opacity-80"></div>
        <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-gradient-to-br from-gray-400 to-gray-700 shadow-md border border-black opacity-80"></div>

      <h2 className="text-brass font-steampunk text-3xl text-center mb-2 tracking-widest drop-shadow-lg">
        AUTHENTICATION
      </h2>
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-bronze to-transparent mb-6 opacity-50"></div>
      
      <p className="text-copper/90 font-mono text-sm text-center mb-8 italic">
        "The hands point, but the gears whisper."
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative">
        <label className="sr-only" htmlFor="sequence-input">Enter Access Sequence</label>
        <div className="relative group">
            <input
            id="sequence-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="ENTER SEQUENCE..."
            disabled={isSolving}
            autoComplete="off"
            className={`w-full bg-[#151515] text-amber-500 font-mono text-xl px-4 py-4 rounded-sm border-2 outline-none transition-all duration-300 placeholder-white/10
                ${error 
                ? 'border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.4)] animate-shake' 
                : 'border-bronze/50 focus:border-brass focus:shadow-[0_0_20px_rgba(181,166,66,0.2)]'}
            `}
            />
            {/* Input scanline effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-20"></div>
        </div>
        
        <button
          type="submit"
          disabled={isSolving}
          className={`
            relative overflow-hidden w-full bg-gradient-to-b from-bronze via-amber-900 to-bronze 
            text-[#1a0500] font-bold font-steampunk text-lg py-3 rounded-sm border border-yellow-600/30 
            shadow-[0_4px_0_#3f1d0b] hover:shadow-[0_2px_0_#3f1d0b] hover:translate-y-[2px] 
            active:shadow-none active:translate-y-[4px] transition-all uppercase tracking-[0.2em]
            ${isSolving ? 'brightness-75 cursor-wait' : 'hover:brightness-110'}
          `}
        >
          {isSolving ? 'VERIFYING...' : 'ENGAGE MECHANISM'}
          
          {/* Shine effect on button */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
        </button>
      </form>
      
      {error && (
        <div className="absolute -bottom-16 left-0 w-full text-center">
            <div className="inline-block bg-black/80 border border-red-900/50 text-red-500 px-4 py-2 font-mono text-xs rounded animate-bounce shadow-lg backdrop-blur">
            ⚠ ERROR: INCORRECT TORQUE SEQUENCE ⚠
            </div>
        </div>
      )}
    </div>
  );
};