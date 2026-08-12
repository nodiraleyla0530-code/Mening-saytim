import React from 'react';
import { DirectionItem, UserProfile } from '../types';

interface Props {
  userProfile: UserProfile;
  directions: DirectionItem[];
  onNavigateEditDirections: () => void; // slide_up to Yo'nalishlarni tahrirlash
  onNavigateAddDirection: () => void; // push to Yangi yo'nalish qo'shish
  onNavigateStartOver: () => void; // back to Tanishuv
}

export const BoshSahifaScreen: React.FC<Props> = ({
  userProfile,
  directions,
  onNavigateEditDirections,
  onNavigateAddDirection,
  onNavigateStartOver,
}) => {
  const activeDirections = directions.filter((d) => d.selected);

  const getLevelBadge = (level: number) => {
    switch (level) {
      case 1:
        return 'Boshlang\'ich';
      case 2:
        return 'O\'rta';
      case 3:
        return 'Ekspert';
      default:
        return 'O\'rta';
    }
  };

  const sampleProjects = [
    {
      id: 'proj-1',
      title: 'Luminous Brand Identity & Design System',
      category: 'Brending & UX/UI',
      image:
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
      year: '2025',
    },
    {
      id: 'proj-2',
      title: 'AI Generative Art Direction & Campaign',
      category: 'AI Art & SMM',
      image:
        'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop',
      year: '2025',
    },
    {
      id: 'proj-3',
      title: 'Cinematic Video Reel & Motion Design',
      category: 'Video montaj',
      image:
        'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop',
      year: '2026',
    },
  ];

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] font-body relative pb-32">
      {/* Glow backgrounds */}
      <div className="fixed top-0 left-0 w-full h-96 pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,166,35,0.08)_0%,transparent_70%)]" />

      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-[#131313]/80 backdrop-blur-2xl border-b border-white/10 px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-[#f5a623]/40">
            <img
              src={userProfile.avatarUrl}
              alt={userProfile.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-lg text-[#e5e2e1] font-semibold leading-tight">
              {userProfile.name}
            </h2>
            <p className="font-space text-xs text-[#f5a623]">
              {userProfile.role}
            </p>
          </div>
        </div>

        {/* Action button bar */}
        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={onNavigateAddDirection}
            className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-space uppercase tracking-wider text-[#e5e2e1] transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">add</span>
            <span>Yo'nalish qo'shish</span>
          </button>

          <button
            onClick={onNavigateEditDirections}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#f5a623]/20 border border-[#f5a623]/40 text-[#ffc880] hover:bg-[#f5a623]/30 text-xs font-space uppercase tracking-wider transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">edit</span>
            <span>Yo'nalishlar</span>
          </button>
        </div>
      </header>

      {/* Hero Header */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 pt-10">
        <section className="text-left mb-12 border-b border-white/10 pb-10">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#f5a623]/10 border border-[#f5a623]/30 text-[#f5a623] font-space text-xs uppercase tracking-widest mb-4">
            Shaxsiy Portfolio
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-[#e5e2e1] font-semibold leading-tight mb-4">
            Ijodiy vizioner va dizayn yetakchisi
          </h1>
          <p className="font-body text-base md:text-lg text-[#d7c3ae] max-w-2xl leading-relaxed">
            Har bir loyihada brend strategiyasi va zamonaviy vizual texnologiyalarni uyg'unlashtirib, esda qolarli tajribalar yarataman.
          </p>
        </section>

        {/* Selected Directions Grid */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-[#e5e2e1] font-semibold">
                Faol yo'nalishlarim
              </h2>
              <p className="font-body text-sm text-[#d7c3ae] mt-1">
                Portfolioingizda ko'rsatiladigan asosiy mutaxassisliklar
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onNavigateAddDirection}
                className="px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-space text-[#e5e2e1] flex items-center gap-1 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">add</span>
                <span className="hidden sm:inline">Yangi qo'shish</span>
              </button>
              <button
                onClick={onNavigateEditDirections}
                className="px-3.5 py-2 rounded-lg bg-[#f5a623] hover:bg-[#ffb955] text-[#291800] text-xs font-space font-semibold flex items-center gap-1 transition-all cursor-pointer shadow-md"
              >
                <span className="material-symbols-outlined text-base">
                  tune
                </span>
                <span>Tahrirlash</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {activeDirections.length > 0 ? (
              activeDirections.map((dir) => (
                <div
                  key={dir.id}
                  className="glass-panel p-5 rounded-2xl flex flex-col justify-between hover:border-[#f5a623]/40 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#f5a623]/15 border border-[#f5a623]/30 flex items-center justify-center text-[#f5a623] group-hover:scale-110 transition-transform">
                      <span
                        className="material-symbols-outlined text-2xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {dir.icon}
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-[10px] font-space text-[#ffc880] uppercase tracking-wider border border-white/10">
                      {getLevelBadge(dir.level)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-[#e5e2e1] font-semibold">
                      {dir.title}
                    </h3>
                    <p className="font-body text-xs text-[#d7c3ae] mt-1">
                      Faol mutaxassislik
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full p-8 glass-panel rounded-2xl text-center">
                <p className="font-body text-[#d7c3ae] mb-4">
                  Hozircha hech qanday yo'nalish tanlanmagan.
                </p>
                <button
                  onClick={onNavigateEditDirections}
                  className="px-6 py-2.5 rounded-full bg-[#f5a623] text-[#291800] font-body text-sm font-semibold cursor-pointer"
                >
                  Yo'nalishlarni tanlash
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Selected Works Section */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl text-[#e5e2e1] font-semibold mb-6">
            Saralangan loyihalar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleProjects.map((proj) => (
              <div
                key={proj.id}
                className="glass-panel rounded-2xl overflow-hidden group hover:border-white/30 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-[#131313]/70 backdrop-blur-md rounded-full text-xs font-space text-[#e5e2e1]">
                    {proj.year}
                  </div>
                </div>
                <div className="p-5">
                  <span className="font-space text-xs text-[#f5a623] uppercase tracking-wider">
                    {proj.category}
                  </span>
                  <h3 className="font-display text-xl text-[#e5e2e1] font-semibold mt-1">
                    {proj.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact / Bog'lanish CTA Section (Matches xpath spec: //button[contains(., 'Contact') or contains(., 'bog\'lanish')]) */}
        <section className="glass-panel rounded-3xl p-8 md:p-12 text-center border border-[#f5a623]/20 relative overflow-hidden my-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#f5a623]/10 rounded-full blur-3xl pointer-events-none" />
          <h2 className="font-display text-3xl md:text-4xl text-[#e5e2e1] font-semibold mb-3">
            Loyiha yoki taklif bormi?
          </h2>
          <p className="font-body text-[#d7c3ae] max-w-md mx-auto mb-8 text-sm md:text-base">
            Muloqotga tayyorman. Yo'nalishlar bo'yicha tahrirlash yoki bog'lanish uchun quyidagi tugmani bosing.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {/* Primary button required by spec: contains 'Contact' or 'bog'lanish' */}
            <button
              onClick={onNavigateEditDirections}
              className="bg-[#f5a623] hover:bg-[#ffb955] text-[#291800] font-body text-base font-semibold px-8 py-3.5 rounded-full btn-glow transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <span className="material-symbols-outlined text-lg">mail</span>
              <span>Contact / bog'lanish</span>
            </button>

            <button
              onClick={onNavigateStartOver}
              className="bg-white/5 hover:bg-white/10 text-[#e5e2e1] border border-white/15 font-body text-base px-6 py-3.5 rounded-full transition-all cursor-pointer"
            >
              Tanishuv sahifasi
            </button>
          </div>
        </section>
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 w-full z-40 bg-[#1c1b1b]/90 backdrop-blur-2xl border-t border-white/10 px-6 py-3 flex justify-around items-center">
        <button
          onClick={onNavigateStartOver}
          className="flex flex-col items-center text-[#d7c3ae] hover:text-[#f5a623] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined">explore</span>
          <span className="font-space text-[10px] uppercase mt-0.5">Tanishuv</span>
        </button>
        <button
          onClick={onNavigateEditDirections}
          className="flex flex-col items-center text-[#d7c3ae] hover:text-[#f5a623] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined">tune</span>
          <span className="font-space text-[10px] uppercase mt-0.5">Tahrirlash</span>
        </button>
        <button
          onClick={onNavigateAddDirection}
          className="flex flex-col items-center text-[#d7c3ae] hover:text-[#f5a623] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined">add_circle</span>
          <span className="font-space text-[10px] uppercase mt-0.5">Yangi</span>
        </button>
        <button
          onClick={onNavigateEditDirections}
          className="flex flex-col items-center text-[#f5a623] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined">mail</span>
          <span className="font-space text-[10px] uppercase mt-0.5">Contact</span>
        </button>
      </nav>
    </div>
  );
};
