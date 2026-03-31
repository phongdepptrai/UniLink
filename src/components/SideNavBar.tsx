import Link from 'next/link';

interface SideNavBarProps {
  activeTab?: string;
}

export default function SideNavBar({ activeTab = 'General' }: SideNavBarProps) {
  const tabs = [
    { name: 'General', icon: 'forum', activeIcon: 'forum' },
    { name: 'Study', icon: 'school', activeIcon: 'school' },
    { name: 'Confession', icon: 'favorite', activeIcon: 'favorite' },
    { name: 'Q&A', icon: 'help_center', activeIcon: 'help_center' },
  ];

  return (
    <aside className="hidden lg:flex flex-col h-full w-64 bg-[#f2f4f6] dark:bg-slate-900 p-4 space-y-2 border-r-0 font-inter text-sm font-medium z-40 fixed top-16 left-0 h-[calc(100vh-64px)]">
      <div className="px-3 py-4 mb-4">
        <h2 className="text-lg font-bold text-primary dark:text-secondary-container font-headline">Student Sanctuary</h2>
        <p className="text-xs text-slate-500 opacity-70">Vibrant & Anonymous</p>
      </div>
      <nav className="flex-1 space-y-1">
        {tabs.map(tab => (
          <div key={tab.name} className={`p-3 flex items-center gap-3 cursor-pointer transition-all rounded-xl font-medium ${activeTab === tab.name ? 'bg-[#e0e3e5] dark:bg-slate-800 text-primary dark:text-secondary-container font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-[#e0e3e5] dark:hover:bg-slate-800'}`}>
            <span className="material-symbols-outlined" style={activeTab === tab.name ? { fontVariationSettings: "'FILL' 1" } : {}}>{tab.activeIcon}</span>
            <span>{tab.name}</span>
          </div>
        ))}
      </nav>
      <button className="bg-primary-container text-on-primary-container font-bold py-3 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 active:opacity-80 transition-all mb-4 w-full">
        <span className="material-symbols-outlined text-sm">add_circle</span>
        New Discussion
      </button>
      <div className="pt-4 border-t border-outline-variant/30 space-y-1">
        <div className="text-slate-600 dark:text-slate-400 p-3 flex items-center gap-3 cursor-pointer hover:bg-[#e0e3e5] dark:hover:bg-slate-800 transition-all rounded-xl text-sm font-medium">
          <span className="material-symbols-outlined text-sm">settings</span>
          <span>Settings</span>
        </div>
        <div className="text-slate-600 dark:text-slate-400 p-3 flex items-center gap-3 cursor-pointer hover:bg-[#e0e3e5] dark:hover:bg-slate-800 transition-all rounded-xl text-sm font-medium">
          <span className="material-symbols-outlined text-sm">contact_support</span>
          <span>Support</span>
        </div>
      </div>
    </aside>
  );
}
