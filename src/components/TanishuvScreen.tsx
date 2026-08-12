import React from 'react';
import { DirectionItem } from '../types';

interface Props {
  directions: DirectionItem[];
  onToggleDirection: (id: string) => void;
  onNavigateNext: () => void;
}

export const TanishuvScreen: React.FC<Props> = ({
  directions,
  onToggleDirection,
  onNavigateNext,
}) => {
  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] flex flex-col font-body antialiased relative overflow-x-hidden pb-32">
      {/* Top Illustration */}
      <div className="w-full flex-grow-0 pt-8 pb-8 flex justify-center items-center px-6">
        <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhH4V7ROyP11GeoVGtPn69V6fOeWJE6tSastA4JH2wj7UiyyMXQcOyOkjBPjkRPJyeg2RlZX6uON7UfD5mJaCyYdgBtepZNAVfcvM3F5RLSFXlx_nPMe0_96wSkZjDI_vhDDafIZ9AUtgnRoTJ4KZj20LqmqGDGv3SW5tkhp6gXzd9JDDD_RfPxDuAzj0-k1Mnf0sEeBF3-i-IAdpN82O6J1Uh55gSl81PShd56dQXZ4pQcrxHPf3iEg"
            alt="Creative Workspace Illustration"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent opacity-70" />
        </div>
      </div>

      {/* Heading & Selection Chips */}
      <div className="flex-grow flex flex-col px-6 max-w-4xl mx-auto w-full items-center text-center">
        <h1 className="font-display text-3xl md:text-4xl text-[#e5e2e1] mb-8 tracking-tight font-semibold">
          Nimalarga qiziqasiz?
        </h1>

        {/* Chips Grid */}
        <div className="flex flex-wrap justify-center gap-3 max-w-lg mb-12">
          {directions.map((dir) => (
            <button
              key={dir.id}
              onClick={() => onToggleDirection(dir.id)}
              className={`border px-5 py-2.5 rounded-full transition-all duration-300 ease-out flex items-center gap-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#f5a623] ${
                dir.selected ? 'chip-active' : 'chip-inactive'
              }`}
            >
              <span
                className="material-symbols-outlined text-[18px]"
                style={{
                  fontVariationSettings: dir.selected ? "'FILL' 1" : "'FILL' 0",
                  color: dir.selected ? '#ffc880' : '#d7c3ae',
                }}
              >
                {dir.icon}
              </span>
              <span
                className="font-space text-xs tracking-wider uppercase font-medium"
                style={{ color: dir.selected ? '#ffc880' : '#d7c3ae' }}
              >
                {dir.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Pinned Action Button */}
      <div className="fixed bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#131313] via-[#131313]/90 to-transparent flex justify-center z-30">
        <button
          onClick={onNavigateNext}
          className="w-full max-w-sm bg-[#f5a623] hover:bg-[#ffb955] text-[#644000] font-body font-semibold py-4 rounded-xl active:scale-[0.98] transition-all duration-200 shadow-[0_0_30px_rgba(245,166,35,0.25)] flex justify-center items-center gap-2 group cursor-pointer"
        >
          <span>Davom etish</span>
          <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
};
