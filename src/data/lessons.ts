import { MODULES, LESSONS_PART_1 } from './lessonsPart1';
import { LESSONS_PART_2 } from './lessonsPart2';
import { Lesson, Module } from '../types';

export { MODULES };

export const LESSONS: Lesson[] = [...LESSONS_PART_1, ...LESSONS_PART_2];

export function getLessonById(id: string): Lesson | undefined {
  return LESSONS.find((lesson) => lesson.id === id);
}

export function getModuleById(id: number): Module | undefined {
  return MODULES.find((mod) => mod.id === id);
}

export function getLessonsByModule(moduleId: number): Lesson[] {
  return LESSONS.filter((lesson) => lesson.moduleId === moduleId);
}

export function getNextLesson(currentId: string): Lesson | undefined {
  const index = LESSONS.findIndex((lesson) => lesson.id === currentId);
  if (index === -1 || index === LESSONS.length - 1) return undefined;
  return LESSONS[index + 1];
}

export function getPreviousLesson(currentId: string): Lesson | undefined {
  const index = LESSONS.findIndex((lesson) => lesson.id === currentId);
  if (index <= 0) return undefined;
  return LESSONS[index - 1];
}

export function getFirstUncompletedLesson(completedIds: string[]): Lesson {
  const next = LESSONS.find((lesson) => !completedIds.includes(lesson.id));
  return next ?? LESSONS[0];
}
