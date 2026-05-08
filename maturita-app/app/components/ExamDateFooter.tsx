"use client";

import { useEffect, useState } from "react";
import {
  EXAM_DATE_CHANGED_EVENT,
  formatExamDate,
  loadExamDateValue,
} from "@/lib/exam-date";

export default function ExamDateFooter() {
  const [examDateValue, setExamDateValue] = useState("");

  useEffect(() => {
    const update = () => setExamDateValue(loadExamDateValue());

    update();
    window.addEventListener("storage", update);
    window.addEventListener(EXAM_DATE_CHANGED_EVENT, update);

    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener(EXAM_DATE_CHANGED_EVENT, update);
    };
  }, []);

  return <span>Termín: {formatExamDate(examDateValue, true)}</span>;
}
