import React, { useState } from 'react';
import { PenLine } from 'lucide-react';
import type { AppStats } from '../App';

interface QuickJournalProps {
  stats: AppStats;
  updateStats: (updates: Partial<AppStats>) => void;
}

export function QuickJournal({ stats, updateStats }: QuickJournalProps) {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState<string[]>([]);

  const handleSave = () => {
    if (entry.trim()) {
      setEntries([entry, ...entries]);
      setEntry('');
      updateStats({
        journalEntries: stats.journalEntries + 1,
        streak: stats.streak + 1
      });
      alert('Journal entry saved!');
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex items-center space-x-2 mb-4">
        <PenLine className="w-5 h-5 text-blue-600" />
        <h2 className="text-xl font-semibold">Quick Journal</h2>
      </div>
      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Write your thoughts..."
        className="w-full h-32 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
      />
      <button 
        onClick={handleSave}
        disabled={!entry.trim()}
        className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
      >
        Save Entry
      </button>
      
      {entries.length > 0 && (
        <div className="mt-4 space-y-2">
          <h3 className="font-medium text-gray-700">Recent Entries</h3>
          {entries.map((e, i) => (
            <div key={i} className="p-3 bg-gray-50 rounded-lg text-sm">
              {e}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}