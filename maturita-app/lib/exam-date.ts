export const DEFAULT_EXAM_DATE_VALUE = "2026-05-18";
export const EXAM_DATE_STORAGE_KEY = "maturita-exam-date";
export const EXAM_DATE_CHANGED_EVENT = "maturita-exam-date-changed";

const DATE_VALUE_RE = /^\d{4}-\d{2}-\d{2}$/;

export function isValidExamDateValue(value: string): boolean {
  if (!DATE_VALUE_RE.test(value)) return false;

  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day, 8, 0, 0, 0);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

export function normalizeExamDateValue(value: string | null): string {
  if (!value || !isValidExamDateValue(value)) return DEFAULT_EXAM_DATE_VALUE;
  return value;
}

export function getExamDate(value: string): Date {
  const normalized = normalizeExamDateValue(value);
  const [year, month, day] = normalized.split("-").map(Number);
  return new Date(year, month - 1, day, 8, 0, 0, 0);
}

export function formatExamDate(value: string, includeWeekday = false): string {
  return new Intl.DateTimeFormat("cs-CZ", {
    weekday: includeWeekday ? "long" : undefined,
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(getExamDate(value));
}

export function loadExamDateValue(): string {
  if (typeof window === "undefined") return DEFAULT_EXAM_DATE_VALUE;
  return normalizeExamDateValue(localStorage.getItem(EXAM_DATE_STORAGE_KEY));
}

export function saveExamDateValue(value: string): string {
  const normalized = normalizeExamDateValue(value);
  if (typeof window === "undefined") return normalized;

  localStorage.setItem(EXAM_DATE_STORAGE_KEY, normalized);
  window.dispatchEvent(new CustomEvent(EXAM_DATE_CHANGED_EVENT, { detail: normalized }));
  return normalized;
}
