import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-background border-t border-border mt-32">
      {/* Watermark Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none opacity-5 select-none overflow-hidden">
        <span className="text-[20vw] font-heading font-bold whitespace-nowrap">
          LUMINEXIS
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
              <span className="font-heading text-xl font-bold tracking-wider text-foreground">
                LUMINEXIS
              </span>
            </Link>
            <p className="text-foreground-secondary text-sm leading-relaxed max-w-xs">
              AI-powered wearable technology empowering people with vision and hearing loss to move independently.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="col-span-1 flex flex-col">
            <h4 className="font-heading text-sm font-semibold tracking-wider uppercase mb-6 text-foreground">
              Explore
            </h4>
            <nav className="flex flex-col gap-4">
              {["Story", "Smart Glasses", "Smart Band", "AI Hearing Assist", "Features"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-foreground-secondary hover:text-primary transition-colors text-sm w-fit"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div className="col-span-1 flex flex-col">
            <h4 className="font-heading text-sm font-semibold tracking-wider uppercase mb-6 text-foreground">
              Contact
            </h4>
            <div className="flex flex-col gap-4 text-sm text-foreground-secondary">
              <a href="mailto:hello@luminexis.com" className="hover:text-primary transition-colors flex items-center gap-2">
                <Mail size={16} />
                hello@luminexis.com
              </a>
              <p>+91 81138 41363</p>
              <p>+91 96056 55712</p>
            </div>
          </div>

          {/* Social Column */}
          <div className="col-span-1 flex flex-col">
            <h4 className="font-heading text-sm font-semibold tracking-wider uppercase mb-6 text-foreground">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors text-foreground-secondary hover:text-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors text-foreground-secondary hover:text-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors text-foreground-secondary hover:text-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground-secondary">
          <p>&copy; {new Date().getFullYear()} Luminexis. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-foreground transition-colors">Accessibility Statement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
