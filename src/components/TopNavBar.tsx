import Link from 'next/link';
import Image from 'next/image';

interface TopNavBarProps {
  activePage?: string;
  transparent?: boolean;
}

export default function TopNavBar({ activePage, transparent = false }: TopNavBarProps) {
  return (
    <header className={`fixed top-0 w-full z-50 ${transparent ? 'bg-slate-50/60 dark:bg-slate-900/60 backdrop-blur-xl shadow-sm dark:shadow-none' : 'glass-nav bg-slate-50/60 dark:bg-slate-900/60 backdrop-blur-xl shadow-sm dark:shadow-none'} flex justify-between items-center px-6 py-3`}>
      <div className="flex items-center gap-8">
        <span className="text-xl font-black text-primary dark:text-secondary-container font-headline tracking-tight">AnonEdu</span>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/schools" className={`text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-secondary-container font-headline font-bold tracking-tight transition-colors ${activePage === 'Schools' ? 'text-primary dark:text-secondary-container border-b-2 border-secondary-container pb-1' : ''}`}>
            Schools
          </Link>
          <Link href="/rooms" className={`text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-secondary-container font-headline font-bold tracking-tight transition-colors ${activePage === 'Rooms' ? 'text-primary dark:text-secondary-container border-b-2 border-secondary-container pb-1' : ''}`}>
            Rooms
          </Link>
          {activePage && activePage !== 'Schools' && activePage !== 'Rooms' && activePage !== 'Profile' && (
            <span className="text-primary dark:text-secondary-container border-b-2 border-secondary-container pb-1 font-headline font-bold tracking-tight">
              {activePage}
            </span>
          )}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center bg-surface-container-low px-4 py-1.5 rounded-full border border-outline-variant/20">
          <span className="material-symbols-outlined text-outline text-sm mr-2">search</span>
          <input className="bg-transparent border-none focus:ring-0 text-sm w-48 font-body" placeholder="Search..." type="text" />
        </div>
        <button className="p-2 hover:bg-slate-200/50 dark:hover:bg-slate-700/50 rounded-full transition-colors active:scale-95 duration-200">
          <span className="material-symbols-outlined text-primary dark:text-secondary-container">notifications</span>
        </button>
        <button className="p-2 hover:bg-slate-200/50 dark:hover:bg-slate-700/50 rounded-full transition-colors active:scale-95 duration-200 md:hidden">
          <span className="material-symbols-outlined text-primary dark:text-secondary-container">account_circle</span>
        </button>
        <div className="hidden md:block w-8 h-8 rounded-full overflow-hidden border border-secondary relative">
          <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkan_mF5X94fDs35VSALQqJzzlPJmESd3wL5To3F-6UUOk5lH3BgS4ge0JWThl-hewVKTqHVZCb_U6mBIeL1M5gA2eDw0hXd3XLs7CRz9o4rHtutIhzYkR4fm3PO-Tcsya64yjTfnZf8esASP8Zj6wE-XUuC7Ase2lz41TZO_xxJWQcbyeMfDEbzElOzp-RRqmJXQe8K7Xb7BcpqN4waoEL9MZ68KgIKv2d3izXdt4GOJ8i4Xi-lGEKFUykAPpfwHIHoW9HT5ev-w" alt="Anonymous student user avatar" fill className="object-cover" unoptimized />
        </div>
      </div>
    </header>
  );
}
