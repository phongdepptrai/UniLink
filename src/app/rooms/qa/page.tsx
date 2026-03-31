import AppLayout from '../../../components/AppLayout';

export default function QARoomPage() {
  return (
    <AppLayout activePage="Rooms" activeTab="Q&A">
      <div className="flex-1 flex overflow-hidden bg-surface pb-16 md:pb-0">
        {/* Chat Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-surface">
          {/* Chat Header Metadata */}
          <div className="px-8 py-6 bg-surface-container-lowest shadow-sm border-b border-surface-container">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-secondary-fixed text-on-secondary-fixed text-[10px] font-black uppercase px-2 py-0.5 rounded-full">Active Topic</span>
                  <span className="text-xs text-slate-500">24 students online</span>
                </div>
                <h1 className="text-2xl font-headline font-extrabold text-primary tracking-tight">How do I implement Dijkstra&apos;s in Python for a weighted graph?</h1>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-full text-sm font-semibold hover:bg-surface-container-highest transition-colors">
                  <span className="material-symbols-outlined text-sm">bookmark</span>
                  Save
                </button>
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 pb-32">
            {/* Question Message (Original) */}
            <div className="flex flex-col gap-3 max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-white font-bold">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-primary">QuantumScribe</div>
                  <div className="text-[10px] text-slate-500">Asked 2 hours ago</div>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-secondary/10 relative">
                <div className="absolute -top-3 left-6 bg-primary text-on-primary text-[10px] font-black uppercase px-3 py-1 rounded-full">The Question</div>
                <p className="text-on-surface font-body leading-relaxed">
                  I&apos;m struggling with the priority queue implementation in Dijkstra&apos;s algorithm. Should I use `heapq` or is there a better way to handle weight updates in the priority queue? Any code snippets would be super helpful!
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="px-3 py-1 bg-surface-container text-primary text-xs font-bold rounded-lg">#python</span>
                  <span className="px-3 py-1 bg-surface-container text-primary text-xs font-bold rounded-lg">#algorithms</span>
                </div>
              </div>
            </div>

            {/* Answer Message */}
            <div className="flex flex-col gap-3 max-w-3xl ml-auto items-end">
              <div className="flex items-center gap-3 flex-row-reverse">
                <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold">
                  <span className="material-symbols-outlined">school</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-primary">LogicLord</div>
                  <div className="text-[10px] text-slate-500">Replied 45 mins ago</div>
                </div>
              </div>

              <div className="bg-surface-container-highest p-6 rounded-2xl shadow-sm max-w-2xl border-l-4 border-secondary-fixed text-left">
                <p className="text-on-surface font-body leading-relaxed">
                  Using <code className="bg-white/50 px-1 rounded">heapq</code> is the standard way. However, since Python&apos;s <code className="bg-white/50 px-1 rounded">heapq</code> doesn&apos;t support <code className="bg-white/50 px-1 rounded">decrease_key</code>, you can simply push the new (distance, node) tuple and check if the popped distance is greater than the current known distance.
                </p>
                <pre className="mt-4 bg-primary text-on-primary-container p-4 rounded-xl text-xs font-mono overflow-x-auto">
{`import heapq

def dijkstra(graph, start):
    distances = {node: float('infinity') for node in graph}
    distances[start] = 0
    pq = [(0, start)]

    while pq:
        current_distance, current_node = heapq.heappop(pq)
        # ... logic here ...`}
                </pre>

                <div className="mt-6 flex flex-wrap items-center justify-between border-t border-slate-300/30 pt-4 gap-4">
                  <div className="flex gap-4">
                    <button className="flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-secondary">
                      <span className="material-symbols-outlined text-sm">thumb_up</span> 12
                    </button>
                    <button className="flex items-center gap-1 text-xs font-bold text-slate-600">
                      <span className="material-symbols-outlined text-sm">chat_bubble</span> 3
                    </button>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-1.5 bg-secondary-fixed text-on-secondary-fixed rounded-full text-[11px] font-black uppercase tracking-wider hover:brightness-95 transition-all">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Mark as Answer
                  </button>
                </div>
              </div>
            </div>

            {/* Verified Answer */}
            <div className="flex flex-col gap-3 max-w-3xl ml-auto items-end">
              <div className="flex items-center gap-3 flex-row-reverse">
                <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold relative">
                  <span className="material-symbols-outlined">psychology</span>
                  <div className="absolute -top-1 -right-1 bg-secondary text-white rounded-full p-0.5 border-2 border-surface">
                    <span className="material-symbols-outlined text-[10px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-primary">AlgoWiz</div>
                  <div className="text-[10px] text-slate-500">Replied 1 hour ago</div>
                </div>
              </div>

              <div className="bg-secondary-container/10 p-6 rounded-2xl shadow-md max-w-2xl border-2 border-secondary-fixed relative text-left">
                <div className="absolute -top-3 right-6 bg-secondary text-on-secondary text-[10px] font-black uppercase px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Verified Answer
                </div>
                <p className="text-on-surface font-body leading-relaxed mt-2">
                  Just to add to LogicLord&apos;s point, make sure your graph is represented as an adjacency list for O(E log V) complexity. Here&apos;s a quick visualization of the relaxation step...
                </p>
                <div className="mt-4 p-4 bg-white/40 rounded-xl border border-dashed border-secondary/30">
                  <div className="flex items-center justify-center h-24 text-secondary-container italic text-sm">
                    [ Image Placeholder: Graph Relaxation Diagram ]
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 bg-surface-container-low border-t border-surface-container-high lg:right-80">
            <div className="max-w-4xl mx-auto relative">
              <textarea className="w-full bg-surface-container-lowest border-none rounded-2xl px-6 py-4 pr-32 focus:ring-2 focus:ring-secondary shadow-sm resize-none scrollbar-hide" placeholder="Write your answer or ask for clarification..." rows={1}></textarea>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
                <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">attach_file</span>
                </button>
                <button className="bg-primary text-on-primary px-6 py-2 rounded-xl font-bold text-sm hover:opacity-90 active:scale-95 transition-all">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trending Sidebar */}
        <aside className="hidden lg:block w-80 bg-surface-container-low border-l border-surface-container p-6 space-y-6 overflow-y-auto">
          <div>
            <h3 className="text-xs font-black text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-sm">trending_up</span>
              Trending Questions
            </h3>

            <div className="space-y-4">
              <div className="group cursor-pointer">
                <div className="text-xs text-slate-500 mb-1">In #Physics - 12m ago</div>
                <h4 className="text-sm font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">How to calculate orbital velocity for Elliptical orbits?</h4>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-[10px] font-medium text-slate-400 flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">forum</span> 18
                  </span>
                  <span className="text-[10px] font-medium text-slate-400 flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">visibility</span> 450
                  </span>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="text-xs text-slate-500 mb-1">In #OrganicChemistry - 1h ago</div>
                <h4 className="text-sm font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">Sn1 vs Sn2 mechanism: Why does solvent polarity matter?</h4>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-[10px] font-medium text-slate-400 flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">forum</span> 5
                  </span>
                  <span className="text-[10px] font-medium text-slate-400 flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">visibility</span> 120
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary-container p-5 rounded-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-white font-headline font-bold text-lg mb-2 leading-tight">Become a Top Contributor</h3>
              <p className="text-on-primary-container text-xs mb-4">Earn the &apos;Sage&apos; badge by verifying 5 more answers this week.</p>
              <button className="w-full py-2 bg-secondary-fixed text-on-secondary-fixed font-black text-[10px] uppercase tracking-wider rounded-lg">View Leaderboard</button>
            </div>
            {/* Abstract Background Decorative Element */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-secondary-container/20 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
          </div>

          <div>
            <h3 className="text-xs font-black text-primary uppercase tracking-widest mb-4">Your Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-secondary-fixed mt-1.5 shrink-0"></div>
                <div>
                  <p className="text-xs font-medium text-slate-700">Someone upvoted your answer in <span className="font-bold">#DataStructures</span></p>
                  <span className="text-[10px] text-slate-400">2h ago</span>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0"></div>
                <div>
                  <p className="text-xs font-medium text-slate-700">You earned <span className="font-bold">+50 XP</span> for peer help</p>
                  <span className="text-[10px] text-slate-400">5h ago</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </AppLayout>
  );
}
