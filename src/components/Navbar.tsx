import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PageRoute } from '../types';

interface NavbarProps {
  currentPage: PageRoute;
  completedCount: number;
  onNavigate: (page: PageRoute) => void;
  onStartNextLesson: () => void;
}

const NAV_ITEMS: { id: PageRoute; label: string }[] = [
  { id: 'home', label: 'Trang chủ' },
  { id: 'curriculum', label: 'Lộ trình học' },
  { id: 'practice', label: 'Phòng luyện tập' },
  { id: 'library', label: 'Thư viện' },
  { id: 'journey', label: 'Hành trình' },
];

export function Navbar({
  currentPage,
  completedCount,
  onNavigate,
  onStartNextLesson,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageRoute) => {
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F4EBDD]/95 backdrop-blur-sm border-b border-[#D9CBB7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element brand wordmark */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="font-serif-display text-xl font-bold tracking-tight text-[#29251F] hover:text-[#9F392F] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9F392F]"
        >
          NÉT MỰC
        </button>

        {/* Zone 2: 5 clean single-line navigation links */}
        <nav
          aria-label="Điều hướng chính"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-[#76644E]"
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              currentPage === item.id ||
              (currentPage === 'lesson' && item.id === 'curriculum');
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9F392F] ${
                  isActive
                    ? 'text-[#29251F] font-semibold'
                    : 'text-[#76644E] hover:text-[#29251F]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 right-0 -bottom-0.5 h-[1.5px] bg-[#9F392F]"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action + mobile menu trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onStartNextLesson();
            }}
            className="px-4 py-2 text-xs sm:text-sm font-medium text-[#FFFCF6] bg-[#9F392F] hover:bg-[#852D24] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9F392F]"
          >
            {completedCount > 0 && completedCount < 26 ? 'Học tiếp' : 'Bắt đầu học'}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu điều hướng'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 text-[#29251F] hover:bg-[#EBE1D1] rounded-md transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Menu di động"
          className="md:hidden border-t border-[#D9CBB7] bg-[#FFFCF6] px-4 py-3 space-y-1"
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              currentPage === item.id ||
              (currentPage === 'lesson' && item.id === 'curriculum');
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#F4EBDD] text-[#9F392F] font-semibold'
                    : 'text-[#29251F] hover:bg-[#F4EBDD]/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
}
