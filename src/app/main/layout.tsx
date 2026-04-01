import Link from "next/link";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* TopNavBar */}
      <header className="w-full flex justify-between items-center px-6 py-4 sticky top-0 z-50 glass-effect">
        <Link href="/main" className="text-xl font-bold tracking-tight text-primary font-headline">
          AnonEdu
        </Link>
        <div className="flex gap-6">
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors font-label text-sm flex items-center"
            href="/main/privacy"
          >
            Privacy Mission
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors font-label text-sm flex items-center"
            href="/main/security"
          >
            Security FAQ
          </Link>
          <Link
            className="gradient-button text-on-primary px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:scale-[1.02] transition-all active:scale-95"
            href="/auth/signup"
          >
            Join Now
          </Link>
        </div>
      </header>

      {children}

      <footer className="w-full flex flex-col md:flex-row justify-between items-center px-8 py-8 bg-surface border-t border-outline-variant/10">
        <div className="text-sm font-body text-on-surface-variant mb-4 md:mb-0">
          © 2024 AnonEdu. The Digital Atheneum.
        </div>
        <div className="flex gap-8">
          <Link
            className="text-sm text-on-surface-variant hover:text-secondary-fixed-dim transition-colors font-label"
            href="/main/privacy"
          >
            Privacy
          </Link>
          <Link
            className="text-sm text-on-surface-variant hover:text-secondary-fixed-dim transition-colors font-label"
            href="/main/terms"
          >
            Terms
          </Link>
          <Link
            className="text-sm text-on-surface-variant hover:text-secondary-fixed-dim transition-colors font-label"
            href="/main/support"
          >
            Support
          </Link>
        </div>
      </footer>
    </>
  );
}
