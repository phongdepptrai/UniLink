"use client";

import React from "react";
import Link from "next/link";

export default function SettingPage() {
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
                className="text-slate-500 dark:text-slate-400 hover:text-[#031635] font-manrope font-bold tracking-tight transition-colors"
                href="/dashboard"
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
            <div className="flex items-center gap-2">
              <button
                className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors active:scale-95 duration-200"
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
                className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors active:scale-95 duration-200"
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
              Settings
            </h2>
            <p className="text-xs opacity-60">Manage your anonymous identity</p>
          </div>
          <nav className="flex-1 space-y-1">
            <Link href="/dashboard" className="text-slate-600 dark:text-slate-400 p-3 flex items-center gap-3 hover:bg-[#e0e3e5] dark:hover:bg-slate-800 transition-all cursor-pointer rounded-xl">
              <span className="material-symbols-outlined">dashboard</span>
              <span>Back to Dashboard</span>
            </Link>
            <div className="bg-[#e0e3e5] dark:bg-slate-800 text-[#031635] dark:text-[#3afea0] rounded-xl font-bold p-3 flex items-center gap-3 cursor-pointer">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
              <span>Profile</span>
            </div>
            <div className="text-slate-600 dark:text-slate-400 p-3 flex items-center gap-3 hover:bg-[#e0e3e5] dark:hover:bg-slate-800 transition-all cursor-pointer rounded-xl">
              <span className="material-symbols-outlined">security</span>
              <span>Security</span>
            </div>
            <div className="text-slate-600 dark:text-slate-400 p-3 flex items-center gap-3 hover:bg-[#e0e3e5] dark:hover:bg-slate-800 transition-all cursor-pointer rounded-xl">
              <span className="material-symbols-outlined">palette</span>
              <span>Appearance</span>
            </div>
          </nav>
        </aside>

        <main className="flex-1 overflow-y-auto bg-surface-container-low p-6 md:p-10">
          <div className="max-w-4xl mx-auto">
            <header className="mb-10">
              <h1 className="text-4xl font-extrabold font-headline text-primary tracking-tight mb-2">
                Account Settings
              </h1>
              <p className="text-on-surface-variant text-lg">
                Customize your appearance and security preferences.
              </p>
            </header>

            <div className="space-y-8">
              {/* Profile Section */}
              <section className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/10 shadow-sm transition-all hover:shadow-md">
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined">badge</span>
                  Anonymous Profile
                </h3>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="relative group">
                    <div className="w-24 h-24 rounded-2xl bg-primary-container flex items-center justify-center text-on-primary-container text-4xl font-bold">
                      A
                    </div>
                    <button className="absolute -bottom-2 -right-2 p-2 bg-primary text-on-primary rounded-xl shadow-lg scale-0 group-hover:scale-100 transition-transform">
                      <span className="material-symbols-outlined text-sm">edit</span>
                    </button>
                  </div>
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <div className="space-y-2">
                      <label className="text-sm font-bold opacity-60 ml-1">Display Name</label>
                      <input 
                        type="text" 
                        defaultValue="Anonymous Scholar"
                        className="w-full bg-surface-container text-primary font-bold px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-primary outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold opacity-60 ml-1">Primary Institution</label>
                      <div className="w-full bg-surface-container-high text-primary/80 font-medium px-4 py-3 rounded-xl flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">school</span>
                        University of Science
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Preferences Section */}
              <section className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/10 shadow-sm transition-all hover:shadow-md">
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined">tune</span>
                  Preferences
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 hover:bg-surface-container rounded-2xl transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-secondary-container rounded-xl text-on-secondary-container">
                        <span className="material-symbols-outlined">dark_mode</span>
                      </div>
                      <div>
                        <p className="font-bold text-primary">Dark Mode</p>
                        <p className="text-xs opacity-60">Enable dark theme across the app</p>
                      </div>
                    </div>
                    <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 hover:bg-surface-container rounded-2xl transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-tertiary-container rounded-xl text-on-tertiary-container">
                        <span className="material-symbols-outlined">notifications_active</span>
                      </div>
                      <div>
                        <p className="font-bold text-primary">Notifications</p>
                        <p className="text-xs opacity-60">Push alerts for new discussions</p>
                      </div>
                    </div>
                    <div className="w-12 h-6 bg-slate-300 dark:bg-slate-700 rounded-full relative cursor-pointer">
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Actions */}
              <div className="flex justify-end gap-3">
                <button className="px-6 py-3 font-bold text-slate-500 hover:text-primary transition-colors">
                  Discard Changes
                </button>
                <button className="px-8 py-3 bg-primary text-on-primary font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all active:scale-95">
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
