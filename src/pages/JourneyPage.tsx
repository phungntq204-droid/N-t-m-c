import { useState } from 'react';
import { ArrowRight, BookOpen, Plus, Trash2 } from 'lucide-react';
import { LESSONS, MODULES, getLessonsByModule } from '../data/lessons';
import { JournalEntry, PageRoute, PracticeUpload } from '../types';
import { formatVietnameseDate } from '../utils/storage';

interface JourneyPageProps {
  completedLessons: string[];
  uploads: PracticeUpload[];
  journalEntries: JournalEntry[];
  onAddJournal: (entry: JournalEntry) => void;
  onDeleteJournal: (id: string) => void;
  onDeleteUpload: (id: string) => void;
  onOpenLesson: (lessonId: string) => void;
  onNavigate: (page: PageRoute) => void;
  onNotify: (text: string, type?: 'success' | 'error') => void;
}

const MOOD_OPTIONS = ['Thư thái', 'Tập trung', 'Kiên nhẫn', 'Hào hứng', 'Lắng đọng'];

export function JourneyPage({
  completedLessons,
  uploads,
  journalEntries,
  onAddJournal,
  onDeleteJournal,
  onDeleteUpload,
  onOpenLesson,
  onNavigate,
  onNotify,
}: JourneyPageProps) {
  const [noteContent, setNoteContent] = useState('');
  const [noteLessonId, setNoteLessonId] = useState('');
  const [noteMood, setNoteMood] = useState(MOOD_OPTIONS[0]);
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'artwork' | 'practice'>('all');

  const totalLessons = LESSONS.length;
  const completedCount = completedLessons.length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);
  const artworksCount = uploads.filter((u) => u.category === 'artwork').length;

  const filteredUploads = uploads.filter((u) => {
    if (galleryFilter === 'all') return true;
    return u.category === galleryFilter;
  });

  const handleJournalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = noteContent.trim();
    if (!trimmed) {
      onNotify('Thầy hãy viết vài dòng cảm nhận trước khi lưu nhật ký nhé.', 'error');
      return;
    }

    const entry: JournalEntry = {
      id: `journal-${Date.now()}`,
      date: new Date().toISOString(),
      lessonId: noteLessonId || undefined,
      content: trimmed,
      mood: noteMood,
    };
    onAddJournal(entry);
    setNoteContent('');
    setNoteLessonId('');
    onNotify('Đã lưu ghi chú vào Nhật ký luyện tập.');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Header & Inspirational Message */}
      <header className="space-y-4 border-b border-[#D9CBB7] pb-6">
        <p className="text-xs font-medium tracking-wider text-[#9F392F] uppercase">
          Hành trình của thầy Thúc Đương
        </p>
        <h1 className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#29251F]">
          Dấu mốc từng nét bút
        </h1>
        <p className="font-serif-display italic text-lg sm:text-xl text-[#76644E] max-w-3xl">
          “Điều đáng quý không phải là nét bút hoàn hảo đầu tiên, mà là hành trình thầy đã kiên nhẫn tạo nên nó.”
        </p>
      </header>

      {/* 4 Real Metrics Strip */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-[#FFFCF6] border border-[#D9CBB7] rounded-lg p-5 space-y-1">
          <p className="text-xs text-[#76644E]">Bài học đã hoàn thành</p>
          <p className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#29251F] tabular-nums">
            {completedCount} / {totalLessons}
          </p>
        </div>

        <div className="bg-[#FFFCF6] border border-[#D9CBB7] rounded-lg p-5 space-y-1">
          <p className="text-xs text-[#76644E]">Tiến độ lộ trình</p>
          <p className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#9F392F] tabular-nums">
            {progressPercent}%
          </p>
        </div>

        <div className="bg-[#FFFCF6] border border-[#D9CBB7] rounded-lg p-5 space-y-1">
          <p className="text-xs text-[#76644E]">Ảnh thực hành đã lưu</p>
          <p className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#29251F] tabular-nums">
            {uploads.length}
          </p>
        </div>

        <div className="bg-[#FFFCF6] border border-[#D9CBB7] rounded-lg p-5 space-y-1">
          <p className="text-xs text-[#76644E]">Tác phẩm hoàn chỉnh</p>
          <p className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#29251F] tabular-nums">
            {artworksCount}
          </p>
        </div>
      </section>

      {/* Visual Progress Bar & Per-Module Breakdown */}
      <section className="bg-[#FFFCF6] border border-[#D9CBB7] rounded-lg p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h2 className="font-serif-display text-xl sm:text-2xl font-semibold text-[#29251F]">
            Tiến độ theo 6 học phần
          </h2>
          <button
            type="button"
            onClick={() => onNavigate('curriculum')}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#9F392F] hover:text-[#852D24] cursor-pointer self-start sm:self-auto"
          >
            <span>Mở lộ trình học</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="h-3 w-full bg-[#EBE1D1] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#9F392F] transition-all duration-300 ease-calligraphy"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {MODULES.map((mod) => {
            const modLessons = getLessonsByModule(mod.id);
            const done = modLessons.filter((l) => completedLessons.includes(l.id)).length;
            const pct = Math.round((done / modLessons.length) * 100);
            return (
              <div
                key={mod.id}
                className="p-4 rounded-md border border-[#D9CBB7]/80 bg-[#F4EBDD]/40 space-y-2"
              >
                <div className="flex items-center justify-between text-xs text-[#76644E]">
                  <span className="font-semibold text-[#29251F] tabular-nums">
                    HP {mod.code}
                  </span>
                  <span className="tabular-nums">
                    {done}/{modLessons.length} bài ({pct}%)
                  </span>
                </div>
                <p className="text-sm font-medium text-[#29251F] line-clamp-1">{mod.title}</p>
                <div className="h-1.5 w-full bg-[#D9CBB7]/70 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#9F392F] transition-all duration-300"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Two-column Workspace: Practice Journal & Artwork Collection */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Practice Journal (6 cols) */}
        <section className="lg:col-span-6 bg-[#FFFCF6] border border-[#D9CBB7] rounded-lg p-6 space-y-6">
          <div className="space-y-1">
            <h2 className="font-serif-display text-2xl font-semibold text-[#29251F]">
              Nhật ký luyện tập
            </h2>
            <p className="text-xs sm:text-sm text-[#76644E]">
              Ghi lại cảm nhận sau mỗi buổi cầm bút, điều tay đã làm được hoặc một câu chữ tâm đắc.
            </p>
          </div>

          <form onSubmit={handleJournalSubmit} className="space-y-4 bg-[#F4EBDD]/50 p-4 rounded-lg border border-[#D9CBB7]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label htmlFor="journal-lesson" className="block text-xs font-medium text-[#29251F]">
                  Gắn với bài học (tùy chọn)
                </label>
                <select
                  id="journal-lesson"
                  value={noteLessonId}
                  onChange={(e) => setNoteLessonId(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FFFCF6] border border-[#D9CBB7] rounded-md text-[#29251F] focus:outline-none focus:border-[#9F392F]"
                >
                  <option value="">Chung / Không gắn bài cụ thể</option>
                  {LESSONS.map((l) => (
                    <option key={l.id} value={l.id}>
                      {l.id}. {l.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="journal-mood" className="block text-xs font-medium text-[#29251F]">
                  Tâm thế buổi tập
                </label>
                <select
                  id="journal-mood"
                  value={noteMood}
                  onChange={(e) => setNoteMood(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FFFCF6] border border-[#D9CBB7] rounded-md text-[#29251F] focus:outline-none focus:border-[#9F392F]"
                >
                  {MOOD_OPTIONS.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="journal-content" className="block text-xs font-medium text-[#29251F]">
                Ghi chú cảm nhận của thầy
              </label>
              <textarea
                id="journal-content"
                rows={3}
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
                placeholder="Hôm nay thử viết bằng nước trên vải ô mễ thấy đầu bút mềm và dễ điều khiển hơn hôm qua..."
                className="w-full px-3 py-2 text-sm bg-[#FFFCF6] border border-[#D9CBB7] rounded-md text-[#29251F] placeholder:text-[#76644E]/60 focus:outline-none focus:border-[#9F392F]"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#9F392F] hover:bg-[#852D24] text-[#FFFCF6] text-xs sm:text-sm font-medium rounded-md transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Lưu ghi chú nhật ký</span>
            </button>
          </form>

          {/* Saved Journal Entries */}
          <div className="space-y-3">
            {journalEntries.length === 0 ? (
              <p className="text-sm text-[#76644E] py-6 text-center border border-dashed border-[#D9CBB7] rounded-lg">
                Chưa có trang nhật ký nào. Thầy hãy viết vài dòng kỷ niệm đầu tiên ở khung phía trên nhé.
              </p>
            ) : (
              journalEntries.map((entry) => (
                <article
                  key={entry.id}
                  className="p-4 rounded-lg border border-[#D9CBB7] bg-[#FFFCF6] space-y-2"
                >
                  <div className="flex items-center justify-between gap-2 text-xs text-[#76644E]">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="tabular-nums font-medium text-[#29251F]">
                        {formatVietnameseDate(entry.date)}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>Tâm thế: {entry.mood}</span>
                      {entry.lessonId && (
                        <>
                          <span aria-hidden="true">·</span>
                          <button
                            type="button"
                            onClick={() => onOpenLesson(entry.lessonId!)}
                            className="text-[#9F392F] font-medium hover:underline cursor-pointer tabular-nums"
                          >
                            {entry.lessonId}
                          </button>
                        </>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => onDeleteJournal(entry.id)}
                      aria-label="Xóa ghi chú nhật ký"
                      className="text-[#76644E] hover:text-[#9F392F] p-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-sm text-[#29251F] leading-relaxed whitespace-pre-line">
                    {entry.content}
                  </p>
                </article>
              ))
            )}
          </div>
        </section>

        {/* Artwork & Practice Collection (6 cols) */}
        <section className="lg:col-span-6 bg-[#FFFCF6] border border-[#D9CBB7] rounded-lg p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <h2 className="font-serif-display text-2xl font-semibold text-[#29251F]">
                Bộ sưu tập tác phẩm
              </h2>
              <p className="text-xs text-[#76644E]">
                Lưu giữ các bài tập và bức thư pháp hoàn chỉnh đã tải lên.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('practice')}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#9F392F] hover:underline cursor-pointer whitespace-nowrap self-start sm:self-auto"
            >
              <span>Tải thêm từ Phòng luyện tập</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="inline-flex items-center gap-1 p-1 bg-[#F4EBDD] border border-[#D9CBB7] rounded-md">
            <button
              type="button"
              onClick={() => setGalleryFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded cursor-pointer ${
                galleryFilter === 'all'
                  ? 'bg-[#FFFCF6] text-[#29251F] shadow-xs'
                  : 'text-[#76644E] hover:text-[#29251F]'
              }`}
            >
              Tất cả ({uploads.length})
            </button>
            <button
              type="button"
              onClick={() => setGalleryFilter('artwork')}
              className={`px-3 py-1.5 text-xs font-medium rounded cursor-pointer ${
                galleryFilter === 'artwork'
                  ? 'bg-[#FFFCF6] text-[#29251F] shadow-xs'
                  : 'text-[#76644E] hover:text-[#29251F]'
              }`}
            >
              Tác phẩm ({artworksCount})
            </button>
            <button
              type="button"
              onClick={() => setGalleryFilter('practice')}
              className={`px-3 py-1.5 text-xs font-medium rounded cursor-pointer ${
                galleryFilter === 'practice'
                  ? 'bg-[#FFFCF6] text-[#29251F] shadow-xs'
                  : 'text-[#76644E] hover:text-[#29251F]'
              }`}
            >
              Bài luyện ({uploads.length - artworksCount})
            </button>
          </div>

          {filteredUploads.length === 0 ? (
            <div className="py-10 px-4 text-center space-y-3 border border-dashed border-[#D9CBB7] rounded-lg">
              <BookOpen className="w-6 h-6 text-[#76644E] mx-auto opacity-70" />
              <p className="text-sm text-[#76644E]">
                Chưa có hình ảnh nào trong mục này. Thầy có thể lưu bài vẽ hoặc tải ảnh chụp tác phẩm tại Phòng luyện tập.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('practice')}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium bg-[#F4EBDD] hover:bg-[#EBE1D1] text-[#29251F] border border-[#D9CBB7] rounded-md cursor-pointer"
              >
                <span>Mở Phòng luyện tập</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredUploads.map((item) => (
                <article
                  key={item.id}
                  className="border border-[#D9CBB7] rounded-lg overflow-hidden bg-[#F4EBDD]/35"
                >
                  <div className="aspect-[4/3] bg-[#EBE1D1] overflow-hidden">
                    <img
                      src={item.dataUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] text-[#76644E]">
                      <span
                        className={
                          item.category === 'artwork'
                            ? 'text-[#9F392F] font-semibold'
                            : ''
                        }
                      >
                        {item.category === 'artwork' ? 'Tác phẩm' : 'Bài luyện'}
                      </span>
                      <span className="tabular-nums">
                        {formatVietnameseDate(item.createdAt)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-medium text-[#29251F] truncate">
                        {item.title}
                      </h3>
                      <button
                        type="button"
                        onClick={() => onDeleteUpload(item.id)}
                        aria-label={`Xóa ${item.title}`}
                        className="text-[#76644E] hover:text-[#9F392F] p-1 shrink-0 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
