import React, { useState } from 'react';
import { ClipboardCheck } from 'lucide-react';
import type { AppStats } from '../App';

interface AssessmentsProps {
  stats: AppStats;
  updateStats: (updates: Partial<AppStats>) => void;
}

export function Assessments({ stats, updateStats }: AssessmentsProps) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const questions = [
    "How would you rate your overall mood today?",
    "How well did you sleep last night?",
    "How would you rate your stress level?",
    "How satisfied are you with your productivity today?",
    "How connected do you feel with others today?"
  ];

  const handleAnswer = (questionIndex: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: value }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length === questions.length) {
      const today = new Date();
      const nextAssessmentDate = new Date(today);
      nextAssessmentDate.setDate(today.getDate() + 1);

      updateStats({
        lastAssessmentDate: today,
        nextAssessment: `Due ${nextAssessmentDate.toLocaleDateString()}`,
        completionRate: Math.min(100, stats.completionRate + 20),
        daysTracked: stats.daysTracked + 1,
        streak: stats.streak + 1
      });

      setAnswers({});
      alert('Assessment submitted successfully!');
    } else {
      alert('Please answer all questions before submitting.');
    }
  };

  return (
    <main className="max-w-screen-xl mx-auto px-4 py-8 mb-20">
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center space-x-2 mb-6">
          <ClipboardCheck className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-semibold">Daily Assessment</h2>
        </div>

        <div className="space-y-6">
          {questions.map((question, index) => (
            <div key={index} className="space-y-2">
              <p className="font-medium text-gray-700">{question}</p>
              <div className="flex justify-between gap-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    onClick={() => handleAnswer(index, value)}
                    className={`flex-1 py-2 border rounded-lg transition-colors ${
                      answers[index] === value 
                        ? 'bg-blue-50 border-blue-500 text-blue-600' 
                        : 'hover:bg-blue-50 hover:border-blue-500'
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
          ))}
          
          <button 
            onClick={handleSubmit}
            className="w-full mt-6 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit Assessment
          </button>
        </div>
      </div>
    </main>
  );
}