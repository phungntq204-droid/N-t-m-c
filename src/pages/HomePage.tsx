import { ArrowRight, BookOpen, CheckCircle2, Compass, Feather } from 'lucide-react';
import { MODULES, getLessonsByModule, getFirstUncompletedLesson } from '../data/lessons';
import { PageRoute } from '../types';
import { SafeImage } from '../components/SafeImage';

interface HomePageProps {
  completedLessons: string[];
  onNavigate: (page: PageRoute) => void;
  onOpenLesson: (lessonId: string) => void;
  onSelectModule: (moduleId: number) => void;
}

export function HomePage({
  completedLessons,
  onNavigate,
  onOpenLesson,
  onSelectModule,
}: HomePageProps) {
  const nextLesson = getFirstUncompletedLesson(completedLessons);
  const completedCount = completedLessons.length;

  return (
    <div className="space-y-16 sm:space-y-20 pb-8">
      {/* 1. Hero Section: Balanced 2-column Editorial Split */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left column: Greeting & Primary CTA */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-xs font-medium tracking-wide text-[#76644E]">
                <span>NÉT MỰC · Thư pháp Việt</span>
                <span aria-hidden="true">/</span>
                <span>Dành tặng thầy Thúc Đương</span>
              </div>

              <h1 className="font-serif-display text-4xl sm:text-5xl font-semibold text-[#29251F] leading-[1.15] tracking-tight">
                Nét bút đầu tiên,
                <br />
                một hành trình mới.
              </h1>

              <p className="text-base sm:text-lg text-[#76644E] leading-relaxed max-w-xl">
                Chào mừng thầy đến với không gian học thư pháp Việt. Từng bài học nhỏ sẽ đồng hành cùng thầy từ lúc làm quen với bút lông đến khi tự tay hoàn thành tác phẩm đầu tiên.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenLesson(nextLesson.id)}
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#9F392F] hover:bg-[#852D24] text-[#FFFCF6] font-medium text-sm sm:text-base rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9F392F]"
                >
                  <span>
                    {completedCount > 0 && completedCount < 26
                      ? `Học tiếp (${nextLesson.id})`
                      : 'Bắt đầu học'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('curriculum')}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#FFFCF6] hover:bg-[#EBE1D1]/70 text-[#29251F] border border-[#D9CBB7] font-medium text-sm sm:text-base rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Xem trọn 26 bài học</span>
                </button>
              </div>
            </div>

            {/* Quiet real progress cue */}
            <div className="mt-8 pt-6 border-t border-[#D9CBB7] flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#76644E]">
              <span className="tabular-nums">
                Tiến độ hiện tại: <strong className="text-[#29251F]">{completedCount}/26</strong> bài học
              </span>
              <span aria-hidden="true">·</span>
              <span>6 học phần từ cơ bản đến tác phẩm đầu tay</span>
            </div>
          </div>

          {/* Right column: Editorial Study Desk Photo */}
          <div className="lg:col-span-6">
            <div className="h-full min-h-[280px] sm:min-h-[360px] rounded-lg overflow-hidden border border-[#D9CBB7] bg-[#FFFCF6]">
              <SafeImage
                src="/src/assets/images/hero_calligraphy_desk_1794841693977.jpg"
                alt="Bàn thư phòng với bút lông gác trên gác bút sứ thanh hoa, nghiên mực, giấy dó và dấu triện son"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Personal Message Section for Thầy Thúc Đương */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FFFCF6] border border-[#D9CBB7] rounded-lg px-6 py-8 sm:px-12 sm:py-10">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <p className="font-serif-display text-xl sm:text-2xl text-[#29251F] font-medium">
                Thưa thầy,
              </p>
              <p className="text-base text-[#29251F]/90 leading-relaxed">
                Có những điều đẹp đẽ không cần vội vàng. Mong rằng qua từng nét mực, thầy sẽ tìm thấy một khoảng lặng và niềm vui sáng tạo của riêng mình.
              </p>
              <p className="text-base text-[#29251F]/90 leading-relaxed">
                Mỗi hành trình đều bắt đầu từ một nét bút. Chúc thầy có thật nhiều niềm vui trên hành trình khám phá nghệ thuật thư pháp.
              </p>
              <p className="pt-2 text-sm font-serif-display italic text-[#76644E]">
                “Vạn sự khởi đầu từ một nét bút.”
              </p>
            </div>

            {/* Traditional Red Seal Accent */}
            <div className="shrink-0 self-start sm:self-end">
              <div
                aria-label="Triện đỏ Nét Mực"
                className="seal-stamp w-14 h-14 rounded-sm flex flex-col items-center justify-center text-center leading-tight select-none"
              >
                <span className="text-[11px] font-bold tracking-wider">NÉT</span>
                <span className="text-[11px] font-bold tracking-wider">MỰC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Six Learning Stages Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#D9CBB7] pb-5">
          <div className="space-y-2">
            <p className="text-xs font-medium tracking-wider text-[#9F392F] uppercase">
              Lộ trình tự học từng bước
            </p>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#29251F]">
              Sáu chặng đường đồng hành cùng thầy
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('curriculum')}
            className="text-sm font-medium text-[#9F392F] hover:text-[#852D24] inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap self-start sm:self-auto"
          >
            <span>Mở toàn bộ lộ trình</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES.map((mod) => {
            const modLessons = getLessonsByModule(mod.id);
            const modDone = modLessons.filter((l) => completedLessons.includes(l.id)).length;
            const isAllDone = modDone === modLessons.length;

            return (
              <article
                key={mod.id}
                className="bg-[#FFFCF6] border border-[#D9CBB7] rounded-lg p-6 flex flex-col justify-between transition-colors hover:border-[#76644E]"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#76644E]">
                    <span className="font-semibold text-[#9F392F] tabular-nums">
                      Học phần {mod.code}
                    </span>
                    <span className="tabular-nums">
                      {modLessons.length} bài học · {modDone}/{modLessons.length} xong
                    </span>
                  </div>

                  <h3 className="font-serif-display text-xl font-semibold text-[#29251F]">
                    {mod.title}
                  </h3>

                  <p className="text-sm text-[#76644E] leading-relaxed">
                    {mod.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D9CBB7]/70 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#76644E]">
                    {isAllDone ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#9F392F]" />
                        <span className="text-[#29251F] font-medium">Đã hoàn thành</span>
                      </>
                    ) : (
                      <span>{modDone > 0 ? 'Đang học dở' : 'Sẵn sàng bắt đầu'}</span>
                    )}
                  </span>

                  <button
                    type="button"
                    onClick={() => onSelectModule(mod.id)}
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#29251F] hover:text-[#9F392F] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>Xem chi tiết</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 4. Companion Spaces Strip (Practice Room & Personal Kit) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button
            type="button"
            onClick={() => onNavigate('practice')}
            className="text-left bg-[#FFFCF6] border border-[#D9CBB7] hover:border-[#76644E] rounded-lg p-6 transition-colors cursor-pointer group"
          >
            <Feather className="w-5 h-5 text-[#9F392F] mb-3" strokeWidth={1.6} />
            <h3 className="font-serif-display text-lg font-semibold text-[#29251F] group-hover:text-[#9F392F] transition-colors">
              Phòng luyện tập
            </h3>
            <p className="mt-1.5 text-sm text-[#76644E] leading-relaxed">
              Bảng tập luyện nét trực quan với đường gióng mờ và góc lưu lại ảnh các trang viết của thầy.
            </p>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('library')}
            className="text-left bg-[#FFFCF6] border border-[#D9CBB7] hover:border-[#76644E] rounded-lg p-6 transition-colors cursor-pointer group"
          >
            <BookOpen className="w-5 h-5 text-[#9F392F] mb-3" strokeWidth={1.6} />
            <h3 className="font-serif-display text-lg font-semibold text-[#29251F] group-hover:text-[#9F392F] transition-colors">
              Bộ dụng cụ & Thư viện
            </h3>
            <p className="mt-1.5 text-sm text-[#76644E] leading-relaxed">
              Hướng dẫn chi tiết 9 món dụng cụ thực tế của thầy cùng 9 chuyên đề tra cứu dễ hiểu.
            </p>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('journey')}
            className="text-left bg-[#FFFCF6] border border-[#D9CBB7] hover:border-[#76644E] rounded-lg p-6 transition-colors cursor-pointer group"
          >
            <Compass className="w-5 h-5 text-[#9F392F] mb-3" strokeWidth={1.6} />
            <h3 className="font-serif-display text-lg font-semibold text-[#29251F] group-hover:text-[#9F392F] transition-colors">
              Hành trình của thầy
            </h3>
            <p className="mt-1.5 text-sm text-[#76644E] leading-relaxed">
              Theo dõi số bài đã hoàn thành, lưu giữ nhật ký cảm nhận và bộ sưu tập tác phẩm đầu tay.
            </p>
          </button>
        </div>
      </section>

      {/* 5. Closing Quote */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 text-center pt-4">
        <div className="border-t border-[#D9CBB7] pt-10">
          <p className="font-serif-display text-xl sm:text-2xl italic text-[#29251F]">
            “Một món quà nhỏ, một hành trình dài.”
          </p>
        </div>
      </section>
    </div>
  );
}
