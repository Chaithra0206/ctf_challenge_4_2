import React, { useState } from 'react';

interface SolutionInputProps {
  onSolve: (success: boolean) => void;
}

export const SolutionInput: React.FC<SolutionInputProps> = ({ onSolve }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const TARGET_KEY = "S7m@92Qk-Pt!Xf";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === TARGET_KEY) {
      onSolve(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
      onSolve(false);
    }
  };

  return (
    <div className="relative z-50 mt-12 w-full max-w-md p-6 bg-black/80 border-2 border-bronze rounded-lg backdrop-blur-sm shadow-[0_0_20px_rgba(205,127,50,0.2)]">
      <h2 className="text-brass font-steampunk text-2xl text-center mb-4 tracking-widest">
        CRYPTO-MECHANISM
      </h2>
      <p className="text-copper font-mono text-sm text-center mb-6 opacity-80">
        "The hands point, but the gears whisper."
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="relative group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter the deciphered key..."
            className={`w-full bg-darkmetal text-glow font-mono text-lg px-4 py-3 rounded border-2 focus:outline-none transition-all duration-300
              ${error ? 'border-red-500 shadow-[0_0_15px_rgba(255,0,0,0.5)] animate-shake' : 'border-bronze focus:border-glow focus:shadow-[0_0_15px_rgba(255,174,0,0.5)]'}
            `}
          />
          <div className="absolute inset-0 border border-white/5 pointer-events-none rounded"></div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-gradient-to-b from-bronze to-amber-900 text-black font-bold font-steampunk py-3 rounded border-t border-white/20 hover:brightness-110 active:scale-95 transition-all shadow-lg uppercase tracking-widest"
        >
          Engage Mechanism
        </button>
      </form>
      
      {error && (
        <div className="absolute -bottom-12 left-0 w-full text-center text-red-500 font-mono animate-bounce">
          [ ACCESS DENIED ]
        </div>
      )}
    </div>
  );
};