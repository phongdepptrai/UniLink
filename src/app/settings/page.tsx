import Image from 'next/image';
import AppLayout from '../../components/AppLayout';

export default function SettingsPage() {
  return (
    <AppLayout activeTab="Settings">
      <div className="flex-1 p-6 md:p-12 max-w-5xl mx-auto w-full overflow-y-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold font-headline text-primary tracking-tight">Identity & Privacy</h1>
          <p className="text-on-surface-variant mt-2">Manage how you appear in the digital library.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-24">
          {/* Profile Section */}
          <section className="lg:col-span-5 space-y-6">
            {/* Identity Card */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>

              <div className="flex flex-col items-center text-center relative z-10">
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full bg-surface-container-highest flex items-center justify-center border-4 border-surface overflow-hidden relative">
                    <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuChpvGAfJFJymORN6N4FJhrfVRfzmHLiJQ3VinAksfr_VEh4712h35tsEINev6XXJ7TwS7PmHeaZY7P4s7thqdm5FLbaPbvTQAJtyKCJM4tIQXbRnc93fWXZ5NBtSzudyDVHiQIt7xt-AcFdtTiKxPh9NotxvLdK_TXy0NTpi29ql_0NaIVdasBSXYPmj8YLEHKD8zqWO7plvge9I5Cr7BKO1XMhkiHtsuK31ghx59aLDPSWzrheeryGRj4rhnL8GLuEJ7c7wohow0" alt="Anonymous Avatar" fill className="object-cover" unoptimized />
                  </div>
                  <button className="absolute bottom-0 right-0 bg-primary text-on-primary p-2 rounded-full shadow-lg active:scale-90 transition-transform">
                    <span className="material-symbols-outlined text-sm">refresh</span>
                  </button>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full text-xs font-bold mb-2">
                  <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                  ANONYMOUS
                </div>

                <h2 className="text-2xl font-bold font-headline text-primary">QuietScribe_42</h2>
                <p className="text-on-surface-variant text-sm mt-1 italic">&quot;The wisdom of the many, the voice of the few.&quot;</p>

                <button className="mt-8 w-full py-3 px-6 academic-gradient text-white rounded-full font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all active:scale-[0.98]">
                  <span className="material-symbols-outlined">cached</span>
                  Refresh Nickname
                </button>
              </div>
            </div>

            {/* Linked School */}
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">account_balance</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-primary font-headline">Linked Institution</h3>
                  <p className="text-xs text-on-surface-variant">Verified via .edu email</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded-lg flex items-center justify-between">
                <span className="font-medium text-on-surface">Hanoi University of Science and Technology</span>
                <span className="material-symbols-outlined text-secondary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
            </div>
          </section>

          {/* Settings Forms Section */}
          <section className="lg:col-span-7 space-y-8">
            {/* Account Settings */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-headline text-primary border-l-4 border-secondary-container pl-3">Account Settings</h3>

              <div className="space-y-3">
                <div className="group">
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1 ml-1">Recovery Email</label>
                  <div className="bg-surface-container-lowest rounded-xl p-4 flex items-center justify-between hover:bg-surface-bright transition-colors border border-transparent focus-within:border-secondary-container/30">
                    <span className="text-on-surface">q********e@student.hust.edu.vn</span>
                    <button className="text-primary text-sm font-bold underline">Change</button>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-surface-container-low p-4 rounded-xl">
                  <div>
                    <h4 className="font-bold text-primary text-sm">Two-Factor Authentication</h4>
                    <p className="text-xs text-on-surface-variant">Add an extra layer of security</p>
                  </div>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-surface-container-highest rounded-full transition-colors peer peer-checked:bg-secondary-container"></div>
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Controls */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-headline text-primary border-l-4 border-secondary-container pl-3">Privacy Controls</h3>

              <div className="bg-surface-container-lowest rounded-xl divide-y divide-outline-variant/10 overflow-hidden shadow-sm">
                <label className="flex items-center justify-between p-4 hover:bg-surface-bright transition-colors cursor-pointer">
                  <div>
                    <p className="font-medium text-on-surface">Hide School Badge</p>
                    <p className="text-xs text-on-surface-variant">Do not show institution name on posts</p>
                  </div>
                  <input type="checkbox" className="rounded text-primary focus:ring-secondary-container h-5 w-5" />
                </label>

                <label className="flex items-center justify-between p-4 hover:bg-surface-bright transition-colors cursor-pointer">
                  <div>
                    <p className="font-medium text-on-surface">Ghost Mode</p>
                    <p className="text-xs text-on-surface-variant">Hide &quot;Active Now&quot; status from peers</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded text-primary focus:ring-secondary-container h-5 w-5" />
                </label>

                <label className="flex items-center justify-between p-4 hover:bg-surface-bright transition-colors cursor-pointer">
                  <div>
                    <p className="font-medium text-on-surface">Direct Message Filter</p>
                    <p className="text-xs text-on-surface-variant">Only receive messages from verified users</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded text-primary focus:ring-secondary-container h-5 w-5" />
                </label>
              </div>
            </div>

            {/* Moderation Summary */}
            <div className="bg-primary p-8 rounded-xl text-on-primary shadow-xl relative overflow-hidden group">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-container/10 rounded-full translate-x-1/2 translate-y-1/2 group-hover:scale-110 transition-transform duration-700"></div>

              <h3 className="text-xl font-bold font-headline mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-container">gavel</span>
                Moderation Policy
              </h3>

              <div className="space-y-3 text-on-primary-container text-sm relative z-10">
                <p>AnonEdu is built on <span className="text-on-primary font-bold">Mutual Respect</span>. While we cherish anonymity, we maintain a zero-tolerance policy for:</p>
                <ul className="grid grid-cols-2 gap-2 text-xs opacity-90">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> Harassment & Doxxing</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> Academic Dishonesty</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> Hate Speech</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> Commercial Spam</li>
                </ul>
                <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                  <span className="text-xs font-medium uppercase tracking-widest text-secondary-fixed">Status: Trusted Student</span>
                  <a href="#" className="text-xs font-bold underline hover:text-white transition-colors">Read Full Charter</a>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <button className="px-6 py-2.5 rounded-full text-primary font-bold hover:bg-surface-container-highest transition-colors">Discard Changes</button>
              <button className="px-8 py-2.5 bg-primary text-on-primary rounded-full font-bold shadow-md hover:shadow-lg active:scale-95 transition-all">Save Profile</button>
            </div>
          </section>
        </div>
      </div>
    </AppLayout>
  );
}
