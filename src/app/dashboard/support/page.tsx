"use client";

import React, { useState } from "react";

export default function SupportPage() {
    // State cơ bản để xám cưng dễ dàng xử lý form gửi data nhé!
    const [feedback, setFeedback] = useState("");
    const [ticketSubject, setTicketSubject] = useState("");
    const [ticketCategory, setTicketCategory] = useState("general");
    const [ticketDesc, setTicketDesc] = useState("");

    const handleFeedbackSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Feedback submitted:", feedback);
        // Xám cưng ném logic gọi API gửi feedback vào đây nha!
        setFeedback(""); // Xóa trắng form sau khi gửi
    };

    const handleTicketSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Ticket submitted:", { ticketSubject, ticketCategory, ticketDesc });
        // Xám cưng ném logic gọi API tạo ticket vào đây nha!
    };

    return (
        <main className="flex-1 bg-surface-container-low py-4 px-4 md:py-6 md:px-6 lg:py-8 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-8">
                {/* --- HEADER --- */}
                <div>
                    <h1 className="text-3xl font-extrabold font-headline text-primary tracking-tight mb-2">
                        Support Center
                    </h1>
                    <p className="text-sm text-on-surface-variant">How can we assist you today?</p>
                </div>

                {/* --- Q&A LINK BANNER --- */}
                {/* Tribbie dùng thẻ <a> hoặc <Link> của Next.js tùy ý xám cưng nhé */}
                <a
                    href="/support/qa"
                    className="block w-full bg-gradient-to-r from-primary-container to-tertiary-container rounded-3xl p-6 md:p-8 hover:scale-[1.01] transition-transform shadow-sm group"
                >
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-on-primary-container mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined">quiz</span>
                                Frequently Asked Questions (Q&A)
                            </h2>
                            <p className="text-on-primary-container/80 text-sm md:text-base">
                                Find instant answers to common questions about AnonEdu, accounts,
                                and features.
                            </p>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors">
                            <span className="material-symbols-outlined text-on-primary-container text-2xl">
                                arrow_forward
                            </span>
                        </div>
                    </div>
                </a>

                {/* --- FORMS SECTION --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* 1. FEEDBACK FORM */}
                    <section className="bg-surface-container-lowest rounded-3xl p-6 md:p-8 shadow-sm border border-outline-variant/10 flex flex-col h-full">
                        <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                            <span className="material-symbols-outlined">reviews</span>
                            Share Your Feedback
                        </h3>
                        <p className="text-sm text-on-surface-variant mb-6">
                            Tell us what you love or what we can improve.
                        </p>

                        <form
                            onSubmit={handleFeedbackSubmit}
                            className="flex-1 flex flex-col gap-4"
                        >
                            <div className="flex-1">
                                <textarea
                                    className="w-full h-full min-h-[150px] bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all outline-none text-on-surface resize-none"
                                    placeholder="I really like the UI, but I wish..."
                                    value={feedback}
                                    onChange={(e) => setFeedback(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 mt-auto bg-secondary-container text-on-secondary-container font-bold rounded-xl hover:bg-secondary hover:text-on-secondary transition-colors"
                            >
                                Send Feedback
                            </button>
                        </form>
                    </section>

                    {/* 2. TICKET FORM */}
                    <section className="bg-surface-container-lowest rounded-3xl p-6 md:p-8 shadow-sm border border-outline-variant/10 flex flex-col">
                        <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                            <span className="material-symbols-outlined">support_agent</span>
                            Submit a Ticket
                        </h3>
                        <p className="text-sm text-on-surface-variant mb-6">
                            Need technical help? Describe your issue below.
                        </p>

                        <form onSubmit={handleTicketSubmit} className="flex flex-col gap-5">
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-on-surface-variant px-1 uppercase tracking-wider">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all outline-none text-on-surface"
                                    placeholder="E.g., Cannot upload files"
                                    value={ticketSubject}
                                    onChange={(e) => setTicketSubject(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-on-surface-variant px-1 uppercase tracking-wider">
                                    Category
                                </label>
                                {/* Thêm icon thả xuống cho đẹp xíu nè */}
                                <div className="relative">
                                    <select
                                        className="w-full bg-surface-container-low border-none rounded-xl py-3 pl-4 pr-10 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all outline-none text-on-surface appearance-none"
                                        value={ticketCategory}
                                        onChange={(e) => setTicketCategory(e.target.value)}
                                    >
                                        <option value="general">General Inquiry</option>
                                        <option value="bug">Report a Bug</option>
                                        <option value="account">Account Issue</option>
                                        <option value="billing">Billing</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
                                        expand_more
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-on-surface-variant px-1 uppercase tracking-wider">
                                    Description
                                </label>
                                <textarea
                                    className="w-full min-h-[140px] bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all outline-none text-on-surface resize-none"
                                    placeholder="Please provide details about your issue..."
                                    value={ticketDesc}
                                    onChange={(e) => setTicketDesc(e.target.value)}
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-primary text-on-primary font-bold rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all active:scale-95"
                            >
                                Submit Ticket
                            </button>
                        </form>
                    </section>
                </div>
            </div>
        </main>
    );
}
