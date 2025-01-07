import React, { useState } from 'react';
import { Smile, Meh, Frown } from 'lucide-react';
import type { AppStats } from '../App';

interface MoodTrackerProps {
  stats: AppStats;
  updateStats: (updates: Partial<AppStats>) => void;
}

export function MoodTracker({ stats, updateStats }: MoodTrackerProps) {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);

  const moods = [
    { icon: <Frown className="w-8 h-8" />, label: 'Bad', value: 1 },
    { icon: <Meh className="w-8 h-8" />, label: 'Okay', value: 3 },
    { icon: <Smile className="w-8 h-8" />, label: 'Great', value: 5 },
  ];

  const handleSaveMood = () => {
    if (selectedMood) {
      const newAvgMood = stats.avgMood === 0 
        ? selectedMood 
        : (stats.avgMood + selectedMood) / 2;

      updateStats({
        avgMood: Number(newAvgMood.toFixed(1)),
        daysTracked: stats.daysTracked + 1,
        streak: stats.streak + 1
      });
      setSelectedMood(null);
      alert('Mood saved!');
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-4">How are you feeling today?</h2>
      <div className="flex justify-around">
        {moods.map((mood) => (
          <button
            key={mood.label}
            onClick={() => setSelectedMood(mood.value)}
            className={`flex flex-col items-center space-y-2 p-3 rounded-lg transition-colors ${
              selectedMood === mood.value 
                ? 'bg-blue-50 text-blue-600 ring-2 ring-blue-600' 
                : 'hover:bg-gray-50'
            }`}
          >
            {mood.icon}
            <span className="text-sm font-medium">{mood.label}</span>
          </button>
        ))}
      </div>
      {selectedMood && (
        <button 
          onClick={handleSaveMood}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Save Mood
        </button>
      )}
    </div>
  );
}