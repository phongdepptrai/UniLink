"use client";

import React, { useCallback } from "react";

export default function SettingPage() {
    // Scroll handler: Use scrollIntoView to completely fix scrolling issues in hidden containers
    const scrollToSection = useCallback((id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, []);

    return (
        /* Padding adjustments!
           - Removed left padding (pl-0 on mobile, pl-2 on large screens) to stick Nav close to Dashboard.
           - Kept top/bottom and right padding so content doesn't stick to screen edges.
        */
        <main className="flex-1 bg-surface-container-low py-4 pr-4 pl-0 md:py-6 md:pr-6 md:pl-2 lg:py-8 lg:pr-8 lg:pl-0">
            <div className="w-full flex flex-col lg:flex-row gap-8 items-start">
                {/* --- SUB-NAV (Sticky to the left/dashboard) --- */}
                <nav className="w-full lg:w-64 shrink-0 space-y-1 sticky top-0 z-10 py-2 lg:py-0 h-fit">
                    <div className="mb-6 hidden lg:block px-4 lg:px-0">
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

                    {/* Moved Video & Audio up here */}
                    <button
                        onClick={() => scrollToSection("section-video-audio")}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-highest font-medium text-sm transition-colors text-left"
                    >
                        <span className="material-symbols-outlined">headset_mic</span>
                        Video & Audio
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

                    <button
                        onClick={() => scrollToSection("section-security")}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-highest font-medium text-sm transition-colors text-left"
                    >
                        <span className="material-symbols-outlined">lock</span>
                        Security & Account
                    </button>

                    <button
                        onClick={() => scrollToSection("section-advanced")}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-highest font-medium text-sm transition-colors text-left"
                    >
                        <span className="material-symbols-outlined">tune</span>
                        Advanced
                    </button>
                </nav>

                {/* --- SETTINGS CONTENT --- */}
                <div className="flex-1 space-y-8 pb-32 w-full px-4 lg:px-0">
                    {/* SECTION: PROFILE */}
                    <section
                        id="section-profile"
                        className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/10 scroll-mt-24"
                    >
                        <h3 className="block text-xl font-bold text-primary mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined">badge</span>
                            Basic Information
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-semibold text-on-surface-variant px-1"
                                    htmlFor="firstName"
                                >
                                    First Name
                                </label>
                                <input
                                    className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all outline-none text-on-surface"
                                    id="firstName"
                                    type="text"
                                    defaultValue="Khánh"
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-semibold text-on-surface-variant px-1"
                                    htmlFor="lastName"
                                >
                                    Last Name
                                </label>
                                <input
                                    className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all outline-none text-on-surface"
                                    id="lastName"
                                    type="text"
                                    defaultValue="Vũ Huy"
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    className="text-sm font-semibold text-on-surface-variant px-1"
                                    htmlFor="email"
                                >
                                    Email Address
                                </label>
                                <input
                                    className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all outline-none text-on-surface"
                                    id="email"
                                    type="email"
                                    defaultValue="vhkhanh06@vnu.edu.vn"
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-semibold text-on-surface-variant px-1"
                                    htmlFor="phone"
                                >
                                    Phone Number
                                </label>
                                <input
                                    className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all outline-none text-on-surface"
                                    id="phone"
                                    type="tel"
                                    placeholder="+84 123 456 789"
                                />
                            </div>

                            {/* Username takes 2 columns for a balanced layout */}
                            <div className="space-y-2 md:col-span-2">
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

                        {/* SAVE BUTTONS */}
                        <div className="flex justify-end gap-3 pt-6">
                            <button className="px-6 py-3 font-bold text-slate-500 hover:text-primary transition-colors">
                                Discard Changes
                            </button>
                            <button className="px-8 py-3 bg-primary text-on-primary font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all active:scale-95">
                                Save Settings
                            </button>
                        </div>
                    </section>

                    {/* SECTION: VIDEO & AUDIO */}
                    <section
                        id="section-video-audio"
                        className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/10 scroll-mt-24"
                    >
                        <h3 className="block text-xl font-bold text-primary mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined">headset_mic</span>
                            Video & Audio
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-semibold text-on-surface-variant px-1 flex items-center gap-2"
                                    htmlFor="inputDevice"
                                >
                                    <span className="material-symbols-outlined text-sm">mic</span>{" "}
                                    Input Device
                                </label>
                                <select
                                    id="inputDevice"
                                    className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none text-on-surface cursor-pointer"
                                >
                                    <option>Default Microphone Array</option>
                                    <option>External USB Mic</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label
                                    className="text-sm font-semibold text-on-surface-variant px-1 flex items-center gap-2"
                                    htmlFor="outputDevice"
                                >
                                    <span className="material-symbols-outlined text-sm">
                                        speaker
                                    </span>{" "}
                                    Output Device
                                </label>
                                <select
                                    id="outputDevice"
                                    className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none text-on-surface cursor-pointer"
                                >
                                    <option>System Default Speakers</option>
                                    <option>Headphones (Bluetooth)</option>
                                </select>
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <label
                                    className="text-sm font-semibold text-on-surface-variant px-1 flex items-center gap-2"
                                    htmlFor="cameraDevice"
                                >
                                    <span className="material-symbols-outlined text-sm">
                                        videocam
                                    </span>{" "}
                                    Camera
                                </label>
                                <select
                                    id="cameraDevice"
                                    className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none text-on-surface cursor-pointer"
                                >
                                    <option>Integrated Webcam (HD)</option>
                                    <option>OBS Virtual Camera</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* SECTION: APPEARANCE */}
                    <section
                        id="section-appearance"
                        className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/10 scroll-mt-24"
                    >
                        <h3 className="block text-xl font-bold text-primary mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined">palette</span>
                            Appearance
                        </h3>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between p-4 hover:bg-surface-container rounded-2xl transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-secondary-container rounded-xl text-on-secondary-container">
                                        <span className="material-symbols-outlined">dark_mode</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-primary">Dark Mode</p>
                                        <p className="text-xs opacity-60">
                                            Enable dark theme across AnonEdu
                                        </p>
                                    </div>
                                </div>
                                <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                </div>
                            </div>

                            {/* Language selection option */}
                            <div className="flex items-center justify-between p-4 hover:bg-surface-container rounded-2xl transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-secondary-container rounded-xl text-on-secondary-container">
                                        <span className="material-symbols-outlined">language</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-primary">Language</p>
                                        <p className="text-xs opacity-60">
                                            Choose your preferred language
                                        </p>
                                    </div>
                                </div>
                                <select className="bg-surface-container-high border-none rounded-xl px-4 py-2.5 text-sm font-semibold focus:ring-2 focus:ring-primary/20 outline-none text-on-surface cursor-pointer">
                                    <option value="en">English (US)</option>
                                    <option value="vi">Tiếng Việt</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* SECTION: NOTIFICATIONS */}
                    <section
                        id="section-notifications"
                        className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/10 scroll-mt-24"
                    >
                        <h3 className="block text-xl font-bold text-primary mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined">notifications_active</span>
                            Notifications
                        </h3>
                        <div className="flex items-center justify-between p-4 hover:bg-surface-container rounded-2xl transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-tertiary-container rounded-xl text-on-tertiary-container">
                                    <span className="material-symbols-outlined">forum</span>
                                </div>
                                <div>
                                    <p className="font-bold text-primary">Discussion Alerts</p>
                                    <p className="text-xs opacity-60">
                                        Push alerts for new discussions & replies
                                    </p>
                                </div>
                            </div>
                            <div className="w-12 h-6 bg-slate-300 dark:bg-slate-700 rounded-full relative cursor-pointer">
                                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION: SECURITY & ACCOUNT */}
                    <section
                        id="section-security"
                        className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/10 scroll-mt-24"
                    >
                        <h3 className="block text-xl font-bold text-primary mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined">security</span>
                            Security & Account
                        </h3>

                        <div className="flex flex-col gap-4">
                            {/* Keep Email verification box */}
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
                                        </p>
                                    </div>
                                </div>
                                <button className="bg-tertiary text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-tertiary/20 hover:scale-105 transition-transform shrink-0">
                                    Verify Now
                                </button>
                            </div>

                            {/* 2-Factor Authentication (2FA) settings */}
                            <div className="flex items-center justify-between p-4 hover:bg-surface-container rounded-2xl transition-colors border border-outline-variant/5">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-secondary-container/50 text-on-secondary-container rounded-xl shrink-0">
                                        <span className="material-symbols-outlined">
                                            verified_user
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-primary">
                                            Two-Factor Authentication (2FA)
                                        </p>
                                        <p className="text-xs text-on-surface-variant opacity-80">
                                            Protect your account with an extra layer of security
                                        </p>
                                    </div>
                                </div>
                                {/* Toggle button similar to Appearance section */}
                                <div className="w-12 h-6 bg-slate-300 dark:bg-slate-700 rounded-full relative cursor-pointer shrink-0">
                                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                </div>
                            </div>

                            {/* Password change option */}
                            <div className="flex items-center justify-between p-4 hover:bg-surface-container rounded-2xl transition-colors border border-outline-variant/5">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-error-container/20 text-error rounded-xl shrink-0">
                                        <span className="material-symbols-outlined">password</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-primary">Change Password</p>
                                        <p className="text-xs text-on-surface-variant opacity-80">
                                            Update your credentials to keep your sanctuary safe
                                        </p>
                                    </div>
                                </div>
                                <button className="px-5 py-2 bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-semibold rounded-xl text-sm transition-colors">
                                    Update
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* SECTION: ADVANCED */}
                    <section
                        id="section-advanced"
                        className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/10 scroll-mt-24"
                    >
                        <h3 className="block text-xl font-bold text-primary mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined">tune</span>
                            Advanced Settings
                        </h3>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between p-4 hover:bg-surface-container rounded-2xl transition-colors border border-outline-variant/5">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-surface-container-high rounded-xl text-on-surface shrink-0">
                                        <span className="material-symbols-outlined">cached</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-primary">Clear Local Cache</p>
                                        <p className="text-xs text-on-surface-variant opacity-80">
                                            Free up space and fix loading issues
                                        </p>
                                    </div>
                                </div>
                                <button className="px-5 py-2 bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-semibold rounded-xl text-sm transition-colors">
                                    Clear
                                </button>
                            </div>

                            <div className="flex items-center justify-between p-4 hover:bg-surface-container rounded-2xl transition-colors border border-outline-variant/5">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-surface-container-high rounded-xl text-on-surface shrink-0">
                                        <span className="material-symbols-outlined">cookie</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-primary">Manage Cookies</p>
                                        <p className="text-xs text-on-surface-variant opacity-80">
                                            Control your tracking preferences and saved sessions
                                        </p>
                                    </div>
                                </div>
                                <button className="px-5 py-2 bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-semibold rounded-xl text-sm transition-colors">
                                    Manage
                                </button>
                            </div>

                            <div className="mt-4 pt-4 border-t border-outline-variant/20">
                                <div className="flex items-center justify-between p-4 hover:bg-error-container/10 rounded-2xl transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-error/10 text-error rounded-xl shrink-0">
                                            <span className="material-symbols-outlined">
                                                logout
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-error">Sign Out</p>
                                            <p className="text-xs text-error/80">
                                                Log out of your current session safely
                                            </p>
                                        </div>
                                    </div>
                                    <button className="px-6 py-2.5 bg-error text-on-error font-bold rounded-xl text-sm hover:scale-105 transition-transform shadow-lg shadow-error/20">
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
