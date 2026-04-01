import Link from "next/link";

export default function SecurityFAQPage() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center px-4 py-24 bg-surface-container-low">
      <div className="max-w-3xl w-full space-y-12 bg-surface-container-lowest p-12 rounded-[2.5rem] shadow-sm border border-outline-variant/10">
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-container mb-4">
            <span className="material-symbols-outlined text-on-primary-fixed text-3xl">verified_user</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-primary tracking-tight">Security FAQ</h1>
          <p className="text-on-surface-variant text-lg">Institutional-grade security, student-friendly usability.</p>
        </div>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-headline text-primary">How do I know my nickname is anonymous?</h2>
            <p className="text-on-surface-variant leading-relaxed">
              Upon account creation, we generate a unique cryptographic hash from your student ID. This hash 
              is only used for verification and is never linked back to your account public profile. 
              Our database only stores the pseudonym you provide.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-headline text-primary">How are study rooms secured?</h2>
            <p className="text-on-surface-variant leading-relaxed">
              Each room is encrypted with a unique session key. Access is restricted based on school 
              status and community reputation scores. We maintain real-time moderation to prevent 
              unauthorized intrusion.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-headline text-primary">Can I delete my data permanently?</h2>
            <p className="text-on-surface-variant leading-relaxed">
              Yes. We have a "Digital Erasure" policy. When you request data deletion, all 
              contributions (except shared educational resources where you are co-author) 
              are permanently scrubbed with zero traces remaining in our backups.
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
