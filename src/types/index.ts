export interface MoodEntry {
  id: string;
  timestamp: Date;
  mood: number; // 1-5 scale
  notes: string;
  activities: string[];
}

export interface Assessment {
  id: string;
  date: Date;
  questions: AssessmentQuestion[];
  score: number;
}

export interface AssessmentQuestion {
  id: string;
  question: string;
  answer: number; // 1-5 scale
}

export interface JournalEntry {
  id: string;
  date: Date;
  content: string;
  sentiment: number; // AI-analyzed sentiment (-1 to 1)
  tags: string[];
}