import { useEffect, useRef, useState } from 'react';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Toast, ToastMessage } from './components/Toast';
import { getFirstUncompletedLesson, getLessonById } from './data/lessons';
import { CurriculumPage } from './pages/CurriculumPage';
import { HomePage } from './pages/HomePage';
import { JourneyPage } from './pages/JourneyPage';
import { LessonDetailPage } from './pages/LessonDetailPage';
import { LibraryPage } from './pages/LibraryPage';
import { PracticeRoomPage } from './pages/PracticeRoomPage';
import { JournalEntry, PageRoute, PracticeUpload } from './types';
import {
  loadCompletedLessons,
  loadJournalEntries,
  loadLessonChecklists,
  loadPracticeUploads,
  saveCompletedLessons,
  saveJournalEntries,
  saveLessonChecklists,
  savePracticeUploads,
} from './utils/storage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [activeLessonId, setActiveLessonId] = useState<string>('L1');
  const [focusedModuleId, setFocusedModuleId] = useState<number | null>(null);
  const [libraryInitialTab, setLibraryInitialTab] = useState<'knowledge' | 'tools'>('tools');

  const [completedLessons, setCompletedLessons] = useState<string[]>(() =>
    loadCompletedLessons()
  );
  const [lessonChecklists, setLessonChecklists] = useState<Record<string, boolean[]>>(() =>
    loadLessonChecklists()
  );
  const [uploads, setUploads] = useState<PracticeUpload[]>(() => loadPracticeUploads());
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>(() =>
    loadJournalEntries()
  );

  const [toast, setToast] = useState<ToastMessage | null>(null);
  const toastTimerRef = useRef<number | null>(null);

  const showToast = (text: string, type: 'success' | 'error' = 'success') => {
    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }
    setToast({ id: Date.now(), text, type });
    toastTimerRef.current = window.setTimeout(() => {
      setToast(null);
    }, 3600);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, activeLessonId]);

  const handleNavigate = (page: PageRoute) => {
    if (page !== 'curriculum') {
      setFocusedModuleId(null);
    }
    if (page === 'library') {
      setLibraryInitialTab('tools');
    }
    setCurrentPage(page);
  };

  const handleOpenLesson = (lessonId: string) => {
    setActiveLessonId(lessonId);
    setCurrentPage('lesson');
  };

  const handleStartNextLesson = () => {
    const target = getFirstUncompletedLesson(completedLessons);
    handleOpenLesson(target.id);
  };

  const handleSelectModule = (moduleId: number) => {
    setFocusedModuleId(moduleId);
    setCurrentPage('curriculum');
  };

  const handleToggleComplete = (lessonId: string) => {
    const lesson = getLessonById(lessonId);
    const exists = completedLessons.includes(lessonId);
    const updated = exists
      ? completedLessons.filter((id) => id !== lessonId)
      : [...completedLessons, lessonId];

    setCompletedLessons(updated);
    saveCompletedLessons(updated);

    if (exists) {
      showToast(`Đã bỏ đánh dấu hoàn thành ${lesson ? lesson.id : 'bài học'}.`);
    } else {
      showToast(
        `Đã hoàn thành ${lesson ? `${lesson.id}: ${lesson.title}` : 'bài học'}! (${updated.length}/26 bài)`
      );
    }
  };

  const handleToggleChecklistItem = (lessonId: string, itemIndex: number) => {
    const current = lessonChecklists[lessonId] || [];
    const nextArr = [...current];
    nextArr[itemIndex] = !nextArr[itemIndex];
    const updated = { ...lessonChecklists, [lessonId]: nextArr };
    setLessonChecklists(updated);
    saveLessonChecklists(updated);
  };

  const handleAddUpload = (item: PracticeUpload) => {
    const updated = [item, ...uploads];
    const ok = savePracticeUploads(updated);
    if (!ok) {
      showToast(
        'Bộ nhớ trình duyệt gần đầy, thầy hãy xóa bớt ảnh cũ trước khi lưu thêm.',
        'error'
      );
      return;
    }
    setUploads(updated);
  };

  const handleDeleteUpload = (id: string) => {
    const updated = uploads.filter((u) => u.id !== id);
    setUploads(updated);
    savePracticeUploads(updated);
    showToast('Đã xóa hình ảnh khỏi góc lưu bài.');
  };

  const handleAddJournal = (entry: JournalEntry) => {
    const updated = [entry, ...journalEntries];
    setJournalEntries(updated);
    saveJournalEntries(updated);
  };

  const handleDeleteJournal = (id: string) => {
    const updated = journalEntries.filter((j) => j.id !== id);
    setJournalEntries(updated);
    saveJournalEntries(updated);
    showToast('Đã xóa ghi chú nhật ký.');
  };

  return (
    <div className="min-h-screen flex flex-col paper-surface text-[#29251F]">
      <Navbar
        currentPage={currentPage}
        completedCount={completedLessons.length}
        onNavigate={handleNavigate}
        onStartNextLesson={handleStartNextLesson}
      />

      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            completedLessons={completedLessons}
            onNavigate={handleNavigate}
            onOpenLesson={handleOpenLesson}
            onSelectModule={handleSelectModule}
          />
        )}

        {currentPage === 'curriculum' && (
          <CurriculumPage
            completedLessons={completedLessons}
            focusedModuleId={focusedModuleId}
            onOpenLesson={handleOpenLesson}
            onToggleComplete={handleToggleComplete}
          />
        )}

        {currentPage === 'lesson' && (
          <LessonDetailPage
            lessonId={activeLessonId}
            completedLessons={completedLessons}
            lessonChecklists={lessonChecklists}
            onToggleComplete={handleToggleComplete}
            onToggleChecklistItem={handleToggleChecklistItem}
            onOpenLesson={handleOpenLesson}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'practice' && (
          <PracticeRoomPage
            uploads={uploads}
            onAddUpload={handleAddUpload}
            onDeleteUpload={handleDeleteUpload}
            onNotify={showToast}
          />
        )}

        {currentPage === 'library' && (
          <LibraryPage
            initialTab={libraryInitialTab}
            onOpenLesson={handleOpenLesson}
          />
        )}

        {currentPage === 'journey' && (
          <JourneyPage
            completedLessons={completedLessons}
            uploads={uploads}
            journalEntries={journalEntries}
            onAddJournal={handleAddJournal}
            onDeleteJournal={handleDeleteJournal}
            onDeleteUpload={handleDeleteUpload}
            onOpenLesson={handleOpenLesson}
            onNavigate={handleNavigate}
            onNotify={showToast}
          />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />

      <Toast toast={toast} onDismiss={() => setToast(null)} />
    </div>
  );
}
