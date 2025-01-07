import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Dashboard } from './pages/Dashboard';
import { Journal } from './pages/Journal';
import { Assessments } from './pages/Assessments';
import { Progress } from './pages/Progress';

export interface AppStats {
  streak: number;
  nextAssessment: string;
  completionRate: number;
  daysTracked: number;
  avgMood: number;
  journalEntries: number;
  lastAssessmentDate: Date | null;
}

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [stats, setStats] = useState<AppStats>({
    streak: 0,
    nextAssessment: 'No assessments completed',
    completionRate: 0,
    daysTracked: 0,
    avgMood: 0,
    journalEntries: 0,
    lastAssessmentDate: null
  });

  const updateStats = (updates: Partial<AppStats>) => {
    setStats(prev => ({ ...prev, ...updates }));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'journal':
        return <Journal stats={stats} updateStats={updateStats} />;
      case 'assessments':
        return <Assessments stats={stats} updateStats={updateStats} />;
      case 'progress':
        return <Progress stats={stats} />;
      default:
        return <Dashboard stats={stats} updateStats={updateStats} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Mental Health Tracker</h1>
        </div>
      </header>

      {renderPage()}

      <Navigation onTabChange={setCurrentPage} activeTab={currentPage} />
    </div>
  );
}

export default App;