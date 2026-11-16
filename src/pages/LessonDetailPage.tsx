import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CheckSquare,
  Feather,
  Square,
} from 'lucide-react';
import {
  getLessonById,
  getModuleById,
  getNextLesson,
  getPreviousLesson,
} from '../data/lessons';
import { LessonDiagram } from '../components/LessonDiagram';
import { PageRoute } from '../types';

interface LessonDetailPageProps {
  lessonId: string;
  completedLessons: string[];
  lessonChecklists: Record<string, boolean[]>;
  onToggleComplete: (lessonId: string) => void;
  onToggleChecklistItem: (lessonId: string, itemIndex: number) => void;
  onOpenLesson: (lessonId: string) => void;
  onNavigate: (page: PageRoute) => void;
}

export function LessonDetailPage({
  lessonId,
  completedLessons,
  lessonChecklists,
  onToggleComplete,
  onToggleChecklistItem,
  onOpenLesson,
  onNavigate,
}: LessonDetailPageProps) {
  const lesson = getLessonById(lessonId);

  if (!lesson) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center space-y-4">
        <h1 className="font-serif-display text-2xl text-[#29251F]">
          Không tìm thấy bài học này
        </h1>
        <button
          type="button"
          onClick={() => onNavigate('curriculum')}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#9F392F] text-[#FFFCF6] text-sm font-medium rounded-md cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại Lộ trình học</span>
        </button>
      </div>
    );
  }

  const moduleInfo = getModuleById(lesson.moduleId);
  const prevLesson = getPreviousLesson(lesson.id);
  const nextLesson = getNextLesson(lesson.id);
  const isCompleted = completedLessons.includes(lesson.id);
  const savedChecklist = lessonChecklists[lesson.id] || [];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-10">
      {/* Top Breadcrumb & Quick Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D9CBB7] pb-4">
        <button
          type="button"
          onClick={() => onNavigate('curriculum')}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#76644E] hover:text-[#29251F] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại Lộ trình học</span>
        </button>

        <div className="flex items-center gap-3 text-xs text-[#76644E]">
          {moduleInfo && (
            <span className="tabular-nums">
              Học phần {moduleInfo.code}: {moduleInfo.title}
            </span>
          )}
          <span aria-hidden="true">/</span>
          <span className="font-semibold text-[#9F392F] tabular-nums">
            Bài {lesson.number} / 26
          </span>
        </div>
      </div>

      {/* 1. Lesson Header (Title, Duration, Level, Intro) */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm text-[#76644E]">
          <span className="font-semibold text-[#9F392F] tabular-nums">{lesson.id}</span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">Thời lượng dự kiến: {lesson.duration}</span>
          <span aria-hidden="true">·</span>
          <span>Cấp độ: {lesson.level}</span>
          <span aria-hidden="true">·</span>
          <span className={isCompleted ? 'text-[#9F392F] font-medium' : ''}>
            {isCompleted ? 'Đã hoàn thành' : 'Đang học'}
          </span>
        </div>

        <h1 className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#29251F] leading-tight">
          {lesson.title}
        </h1>

        <p className="text-base sm:text-lg text-[#29251F]/90 leading-relaxed max-w-3xl">
          {lesson.intro}
        </p>
      </header>

      {/* 2. Objectives & Tools Needed (2 balanced columns) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#FFFCF6] border border-[#D9CBB7] rounded-lg p-6 space-y-3">
          <h2 className="font-serif-display text-lg font-semibold text-[#29251F]">
            Mục tiêu cần đạt
          </h2>
          <ul className="space-y-2.5 text-sm text-[#29251F]/90 leading-relaxed">
            {lesson.objectives.map((obj, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-[#9F392F] font-semibold tabular-nums mt-0.5">
                  {idx + 1}.
                </span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#FFFCF6] border border-[#D9CBB7] rounded-lg p-6 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <h2 className="font-serif-display text-lg font-semibold text-[#29251F]">
              Dụng cụ cần chuẩn bị
            </h2>
            <button
              type="button"
              onClick={() => onNavigate('library')}
              className="text-xs text-[#9F392F] hover:underline cursor-pointer whitespace-nowrap"
            >
              Xem bộ dụng cụ
            </button>
          </div>
          <ul className="space-y-2 text-sm text-[#29251F]/90 leading-relaxed">
            {lesson.toolsNeeded.map((tool, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-[#76644E] mt-1.5 w-1.5 h-1.5 rounded-full bg-[#76644E] shrink-0" />
                <span>{tool}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Detailed Explanation */}
      <section className="bg-[#FFFCF6] border border-[#D9CBB7] rounded-lg p-6 sm:p-8 space-y-4">
        <h2 className="font-serif-display text-2xl font-semibold text-[#29251F]">
          Hiểu rõ trước khi thực hành
        </h2>
        <div className="space-y-4 text-base text-[#29251F]/90 leading-relaxed max-w-prose">
          {lesson.explanation.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </section>

      {/* 4. Visual Diagram Schematic */}
      <LessonDiagram type={lesson.visualAid} />

      {/* 5. Step-by-step Practice Guide */}
      <section className="space-y-5">
        <h2 className="font-serif-display text-2xl font-semibold text-[#29251F]">
          Hướng dẫn thực hành từng bước
        </h2>

        <div className="space-y-4">
          {lesson.steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#FFFCF6] border border-[#D9CBB7] rounded-lg p-5 sm:p-6 space-y-2.5"
            >
              <h3 className="text-base sm:text-lg font-semibold text-[#29251F]">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-[#29251F]/90 leading-relaxed">
                {step.detail}
              </p>
              <p className="text-xs sm:text-sm text-[#76644E] pt-1 border-t border-[#D9CBB7]/60">
                <strong className="font-medium text-[#29251F]">Vì sao làm bước này: </strong>
                {step.why}
              </p>
            </div>
          ))}
        </div>

        {/* Example note */}
        <div className="bg-[#F4EBDD] border border-[#D9CBB7] rounded-lg p-5 text-sm text-[#29251F] leading-relaxed">
          {lesson.exampleNote}
        </div>
      </section>

      {/* 6. Common Mistakes & Fixes */}
      <section className="bg-[#FFFCF6] border border-[#D9CBB7] rounded-lg p-6 sm:p-8 space-y-5">
        <h2 className="font-serif-display text-xl sm:text-2xl font-semibold text-[#29251F]">
          Lỗi thường gặp & cách khắc phục nhẹ nhàng
        </h2>
        <div className="divide-y divide-[#D9CBB7]/70">
          {lesson.commonMistakes.map((item, idx) => (
            <div key={idx} className="py-4 first:pt-0 last:pb-0 space-y-1.5">
              <p className="text-sm font-semibold text-[#9F392F]">
                Tình huống: {item.mistake}
              </p>
              <p className="text-sm text-[#29251F]/90 leading-relaxed">
                <span className="font-medium text-[#29251F]">Cách gỡ: </span>
                {item.fix}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Applied Exercise + Shortcut to Practice Room */}
      <section className="bg-[#FFFCF6] border border-[#9F392F]/40 rounded-lg p-6 sm:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h2 className="font-serif-display text-xl sm:text-2xl font-semibold text-[#29251F]">
            Bài tập áp dụng ngay
          </h2>
          <button
            type="button"
            onClick={() => onNavigate('practice')}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium bg-[#F4EBDD] hover:bg-[#EBE1D1] text-[#29251F] border border-[#D9CBB7] rounded-md transition-colors cursor-pointer self-start sm:self-auto whitespace-nowrap"
          >
            <Feather className="w-3.5 h-3.5 text-[#9F392F]" />
            <span>Mở Phòng luyện tập</span>
          </button>
        </div>
        <p className="text-base text-[#29251F]/90 leading-relaxed">{lesson.exercise}</p>
      </section>

      {/* 8. Interactive Self-Evaluation Checklist */}
      <section className="bg-[#FFFCF6] border border-[#D9CBB7] rounded-lg p-6 sm:p-8 space-y-4">
        <div className="space-y-1">
          <h2 className="font-serif-display text-xl font-semibold text-[#29251F]">
            Bảng tự đánh giá sau buổi tập
          </h2>
          <p className="text-xs text-[#76644E]">
            Thầy có thể tích chọn những mục mình đã cảm nhận được trong buổi luyện hôm nay (được lưu tự động).
          </p>
        </div>

        <div className="space-y-2.5">
          {lesson.checklist.map((item, idx) => {
            const checked = Boolean(savedChecklist[idx]);
            return (
              <button
                key={idx}
                type="button"
                onClick={() => onToggleChecklistItem(lesson.id, idx)}
                className="w-full text-left flex items-start gap-3 p-3 rounded-md border border-[#D9CBB7]/70 hover:bg-[#F4EBDD]/50 transition-colors cursor-pointer"
              >
                {checked ? (
                  <CheckSquare className="w-5 h-5 text-[#9F392F] shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-5 h-5 text-[#76644E] shrink-0 mt-0.5" />
                )}
                <span
                  className={`text-sm leading-relaxed ${
                    checked ? 'text-[#29251F] font-medium' : 'text-[#29251F]/90'
                  }`}
                >
                  {item}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 9. Epistemic Note */}
      <p className="text-xs text-[#76644E] italic leading-relaxed">
        Lưu ý chuyên môn: Bài học này là gợi ý thực hành nhập môn dành cho người mới bắt đầu, không phải quy chuẩn cứng nhắc duy nhất của thư pháp Việt. Thầy hãy luôn ưu tiên cảm giác thoải mái của bàn tay và quan sát thực tế trên bộ dụng cụ của mình.
      </p>

      {/* 10. Completion Action & Next/Previous Navigation */}
      <footer className="bg-[#FFFCF6] border border-[#D9CBB7] rounded-lg p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-serif-display text-lg font-semibold text-[#29251F]">
              {isCompleted
                ? 'Thầy đã hoàn thành bài học này'
                : 'Đã thực hành xong bài học này?'}
            </h3>
            <p className="text-xs text-[#76644E]">
              Nhấn nút bên cạnh để lưu tiến độ vào Hành trình của thầy.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onToggleComplete(lesson.id)}
            className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              isCompleted
                ? 'bg-[#EBE1D1] text-[#29251F] border border-[#76644E] hover:bg-[#E0D4C0]'
                : 'bg-[#9F392F] text-[#FFFCF6] hover:bg-[#852D24]'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isCompleted ? 'Đã hoàn thành (Nhấn để bỏ)' : 'Đánh dấu hoàn thành'}</span>
          </button>
        </div>

        <div className="pt-4 border-t border-[#D9CBB7]/70 flex items-center justify-between gap-4">
          {prevLesson ? (
            <button
              type="button"
              onClick={() => onOpenLesson(prevLesson.id)}
              className="inline-flex items-center gap-2 text-sm text-[#76644E] hover:text-[#29251F] transition-colors cursor-pointer min-w-0"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              <span className="truncate">
                Bài trước: {prevLesson.id}. {prevLesson.title}
              </span>
            </button>
          ) : (
            <div />
          )}

          {nextLesson ? (
            <button
              type="button"
              onClick={() => onOpenLesson(nextLesson.id)}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#9F392F] hover:text-[#852D24] transition-colors cursor-pointer min-w-0 ml-auto"
            >
              <span className="truncate">
                Bài tiếp theo: {nextLesson.id}. {nextLesson.title}
              </span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onNavigate('journey')}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#9F392F] hover:text-[#852D24] transition-colors cursor-pointer ml-auto"
            >
              <span>Xem Hành trình của thầy</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          )}
        </div>
      </footer>
    </article>
  );
}
