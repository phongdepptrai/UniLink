import React from "react";
import Link from "next/link";
import { UniversityCard, UniversityCardProps } from "@/components/UniversityCard";

const universities: UniversityCardProps[] = [
  {
    name: "University of Science",
    description: "Connect with fellow tech enthusiasts and engineers. Sharing solutions and lab pain.",
    icon: "account_balance",
    tags: ["Tech", "Hanoi"],
    activeCount: "1.2k active",
    iconContainerClass: "bg-primary text-on-primary",
    activeCountClass: "bg-secondary-container text-on-secondary-container",
    activeCountDotClass: "bg-secondary animate-pulse",
  },
  {
    name: "Academy of Arts",
    description: "A haven for creators. Discuss portfolios, exhibitions, and late-night studio sessions.",
    icon: "palette",
    tags: ["Creative", "Saigon"],
    activeCount: "843 active",
    iconContainerClass: "bg-secondary-container text-on-secondary-container",
    activeCountClass: "bg-surface-container-high text-on-surface-variant",
    activeCountDotClass: "bg-outline",
  },
  {
    name: "Law University",
    description: "Cases, moot courts, and existential dread. The safe place for future attorneys.",
    icon: "gavel",
    tags: ["Law", "Hue"],
    activeCount: "512 active",
    iconContainerClass: "bg-primary-container text-on-primary-container",
    activeCountClass: "bg-secondary-container text-on-secondary-container",
    activeCountDotClass: "bg-secondary",
    className: "lg:col-span-1",
  },
  {
    name: "Medical University",
    description: "Anatomy, endless coffee, and rotation diaries. For those who study while others sleep.",
    icon: "medical_services",
    tags: ["Med", "National"],
    activeCount: "2.1k active",
    iconContainerClass: "bg-on-tertiary-container/10 text-on-tertiary-container",
    activeCountClass: "bg-surface-container-high text-on-surface-variant",
    activeCountDotClass: "bg-outline",
  },
  {
    name: "Foreign Languages",
    description: "Multilingual confessions and study tips. Practicing fluency through anonymous chat.",
    icon: "language",
    tags: ["Lang", "Da Nang"],
    activeCount: "1.5k active",
    iconContainerClass: "bg-secondary-fixed-dim/20 text-secondary",
    activeCountClass: "bg-surface-container-high text-on-surface-variant",
    activeCountDotClass: "bg-outline",
  },
  {
    name: "National Economics",
    description: "Market trends and macro-headaches. Connect with future business leaders.",
    icon: "business_center",
    tags: ["Biz", "Global"],
    activeCount: "3k active",
    iconContainerClass: "bg-outline-variant/20 text-outline",
    activeCountClass: "bg-secondary-container text-on-secondary-container",
    activeCountDotClass: "bg-secondary",
  },
];

