import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center px-4 py-24 bg-surface-container-low">
      <div className="max-w-3xl w-full space-y-12 bg-surface-container-lowest p-12 rounded-[2.5rem] shadow-sm border border-outline-variant/10">
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-container mb-4">
            <span className="material-symbols-outlined text-on-secondary-container text-3xl">shield_person</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-primary tracking-tight">Our Privacy Mission</h1>
          <p className="text-on-surface-variant text-lg">Your identity is your business. Your education is ours.</p>
        </div>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-headline text-primary">1. Pseudo-Anonymity by Default</h2>
            <p className="text-on-surface-variant leading-relaxed">
              We believe academic freedom thrives when students can speak without fear of social repercussions. 
              On AnonEdu, you choose a nickname that represents you, while your legal identity remains encrypted 
              and decoupled from your public presence.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-headline text-primary">2. No Data Tracking</h2>
            <p className="text-on-surface-variant leading-relaxed">
              We don&apos;t track your clicks to sell ads. We don&apos;t build shadow profiles. Our revenue comes from
              institutional partnerships, not from your browsing history.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-headline text-primary">3. Institutional Security</h2>
            <p className="text-on-surface-variant leading-relaxed">
              All data is stored in ISO-certified data centers with AES-256 encryption. Only you hold the 
              keys to your private study vaults.
            </p>
          </section>
        </div>

        <div className="pt-8 border-t border-outline-variant/10 text-center">
          <Link href="/main" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Sanctuary
          </Link>
        </div>
      </div>
    </div>
  );
}
