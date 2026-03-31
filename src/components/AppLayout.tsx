import TopNavBar from './TopNavBar';
import SideNavBar from './SideNavBar';
import MobileNavBar from './MobileNavBar';

interface AppLayoutProps {
  children: React.ReactNode;
  activePage?: string;
  activeTab?: string;
}

export default function AppLayout({ children, activePage, activeTab }: AppLayoutProps) {
  return (
    <div className="bg-surface text-on-surface font-body antialiased overflow-hidden min-h-screen">
      <TopNavBar activePage={activePage} />
      <div className="flex h-screen pt-16 overflow-hidden">
        <SideNavBar activeTab={activeTab} />
        <main className="flex-1 lg:ml-64 flex flex-col bg-surface overflow-hidden relative">
          {children}
        </main>
      </div>
      <MobileNavBar activeTab={activeTab} />
    </div>
  );
}
