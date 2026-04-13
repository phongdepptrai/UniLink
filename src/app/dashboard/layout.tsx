"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    // Tribbie dùng cái này để lấy đường dẫn hiện tại nè!
    const pathname = usePathname();

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
                                href="/dashboard/schools"
                            >
                                Schools
                            </Link>
                            <Link
                                className="text-slate-500 dark:text-slate-400 hover:text-[#031635] font-manrope font-bold tracking-tight transition-colors"
                                href="/dashboard/rooms"
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
                        {/* Nút General */}
                        <Link
                            href="/dashboard"
                            className={`p-3 flex items-center gap-3 transition-all cursor-pointer active:opacity-80 rounded-xl ${pathname === "/dashboard" ? "bg-[#e0e3e5] dark:bg-slate-800 text-[#031635] dark:text-[#3afea0] font-bold" : "text-slate-600 dark:text-slate-400 hover:bg-[#e0e3e5] dark:hover:bg-slate-800"}`}
                        >
                            <span
                                className="material-symbols-outlined"
                                data-icon="forum"
                                style={
                                    pathname === "/dashboard"
                                        ? { fontVariationSettings: "'FILL' 1" }
                                        : {}
                                }
                            >
                                forum
                            </span>
                            <span>General</span>
                        </Link>

                        {/* Nút Study */}
                        <Link
                            href="/dashboard/study"
                            className={`p-3 flex items-center gap-3 transition-all cursor-pointer active:opacity-80 rounded-xl ${pathname === "/dashboard/study" ? "bg-[#e0e3e5] dark:bg-slate-800 text-[#031635] dark:text-[#3afea0] font-bold" : "text-slate-600 dark:text-slate-400 hover:bg-[#e0e3e5] dark:hover:bg-slate-800"}`}
                        >
                            <span
                                className="material-symbols-outlined"
                                data-icon="school"
                                style={
                                    pathname === "/dashboard/study"
                                        ? { fontVariationSettings: "'FILL' 1" }
                                        : {}
                                }
                            >
                                school
                            </span>
                            <span>Study</span>
                        </Link>

                        {/* Nút Confession */}
                        <Link
                            href="/dashboard/confession"
                            className={`p-3 flex items-center gap-3 transition-all cursor-pointer active:opacity-80 rounded-xl ${pathname === "/dashboard/confession" ? "bg-[#e0e3e5] dark:bg-slate-800 text-[#031635] dark:text-[#3afea0] font-bold" : "text-slate-600 dark:text-slate-400 hover:bg-[#e0e3e5] dark:hover:bg-slate-800"}`}
                        >
                            <span
                                className="material-symbols-outlined"
                                data-icon="favorite"
                                style={
                                    pathname === "/dashboard/confession"
                                        ? { fontVariationSettings: "'FILL' 1" }
                                        : {}
                                }
                            >
                                favorite
                            </span>
                            <span>Confession</span>
                        </Link>

                        {/* Nút Q&A */}
                        <Link
                            href="/dashboard/qa"
                            className={`p-3 flex items-center gap-3 transition-all cursor-pointer active:opacity-80 rounded-xl ${pathname === "/dashboard/qa" ? "bg-[#e0e3e5] dark:bg-slate-800 text-[#031635] dark:text-[#3afea0] font-bold" : "text-slate-600 dark:text-slate-400 hover:bg-[#e0e3e5] dark:hover:bg-slate-800"}`}
                        >
                            <span
                                className="material-symbols-outlined"
                                data-icon="help_center"
                                style={
                                    pathname === "/dashboard/qa"
                                        ? { fontVariationSettings: "'FILL' 1" }
                                        : {}
                                }
                            >
                                help_center
                            </span>
                            <span>Q&A</span>
                        </Link>
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
                        <Link
                            href="/dashboard/setting"
                            className={`p-3 flex items-center gap-3 transition-all cursor-pointer active:opacity-80 rounded-xl ${pathname === "/dashboard/setting" ? "bg-[#e0e3e5] dark:bg-slate-800 text-[#031635] dark:text-[#3afea0] font-bold" : "text-slate-600 dark:text-slate-400 hover:bg-[#e0e3e5] dark:hover:bg-slate-800"}`}
                        >
                            <span
                                className="material-symbols-outlined"
                                data-icon="settings"
                                style={
                                    pathname === "/dashboard/setting"
                                        ? { fontVariationSettings: "'FILL' 1" }
                                        : {}
                                }
                            >
                                settings
                            </span>
                            <span>Settings</span>
                        </Link>
                        <Link
                            href="/dashboard/support"
                            className={`p-3 flex items-center gap-3 transition-all cursor-pointer active:opacity-80 rounded-xl ${pathname === "/dashboard/support" ? "bg-[#e0e3e5] dark:bg-slate-800 text-[#031635] dark:text-[#3afea0] font-bold" : "text-slate-600 dark:text-slate-400 hover:bg-[#e0e3e5] dark:hover:bg-slate-800"}`}
                        >
                            <span
                                className="material-symbols-outlined"
                                data-icon="contact_support"
                                style={
                                    pathname === "/dashboard/support"
                                        ? { fontVariationSettings: "'FILL' 1" }
                                        : {}
                                }
                            >
                                contact_support
                            </span>
                            <span>Support</span>
                        </Link>
                    </div>
                </aside>

                <main className="flex-1 overflow-y-auto bg-surface-container-low p-6 md:p-10">
                    {children}
                </main>
            </div>

            {/* Mobile Navigation */}
            <nav className="md:hidden fixed bottom-0 w-full bg-slate-50/60 backdrop-blur-xl flex justify-around items-center py-3 z-50">
                <Link
                    href="/dashboard"
                    className={`flex flex-col items-center gap-1 ${pathname === "/dashboard" ? "text-[#031635] dark:text-[#3afea0]" : "text-slate-500"}`}
                >
                    <span
                        className="material-symbols-outlined"
                        data-icon="forum"
                        style={
                            pathname === "/dashboard" ? { fontVariationSettings: "'FILL' 1" } : {}
                        }
                    >
                        forum
                    </span>
                    <span className={`text-[10px] ${pathname === "/dashboard" ? "font-bold" : ""}`}>
                        General
                    </span>
                </Link>

                <Link
                    href="/dashboard/study"
                    className={`flex flex-col items-center gap-1 ${pathname === "/dashboard/study" ? "text-[#031635] dark:text-[#3afea0]" : "text-slate-500"}`}
                >
                    <span
                        className="material-symbols-outlined"
                        data-icon="school"
                        style={
                            pathname === "/dashboard/study"
                                ? { fontVariationSettings: "'FILL' 1" }
                                : {}
                        }
                    >
                        school
                    </span>
                    <span
                        className={`text-[10px] ${pathname === "/dashboard/study" ? "font-bold" : ""}`}
                    >
                        Study
                    </span>
                </Link>

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

                <Link
                    href="/dashboard/confession"
                    className={`flex flex-col items-center gap-1 ${pathname === "/dashboard/confession" ? "text-[#031635] dark:text-[#3afea0]" : "text-slate-500"}`}
                >
                    <span
                        className="material-symbols-outlined"
                        data-icon="favorite"
                        style={
                            pathname === "/dashboard/confession"
                                ? { fontVariationSettings: "'FILL' 1" }
                                : {}
                        }
                    >
                        favorite
                    </span>
                    <span
                        className={`text-[10px] ${pathname === "/dashboard/confession" ? "font-bold" : ""}`}
                    >
                        Confession
                    </span>
                </Link>

                <Link
                    href="/dashboard/qa"
                    className={`flex flex-col items-center gap-1 ${pathname === "/dashboard/qa" ? "text-[#031635] dark:text-[#3afea0]" : "text-slate-500"}`}
                >
                    <span
                        className="material-symbols-outlined"
                        data-icon="help_center"
                        style={
                            pathname === "/dashboard/qa"
                                ? { fontVariationSettings: "'FILL' 1" }
                                : {}
                        }
                    >
                        help_center
                    </span>
                    <span
                        className={`text-[10px] ${pathname === "/dashboard/qa" ? "font-bold" : ""}`}
                    >
                        Q&amp;A
                    </span>
                </Link>
            </nav>
        </div>
    );
}
