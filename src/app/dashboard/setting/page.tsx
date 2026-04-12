"use client";

import React, { useCallback } from "react";
import Link from "next/link";

export default function SettingPage() {
    // Hàm xử lý cuộn mượt mà đến các section (bù trừ độ cao của header)
    const scrollToSection = useCallback((id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    }, []);

    return (
        <div className="bg-surface text-on-surface min-h-screen flex flex-col overflow-x-hidden">
            {/* --- HEADER (Giữ nguyên từ Dashboard) --- */}
            <header className="fixed top-0 w-full z-50 bg-slate-50/60 dark:bg-slate-900/60 backdrop-blur-xl shadow-sm dark:shadow-none">
                <div className="flex justify-between items-center px-6 py-3 w-full">
                    <div className="flex items-center gap-8">
                        <span className="text-xl font-black text-[#031635] dark:text-[#3afea0] font-manrope font-bold tracking-tight">
                            AnonEdu
                        </span>
                        <nav className="hidden md:flex gap-6">
                            <Link
                                className="text-[#031635] dark:text-[#3afea0] border-b-2 border-[#3afea0] pb-1 font-manrope font-bold tracking-tight"
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
                        <div className="relative hidden sm:block">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">
                                search
                            </span>
                            <input
                                className="bg-surface-container-lowest border-none rounded-xl pl-10 pr-4 py-2 text-sm w-64 focus:ring-2 focus:ring-secondary-container transition-all outline-none"
                                placeholder="Search settings..."
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
                {/* --- MENU TRÁI (Giữ nguyên form Dashboard, đổi active state sang Settings) --- */}
                <aside className="hidden md:flex flex-col h-full w-64 p-4 space-y-2 bg-[#f2f4f6] dark:bg-slate-900 font-inter text-sm font-medium">
                    <div className="px-4 py-6 mb-4">
                        <h2 className="text-lg font-bold text-[#031635] dark:text-[#3afea0]">
                            Student Sanctuary
                        </h2>
                        <p className="text-xs opacity-60">Vibrant & Anonymous</p>
                    </div>
                    <nav className="flex-1 space-y-1">
                        <Link
                            href="/dashboard"
                            className="text-slate-600 dark:text-slate-400 p-3 flex items-center gap-3 hover:bg-[#e0e3e5] dark:hover:bg-slate-800 transition-all cursor-pointer active:opacity-80 rounded-xl"
                        >
                            <span className="material-symbols-outlined" data-icon="forum">
                                forum
                            </span>
                            <span>General</span>
                        </Link>
                        <div className="text-slate-600 dark:text-slate-400 p-3 flex items-center gap-3 hover:bg-[#e0e3e5] dark:hover:bg-slate-800 transition-all cursor-pointer active:opacity-80 rounded-xl">
                            <span className="material-symbols-outlined" data-icon="school">
                                school
                            </span>
                            <span>Study</span>
                        </div>
                        <div className="text-slate-600 dark:text-slate-400 p-3 flex items-center gap-3 hover:bg-[#e0e3e5] dark:hover:bg-slate-800 transition-all cursor-pointer active:opacity-80 rounded-xl">
                            <span className="material-symbols-outlined" data-icon="favorite">
                                favorite
                            </span>
                            <span>Confession</span>
                        </div>
                        <div className="text-slate-600 dark:text-slate-400 p-3 flex items-center gap-3 hover:bg-[#e0e3e5] dark:hover:bg-slate-800 transition-all cursor-pointer active:opacity-80 rounded-xl">
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
                        {/* Nút Settings được bôi đậm (Active) */}
                        <Link
                            href="/dashboard/setting"
                            className="bg-[#e0e3e5] dark:bg-slate-800 text-[#031635] dark:text-[#3afea0] p-3 flex items-center gap-3 cursor-pointer active:opacity-80 rounded-xl font-bold"
                        >
                            <span
                                className="material-symbols-outlined"
                                data-icon="settings"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                                settings
                            </span>
                            <span>Settings</span>
                        </Link>
                        <div className="text-slate-600 dark:text-slate-400 p-3 flex items-center gap-3 hover:bg-[#e0e3e5] dark:hover:bg-slate-800 transition-all cursor-pointer rounded-xl">
                            <span className="material-symbols-outlined" data-icon="contact_support">
                                contact_support
                            </span>
                            <span>Support</span>
                        </div>
                    </div>
                </aside>

                {/* --- MAIN CONTENT (Nội dung Setting mới) --- */}
                <main className="flex-1 overflow-y-auto bg-surface-container-low p-6 md:p-10 scroll-smooth">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
                        {/* Sub-nav cuộn mượt cho Settings (Sticky) */}
                        <nav className="w-full lg:w-64 shrink-0 space-y-1 sticky top-0 bg-surface-container-low z-10 py-2 lg:py-0">
                            <div className="mb-6 hidden lg:block">
                                <h1 className="text-3xl font-extrabold font-headline text-primary tracking-tight mb-2">
                                    Settings
                                </h1>
                                <p className="text-sm text-on-surface-variant">
                                    Customize your sanctuary experience
                                </p>
                            </div>
                            <button
                                onClick={() => scrollToSection("section-profile")}
                                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary dark:bg-primary-container dark:text-on-primary-container font-bold text-sm transition-colors text-left"
                            >
                                <span className="material-symbols-outlined">person</span>
                                Profile
                            </button>
                            <button
                                onClick={() => scrollToSection("section-security")}
                                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-highest font-medium text-sm transition-colors text-left"
                            >
                                <span className="material-symbols-outlined">lock</span>
                                Security & Account
                            </button>
                            <button
                                onClick={() => scrollToSection("section-appearance")}
                                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-highest font-medium text-sm transition-colors text-left"
                            >
                                <span className="material-symbols-outlined">palette</span>
                                Appearance
                            </button>
                            <button
                                onClick={() => scrollToSection("section-notifications")}
                                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-highest font-medium text-sm transition-colors text-left"
                            >
                                <span className="material-symbols-outlined">notifications</span>
                                Notifications
                            </button>
                        </nav>

                        {/* Vùng chứa các thẻ Settings */}
                        <div className="flex-1 space-y-8 pb-32 w-full">
                            {/* SECTION: PROFILE */}
                            <section
                                id="section-profile"
                                className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/10 scroll-mt-6"
                            >
                                <h3 className="block text-xl font-bold text-primary mb-6 flex items-center gap-2">
                                    <span className="material-symbols-outlined">badge</span>
                                    Basic Information
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <div className="space-y-2">
                                        <label
                                            className="text-sm font-semibold text-on-surface-variant px-1"
                                            htmlFor="name"
                                        >
                                            Name
                                        </label>
                                        <input
                                            className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all outline-none text-on-surface"
                                            id="name"
                                            type="text"
                                            defaultValue="Vũ Huy Khánh"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            className="text-sm font-semibold text-on-surface-variant px-1"
                                            htmlFor="username"
                                        >
                                            Username
                                        </label>
                                        <input
                                            className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all outline-none text-on-surface"
                                            id="username"
                                            type="text"
                                            defaultValue="@vhkhanh06"
                                        />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label
                                            className="text-sm font-semibold text-on-surface-variant px-1"
                                            htmlFor="bio"
                                        >
                                            Bio
                                        </label>
                                        <textarea
                                            className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all outline-none text-on-surface min-h-[100px] resize-none"
                                            id="bio"
                                            placeholder="Tell the sanctuary about yourself..."
                                            defaultValue="Information Technology student at UET. Passionate about software dev & building cool things like Glass launcher."
                                        ></textarea>
                                    </div>
                                </div>

                                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">
                                    Intellectual Focus Areas
                                </label>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container font-bold text-xs flex items-center gap-2">
                                        C++ / TS / React
                                        <button className="material-symbols-outlined text-sm leading-none">
                                            close
                                        </button>
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <button className="px-3 py-1.5 rounded-full bg-surface-container text-on-secondary-container font-medium text-xs hover:bg-surface-container-high transition-colors">
                                        Competitive Programming
                                    </button>
                                    <button className="px-3 py-1.5 rounded-full bg-surface-container text-on-secondary-container font-medium text-xs hover:bg-surface-container-high transition-colors">
                                        Game Dev
                                    </button>
                                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
                                        <span className="material-symbols-outlined text-sm">
                                            add
                                        </span>
                                    </button>
                                </div>
                            </section>

                            {/* SECTION: SECURITY & ACCOUNT */}
                            <section
                                id="section-security"
                                className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/10 scroll-mt-6"
                            >
                                <h3 className="block text-xl font-bold text-primary mb-6 flex items-center gap-2">
                                    <span className="material-symbols-outlined">security</span>
                                    Security & Account
                                </h3>

                                <div className="bg-on-tertiary-container/5 border border-tertiary/20 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                                    <div className="flex items-center gap-4 text-center md:text-left">
                                        <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary shrink-0">
                                            <span className="material-symbols-outlined text-2xl">
                                                emergency_home
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-on-surface">
                                                UET Email Verification
                                            </h4>
                                            <p className="text-sm text-on-surface-variant">
                                                Your @vnu.edu.vn email verification is pending.
                                                Please resolve to join exclusive rooms.
                                            </p>
                                        </div>
                                    </div>
                                    <button className="bg-tertiary text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-tertiary/20 hover:scale-105 transition-transform shrink-0">
                                        Verify Now
                                    </button>
                                </div>
                            </section>

                            {/* SECTION: APPEARANCE */}
                            <section
                                id="section-appearance"
                                className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/10 scroll-mt-6"
                            >
                                <h3 className="block text-xl font-bold text-primary mb-6 flex items-center gap-2">
                                    <span className="material-symbols-outlined">palette</span>
                                    Appearance
                                </h3>

                                <div className="flex items-center justify-between p-4 hover:bg-surface-container rounded-2xl transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-secondary-container rounded-xl text-on-secondary-container">
                                            <span className="material-symbols-outlined">
                                                dark_mode
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-primary">Dark Mode</p>
                                            <p className="text-xs opacity-60">
                                                Enable dark theme across AnonEdu
                                            </p>
                                        </div>
                                    </div>
                                    {/* Switch On */}
                                    <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION: NOTIFICATIONS */}
                            <section
                                id="section-notifications"
                                className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/10 scroll-mt-6"
                            >
                                <h3 className="block text-xl font-bold text-primary mb-6 flex items-center gap-2">
                                    <span className="material-symbols-outlined">
                                        notifications_active
                                    </span>
                                    Notifications
                                </h3>

                                <div className="flex items-center justify-between p-4 hover:bg-surface-container rounded-2xl transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-tertiary-container rounded-xl text-on-tertiary-container">
                                            <span className="material-symbols-outlined">forum</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-primary">
                                                Discussion Alerts
                                            </p>
                                            <p className="text-xs opacity-60">
                                                Push alerts for new discussions & replies
                                            </p>
                                        </div>
                                    </div>
                                    {/* Switch Off */}
                                    <div className="w-12 h-6 bg-slate-300 dark:bg-slate-700 rounded-full relative cursor-pointer">
                                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                    </div>
                                </div>
                            </section>

                            {/* Save Actions */}
                            <div className="flex justify-end gap-3 pt-6">
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

            {/* --- MENU MOBILE (Giữ nguyên từ Dashboard) --- */}
            <nav className="md:hidden fixed bottom-0 w-full bg-slate-50/60 backdrop-blur-xl flex justify-around items-center py-3 z-50">
                <Link href="/dashboard" className="flex flex-col items-center gap-1 text-slate-500">
                    <span className="material-symbols-outlined" data-icon="forum">
                        forum
                    </span>
                    <span className="text-[10px]">General</span>
                </Link>
                <div className="flex flex-col items-center gap-1 text-slate-500">
                    <span className="material-symbols-outlined" data-icon="school">
                        school
                    </span>
                    <span className="text-[10px]">Study</span>
                </div>
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
                <Link
                    href="/dashboard/setting"
                    className="flex flex-col items-center gap-1 text-[#031635] dark:text-[#3afea0]"
                >
                    <span
                        className="material-symbols-outlined"
                        data-icon="settings"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                        settings
                    </span>
                    <span className="text-[10px] font-bold">Settings</span>
                </Link>
            </nav>
        </div>
    );
}