export default function Dashboard() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col overflow-x-hidden">
      <header className="fixed top-0 w-full z-50 bg-slate-50/60 dark:bg-slate-900/60 backdrop-blur-xl shadow-sm dark:shadow-none">
        <div className="flex justify-between items-center px-6 py-3 w-full">
          <div className="flex items-center gap-8">
            <span className="text-xl font-black text-[#031635] dark:text-[#3afea0] font-manrope font-bold tracking-tight">
              AnonEdu
            </span>
            <nav className="hidden md:flex gap-6">
              <Link
                className="text-[#031635] dark:text-[#3afea0] border-b-2 border-[#3afea0] pb-1 font-manrope font-bold tracking-tight"
                href="#"
              >
                Schools
              </Link>
              <Link
                className="text-slate-500 dark:text-slate-400 hover:text-[#031635] font-manrope font-bold tracking-tight transition-colors"
                href="#"
              >
                Rooms
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">
                search
              </span>
              <input
                className="bg-surface-container-lowest border-none rounded-xl pl-10 pr-4 py-2 text-sm w-64 focus:ring-2 focus:ring-secondary-container transition-all outline-none"
                placeholder="Search schools..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-2">
              <button
                className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors active:scale-95 duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label="Notifications"
              >
                <span
                  className="material-symbols-outlined text-[#031635] dark:text-[#3afea0]"
                  data-icon="notifications"
                >
                  notifications
                </span>
              </button>
              <button
                className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors active:scale-95 duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label="User profile"
              >
                <span
                  className="material-symbols-outlined text-[#031635] dark:text-[#3afea0]"
                  data-icon="account_circle"
                >
                  account_circle
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="flex pt-16 h-screen overflow-hidden">
        <aside className="hidden md:flex flex-col h-full w-64 p-4 space-y-2 bg-[#f2f4f6] dark:bg-slate-900 font-inter text-sm font-medium">
          <div className="px-4 py-6 mb-4">
            <h2 className="text-lg font-bold text-[#031635] dark:text-[#3afea0]">
              Student Sanctuary
            </h2>
            <p className="text-xs opacity-60">Vibrant & Anonymous</p>
          </div>
          <nav className="flex-1 space-y-1">
            <div className="bg-[#e0e3e5] dark:bg-slate-800 text-[#031635] dark:text-[#3afea0] rounded-xl font-bold p-3 flex items-center gap-3 cursor-pointer active:opacity-80 transition-all">
              <span
                className="material-symbols-outlined"
                data-icon="forum"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                forum
              </span>
              <span>General</span>
            </div>
            <div className="text-slate-600 dark:text-slate-400 p-3 flex items-center gap-3 hover:bg-[#e0e3e5] dark:hover:bg-slate-800 transition-all cursor-pointer active:opacity-80">
              <span className="material-symbols-outlined" data-icon="school">
                school
              </span>
              <span>Study</span>
            </div>
            <div className="text-slate-600 dark:text-slate-400 p-3 flex items-center gap-3 hover:bg-[#e0e3e5] dark:hover:bg-slate-800 transition-all cursor-pointer active:opacity-80">
              <span className="material-symbols-outlined" data-icon="favorite">
                favorite
              </span>
              <span>Confession</span>
            </div>
            <div className="text-slate-600 dark:text-slate-400 p-3 flex items-center gap-3 hover:bg-[#e0e3e5] dark:hover:bg-slate-800 transition-all cursor-pointer active:opacity-80">
              <span className="material-symbols-outlined" data-icon="help_center">
                help_center
              </span>
              <span>Q&A</span>
            </div>
          </nav>
          <Link
            href="/dashboard/chat"
            className="mt-auto mb-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold py-3 px-4 rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all active:scale-95"
            id="new-discussion-btn"
          >
            <span className="material-symbols-outlined" data-icon="add">
              add
            </span>
            <span>New Discussion</span>
          </Link>
          <div className="border-t border-outline-variant/20 pt-4 space-y-1">
            <div className="text-slate-600 dark:text-slate-400 p-3 flex items-center gap-3 hover:bg-[#e0e3e5] dark:hover:bg-slate-800 transition-all cursor-pointer">
              <span className="material-symbols-outlined" data-icon="settings">
                settings
              </span>
              <span>Settings</span>
            </div>
            <div className="text-slate-600 dark:text-slate-400 p-3 flex items-center gap-3 hover:bg-[#e0e3e5] dark:hover:bg-slate-800 transition-all cursor-pointer">
              <span
                className="material-symbols-outlined"
                data-icon="contact_support"
              >
                contact_support
              </span>
              <span>Support</span>
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-y-auto bg-surface-container-low p-6 md:p-10">
          <div className="max-w-6xl mx-auto">
            <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-4xl font-extrabold font-headline text-primary tracking-tight mb-2">
                  Discovery Hub
                </h1>
                <p className="text-on-surface-variant text-lg max-w-xl">
                  Find your community. Connect anonymously with peers from your
                  campus and beyond.
                </p>
              </div>
              <div className="flex gap-2 p-1 bg-surface-container-highest rounded-full">
                <button className="px-6 py-2 bg-surface-container-lowest text-primary font-bold rounded-full shadow-sm">
                  Trending
                </button>
                <button className="px-6 py-2 text-on-surface-variant hover:text-primary transition-colors">
                  Nearby
                </button>
                <button className="px-6 py-2 text-on-surface-variant hover:text-primary transition-colors">
                  Recent
                </button>
              </div>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {universities.map((uni, idx) => (
                <UniversityCard key={idx} {...uni} />
              ))}

              <div className="md:col-span-2 lg:col-span-3 bg-primary rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
                <div className="relative z-10 text-center md:text-left mb-6 md:mb-0">
                  <h2 className="text-3xl font-black text-on-primary font-headline mb-4">
                    Can&apos;t find your school?
                  </h2>
                  <p className="text-on-primary/70 text-lg max-w-md">
                    Launch a new sanctuary for your campus and invite your peers
                    to the discussion.
                  </p>
                  <button className="mt-8 bg-secondary-container text-on-secondary-container font-bold px-8 py-4 rounded-full flex items-center gap-3 hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-secondary-container/20">
                    <span
                      className="material-symbols-outlined"
                      data-icon="rocket_launch"
                    >
                      rocket_launch
                    </span>
                    Request New Space
                  </button>
                </div>
                <div className="relative z-10 flex gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center rotate-3 translate-y-4">
                      <span
                        className="material-symbols-outlined text-on-primary text-3xl opacity-50"
                        data-icon="school"
                      >
                        school
                      </span>
                    </div>
                    <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center -rotate-6">
                      <span
                        className="material-symbols-outlined text-on-primary text-3xl opacity-50"
                        data-icon="science"
                      >
                        science
                      </span>
                    </div>
                    <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center -rotate-3 translate-y-2">
                      <span
                        className="material-symbols-outlined text-on-primary text-3xl opacity-50"
                        data-icon="history_edu"
                      >
                        history_edu
                      </span>
                    </div>
                    <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center rotate-6 -translate-y-4">
                      <span
                        className="material-symbols-outlined text-on-primary text-3xl opacity-50"
                        data-icon="psychology"
                      >
                        psychology
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary-container/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <nav className="md:hidden fixed bottom-0 w-full bg-slate-50/60 backdrop-blur-xl flex justify-around items-center py-3 z-50">
        <div className="flex flex-col items-center gap-1 text-[#031635]">
          <span
            className="material-symbols-outlined"
            data-icon="forum"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            forum
          </span>
          <span className="text-[10px] font-bold">General</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-500">
          <span className="material-symbols-outlined" data-icon="school">
            school
          </span>
          <span className="text-[10px]">Study</span>
        </div>
        {/* New Discussion — mobile FAB */}
        <Link
          href="/dashboard/chat"
          className="flex flex-col items-center gap-1 -mt-8 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-full w-14 h-14 flex items-center justify-center shadow-lg shadow-primary/30 active:scale-95 transition-transform"
          id="new-discussion-mobile-btn"
        >
          <span className="material-symbols-outlined text-2xl" data-icon="add">
            add
          </span>
        </Link>
        <div className="flex flex-col items-center gap-1 text-slate-500">
          <span className="material-symbols-outlined" data-icon="favorite">
            favorite
          </span>
          <span className="text-[10px]">Confession</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-500">
          <span className="material-symbols-outlined" data-icon="help_center">
            help_center
          </span>
          <span className="text-[10px]">Q&amp;A</span>
        </div>
      </nav>
    </div>
  );
}
