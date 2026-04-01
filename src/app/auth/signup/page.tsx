import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-surface">
      {/* LEFT SIDE: Branding and Value Prop */}
      <section className="hidden md:flex md:w-5/12 lg:w-4/12 flex-col justify-between p-12 relative overflow-hidden bg-primary text-white">
        {/* Decorative Abstract Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image
            className="w-full h-full object-cover mix-blend-overlay"
            alt="abstract geometric architectural patterns"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuArGkbK-AjDqyqIBuPalbAMS_DbT0a8pbedacDvWwiudjqJx_muIRv8Lx7VKfQhTsXTNJjm5GjaCxRy-dFDma25qJDTsb7irbymWRZrzk5DWc4xI9KbPibUIv9UlxHULWWHog75nm2wnlLqyCnzxmEC-oWnD-D45xmXtn9DL36ewZN2KfnOXp8wgZVgcDBZSAcppLLL3n3Kvmtb_5TO1hmR2prw3rfj6kGQICNfYWdCvgub0oeKTXXXK0w3i0Oc16cO1TyF9eT4ad4"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 42vw, 33vw"
            priority
          />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-16">
            <div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center">
              <span
                className="material-symbols-outlined text-on-secondary-fixed"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                school
              </span>
            </div>
            <span className="font-headline font-extrabold tracking-tighter text-2xl">
              AnonEdu
            </span>
          </div>

          <div className="space-y-12">
            <div className="group">
              <div className="flex items-center gap-4 mb-4">
                <span className="material-symbols-outlined text-secondary-fixed text-3xl">
                  fingerprint
                </span>
                <h3 className="font-headline text-xl font-bold">
                  Pseudo-anonymity
                </h3>
              </div>
              <p className="text-on-primary-container leading-relaxed">
                Unique nicknames ensure your real identity stays hidden while
                your voice remains heard across the campus network.
              </p>
            </div>

            <div className="group">
              <div className="flex items-center gap-4 mb-4">
                <span className="material-symbols-outlined text-secondary-fixed text-3xl">
                  gavel
                </span>
                <h3 className="font-headline text-xl font-bold">
                  Academic Integrity
                </h3>
              </div>
              <p className="text-on-primary-container leading-relaxed">
                Safety through standards. Our community is moderated to uphold
                scholarly discourse and student safety protocols.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 pt-12">
          <div className="p-6 rounded-xl bg-primary-container/50 border border-white/5 backdrop-blur-md">
            <div className="flex items-center gap-4 mb-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-primary overflow-hidden relative">
                  <Image
                    className="w-full h-full object-cover"
                    alt="diverse university student"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzL1A7OedzGuXqoMgK5CaJFLeHuWww2hmnsf7yseqqkYqw1HTrkGG6NKGgvm7Qb0_dnwoWc2wpvgW4klY8NdOVNrznvJi77K8wGlHvakOAvGdIZs5Ecjbg5i-kNmwpXZNwgymQ69gBKRc9TDuxGDbX59Y-IbeO4toWCaiO9YTpppR-yR8Qo9ZxgP93S6X9aZHaiMYFPoOPhRtvdj8LwROYCLVxB1kxzrPY5KBnMFcPaWG1B2ZXcFjdFAwccgwyBMTVzHVuqMEEFV0"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-primary overflow-hidden relative">
                  <Image
                    className="w-full h-full object-cover"
                    alt="focused student"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3UmTkJo1kXDVW6vXqke7JCJ5YRBlzL-EMYuv7aLzckHDQyoMlwSBKGue3138cky6v9o3YXDVbl5_mER6tYJliN1de9FkPWxjxxp68wj1JgIAv6HEUVWQmXFk4er3V5bleUk8XPpNuLT6mR3HLaBd_EOWHC2Sz6SnjSfYRCjonRBR1gHvOo2Ax-Bw1IZ8_o4-6KXdTPMMUFZC9yMl6FPFZ_7K5wpTXjYTKmZIZ3r81ywTZUsKFtfgW96mbYu3wA9W98zWQs3XNZ5A"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-primary bg-secondary-fixed flex items-center justify-center text-xs text-on-secondary-fixed font-bold">
                  +12k
                </div>
              </div>
            </div>
            <p className="text-xs font-medium text-secondary-fixed tracking-wider uppercase">
              Verified Students Online
            </p>
          </div>
        </div>
      </section>

      {/* RIGHT SIDE: Sign Up Form */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 lg:p-24 bg-surface relative">
        {/* Mobile Brand Header */}
        <div className="md:hidden flex items-center gap-2 mb-12 self-start">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span
              className="material-symbols-outlined text-secondary-fixed text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              school
            </span>
          </div>
          <span className="font-headline font-extrabold tracking-tighter text-xl text-primary">
            AnonEdu
          </span>
        </div>

        <div className="w-full max-w-md">
          <header className="mb-10 text-left">
            <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4">
              Join the Sanctuary
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Verify your student status and claim your unique anonymous
              identity.
            </p>
          </header>

          <form className="space-y-6">
            {/* University Email */}
            <div className="space-y-2">
              <label className="font-headline text-sm font-semibold text-primary ml-1">
                University / School Email
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined text-xl">
                    alternate_email
                  </span>
                </div>
                <input
                  className="w-full pl-12 pr-4 py-4 bg-surface-container-lowest rounded-xl border-none focus:ring-2 focus:ring-secondary-fixed transition-all shadow-ambient outline-none text-on-surface placeholder:text-outline-variant"
                  placeholder="student@university.edu"
                  required
                  type="email"
                />
              </div>
            </div>

            {/* Institution Select */}
            <div className="space-y-2">
              <label className="font-headline text-sm font-semibold text-primary ml-1">
                Select Institution
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined text-xl">
                    account_balance
                  </span>
                </div>
                <select defaultValue="" className="w-full pl-12 pr-10 py-4 bg-surface-container-lowest rounded-xl border-none focus:ring-2 focus:ring-secondary-fixed appearance-none transition-all shadow-ambient outline-none text-on-surface">
                  <option disabled value="">
                    Choose your campus...
                  </option>
                  <option value="hcmut">
                    Vietnam National University (HCMUT)
                  </option>
                  <option value="rmit">RMIT University Vietnam</option>
                  <option value="hust">Hanoi University of Science & Tech</option>
                  <option value="fulbright">Fulbright University Vietnam</option>
                  <option value="ueh">University of Economics HCM</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-on-surface-variant">
                    expand_more
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Password */}
              <div className="space-y-2">
                <label className="font-headline text-sm font-semibold text-primary ml-1">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant group-focus-within:text-primary transition-colors">
                    <span className="material-symbols-outlined text-xl">lock</span>
                  </div>
                  <input
                    className="w-full pl-12 pr-4 py-4 bg-surface-container-lowest rounded-xl border-none focus:ring-2 focus:ring-secondary-fixed transition-all shadow-ambient outline-none text-on-surface placeholder:text-outline-variant"
                    placeholder="••••••••"
                    required
                    type="password"
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <label className="font-headline text-sm font-semibold text-primary ml-1">
                  Confirm Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant group-focus-within:text-primary transition-colors">
                    <span className="material-symbols-outlined text-xl">
                      shield_person
                    </span>
                  </div>
                  <input
                    className="w-full pl-12 pr-4 py-4 bg-surface-container-lowest rounded-xl border-none focus:ring-2 focus:ring-secondary-fixed transition-all shadow-ambient outline-none text-on-surface placeholder:text-outline-variant"
                    placeholder="••••••••"
                    required
                    type="password"
                  />
                </div>
              </div>
            </div>

            {/* Checkbox / TOS */}
            <div className="flex items-start gap-3 px-1">
              <div className="pt-0.5">
                <input
                  className="w-5 h-5 rounded-lg border-outline-variant text-secondary-fixed focus:ring-secondary-fixed bg-surface-container-lowest"
                  id="tos"
                  type="checkbox"
                />
              </div>
              <label
                className="text-sm text-on-surface-variant leading-snug"
                htmlFor="tos"
              >
                I agree to the{" "}
                <Link className="text-primary font-bold hover:underline" href="/main/terms">
                  Terms of Service
                </Link>{" "}
                and acknowledge that academic misconduct is not permitted.
              </label>
            </div>

            {/* Primary CTA */}
            <button
              className="w-full py-5 rounded-full gradient-primary text-white font-headline font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
              type="submit"
            >
              Create My Account
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </form>

          <footer className="mt-12 text-center">
            <p className="text-on-surface-variant">
              Already have an account?{" "}
              <Link
                className="text-primary font-bold hover:text-secondary transition-colors underline decoration-secondary-fixed decoration-2 underline-offset-4"
                href="/main"
              >
                Sign In
              </Link>
            </p>
          </footer>
        </div>

        {/* Identity Chip Preview (Floating Visual Soul) */}
        <div className="hidden lg:block absolute bottom-12 right-12">
          <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-ambient border border-surface-container-high flex items-center gap-4 rotate-3 transform">
            <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed font-black">
              AS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-primary">
                  Anonymous Scholar #492
                </span>
                <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
              </div>
              <p className="text-xs text-on-surface-variant">
                Identity Secured • HCMUT
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
