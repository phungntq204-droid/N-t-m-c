export type PageRoute =
  | 'home'
  | 'curriculum'
  | 'lesson'
  | 'practice'
  | 'library'
  | 'journey';

export type VisualAidType =
  | 'spirit'
  | 'four-treasures'
  | 'desk-setup'
  | 'brush-anatomy'
  | 'grip-posture'
  | 'pressure-speed'
  | 'line-curve'
  | 'dot-strokes'
  | 'straight-strokes'
  | 'turning-strokes'
  | 'thin-thick'
  | 'session-flow'
  | 'letter-structure'
  | 'curved-letters'
  | 'straight-letters'
  | 'diacritics'
  | 'word-spacing'
  | 'bottled-ink'
  | 'ink-grinding'
  | 'moisture-control'
  | 'layout-balance'
  | 'short-sentence'
  | 'theme-selection'
  | 'draft-sketch'
  | 'final-artwork'
  | 'seal-archive';

export interface MistakeItem {
  mistake: string;
  fix: string;
}

export interface Lesson {
  id: string;
  number: number;
  moduleId: number;
  title: string;
  duration: string;
  level: string;
  intro: string;
  objectives: string[];
  toolsNeeded: string[];
  explanation: string[];
  steps: {
    title: string;
    detail: string;
    why: string;
  }[];
  exampleNote: string;
  commonMistakes: MistakeItem[];
  exercise: string;
  checklist: string[];
  visualAid: VisualAidType;
}

export interface Module {
  id: number;
  code: string;
  title: string;
  goal: string;
  description: string;
}

export interface ToolItem {
  id: string;
  name: string;
  specs: string;
  image: string;
  purpose: string;
  basicUsage: string;
  careAndStorage: string;
  usedInLessons: string[];
  specialNote?: string;
}

export interface KnowledgeTopic {
  id: string;
  number: string;
  title: string;
  summary: string;
  sections: {
    heading: string;
    body: string;
  }[];
  practicalTip: string;
}

export interface PracticeUpload {
  id: string;
  title: string;
  dataUrl: string;
  createdAt: string;
  category: 'practice' | 'artwork';
  note?: string;
}

export interface JournalEntry {
  id: string;
  date: string;
  lessonId?: string;
  content: string;
  mood: string;
}

export type StrokeTemplateId =
  | 'straight'
  | 'curve'
  | 'circle'
  | 'dot'
  | 'horizontal'
  | 'vertical'
  | 'thin-thick'
  | 'free';
