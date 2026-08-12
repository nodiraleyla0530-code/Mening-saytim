import React from 'react';
import { DirectionItem, UserProfile } from '../types';

interface Props {
  userProfile: UserProfile;
  directions: DirectionItem[];
  onToggleDirection: (id: string) => void;
  onSave: () => void;
  onClose: () => void;
}

export const YonalishlarniTahrirlashScreen: React.FC<Props> = ({
  userProfile,
  directions,
  onToggleDirection,
  onSave,
  onClose,
}) => {
  return (
    <div className="min-h-screen bg-[#131313] relative flex items-center justify-center p-4 md:p-8">
      {/* Background Atmospheric Effect */}
      <div className="fixed inset-0 z-0 bg-cover bg-center w-full h-full opacity-30 mix-blend-overlay bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCHwXXvF4-bjzCnMQUYi4FyWhzipHWDGpbB3W437cIguWV9-vWQdBx3a3Ml5VDpwDQTY6ikKO2OfUerLdcv7zXIpnvhFU-mMAjSPtJCcyVayDo_994LFR8RtToFcZ5gZtPIB7W6maAwr_HiqAZvdNJz_0NO4PWzexEoRuyait-HnINeIgApRVzpLUMu4dVu3CmjdRHLYyI3n_OdSU56mBH-xaatrPgEZ6hewfYfaoKFLDipsyeycSI4XA')]" />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#131313]/60 via-[#131313]/90 to-[#131313]" />

      {/* Modal Container */}
      <main className="glass-panel w-full max-w-lg rounded-2xl md:rounded-3xl flex flex-col relative z-10 max-h-[90vh] overflow-hidden shadow-2xl border border-white/10 my-auto">
        {/* Header */}
        <header className="flex justify-between items-center p-6 border-b border-white/10 shrink-0">
          <div>
            <p className="font-space text-xs text-[#d7c3ae] uppercase tracking-wider mb-1">
              {userProfile.name}
            </p>
            <h1 className="font-display text-2xl md:text-3xl text-[#e5e2e1] font-semibold m-0">
              Yo'nalishlarni tahrirlash
            </h1>
          </div>

          {/* Close button matching xpath: //button[span[text()='close']] */}
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/15 transition-colors duration-300 text-[#e5e2e1] cursor-pointer"
            aria-label="Close modal"
          >
            <span
              className="material-symbols-outlined text-[22px]"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              close
            </span>
          </button>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <p className="font-body text-sm md:text-base text-[#d7c3ae]">
            Mutaxassisligingizni aniqroq ko'rsatish uchun asosiy
            yo'nalishlaringizni tanlang.
          </p>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {directions.map((dir) => (
              <button
                key={dir.id}
                onClick={() => onToggleDirection(dir.id)}
                className={`rounded-xl p-4 flex flex-col items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer ${
                  dir.selected
                    ? 'chip-active scale-[1.02]'
                    : 'chip-inactive hover:bg-white/5'
                }`}
              >
                <span
                  className="material-symbols-outlined text-[30px]"
                  style={{
                    fontVariationSettings: dir.selected
                      ? "'FILL' 1"
                      : "'FILL' 0",
                    color: dir.selected ? '#ffc880' : '#d7c3ae',
                  }}
                >
                  {dir.icon}
                </span>
                <span
                  className="font-body text-sm font-medium text-center"
                  style={{ color: dir.selected ? '#ffc880' : '#d7c3ae' }}
                >
                  {dir.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer with Saqlash button */}
        <footer className="p-6 border-t border-white/10 bg-[#201f1f]/80 backdrop-blur-md shrink-0">
          <button
            onClick={onSave}
            className="w-full bg-[#f5a623] hover:bg-[#ffb955] text-[#291800] font-body text-base font-semibold py-3.5 rounded-xl btn-glow transition-all duration-300 cursor-pointer active:scale-[0.98]"
          >
            Saqlash
          </button>
        </footer>
      </main>
    </div>
  );
};
