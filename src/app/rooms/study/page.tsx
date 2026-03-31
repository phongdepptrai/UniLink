import Image from 'next/image';
import AppLayout from '../../../components/AppLayout';

export default function StudyRoomPage() {
  return (
    <AppLayout activePage="Rooms" activeTab="Study">
      <div className="flex flex-1 overflow-hidden relative w-full pb-16 md:pb-0">
        <section className="flex-1 flex flex-col bg-surface-container-low relative">
          {/* Chat Header / Pinned Resources */}
          <div className="px-6 py-4 bg-surface-container-lowest flex items-center justify-between border-b border-outline-variant/10">
            <div className="flex items-center gap-4">
              <div className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">Live</div>
              <div>
                <h1 className="font-headline font-bold text-lg text-primary leading-none">Advanced Macroeconomics</h1>
                <p className="text-xs text-on-surface-variant">42 Students Active</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>push_pin</span>
                PINNED: Midterm Review Guide
              </span>
            </div>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 pb-32">
            {/* Date Separator */}
            <div className="flex justify-center">
              <span className="text-[10px] font-bold text-on-surface-variant/40 bg-surface-container-high px-3 py-1 rounded-full uppercase tracking-widest">Today</span>
            </div>

            {/* Received Message */}
            <div className="flex flex-col gap-1 max-w-[80%]">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-secondary-fixed text-on-secondary-fixed text-[10px] px-2 py-0.5 rounded-md font-bold">LofiScholar</span>
                <span className="text-[10px] text-on-surface-variant">10:42 AM</span>
              </div>
              <div className="bg-surface-container-high p-4 rounded-xl rounded-tl-none shadow-sm text-sm text-on-surface leading-relaxed">
                  Has anyone started on the IS-LM model practice problems? I&apos;m struggling with the liquidity trap section on page 45.
              </div>
            </div>

            {/* Received Message */}
            <div className="flex flex-col gap-1 max-w-[80%]">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-secondary-fixed text-on-secondary-fixed text-[10px] px-2 py-0.5 rounded-md font-bold">CuriousQuasar</span>
                <span className="text-[10px] text-on-surface-variant">10:45 AM</span>
              </div>
              <div className="bg-surface-container-high p-4 rounded-xl rounded-tl-none shadow-sm text-sm text-on-surface leading-relaxed">
                  I just finished it! The key is remembering that at the zero lower bound, the LM curve becomes perfectly horizontal. Here&apos;s a quick link to a visualization that helped me.
              </div>
            </div>

            {/* Shared Resource Card in Chat */}
            <div className="ml-4 flex flex-col gap-1 max-w-[70%]">
              <div className="bg-surface-container-lowest border border-outline-variant/20 p-3 rounded-xl flex items-center gap-4 hover:bg-white transition-all cursor-pointer">
                <div className="h-12 w-12 bg-secondary-container/20 rounded-lg flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">link</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-bold text-primary">Wolfram Alpha: Liquidity Trap Viz</h4>
                  <p className="text-[10px] text-on-surface-variant">Interactive macro-model parameters</p>
                </div>
              </div>
            </div>

            {/* Sent Message */}
            <div className="flex flex-col items-end gap-1 ml-auto max-w-[80%]">
              <div className="flex items-center gap-2 mb-1 justify-end">
                <span className="text-[10px] text-on-surface-variant">10:48 AM</span>
                <span className="bg-primary text-on-primary text-[10px] px-2 py-0.5 rounded-md font-bold">Me (NightOwl)</span>
              </div>
              <div className="bg-primary-container p-4 rounded-xl rounded-tr-none shadow-sm text-sm text-on-primary-container leading-relaxed">
                  Thanks <span className="text-secondary-fixed">@CuriousQuasar</span>! That visualization makes way more sense than the static diagrams in the textbook.
              </div>
            </div>

            {/* Notification */}
            <div className="flex justify-center py-2">
              <p className="text-[11px] text-on-surface-variant italic">AcademicAdvisor has joined the sanctuary.</p>
            </div>
          </div>

          {/* Chat Input */}
          <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 bg-surface-container-low">
            <div className="bg-surface-container-lowest rounded-xl p-2 flex items-center shadow-lg gap-2">
              <button className="p-2 text-on-surface-variant hover:text-primary transition-all">
                <span className="material-symbols-outlined">add_circle</span>
              </button>
              <input className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2" placeholder="Type a message to your peers..." type="text" />
              <button className="bg-primary text-on-primary h-10 w-10 rounded-full flex items-center justify-center active:scale-95 transition-all shadow-md">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </section>

        {/* Right Sidebar: Resources & Events */}
        <aside className="w-80 bg-surface border-l border-outline-variant/10 flex flex-col hidden xl:flex">
          <div className="p-6 flex-1 space-y-8 overflow-y-auto">
            {/* Study Resources */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-headline font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">library_books</span>
                  Resources
                </h3>
                <button className="text-[10px] font-bold uppercase text-on-surface-variant hover:text-primary">View All</button>
              </div>

              <div className="space-y-3">
                <div className="bg-surface-container-low p-3 rounded-xl border-l-4 border-secondary transition-all hover:bg-surface-container-high group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">description</span>
                    <div className="flex-1 overflow-hidden">
                      <h4 className="text-xs font-bold text-on-surface truncate">Lecture_12_MonetaryPolicy.pdf</h4>
                      <p className="text-[10px] text-on-surface-variant">PDF • 4.2 MB</p>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-low p-3 rounded-xl border-l-4 border-primary transition-all hover:bg-surface-container-high group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">link</span>
                    <div className="flex-1 overflow-hidden">
                      <h4 className="text-xs font-bold text-on-surface truncate">Wolfram Alpha - IS-LM Solver</h4>
                      <p className="text-[10px] text-on-surface-variant">External Link</p>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-low p-3 rounded-xl border-l-4 border-secondary transition-all hover:bg-surface-container-high group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">movie</span>
                    <div className="flex-1 overflow-hidden">
                      <h4 className="text-xs font-bold text-on-surface truncate">Khan Academy: Keynesian Econ</h4>
                      <p className="text-[10px] text-on-surface-variant">Video Recap • 12m</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-headline font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">event</span>
                  Study Sessions
                </h3>
              </div>

              <div className="space-y-4">
                {/* Event Card */}
                <div className="relative bg-primary-container p-4 rounded-xl overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-secondary-container/10 rounded-bl-full transform group-hover:scale-110 transition-transform"></div>
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold text-secondary-fixed uppercase tracking-wider">Starting in 20m</span>
                    <h4 className="text-xs font-bold text-on-primary-container mt-1">Midterm Review Session</h4>
                    <p className="text-[10px] text-on-primary-container/70 mt-1">Facilitated by Professor V.</p>
                    <button className="mt-3 w-full bg-secondary-container text-on-secondary-container py-2 rounded-lg text-xs font-bold hover:brightness-105 active:scale-95 transition-all">
                        Set Reminder
                    </button>
                  </div>
                </div>

                {/* Peer Review Card */}
                <div className="bg-surface-container-high p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-sm text-primary">rate_review</span>
                    <h4 className="text-xs font-bold text-on-surface">Peer Review Circle</h4>
                  </div>
                  <p className="text-[10px] text-on-surface-variant leading-relaxed">Exchange your draft thesis for feedback from 3 other students.</p>

                  <div className="mt-3 flex -space-x-2">
                    <div className="relative h-6 w-6 rounded-full border-2 border-surface overflow-hidden"><Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4ogzyCfF-E8yW2avkQSxsjnfqy4UwwxBZOyps_uJfp4z91EGl5Mil6SzsgYHJnTSnSQ9xn7jpb5RGAoc7Ar-hayzN8QV_wlQx3N5NeEWnmA99vWWB2NfqqwkDPPBSRO4hsu3nOt-GLvJN27Bps_OSWvNk72mO5PWID3VvAs-PT9X_syoRY9u2wJBbXqgSHzV_I7l6McQsiYQwf2Xju1s-KKd_siAffuuLVjusHKUsJP40d4t64EqYYuwuoyW4DyMaQnEIwsA9V4w" alt="Avatar" fill unoptimized/></div>
                    <div className="relative h-6 w-6 rounded-full border-2 border-surface overflow-hidden"><Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWDuZ8qVMyNaAD2KxzzkznqdvVdufOKT3HBfCnCYDcX-zDd2my17G5n0zmZ5pXt3lUgpluZqO6O6s-XA0yaCHgdZnhMYEtxVgkbMnacIg4_V39OZsNCCZgAo3f9d-dlFkC_pvZa-OiWJTikZEXE8df9UpefOANJy6wt4w0InzbpOSi3ezQOa9CjriFP4KYVRJm-6aFRULAqbjPvtzyseRnVFzChUU88BlbUMityYLBKFlWwWe19fOVeKt7fz1VUyGWa5EClwjsSZQ" alt="Avatar" fill unoptimized/></div>
                    <div className="relative h-6 w-6 rounded-full border-2 border-surface overflow-hidden"><Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDklWQeMex27o2O17fASTRy3bwtqDl9pD568qGEQ9Upagva2tW9V26DNbgpb85DP-PUGvUNXqQR8Tj1pvIvIEQ5tPBIEOc9luCJ5zlVKVQFVqEtvOGVn5yYVeU8b9GybXu69Z3p_mbVs3O9J6_nEAybav0WZ4GrVBLYllG_3sgKdgBzYEgaelRBmrBgCkf7uGSff42c2NkMmGZjFCDxEqW-qAFUqGz5Kq1Gs1bq_aTVvRAs2W51tpJnJgtNBf6X9PSe8G7aBJlc4dQ" alt="Avatar" fill unoptimized/></div>
                    <div className="h-6 w-6 rounded-full bg-surface-variant flex items-center justify-center text-[8px] font-bold border-2 border-surface text-on-surface-variant">+12</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Room Stats / Safety */}
            <div className="bg-secondary-container/10 p-4 rounded-xl border border-secondary/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-secondary text-sm">shield</span>
                <h4 className="text-[10px] font-bold text-secondary uppercase tracking-widest">Sanctuary Trust</h4>
              </div>
              <p className="text-[10px] text-on-secondary-container/80 leading-relaxed">
                  Messages are anonymous but monitored by our academic integrity protocols.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </AppLayout>
  );
}
