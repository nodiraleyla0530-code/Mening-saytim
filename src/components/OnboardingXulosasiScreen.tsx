import React from 'react';
import { DirectionItem, UserProfile } from '../types';

interface Props {
  userProfile: UserProfile;
  directions: DirectionItem[];
  onLevelChange: (id: string, newLevel: number) => void;
  onNavigateStart: () => void;
}

export const OnboardingXulosasiScreen: React.FC<Props> = ({
  userProfile,
  directions,
  onLevelChange,
  onNavigateStart,
}) => {
  // Filter selected directions or show all active ones
  const selectedDirections = directions.filter((d) => d.selected);
  const displayDirections =
    selectedDirections.length > 0
      ? selectedDirections
      : directions.slice(0, 4);

  const getLevelLabel = (level: number) => {
    switch (level) {
      case 1:
        return "Boshlang'ich";
      case 2:
        return "O'rta";
      case 3:
        return 'Ekspert';
      default:
        return "O'rta";
    }
  };

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] flex flex-col items-center justify-center relative p-6 md:p-12 overflow-x-hidden pb-28">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f5a623]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ffc880]/10 rounded-full blur-[120px] pointer-events-none" />

      <main className="relative z-10 w-full max-w-[800px] flex flex-col gap-10 my-auto">
        {/* Header Section */}
        <header className="text-center flex flex-col gap-4">
          <h1 className="font-display text-4xl md:text-6xl text-[#e5e2e1] font-semibold tracking-tight">
            Ajoyib tanlov,{' '}
            <span className="text-[#f5a623] italic font-normal">
              {userProfile.name.split(' ')[1] || userProfile.name}!
            </span>
          </h1>
          <p className="font-body text-base md:text-lg text-[#d7c3ae] max-w-2xl mx-auto leading-relaxed">
            Keling, profilingizni mukammallashtiramiz. Tanlagan
            yo'nalishlaringiz bo'yicha tajriba darajangizni belgilang, bu bizga
            sizga eng mos loyihalarni tavsiya etishga yordam beradi.
          </p>
        </header>

        {/* Selected Directions & Level Sliders */}
        <section className="flex flex-col gap-5 w-full">
          {displayDirections.map((item) => (
            <div
              key={item.id}
              className="glass-panel rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#9f8e7a]/40 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f5a623]/15 border border-[#f5a623]/30 flex items-center justify-center text-[#f5a623] shrink-0">
                  <span
                    className="material-symbols-outlined text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {item.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-[#e5e2e1]">
                    {item.title}
                  </h3>
                  <p className="font-space text-xs text-[#ffc880] uppercase tracking-wider mt-0.5">
                    TANLANGAN YO'NALISH
                  </p>
                </div>
              </div>

              {/* Slider Component */}
              <div className="w-full md:w-72 flex flex-col gap-2">
                <div className="flex justify-between font-space text-xs text-[#d7c3ae] px-1 font-medium">
                  <span
                    className={
                      item.level === 1 ? 'text-[#f5a623] font-bold' : ''
                    }
                  >
                    Boshlang'ich
                  </span>
                  <span
                    className={
                      item.level === 2 ? 'text-[#f5a623] font-bold' : ''
                    }
                  >
                    O'rta
                  </span>
                  <span
                    className={
                      item.level === 3 ? 'text-[#f5a623] font-bold' : ''
                    }
                  >
                    Ekspert
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="3"
                  step="1"
                  value={item.level}
                  onChange={(e) =>
                    onLevelChange(item.id, parseInt(e.target.value))
                  }
                  className="accent-[#f5a623] cursor-pointer"
                />
                <div className="text-right text-xs text-[#ffc880] font-body">
                  Hozirgi daraja: {getLevelLabel(item.level)}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Action Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={onNavigateStart}
            className="bg-[#f5a623] hover:bg-[#ffb955] text-[#644000] font-body font-semibold px-12 py-4 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(245,166,35,0.35)] hover:shadow-[0_0_40px_rgba(245,166,35,0.5)] transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-base"
          >
            Boshlash
          </button>
        </div>
      </main>
    </div>
  );
};
