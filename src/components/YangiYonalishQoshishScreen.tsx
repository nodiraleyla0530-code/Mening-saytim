import React, { useState } from 'react';
import { POPULAR_SKILLS } from '../data/initialData';
import { UserProfile } from '../types';

interface Props {
  userProfile: UserProfile;
  onAddNewDirection: (title: string) => void;
  onNavigateBack: () => void;
}

export const YangiYonalishQoshishScreen: React.FC<Props> = ({
  userProfile,
  onAddNewDirection,
  onNavigateBack,
}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleAdd = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (searchValue.trim()) {
      onAddNewDirection(searchValue.trim());
    } else {
      onNavigateBack();
    }
  };

  const handleChipClick = (skill: string) => {
    setSearchValue(skill);
  };

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] font-body relative pb-32 pt-24">
      {/* Glow backgrounds */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 bg-[radial-gradient(circle_at_15%_50%,rgba(245,166,35,0.04)_0%,transparent_50%)]" />

      {/* Top Header matching //a[contains(., 'Orqaga')] */}
      <header className="fixed top-0 w-full z-40 bg-[#131313]/80 backdrop-blur-2xl border-b border-white/10 flex justify-between items-center px-6 md:px-12 py-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigateBack();
          }}
          className="flex items-center text-[#d7c3ae] hover:text-[#ffe088] transition-colors duration-300 group cursor-pointer"
        >
          <span className="material-symbols-outlined mr-1 group-hover:-translate-x-0.5 transition-transform">
            arrow_back
          </span>
          <span className="font-body text-sm font-medium">Orqaga</span>
        </a>

        <div className="font-display text-xl md:text-2xl text-[#ffc880] font-bold tracking-tight">
          Portfolio
        </div>

        <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 shrink-0">
          <img
            src={userProfile.avatarUrl}
            alt={userProfile.name}
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-3xl mx-auto px-6 md:px-12 flex flex-col items-center justify-start mt-4">
        <div className="w-full text-center mb-10">
          <h1 className="font-display text-3xl md:text-4xl text-[#e5e2e1] mb-3 font-semibold">
            Yangi yo'nalish qo'shish
          </h1>
          <p className="font-body text-base text-[#d7c3ae]">
            Portfolioingizni boyitish uchun yangi ko'nikma yoki yo'nalish
            qidiring.
          </p>
        </div>

        {/* Search Bar Form */}
        <form onSubmit={handleAdd} className="w-full relative mb-12">
          <div className="flex items-center bg-[#2a2a2a]/80 backdrop-blur-md border border-[#524534]/40 rounded-full px-5 py-3.5 shadow-xl transition-all duration-300 focus-within:border-[#f5a623] focus-within:ring-1 focus-within:ring-[#f5a623]">
            <span className="material-symbols-outlined text-[#d7c3ae] mr-3">
              search
            </span>
            <input
              id="searchInput"
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Yo'nalishni qidiring yoki kiriting..."
              className="w-full bg-transparent border-none outline-none text-[#e5e2e1] font-body text-base placeholder-[#d7c3ae]/60 focus:outline-none"
            />
            <button
              id="addBtn"
              type="submit"
              disabled={!searchValue.trim()}
              className={`ml-3 bg-[#f5a623] text-[#644000] font-space text-xs uppercase tracking-wider px-6 py-2.5 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
                searchValue.trim()
                  ? 'opacity-100 hover:bg-[#ffb955] shadow-md'
                  : 'opacity-50 cursor-not-allowed'
              }`}
            >
              Qo'shish
            </button>
          </div>
        </form>

        {/* Popular Skills Section */}
        <div className="w-full text-left">
          <h2 className="font-display text-lg text-[#e5e2e1] mb-5 border-b border-white/10 pb-2.5">
            Ommabop ko'nikmalar
          </h2>
          <div className="flex flex-wrap gap-3">
            {POPULAR_SKILLS.map((skill) => (
              <button
                key={skill}
                type="button"
                onClick={() => handleChipClick(skill)}
                className="font-space text-xs tracking-wider px-4 py-2.5 rounded-full border border-[#f5a623]/30 bg-[#f5a623]/10 text-[#ffc880] hover:bg-[#f5a623]/25 hover:border-[#f5a623]/60 transition-all duration-300 cursor-pointer"
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
