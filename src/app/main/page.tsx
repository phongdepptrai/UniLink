import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-grow flex flex-col">
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Content Section (Left) */}
          <div className="lg:col-span-7 space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-extrabold font-headline text-primary tracking-tight leading-tight">
                Enter the <span className="text-on-secondary-container">Sanctuary</span>
              </h1>
              <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
                A quiet space for academic discourse. Your identity remains protected by institutional-grade encryption, while your ideas roam free.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feature Card 1 */}
              <div className="bg-surface-container-low p-6 rounded-xl space-y-3 transition-all hover:bg-surface-container">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-secondary-container">
                    fingerprint
                  </span>
                </div>
                <h3 className="text-xl font-bold font-headline text-primary">
                  Pseudo-anonymity
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Pick a unique nickname. Your real identity stays hidden from peers while maintaining community accountability.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-surface-container-low p-6 rounded-xl space-y-3 transition-all hover:bg-surface-container">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary-fixed">
                    verified_user
                  </span>
                </div>
                <h3 className="text-xl font-bold font-headline text-primary">
                  School Verification
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Verify your student status to unlock private school-only rooms and exclusive academic resources.
                </p>
              </div>
            </div>
          </div>

          {/* Login Card (Right) */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="bg-surface-container-lowest p-8 md:p-10 rounded-[2rem] shadow-sm border border-outline-variant/20 relative overflow-hidden">
              {/* Background accent */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary-container/20 blur-[80px] rounded-full"></div>
              <div className="relative z-10 space-y-8">
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold font-headline text-primary">
                    Welcome Back
                  </h2>
                  <p className="text-sm text-on-surface-variant">
                    Access the Digital Atheneum
                  </p>
                </div>

                <button className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-surface border border-outline-variant/30 rounded-full hover:bg-surface-container-low transition-all duration-200 group">
                  <Image
                    alt="Google Logo"
                    className="w-6 h-6"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbkX-s1mfWqfY2C1c9K121jI_zw4AYh1kA6wRVYFNM7aIBCFydskPKwa6EGBuXb_eY2YclzVVcd1lrOFzGhO6_6wZoCMU9nsVc9bm1Rr1p5kR7hQES1b8JrY489lFGrzurc1TdZAy38QWdiQOdqXHBhUl5oKwYUOcS3qxxYR6yY1FlN67NrBqD8ZRmENKEijJaI6KhoQ9H84NZqUM48kzQxlF9DZx22uRlRUCRdGCrztsnSlirVm0L5XD4jOxp2JXcF_eD8ebSpb8"
                    width={24}
                    height={24}
                  />
                  <span className="font-semibold text-primary font-body">
                    Connect with Google
                  </span>
                </button>

                <div className="flex items-center gap-4 py-2">
                  <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
                  <span className="text-xs text-outline font-label uppercase tracking-widest">
                    Secure Entry
                  </span>
                  <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
                </div>

                <form className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-primary ml-4">
                      Student ID / Email
                    </label>
                    <input
                      className="w-full bg-surface-container-low border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-secondary/30 focus:bg-surface-bright transition-all text-on-surface placeholder:text-outline/50"
                      placeholder="student@university.edu"
                      type="email"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-primary ml-4">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        className="w-full bg-surface-container-low border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-secondary/30 focus:bg-surface-bright transition-all text-on-surface placeholder:text-outline/50"
                        id="password-input"
                        placeholder="••••••••"
                        type="password"
                      />
                      <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-xl">
                          visibility
                        </span>
                      </button>
                    </div>
                  </div>
                  <button className="w-full py-4 gradient-button text-on-primary rounded-full font-bold shadow-lg shadow-primary/10 hover:scale-[1.02] active:scale-95 transition-all">
                    Sign In
                  </button>
                </form>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-[1px] flex-grow bg-outline-variant/20"></div>
                    <span className="text-[10px] text-outline font-bold uppercase tracking-widest leading-none">New to AnonEdu?</span>
                    <div className="h-[1px] flex-grow bg-outline-variant/20"></div>
                  </div>
                  <Link href="/auth/signup" className="w-full block text-center py-4 border-2 border-primary/20 text-primary rounded-full font-bold hover:bg-primary/5 hover:border-primary/30 transition-all active:scale-95">
                    Create Account
                  </Link>
                </div>

                <div className="text-center">
                  <p className="text-[11px] text-on-surface-variant leading-relaxed max-w-[280px] mx-auto italic">
                    By signing in, you agree to our{" "}
                    <Link href="/main/terms" className="text-secondary font-semibold hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/main/community" className="text-secondary font-semibold hover:underline">
                      Community Guidelines
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Indicator */}
            <div className="mt-8 flex items-center justify-center gap-6 opacity-60">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">lock</span>
                <span className="text-xs font-label">SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">
                  shield_with_heart
                </span>
                <span className="text-xs font-label">No Data Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
