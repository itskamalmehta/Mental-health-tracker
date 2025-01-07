import React, { useState } from 'react';
import { PenLine } from 'lucide-react';

export function Journal() {
  const [entries, setEntries] = useState<Array<{ id: number; content: string; date: Date }>>([]);
  const [newEntry, setNewEntry] = useState('');

  const handleSave = () => {
    if (newEntry.trim()) {
      setEntries([
        { id: Date.now(), content: newEntry, date: new Date() },
        ...entries
      ]);
      setNewEntry('');
    }
  };

  return (
    <main className="max-w-screen-xl mx-auto px-4 py-8 mb-20">
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center space-x-2 mb-4">
          <PenLine className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-semibold">Journal</h2>
        </div>
        
        <textarea
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
          placeholder="Write your thoughts..."
          className="w-full h-40 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
        
        <button
          onClick={handleSave}
          disabled={!newEntry.trim()}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
        >
          Save Entry
        </button>

        <div className="mt-8 space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Previous Entries</h3>
          {entries.map(entry => (
            <div key={entry.id} className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500 mb-2">
                {entry.date.toLocaleDateString()} at {entry.date.toLocaleTimeString()}
              </p>
              <p className="text-gray-700">{entry.content}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}