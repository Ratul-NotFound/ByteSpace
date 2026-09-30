import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoMark from '/assets/hero/logo-mark.svg';

const navLinks = [
  { label: 'Home', to: '/', active: true },
  { label: 'Courses', to: '/#courses', active: false },
  { label: 'Creators', to: '/#creators', active: false },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 h-[80px] md:h-[120px] w-full text-subtle">
      <div className="container-page flex h-full items-center justify-between px-6">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2" aria-label="ByteSpace home">
          <img src={logoMark} alt="" width={29} height={32} className="h-7 w-[26px] md:h-8 md:w-[29px]" />
          <span className="font-display text-[20px] md:text-[24px] font-bold leading-normal text-white">
            ByteSpace
          </span>
        </Link>

        {/* Desktop Primary Nav */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6 text-[16px]">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={`text-white transition-opacity hover:opacity-80 ${
                    link.active ? 'font-medium leading-[1.2]' : 'leading-6'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Auth & Cart */}
        <div className="hidden md:flex items-center gap-6 text-[16px] leading-6 text-white">
          <Link to="/login" className="transition-opacity hover:opacity-80">
            Sign In
          </Link>
          <Link to="/signup" className="transition-opacity hover:opacity-80">
            Join Us
          </Link>
          <button type="button" aria-label="Open cart" className="size-6 text-white transition-opacity hover:opacity-80">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M6 7h12l-1 13H7L6 7Z" />
              <path d="M9 7V5.5a3 3 0 0 1 6 0V7" />
            </svg>
          </button>
        </div>

        {/* Mobile Actions: Cart + Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button type="button" aria-label="Open cart" className="size-6 text-white">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M6 7h12l-1 13H7L6 7Z" />
              <path d="M9 7V5.5a3 3 0 0 1 6 0V7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            {mobileMenuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="size-5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="size-5">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[80px] inset-x-0 bg-[#003BE2]/95 backdrop-blur-lg border-b border-white/15 px-6 py-6 shadow-2xl transition-all">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[17px] font-medium text-white transition-opacity hover:opacity-80 py-1"
              >
                {link.label}
              </Link>
            ))}
            <div className="my-2 h-px w-full bg-white/20" />
            <div className="flex flex-col gap-3 pt-1">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[16px] font-medium text-white/90 transition-opacity hover:opacity-100"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex h-[46px] items-center justify-center rounded-pill bg-accent px-6 text-[15px] font-semibold text-ink shadow-sm transition-all hover:opacity-90"
              >
                Join Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
