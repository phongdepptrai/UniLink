import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row flex-1">
      {/* Left Column: Visual & Branding (The Digital Atheneum) */}
      <section className="hidden md:flex w-1/2 academic-gradient relative overflow-hidden items-center justify-center p-12">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-container/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-fixed/5 rounded-full -ml-32 -mb-32 blur-2xl"></div>
        <div className="relative z-10 max-w-lg text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-secondary-container rounded-xl flex items-center justify-center shadow-2xl">
              <span
                className="material-symbols-outlined text-primary text-5xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_stories
              </span>
            </div>
          </div>
          <h1 className="font-headline text-5xl font-black text-on-primary tracking-tight mb-6">
            AnonEdu
          </h1>
          <p className="text-on-primary-container text-xl font-medium leading-relaxed">
            A vibrant, anonymous sanctuary for students to share, study, and
            connect without borders.
          </p>
          {/* Bento-style feature hints */}
          <div className="mt-12 grid grid-cols-2 gap-4">
            <div className="bg-primary-container/40 border border-outline-variant/10 p-4 rounded-xl text-left">
              <span
                className="material-symbols-outlined text-secondary-fixed mb-2"
                data-icon="verified_user"
              >
                verified_user
              </span>
              <p className="text-on-primary text-sm font-semibold">Verified Safe</p>
            </div>
            <div className="bg-primary-container/40 border border-outline-variant/10 p-4 rounded-xl text-left">
              <span
                className="material-symbols-outlined text-secondary-fixed mb-2"
                data-icon="mask"
              >
                masks
              </span>
              <p className="text-on-primary text-sm font-semibold">
                Pseudo-anonymous
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Right Column: Auth Content */}
      <section className="flex-1 flex flex-col items-center justify-center p-6 md:p-16 lg:p-24 bg-surface-bright z-10 relative">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="md:hidden flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span
                className="material-symbols-outlined text-secondary-container text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_stories
              </span>
            </div>
            <span className="font-headline text-2xl font-black text-primary">
              AnonEdu
            </span>
          </div>

          <div className="space-y-2 mb-10">
            <h2 className="font-headline text-3xl font-extrabold text-primary tracking-tight">
              Enter the Sanctuary
            </h2>
            <p className="text-on-surface-variant font-medium">
              Join the student community where your voice matters more than your
              name.
            </p>
          </div>

          {/* Main CTA */}
          <div className="space-y-4">
            <button className="w-full flex items-center justify-center gap-3 bg-surface-container-lowest border border-outline-variant/20 py-4 px-6 rounded-full shadow-sm hover:bg-surface-container-low focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all active:scale-95 duration-200 group">
              <Image
                alt="Google Logo"
                className="w-6 h-6"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMOaXagCaZ-X2GQRYu1guT9MR0Kxq7nWVFTDjLHwri-Ax_GKNgfmRA3m9eTBxc22kPUSqqOYgPk0aFBJYocaRHITkJ24oVb4xwz_cnOa1wFS1zy8kG7050K6pBYdn3pCo_ez8O2UlaF_lJUSMU7ZFLoo0m_sNYSxtROD8Kank9WKbHw7-C3hcTZj26qh20eHArN3OVOSgTV85W2LgVwYBvAMuaZWzgAZzT5D353cLjuEoAu8nlYCPGSH2nAHhay_P4hl83m-8ogzQ"
                width={24}
                height={24}
              />
              <span className="text-primary font-bold text-lg">
                Connect with Google
              </span>
            </button>
            <p className="text-center text-xs text-outline font-medium px-4">
              By signing in, you agree to our{" "}
              <Link href="#" className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 rounded-sm">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 rounded-sm">
                Community Guidelines
              </Link>
              .
            </p>
          </div>

          {/* Divider */}
          <div className="my-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-surface-variant"></div>
            <span className="text-outline text-xs font-bold uppercase tracking-widest">
              Safety & Features
            </span>
            <div className="h-px flex-1 bg-surface-variant"></div>
          </div>

          {/* Educational Content (Bento Style Cards) */}
          <div className="space-y-4">
            {/* Pseudo-Anonymity Explained */}
            <div className="bg-surface-container-low rounded-xl p-5 border-l-4 border-secondary-container">
              <div className="flex items-start gap-4">
                <div className="bg-secondary-container/20 p-2 rounded-lg">
                  <span
                    className="material-symbols-outlined text-secondary text-2xl"
                    data-icon="account_circle"
                  >
                    account_circle
                  </span>
                </div>
                <div>
                  <h3 className="font-headline text-primary font-bold text-base">
                    Pseudo-anonymity
                  </h3>
                  <p className="text-on-surface-variant text-sm mt-1">
                    Pick a unique nickname. Your real identity stays hidden from
                    peers while maintaining community accountability.
                  </p>
                </div>
              </div>
            </div>

            {/* School Verification */}
            <div className="bg-surface-container-low rounded-xl p-5 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="bg-primary/5 p-2 rounded-lg">
                  <span
                    className="material-symbols-outlined text-primary text-2xl"
                    data-icon="school"
                  >
                    school
                  </span>
                </div>
                <div>
                  <h3 className="font-headline text-primary font-bold text-base">
                    School Verification
                  </h3>
                  <p className="text-on-surface-variant text-sm mt-1">
                    Verify your student status to unlock private school-only
                    rooms and exclusive academic resources.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer/Trust Link */}
          <div className="mt-12 pt-8 border-t border-surface-variant text-center">
            <div className="flex justify-center gap-6 mb-6">
              <div className="flex items-center gap-1 text-on-surface-variant">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  lock
                </span>
                <span className="text-xs font-bold">Encrypted</span>
              </div>
              <div className="flex items-center gap-1 text-on-surface-variant">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  shield_person
                </span>
                <span className="text-xs font-bold">Safe Space</span>
              </div>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm transition-all"
            >
              Learn about our privacy mission
              <span
                className="material-symbols-outlined text-sm"
                data-icon="arrow_forward"
              >
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Background Pattern Decoration */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
        <svg height="100%" width="100%">
          <pattern
            height="40"
            id="grid"
            patternUnits="userSpaceOnUse"
            width="40"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            ></path>
          </pattern>
          <rect fill="url(#grid)" height="100%" width="100%"></rect>
        </svg>
      </div>
    </main>
  );
}
