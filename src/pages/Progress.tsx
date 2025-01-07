import React from 'react';
import { TrendingUp, Calendar, Award } from 'lucide-react';
import type { AppStats } from '../App';

interface ProgressProps {
  stats: AppStats;
}

export function Progress({ stats }: ProgressProps) {
  return (
    <main className="max-w-screen-xl mx-auto px-4 py-8 mb-20">
      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-semibold">Your Progress</h2>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-3xl font-bold text-blue-600">{stats.completionRate}%</p>
              <p className="text-sm text-gray-600">Completion Rate</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-3xl font-bold text-blue-600">{stats.daysTracked}</p>
              <p className="text-sm text-gray-600">Days Tracked</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-3xl font-bold text-blue-600">{stats.avgMood}</p>
              <p className="text-sm text-gray-600">Avg Mood</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">Recent Achievements</h3>
            <div className="grid grid-cols-2 gap-4">
              {stats.streak >= 7 && (
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Award className="w-8 h-8 text-yellow-500" />
                  <div>
                    <p className="font-medium">7 Day Streak</p>
                    <p className="text-sm text-gray-600">Completed a week of tracking</p>
                  </div>
                </div>
              )}
              {stats.journalEntries >= 5 && (
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Calendar className="w-8 h-8 text-green-500" />
                  <div>
                    <p className="font-medium">Regular Journal</p>
                    <p className="text-sm text-gray-600">5 entries this week</p>
                  </div>
                </div>
              )}
              {stats.streak === 0 && stats.journalEntries === 0 && (
                <div className="col-span-2 text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">Complete activities to earn achievements!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}