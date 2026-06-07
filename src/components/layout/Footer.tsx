import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export default function Footer() {
  return (
    <footer className="w-full mt-auto">
      {/* CTA Section */}
      <div className="bg-white py-16 sm:py-24">
        <Container size="lg">
          <div className="rounded-[2.5rem] bg-gradient-to-r from-blue-50/60 to-slate-50/60 px-8 py-16 sm:px-16 sm:py-20 md:px-20 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm border border-blue-100/50">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1e293b] mb-4">
                Join the Journey
              </h2>
              <p className="text-[#64748b] text-[15px] leading-relaxed">
                Help bring the next generation of assistive technology to the people who need it most.
              </p>
            </div>
            <div className="shrink-0 mt-4 md:mt-0">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#0f172a] px-8 text-[15px] font-medium text-white transition-all hover:bg-[#1e293b] hover:shadow-lg hover:-translate-y-0.5"
              >
                Let's Connect
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Footer Links Section */}
      <div className="bg-[#f8f9fb] py-16 sm:py-20">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 px-4 sm:px-0">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-5 flex flex-col items-start">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="flex h-8 w-8 items-center justify-center">
                  <svg
                    className="h-8 w-8 text-[#0f172a]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9 8h6" />
                    <path d="M9 12h5" />
                    <path d="M9 16h6" />
                    <path d="M9 8v8" />
                  </svg>
                </div>
                <span className="text-[#0f172a] text-[17px] font-semibold tracking-tight">
                  Luminexis
                </span>
              </Link>
              <p className="text-[#64748b] text-[13px] leading-relaxed max-w-[280px]">
                Helping people with vision and hearing loss navigate, communicate, and live independently.
              </p>
            </div>

            {/* Navigation */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-[#94a3b8] text-[13px] font-medium mb-5">Navigation</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#problem" className="text-[#334155] hover:text-[#0f172a] text-[13px] font-medium transition-colors">
                    The Problem
                  </Link>
                </li>
                <li>
                  <Link href="#luminax" className="text-[#334155] hover:text-[#0f172a] text-[13px] font-medium transition-colors">
                    Luminexis
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-[#334155] hover:text-[#0f172a] text-[13px] font-medium transition-colors">
                    How It Works
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-1 md:col-span-3">
              <h3 className="text-[#94a3b8] text-[13px] font-medium mb-5">Contact</h3>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:luminexispvtltd@gmail.com" className="text-[#334155] hover:text-[#0f172a] text-[13px] font-medium transition-colors">
                    luminexispvtltd@gmail.com
                  </a>
                </li>
                <li className="flex flex-col gap-3">
                  <a href="tel:+918113841363" className="text-[#334155] hover:text-[#0f172a] text-[13px] font-medium transition-colors">
                    +91 81138 41363
                  </a>
                  <a href="tel:+919605655712" className="text-[#334155] hover:text-[#0f172a] text-[13px] font-medium transition-colors">
                    +91 9605655712
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow us */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-[#94a3b8] text-[13px] font-medium mb-5">Follow us</h3>
              <div className="flex items-center gap-4">
                {/* YouTube Icon */}
                <a href="#" aria-label="YouTube" className="text-[#64748b] hover:text-[#0f172a] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                {/* Instagram Icon */}
                <a href="#" aria-label="Instagram" className="text-[#64748b] hover:text-[#0f172a] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                {/* LinkedIn Icon */}
                <a href="#" aria-label="LinkedIn" className="text-[#64748b] hover:text-[#0f172a] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
