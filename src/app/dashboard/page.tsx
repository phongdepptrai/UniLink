import React from "react";

export default function GeneralPage() {
    return (
        <div className="max-w-6xl mx-auto">
            <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-extrabold font-headline text-primary tracking-tight mb-2">
                        Discovery Hub
                    </h1>
                    <p className="text-on-surface-variant text-lg max-w-xl">
                        Find your community. Connect anonymously with peers from your campus and
                        beyond.
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
                <div className="group relative bg-surface-container-lowest p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-secondary-container/30 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-on-primary">
                            <span className="material-symbols-outlined" data-icon="account_balance">
                                account_balance
                            </span>
                        </div>
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                            1.2k active
                        </span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-1">University of Science</h3>
                    <p className="text-on-surface-variant text-sm mb-6 flex-1 line-clamp-2">
                        Connect with fellow tech enthusiasts and engineers. Sharing solutions and
                        lab pain.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-2 py-1 bg-surface-container text-[10px] font-bold uppercase tracking-wider text-outline rounded">
                            Tech
                        </span>
                        <span className="px-2 py-1 bg-surface-container text-[10px] font-bold uppercase tracking-wider text-outline rounded">
                            Hanoi
                        </span>
                    </div>
                    <button className="w-full py-3 bg-surface-container-highest text-primary font-bold rounded-xl group-hover:bg-primary group-hover:text-on-primary transition-all flex items-center justify-center gap-2">
                        Enter Rooms
                        <span
                            className="material-symbols-outlined text-sm"
                            data-icon="arrow_forward"
                        >
                            arrow_forward
                        </span>
                    </button>
                </div>

                <div className="group relative bg-surface-container-lowest p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-secondary-container/30 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
                            <span className="material-symbols-outlined" data-icon="palette">
                                palette
                            </span>
                        </div>
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-surface-container-high text-on-surface-variant text-xs font-bold rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                            843 active
                        </span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-1">Academy of Arts</h3>
                    <p className="text-on-surface-variant text-sm mb-6 flex-1 line-clamp-2">
                        A haven for creators. Discuss portfolios, exhibitions, and late-night studio
                        sessions.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-2 py-1 bg-surface-container text-[10px] font-bold uppercase tracking-wider text-outline rounded">
                            Creative
                        </span>
                        <span className="px-2 py-1 bg-surface-container text-[10px] font-bold uppercase tracking-wider text-outline rounded">
                            Saigon
                        </span>
                    </div>
                    <button className="w-full py-3 bg-surface-container-highest text-primary font-bold rounded-xl group-hover:bg-primary group-hover:text-on-primary transition-all flex items-center justify-center gap-2">
                        Enter Rooms
                        <span
                            className="material-symbols-outlined text-sm"
                            data-icon="arrow_forward"
                        >
                            arrow_forward
                        </span>
                    </button>
                </div>

                <div className="group relative bg-surface-container-lowest p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-secondary-container/30 flex flex-col lg:col-span-1">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-on-primary-container">
                            <span className="material-symbols-outlined" data-icon="gavel">
                                gavel
                            </span>
                        </div>
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                            512 active
                        </span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-1">Law University</h3>
                    <p className="text-on-surface-variant text-sm mb-6 flex-1 line-clamp-2">
                        Cases, moot courts, and existential dread. The safe place for future
                        attorneys.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-2 py-1 bg-surface-container text-[10px] font-bold uppercase tracking-wider text-outline rounded">
                            Law
                        </span>
                        <span className="px-2 py-1 bg-surface-container text-[10px] font-bold uppercase tracking-wider text-outline rounded">
                            Hue
                        </span>
                    </div>
                    <button className="w-full py-3 bg-surface-container-highest text-primary font-bold rounded-xl group-hover:bg-primary group-hover:text-on-primary transition-all flex items-center justify-center gap-2">
                        Enter Rooms
                        <span
                            className="material-symbols-outlined text-sm"
                            data-icon="arrow_forward"
                        >
                            arrow_forward
                        </span>
                    </button>
                </div>

                <div className="md:col-span-2 lg:col-span-3 bg-primary rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
                    <div className="relative z-10 text-center md:text-left mb-6 md:mb-0">
                        <h2 className="text-3xl font-black text-on-primary font-headline mb-4">
                            Can&apos;t find your school?
                        </h2>
                        <p className="text-on-primary/70 text-lg max-w-md">
                            Launch a new sanctuary for your campus and invite your peers to the
                            discussion.
                        </p>
                        <button className="mt-8 bg-secondary-container text-on-secondary-container font-bold px-8 py-4 rounded-full flex items-center gap-3 hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-secondary-container/20">
                            <span className="material-symbols-outlined" data-icon="rocket_launch">
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

                <div className="group relative bg-surface-container-lowest p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-secondary-container/30 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl bg-on-tertiary-container/10 flex items-center justify-center text-on-tertiary-container">
                            <span
                                className="material-symbols-outlined"
                                data-icon="medical_services"
                            >
                                medical_services
                            </span>
                        </div>
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-surface-container-high text-on-surface-variant text-xs font-bold rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                            2.1k active
                        </span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-1">Medical University</h3>
                    <p className="text-on-surface-variant text-sm mb-6 flex-1 line-clamp-2">
                        Anatomy, endless coffee, and rotation diaries. For those who study while
                        others sleep.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-2 py-1 bg-surface-container text-[10px] font-bold uppercase tracking-wider text-outline rounded">
                            Med
                        </span>
                        <span className="px-2 py-1 bg-surface-container text-[10px] font-bold uppercase tracking-wider text-outline rounded">
                            National
                        </span>
                    </div>
                    <button className="w-full py-3 bg-surface-container-highest text-primary font-bold rounded-xl group-hover:bg-primary group-hover:text-on-primary transition-all flex items-center justify-center gap-2">
                        Enter Rooms
                        <span
                            className="material-symbols-outlined text-sm"
                            data-icon="arrow_forward"
                        >
                            arrow_forward
                        </span>
                    </button>
                </div>

                <div className="group relative bg-surface-container-lowest p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-secondary-container/30 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl bg-secondary-fixed-dim/20 flex items-center justify-center text-secondary">
                            <span className="material-symbols-outlined" data-icon="language">
                                language
                            </span>
                        </div>
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-surface-container-high text-on-surface-variant text-xs font-bold rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                            1.5k active
                        </span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-1">Foreign Languages</h3>
                    <p className="text-on-surface-variant text-sm mb-6 flex-1 line-clamp-2">
                        Multilingual confessions and study tips. Practicing fluency through
                        anonymous chat.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-2 py-1 bg-surface-container text-[10px] font-bold uppercase tracking-wider text-outline rounded">
                            Lang
                        </span>
                        <span className="px-2 py-1 bg-surface-container text-[10px] font-bold uppercase tracking-wider text-outline rounded">
                            Da Nang
                        </span>
                    </div>
                    <button className="w-full py-3 bg-surface-container-highest text-primary font-bold rounded-xl group-hover:bg-primary group-hover:text-on-primary transition-all flex items-center justify-center gap-2">
                        Enter Rooms
                        <span
                            className="material-symbols-outlined text-sm"
                            data-icon="arrow_forward"
                        >
                            arrow_forward
                        </span>
                    </button>
                </div>

                <div className="group relative bg-surface-container-lowest p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-secondary-container/30 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl bg-outline-variant/20 flex items-center justify-center text-outline">
                            <span className="material-symbols-outlined" data-icon="business_center">
                                business_center
                            </span>
                        </div>
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                            3k active
                        </span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-1">National Economics</h3>
                    <p className="text-on-surface-variant text-sm mb-6 flex-1 line-clamp-2">
                        Market trends and macro-headaches. Connect with future business leaders.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-2 py-1 bg-surface-container text-[10px] font-bold uppercase tracking-wider text-outline rounded">
                            Biz
                        </span>
                        <span className="px-2 py-1 bg-surface-container text-[10px] font-bold uppercase tracking-wider text-outline rounded">
                            Global
                        </span>
                    </div>
                    <button className="w-full py-3 bg-surface-container-highest text-primary font-bold rounded-xl group-hover:bg-primary group-hover:text-on-primary transition-all flex items-center justify-center gap-2">
                        Enter Rooms
                        <span
                            className="material-symbols-outlined text-sm"
                            data-icon="arrow_forward"
                        >
                            arrow_forward
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
