import React from 'react';
import { MoodTracker } from '../components/MoodTracker';
import { QuickJournal } from '../components/QuickJournal';
import type { AppStats } from '../App';

interface DashboardProps {
  stats: AppStats;
  updateStats: (updates: Partial<AppStats>) => void;
}

export function Dashboard({ stats, updateStats }: DashboardProps) {
  return (
    <main className="max-w-screen-xl mx-auto px-4 py-8 space-y-6 mb-20">
      <MoodTracker stats={stats} updateStats={updateStats} />
      <QuickJournal stats={stats} updateStats={updateStats} />
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Streak</h3>
          <p className="text-3xl font-bold text-blue-600">{stats.streak} days</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Next Assessment</h3>
          <p className="text-sm text-gray-600">{stats.nextAssessment}</p>
        </div>
      </div>
    </main>
  );
}