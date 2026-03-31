import Link from 'next/link';

interface MobileNavBarProps {
  activeTab?: string;
}

export default function MobileNavBar({ activeTab = 'General' }: MobileNavBarProps) {
  const tabs = [
    { name: 'General', icon: 'forum', activeIcon: 'forum' },
    { name: 'Study', icon: 'school', activeIcon: 'school' },
    { name: 'Confession', icon: 'favorite', activeIcon: 'favorite' },
    { name: 'Q&A', icon: 'help_center', activeIcon: 'help_center' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-xl border-t border-slate-200/20 px-6 py-3 flex justify-between items-center z-50">
      {tabs.map(tab => (
        <button key={tab.name} className="flex flex-col items-center gap-1 text-slate-500 hover:text-primary dark:hover:text-secondary-container transition-colors">
          <span className="material-symbols-outlined" style={activeTab === tab.name ? { fontVariationSettings: "'FILL' 1", color: 'var(--color-primary)' } : {}}>{tab.activeIcon}</span>
          <span className={`text-[10px] ${activeTab === tab.name ? 'font-bold text-primary dark:text-secondary-container' : 'font-medium'}`}>{tab.name}</span>
        </button>
      ))}
      <button className="flex flex-col items-center gap-1 text-slate-500 hover:text-primary dark:hover:text-secondary-container transition-colors">
        <span className="material-symbols-outlined">account_circle</span>
        <span className={`text-[10px] font-medium`}>Profile</span>
      </button>
    </nav>
  );
}
