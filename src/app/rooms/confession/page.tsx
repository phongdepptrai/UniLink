import AppLayout from '../../../components/AppLayout';

export default function ConfessionRoomPage() {
  return (
    <AppLayout activePage="Rooms" activeTab="Confession">
      <div className="flex-1 flex flex-col bg-primary relative overflow-hidden pb-16 md:pb-0 w-full h-full">
        {/* Asymmetric Background Elements */}
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-secondary-container/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 bg-primary-container/30 blur-[100px] rounded-full"></div>

        {/* Disclaimer Header */}
        <div className="z-10 px-6 py-4 border-b border-primary-container/30 flex justify-between items-center bg-primary/60 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary-container">security</span>
            </div>
            <div>
              <h1 className="text-lg font-headline font-bold text-on-primary">Confession Sanctuary</h1>
              <p className="text-xs text-on-primary-container">Total anonymity. Speak your truth, stay kind.</p>
            </div>
          </div>
          <div className="flex items-center gap-6 hidden sm:flex">
            <div className="flex items-center gap-2">
              <span className="text-xs font-label text-on-primary-container uppercase tracking-widest">Ghost Mode</span>
              <button className="w-10 h-5 bg-secondary-container rounded-full relative">
                <div className="absolute right-1 top-1 w-3 h-3 bg-primary rounded-full"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Chat Stream */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 relative z-10 scrollbar-hide pb-32">
          {/* System Message */}
          <div className="flex justify-center">
            <div className="bg-primary-container/40 px-4 py-2 rounded-full text-[10px] text-on-primary-container font-label uppercase tracking-widest border border-outline-variant/10">
                New confessions are encrypted end-to-end
            </div>
          </div>

          {/* Received Message (Confession Card) */}
          <div className="flex flex-col gap-2 max-w-[85%]">
            <div className="flex items-center gap-2 mb-1">
              <div className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold uppercase tracking-tighter">Anonymous Owl</div>
              <span className="text-[10px] text-on-primary-container">12:04 PM</span>
            </div>
            <div className="bg-surface-container-low/10 border border-outline-variant/5 p-5 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl relative group">
              <p className="text-on-primary leading-relaxed text-sm">I&apos;ve been secretly studying for the math finals at 3 AM because I&apos;m terrified of failing my scholarship, but I act like I&apos;m naturally smart in front of my friends. The pressure is eating me alive.</p>

              <div className="mt-4 flex items-center gap-4">
                <button className="flex items-center gap-1.5 group/heart">
                  <span className="material-symbols-outlined text-secondary-container text-lg group-hover/heart:scale-125 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                  <span className="text-xs text-on-primary-container">24</span>
                </button>
                <button className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-on-primary-container text-lg">chat_bubble</span>
                  <span className="text-xs text-on-primary-container">8</span>
                </button>
              </div>
            </div>
          </div>

          {/* Received Message 2 */}
          <div className="flex flex-col gap-2 max-w-[85%] ml-auto items-end">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] text-on-primary-container">12:15 PM</span>
              <div className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed text-[10px] font-bold uppercase tracking-tighter">Midnight Whisperer</div>
            </div>
            <div className="bg-primary-container text-on-primary p-5 rounded-tl-3xl rounded-br-3xl rounded-bl-3xl border border-secondary-container/10">
              <p className="leading-relaxed text-sm">I just want to say to whoever is feeling down today: you are doing enough. Don&apos;t let the grades define your worth. We&apos;re all in this together, even if we&apos;re all strangers here.</p>

              <div className="mt-4 flex items-center gap-4">
                <button className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-secondary-container text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                  <span className="text-xs text-secondary-container font-bold">156</span>
                </button>
              </div>
            </div>
          </div>

          {/* Received Message 3 */}
          <div className="flex flex-col gap-2 max-w-[85%]">
            <div className="flex items-center gap-2 mb-1">
              <div className="px-2 py-0.5 rounded bg-surface-container-highest text-primary text-[10px] font-bold uppercase tracking-tighter">Ghost_User_99</div>
              <span className="text-[10px] text-on-primary-container">01:30 PM</span>
            </div>
            <div className="bg-surface-container-low/5 border border-outline-variant/5 p-5 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl">
              <p className="text-on-primary leading-relaxed text-sm">Does anyone else feel like they&apos;re just pretending to be an adult? I&apos;m in my final year and I still feel like a lost freshman.</p>

              <div className="mt-4 flex items-center gap-4">
                <button className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-on-primary-container text-lg">favorite</span>
                  <span className="text-xs text-on-primary-container">42</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-primary/80 backdrop-blur-md border-t border-primary-container/30 z-20">
          <div className="max-w-4xl mx-auto flex items-end gap-3">
            <div className="flex-1 bg-surface-container-lowest/5 border border-outline-variant/10 rounded-2xl p-3 flex flex-col gap-2 focus-within:border-secondary-container/30 transition-all">
              <textarea className="bg-transparent border-none focus:ring-0 text-on-primary placeholder:text-on-primary-container/50 resize-none py-1 scrollbar-hide" placeholder="Whisper your confession..." rows={1}></textarea>
              <div className="flex justify-between items-center px-1">
                <div className="flex gap-3">
                  <button className="text-on-primary-container hover:text-secondary-container transition-colors">
                    <span className="material-symbols-outlined text-xl">mood</span>
                  </button>
                  <button className="text-on-primary-container hover:text-secondary-container transition-colors">
                    <span className="material-symbols-outlined text-xl">image</span>
                  </button>
                </div>
                <span className="text-[10px] text-on-primary-container/40 font-label">280 characters remaining</span>
              </div>
            </div>

            <button className="w-12 h-12 academic-gradient text-secondary-container rounded-full flex items-center justify-center shadow-lg border border-secondary-container/20 hover:scale-105 active:scale-95 transition-transform">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>

          <div className="flex justify-center mt-3">
            <div className="flex items-center gap-2 text-[10px] text-on-primary-container/60">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
              Posting as Anonymous Owl
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
