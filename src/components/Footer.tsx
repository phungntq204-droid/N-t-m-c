import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-[#D9CBB7] bg-[#FFFCF6] mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-3">
              <span className="font-serif-display text-lg font-bold text-[#29251F]">
                NÉT MỰC
              </span>
              <span className="text-xs text-[#76644E]">Thư pháp Việt</span>
            </div>
            <p className="text-sm text-[#76644E]">
              Một món quà nhỏ, một hành trình dài — Dành riêng tặng thầy Thúc Đương.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#76644E]">
            <button
              type="button"
              onClick={() => onNavigate('curriculum')}
              className="hover:text-[#9F392F] transition-colors cursor-pointer whitespace-nowrap"
            >
              26 Bài học
            </button>
            <button
              type="button"
              onClick={() => onNavigate('practice')}
              className="hover:text-[#9F392F] transition-colors cursor-pointer whitespace-nowrap"
            >
              Phòng luyện tập
            </button>
            <button
              type="button"
              onClick={() => onNavigate('library')}
              className="hover:text-[#9F392F] transition-colors cursor-pointer whitespace-nowrap"
            >
              Thư viện & Dụng cụ
            </button>
            <button
              type="button"
              onClick={() => onNavigate('journey')}
              className="hover:text-[#9F392F] transition-colors cursor-pointer whitespace-nowrap"
            >
              Hành trình của thầy
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#D9CBB7]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#76644E]">
          <p>
            Giáo trình gợi ý dành cho người mới bắt đầu. Tiến độ, nhật ký và hình ảnh thực hành được lưu trực tiếp trên trình duyệt này.
          </p>
          <p className="font-serif-display italic text-[#29251F]">
            Vạn sự khởi đầu từ một nét bút.
          </p>
        </div>
      </div>
    </footer>
  );
}
