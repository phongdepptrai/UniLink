import Image from 'next/image';
import AppLayout from '../../../components/AppLayout';

export default function GeneralRoomPage() {
  return (
    <AppLayout activePage="Rooms" activeTab="General">
      <div className="flex flex-1 overflow-hidden relative w-full pb-16 md:pb-0">
        {/* Center: Message Feed */}
        <div className="flex-1 flex flex-col bg-surface overflow-hidden relative">
          {/* Feed Header */}
          <div className="px-6 py-4 bg-surface/80 backdrop-blur-md z-10 flex items-center justify-between border-b border-outline-variant/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined">diversity_3</span>
              </div>
              <div>
                <h1 className="font-headline font-extrabold text-lg leading-none text-primary">General Room</h1>
                <p className="text-xs text-on-surface-variant mt-1">1,248 students active now</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-full hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined">search</span>
              </button>
              <button className="p-2 rounded-full hover:bg-surface-container transition-colors lg:hidden">
                <span className="material-symbols-outlined">info</span>
              </button>
            </div>
          </div>

          {/* Scrollable Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6 scrollbar-hide pb-32">
            {/* Date Separator */}
            <div className="flex justify-center">
              <span className="bg-surface-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Today</span>
            </div>

            {/* Message: Received */}
            <div className="flex flex-col gap-1 max-w-[80%]">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">Swift Owl</span>
                <span className="text-[10px] text-on-surface-variant">10:42 AM</span>
              </div>
              <div className="bg-surface-container-high p-4 rounded-xl rounded-tl-none shadow-sm">
                <p className="text-on-surface leading-relaxed">Does anyone have the notes for CS201 from this morning? I slept through my alarm again... 🦉</p>
              </div>
            </div>

            {/* Message: Sent */}
            <div className="flex flex-col gap-1 max-w-[80%] self-end items-end">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] text-on-surface-variant">10:45 AM</span>
                <span className="bg-primary text-on-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter italic">Me (Lone Wolf)</span>
              </div>
              <div className="bg-primary-container p-4 rounded-xl rounded-tr-none shadow-sm">
                <p className="text-on-primary-container leading-relaxed font-medium">Check the Library shared drive under &quot;S1-2024&quot;. I uploaded mine about an hour ago!</p>
              </div>
            </div>

            {/* Message: Received (Grouped) */}
            <div className="flex flex-col gap-1 max-w-[80%]">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">Brave Tiger</span>
                <span className="text-[10px] text-on-surface-variant">11:02 AM</span>
              </div>
              <div className="bg-surface-container-high p-4 rounded-xl rounded-tl-none shadow-sm">
                <p className="text-on-surface leading-relaxed">The cafeteria&apos;s Pho is actually decent today. Shocking, I know. 🍜</p>
              </div>
            </div>

            {/* Image Message Received */}
            <div className="flex flex-col gap-1 max-w-[60%]">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">Artistic Fox</span>
                <span className="text-[10px] text-on-surface-variant">11:15 AM</span>
              </div>
              <div className="bg-surface-container-high p-2 rounded-xl rounded-tl-none shadow-sm overflow-hidden">
                <div className="relative w-full h-48 mb-2">
                  <Image className="rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD56WilpRFZSEr8gQRYney37bZ8HlObUfbjYFedbXlVVVw-Q5EDQ6OaAAQvgl03L4HR25iy8f4krbVYTw-KY-ETIk72K_uDpVmamqSt_L-w2SVNtDhTF-u4HhXz10v7NAobXZIwfF0h7zld45g_YgLHQjPADXi6Xn_Lo706oAi6nSS6dnhdTeCnxsZIEKbs-Qe5MrFDKmXq53U2V9tywvMvE0LBi1v71KhuFaMFJAeB8OdGhXSaVExJxh2cfny34PwH6Z2yvQpgHM4" alt="Vibrant cafeteria food photo with pho" fill unoptimized />
                </div>
                <p className="text-on-surface text-sm px-2 pb-2">Verified. Even the broth looks clear today!</p>
              </div>
            </div>

            {/* Message: Received */}
            <div className="flex flex-col gap-1 max-w-[80%]">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">Calm River</span>
                <span className="text-[10px] text-on-surface-variant">11:20 AM</span>
              </div>
              <div className="bg-surface-container-high p-4 rounded-xl rounded-tl-none shadow-sm">
                <p className="text-on-surface leading-relaxed">Reminder: The midnight study session starts at 9 PM in the North Wing. Be there or be square.</p>
              </div>
            </div>
          </div>

          {/* Message Input Area */}
          <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 bg-surface/90 backdrop-blur-md">
            <div className="bg-surface-container-lowest shadow-lg rounded-2xl flex items-end p-2 gap-2 border border-outline-variant/20">
              <button className="p-2 rounded-xl text-on-surface-variant hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined">mood</span>
              </button>
              <button className="p-2 rounded-xl text-on-surface-variant hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined">attach_file</span>
              </button>
              <textarea className="flex-1 bg-transparent border-none focus:ring-0 text-on-surface py-2.5 resize-none max-h-32 scrollbar-hide" placeholder="Share a thought anonymously..." rows={1}></textarea>
              <button className="bg-primary text-on-primary w-10 h-10 flex items-center justify-center rounded-xl shadow-md active:scale-90 transition-transform">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
              </button>
            </div>
            <p className="text-[10px] text-center mt-2 text-on-surface-variant opacity-60">Your messages are encrypted and anonymous.</p>
          </div>
        </div>

        {/* Right Side Bar: Info & Rules */}
        <aside className="hidden xl:flex flex-col w-80 bg-surface-container-low border-l border-outline-variant/10 p-6 overflow-y-auto">
          <h3 className="font-headline font-bold text-primary mb-4">Room Intel</h3>

          <div className="bg-surface-container-lowest rounded-xl p-4 mb-6 shadow-sm border border-outline-variant/10">
            <p className="text-xs font-semibold text-on-surface-variant mb-3 uppercase tracking-wider">Mission Statement</p>
            <p className="text-sm text-on-surface leading-relaxed italic">
                &quot;A space for students to connect, vent, and share without the weight of a digital identity.&quot;
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Sanctuary Rules</h4>
            <div className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-secondary-fixed shrink-0"></div>
              <p className="text-sm text-on-surface">No doxxing or revealing real names.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-secondary-fixed shrink-0"></div>
              <p className="text-sm text-on-surface">Academic honesty is respected; no cheating.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-secondary-fixed shrink-0"></div>
              <p className="text-sm text-on-surface">Be supportive. We&apos;re all in this together.</p>
            </div>
          </div>

          <div className="mt-auto space-y-3">
            <button className="w-full flex items-center justify-center gap-2 py-3 border border-outline-variant text-error font-bold rounded-xl hover:bg-error-container/20 transition-colors active:scale-95">
              <span className="material-symbols-outlined">report</span>
              Report Violation
            </button>
            <button className="w-full flex items-center justify-center gap-2 py-3 bg-surface-variant text-on-surface-variant font-bold rounded-xl hover:bg-surface-dim transition-colors">
              <span className="material-symbols-outlined">logout</span>
              Leave Room
            </button>
          </div>
        </aside>
      </div>
    </AppLayout>
  );
}
