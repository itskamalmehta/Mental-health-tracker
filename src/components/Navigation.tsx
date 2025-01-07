import React from 'react';
import { Activity, BookHeart, BarChart3, Calendar } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const tabs = [
    { id: 'dashboard', icon: <Activity />, label: 'Dashboard' },
    { id: 'journal', icon: <BookHeart />, label: 'Journal' },
    { id: 'assessments', icon: <Calendar />, label: 'Assessments' },
    { id: 'progress', icon: <BarChart3 />, label: 'Progress' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
      <div className="max-w-screen-xl mx-auto flex justify-around items-center">
        {tabs.map(tab => (
          <NavItem 
            key={tab.id}
            icon={tab.icon} 
            label={tab.label} 
            active={activeTab === tab.id}
            onClick={() => onTabChange(tab.id)}
          />
        ))}
      </div>
    </nav>
  );
}

function NavItem({ 
  icon, 
  label, 
  active = false, 
  onClick 
}: { 
  icon: React.ReactNode; 
  label: string; 
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center space-y-1 ${
        active ? 'text-blue-600' : 'text-gray-600'
      } transition-colors hover:text-blue-500`}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}