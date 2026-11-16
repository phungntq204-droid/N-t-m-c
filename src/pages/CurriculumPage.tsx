import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Circle } from 'lucide-react';
import { MODULES, LESSONS, getLessonsByModule } from '../data/lessons';

interface CurriculumPageProps {
  completedLessons: string[];
  focusedModuleId?: number | null;
  onOpenLesson: (lessonId: string) => void;
  onToggleComplete: (lessonId: string) => void;
}

type FilterMode = 'all' | 'pending' | 'completed';

export function CurriculumPage({
  completedLessons,
  focusedModuleId,
  onOpenLesson,
  onToggleComplete,
}: CurriculumPageProps) {
  const [filter, setFilter] = useState<FilterMode>('all');

  useEffect(() => {
    if (focusedModuleId) {
      const el = document.getElementById(`module-section-${focusedModuleId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [focusedModuleId]);

  const totalCount = LESSONS.length;
  const completedCount = completedLessons.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      {/* Header & Overall Progress */}
      <div className="bg-[#FFFCF6] border border-[#D9CBB7] rounded-lg p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-medium tracking-wider text-[#9F392F] uppercase">
              Lộ trình học thư pháp Việt
            </p>
            <h1 className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#29251F]">
              6 học phần · 26 bài học từng bước
            </h1>
            <p className="text-sm sm:text-base text-[#76644E] max-w-2xl">
              Mỗi bài học đều giải thích từ những thao tác cơ bản nhất, có bài tập áp dụng và bảng tự kiểm tra. Thầy có thể học tuần tự từ Bài 1 hoặc mở lại bất kỳ bài nào để ôn tập.
            </p>
          </div>

          <div className="shrink-0 text-left md:text-right">
            <div className="text-2xl font-serif-display font-semibold text-[#29251F] tabular-nums">
              {completedCount} / {totalCount} bài
            </div>
            <div className="text-xs text-[#76644E] tabular-nums">
              Hoàn thành {progressPercent}% lộ trình
            </div>
          </div>
        </div>

        {/* Visual Progress Bar */}
        <div className="space-y-2">
          <div className="h-2.5 w-full bg-[#EBE1D1] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#9F392F] transition-all duration-300 ease-calligraphy"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Filter Controls + Quick Module Jump */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-[#D9CBB7]/70">
          <div className="inline-flex items-center gap-1 p-1 bg-[#F4EBDD] border border-[#D9CBB7] rounded-md self-start">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-[#FFFCF6] text-[#29251F] shadow-xs'
                  : 'text-[#76644E] hover:text-[#29251F]'
              }`}
            >
              Tất cả ({totalCount})
            </button>
            <button
              type="button"
              onClick={() => setFilter('pending')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'pending'
                  ? 'bg-[#FFFCF6] text-[#29251F] shadow-xs'
                  : 'text-[#76644E] hover:text-[#29251F]'
              }`}
            >
              Chưa học ({totalCount - completedCount})
            </button>
            <button
              type="button"
              onClick={() => setFilter('completed')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'completed'
                  ? 'bg-[#FFFCF6] text-[#29251F] shadow-xs'
                  : 'text-[#76644E] hover:text-[#29251F]'
              }`}
            >
              Đã hoàn thành ({completedCount})
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-[#76644E]">Chuyển nhanh:</span>
            {MODULES.map((m) => (
              <a
                key={m.id}
                href={`#module-section-${m.id}`}
                className="px-2.5 py-1 rounded border border-[#D9CBB7] bg-[#FFFCF6] hover:border-[#9F392F] text-[#29251F] tabular-nums transition-colors"
              >
                HP {m.code}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Modules & Lessons List */}
      <div className="space-y-8">
        {MODULES.map((mod) => {
          const allModLessons = getLessonsByModule(mod.id);
          const modCompletedCount = allModLessons.filter((l) =>
            completedLessons.includes(l.id)
          ).length;

          const visibleLessons = allModLessons.filter((l) => {
            const isDone = completedLessons.includes(l.id);
            if (filter === 'completed') return isDone;
            if (filter === 'pending') return !isDone;
            return true;
          });

          if (visibleLessons.length === 0) return null;

          return (
            <section
              key={mod.id}
              id={`module-section-${mod.id}`}
              className="scroll-mt-24 bg-[#FFFCF6] border border-[#D9CBB7] rounded-lg overflow-hidden"
            >
              {/* Module Header */}
              <div className="px-6 py-6 border-b border-[#D9CBB7] bg-[#F4EBDD]/40">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="text-xs font-semibold text-[#9F392F] tracking-wide uppercase tabular-nums">
                    Học phần {mod.code} · {allModLessons.length} bài học
                  </div>
                  <div className="text-xs text-[#76644E] tabular-nums">
                    Đã xong {modCompletedCount} / {allModLessons.length} bài
                  </div>
                </div>
                <h2 className="mt-1.5 font-serif-display text-2xl font-semibold text-[#29251F]">
                  {mod.title}
                </h2>
                <p className="mt-2 text-sm text-[#76644E] leading-relaxed">
                  <strong className="text-[#29251F] font-medium">Mục tiêu: </strong>
                  {mod.goal}
                </p>
              </div>

              {/* Lessons Rows */}
              <div className="divide-y divide-[#D9CBB7]/70">
                {visibleLessons.map((lesson) => {
                  const isDone = completedLessons.includes(lesson.id);

                  return (
                    <div
                      key={lesson.id}
                      className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#F4EBDD]/35 transition-colors"
                    >
                      <div className="flex items-start gap-3.5 min-w-0">
                        <button
                          type="button"
                          onClick={() => onToggleComplete(lesson.id)}
                          aria-label={
                            isDone
                              ? `Bỏ đánh dấu hoàn thành bài ${lesson.id}`
                              : `Đánh dấu hoàn thành bài ${lesson.id}`
                          }
                          className="mt-0.5 shrink-0 text-[#76644E] hover:text-[#9F392F] transition-colors cursor-pointer"
                        >
                          {isDone ? (
                            <CheckCircle2 className="w-5 h-5 text-[#9F392F]" />
                          ) : (
                            <Circle className="w-5 h-5 text-[#D9CBB7] hover:text-[#76644E]" />
                          )}
                        </button>

                        <div className="min-w-0 space-y-1">
                          <button
                            type="button"
                            onClick={() => onOpenLesson(lesson.id)}
                            className="text-left group cursor-pointer"
                          >
                            <h3 className="text-base font-medium text-[#29251F] group-hover:text-[#9F392F] transition-colors">
                              <span className="font-semibold tabular-nums mr-2 text-[#76644E]">
                                {lesson.id}.
                              </span>
                              {lesson.title}
                            </h3>
                          </button>

                          <div className="flex flex-wrap items-center gap-2 text-xs text-[#76644E]">
                            <span className="tabular-nums">{lesson.duration}</span>
                            <span aria-hidden="true">·</span>
                            <span>{lesson.level}</span>
                            <span aria-hidden="true">·</span>
                            <span
                              className={
                                isDone ? 'text-[#9F392F] font-medium' : 'text-[#76644E]'
                              }
                            >
                              {isDone ? 'Đã hoàn thành' : 'Chưa học'}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="shrink-0 pl-8 sm:pl-0">
                        <button
                          type="button"
                          onClick={() => onOpenLesson(lesson.id)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded border border-[#D9CBB7] bg-[#FFFCF6] hover:border-[#9F392F] hover:text-[#9F392F] text-[#29251F] transition-colors cursor-pointer whitespace-nowrap"
                        >
                          <span>{isDone ? 'Xem lại bài' : 'Vào học'}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}

        {filter === 'completed' && completedCount === 0 && (
          <div className="bg-[#FFFCF6] border border-[#D9CBB7] rounded-lg p-10 text-center space-y-3">
            <p className="font-serif-display text-xl text-[#29251F]">
              Thầy chưa đánh dấu hoàn thành bài học nào
            </p>
            <p className="text-sm text-[#76644E]">
              Hãy bắt đầu từ Bài L1 để làm quen nhẹ nhàng với tinh thần thư pháp Việt.
            </p>
            <button
              type="button"
              onClick={() => onOpenLesson('L1')}
              className="mt-2 inline-flex items-center gap-2 px-4 py-2 bg-[#9F392F] text-[#FFFCF6] text-sm font-medium rounded-md cursor-pointer"
            >
              <span>Mở Bài L1 ngay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
