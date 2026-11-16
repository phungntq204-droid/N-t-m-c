import { JournalEntry, PracticeUpload } from '../types';

const KEYS = {
  COMPLETED: 'netmuc_completed_lessons_v1',
  CHECKLISTS: 'netmuc_lesson_checklists_v1',
  UPLOADS: 'netmuc_practice_uploads_v1',
  JOURNAL: 'netmuc_journal_entries_v1',
};

function safeRead<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function safeWrite<T>(key: string, value: T): boolean {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function loadCompletedLessons(): string[] {
  return safeRead<string[]>(KEYS.COMPLETED, []);
}

export function saveCompletedLessons(ids: string[]): boolean {
  return safeWrite(KEYS.COMPLETED, ids);
}

export function loadLessonChecklists(): Record<string, boolean[]> {
  return safeRead<Record<string, boolean[]>>(KEYS.CHECKLISTS, {});
}

export function saveLessonChecklists(data: Record<string, boolean[]>): boolean {
  return safeWrite(KEYS.CHECKLISTS, data);
}

export function loadPracticeUploads(): PracticeUpload[] {
  return safeRead<PracticeUpload[]>(KEYS.UPLOADS, []);
}

export function savePracticeUploads(items: PracticeUpload[]): boolean {
  return safeWrite(KEYS.UPLOADS, items);
}

export function loadJournalEntries(): JournalEntry[] {
  return safeRead<JournalEntry[]>(KEYS.JOURNAL, []);
}

export function saveJournalEntries(items: JournalEntry[]): boolean {
  return safeWrite(KEYS.JOURNAL, items);
}

/**
 * Resize and compress uploaded images smoothly so browser LocalStorage
 * stays fast and avoids quota overflow when thầy uploads high-res phone photos.
 */
export function compressImageFile(file: File, maxDimension = 1080, quality = 0.82): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Không thể đọc tệp ảnh này.'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('Định dạng ảnh không hợp lệ.'));
      img.onload = () => {
        let { width, height } = img;
        if (width > maxDimension || height > maxDimension) {
          if (width >= height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(reader.result as string);
          return;
        }
        ctx.fillStyle = '#FFFCF6';
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
}

export function formatVietnameseDate(isoDate: string): string {
  try {
    const date = new Date(isoDate);
    return new Intl.DateTimeFormat('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(date);
  } catch {
    return isoDate;
  }
}
