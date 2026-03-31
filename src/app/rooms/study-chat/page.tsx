import Image from 'next/image';
import AppLayout from '../../../components/AppLayout';

export default function StudyRoomChatPage() {
  return (
    <AppLayout activePage="Rooms" activeTab="Study">
      <div className="flex-1 flex flex-col bg-surface overflow-hidden relative pb-16 md:pb-0 w-full">
        {/* Room Header */}
        <div className="px-6 py-4 bg-surface-container-lowest flex justify-between items-center shadow-sm z-10">
          <div>
            <h1 className="font-headline font-extrabold text-xl text-primary tracking-tight flex items-center gap-2">
                Advanced Calculus II
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-secondary-fixed text-on-secondary-fixed">
                    LIVE
                </span>
            </h1>
            <p className="text-xs text-on-surface-variant font-medium">Study Room • 124 students active</p>
          </div>
          <div className="flex -space-x-3">
            <div className="w-8 h-8 rounded-full border-2 border-surface bg-slate-200 overflow-hidden relative" title="Active student">
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3YAcAt4cWTyNImKDDQAOisGYCg0vEuF0bx1273r6ewydeUeHDQ_wb4fbNiee2udGhQEOKaNRCdTU9G9f9z6RLvhaDBnfpotfTujh8gJa63lNCejRUeqhPClu0-ZcunR3oMa_0WeUo0onjeb52GdSMC69bnly5pZ5XKvHfyUrh6tRata69dtgz4B-aJD48tpfcBLh5pKO67rRXhLToEUzfs4cHZ0cayTIk1CCl8YRIcZ4uUOgJ92KjbPUC_2Tipbioi8o1eRB1MKk" alt="Student profile placeholder" fill className="object-cover" unoptimized/>
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-surface bg-slate-300 overflow-hidden relative" title="Active student">
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLndJSboBkF04LZi9cyd96Bx0gcMC4_0IbN9ocyhCqVOtjL5CeRuSIpq56n-3Ops5mkqc0NjnWYDyB6OXVfHUijQw-wYtJJWMh6_2IA72I6ZYd8SpwDjUXaBhDLCQqurAR7olls4jFz8l2XejEj7zwpAd4rmPiAiUfWE5qIXPySP-1gyMR1MD8YsZDpo2YaoyIrlXBKxlz1qlw0lU19S2HirJckDe6ykdQw09HlJodEsZCyiOKJsU8rIhw0DEo2IdpsB1XSpAn9-k" alt="Female student avatar placeholder" fill className="object-cover" unoptimized/>
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-surface bg-slate-400 flex items-center justify-center text-[10px] font-bold text-white academic-gradient relative z-10">
                +121
            </div>
          </div>
        </div>

        {/* Chat Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide pb-32">
          {/* Date Separator */}
          <div className="flex justify-center">
            <span className="px-4 py-1 rounded-full bg-surface-container-high text-[10px] font-bold text-outline uppercase tracking-widest">Today, Oct 24</span>
          </div>

          {/* Received Message (Simple) */}
          <div className="flex items-end gap-3 max-w-[80%]">
            <div className="w-8 h-8 rounded-full bg-surface-container-highest flex-shrink-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-sm text-primary">person</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-bold text-primary ml-1">CuriousQuasar</span>
              <div className="bg-surface-container-high p-4 rounded-xl rounded-bl-none">
                <p className="text-sm leading-relaxed">Does anyone have a simplified explanation for Stokes&apos; Theorem? I&apos;m struggling with the vector field orientation part.</p>
              </div>
            </div>
          </div>

          {/* Sent Message (File Sharing) */}
          <div className="flex flex-row-reverse items-end gap-3 max-w-[80%] ml-auto">
            <div className="flex flex-col items-end gap-1">
              <span className="text-[11px] font-bold text-primary mr-1">You (Anonymous)</span>
              <div className="bg-primary-container academic-gradient text-white p-4 rounded-xl rounded-br-none space-y-3 shadow-md">
                <p className="text-sm leading-relaxed">Check this PDF, I summarized it during yesterday&apos;s lecture. Page 3 has the visualization.</p>

                {/* File Indicator Card */}
                <div className="bg-white/10 rounded-lg p-3 flex items-center gap-3 border border-white/10 hover:bg-white/20 cursor-pointer transition-colors">
                  <div className="w-10 h-10 bg-error rounded flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">picture_as_pdf</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold truncate">Vector_Calculus_CheatSheet.pdf</p>
                    <p className="text-[10px] opacity-70 uppercase">2.4 MB • PDF Document</p>
                  </div>
                  <span className="material-symbols-outlined text-sm">download</span>
                </div>
              </div>
            </div>
          </div>

          {/* Received Message (Image Sharing) */}
          <div className="flex items-end gap-3 max-w-[80%]">
            <div className="w-8 h-8 rounded-full bg-surface-container-highest flex-shrink-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-sm text-primary">person</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-bold text-primary ml-1">LofiScholar</span>
              <div className="bg-surface-container-high p-4 rounded-xl rounded-bl-none space-y-3">
                <p className="text-sm leading-relaxed">Found this diagram in my textbook. Hope it helps!</p>
                <div className="rounded-lg overflow-hidden border border-outline-variant/30 relative max-h-60 w-full h-48">
                  <Image className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFDSkB0UXkCdoyXGJ3hq5LHNLyRiC54X1ez6viRx4_r_EZ5JfkWKglGto0VGikWPbgAl5jG5SwLev4whTKuIxQBBJ8Cr4M0rX3S6K_bVj4a0plg-xa01TOKyWufwWTAKB3f_YYn1-AKpHVVU7WdDzZ4d0mH7M1HG8NgfYmrvZxtLMpNrnKPjZaNqp2W8TdWwz-chklzplGDwmspgDGq-1vF548Q9k6Gw_uTdS6GmsG_uprpLS8O5UM3o67BycjmSY1WYCrA-6ypPA" alt="Handwritten calculus notes on graph paper with diagrams" fill unoptimized/>
                </div>
              </div>
            </div>
          </div>

          {/* Study Tip Card (Pinned style) */}
          <div className="bg-secondary-fixed/20 border border-secondary-fixed/40 p-4 rounded-xl flex gap-4 items-start">
            <div className="bg-secondary-fixed p-2 rounded-lg text-on-secondary-fixed">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>push_pin</span>
            </div>
            <div>
              <h4 className="text-xs font-bold text-on-secondary-fixed uppercase tracking-wider mb-1">Pinned Resource</h4>
              <p className="text-sm text-primary font-medium">Midterm review session starts in 2 hours. Link to collaborative board is in the sidebar. 🚀</p>
            </div>
          </div>
        </div>

        {/* Chat Input Area */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-surface-container-lowest border-t border-outline-variant/10 lg:right-72 z-20">
          <div className="flex items-center gap-3 bg-surface-container-low p-2 rounded-xl focus-within:ring-2 focus-within:ring-secondary/30 transition-all">
            <button className="p-2 text-primary hover:bg-surface-variant rounded-lg transition-colors">
              <span className="material-symbols-outlined">add_circle</span>
            </button>
            <input className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-body py-2 scrollbar-hide" placeholder="Type an anonymous academic message..." type="text" />
            <div className="flex items-center gap-1">
              <button className="p-2 text-outline hover:text-primary transition-colors">
                <span className="material-symbols-outlined">sentiment_satisfied</span>
              </button>
              <button className="academic-gradient text-white p-2 rounded-lg shadow-md active:scale-95 transition-transform">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar: Shared Resources */}
      <aside className="hidden lg:flex flex-col w-72 bg-surface-container-low p-6 gap-6 overflow-y-auto scrollbar-hide h-full z-10 absolute right-0 top-0">
        <div>
          <h3 className="text-xs font-bold text-outline uppercase tracking-widest mb-4 mt-16">Shared Resources</h3>
          <div className="space-y-3">
            <div className="p-3 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary-container text-white rounded-lg">
                  <span className="material-symbols-outlined text-sm">description</span>
                </div>
                <span className="text-xs font-bold text-primary group-hover:text-secondary transition-colors">Lecture_Notes_W8.pdf</span>
              </div>
              <div className="flex justify-between items-center text-[10px] text-outline">
                <span>Uploaded by Anonymouse</span>
                <span>2h ago</span>
              </div>
            </div>

            <div className="p-3 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-secondary-fixed text-on-secondary-fixed rounded-lg">
                  <span className="material-symbols-outlined text-sm">link</span>
                </div>
                <span className="text-xs font-bold text-primary group-hover:text-secondary transition-colors">Wolfram Alpha Solver</span>
              </div>
              <div className="flex justify-between items-center text-[10px] text-outline">
                <span>External Link</span>
                <span>Yesterday</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold text-outline uppercase tracking-widest mb-4">Upcoming Events</h3>
          <div className="space-y-3">
            <div className="p-4 border-l-4 border-secondary bg-surface-container-high rounded-r-xl">
              <p className="text-[10px] font-bold text-secondary uppercase">Today • 16:00</p>
              <p className="text-sm font-bold text-primary mt-1">Peer Review Session</p>

              <div className="flex items-center gap-2 mt-2">
                <div className="flex -space-x-1.5">
                  <div className="w-5 h-5 rounded-full border border-surface bg-slate-300"></div>
                  <div className="w-5 h-5 rounded-full border border-surface bg-slate-400"></div>
                </div>
                <span className="text-[10px] text-outline">18 attending</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto bg-primary-container p-5 rounded-2xl relative overflow-hidden group mb-16">
          <div className="absolute -right-4 -top-4 w-20 h-20 bg-secondary rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500"></div>

          <h4 className="text-white font-headline font-bold text-sm relative z-10">Ace Your Midterms</h4>
          <p className="text-on-primary-container text-[11px] mt-1 relative z-10 leading-relaxed">Join the curated study track for Vector Calculus and get access to expert solutions.</p>

          <button className="mt-4 bg-white text-primary text-[11px] font-bold py-2 px-4 rounded-lg w-full relative z-10 hover:bg-secondary-fixed transition-colors">
            Explore Track
          </button>
        </div>
      </aside>
    </AppLayout>
  );
}
