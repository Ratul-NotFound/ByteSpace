import { Link } from 'react-router-dom';
import logoMark from '/assets/hero/logo-mark.svg';


const navLinks = [
  { label: 'Home', to: '/', active: true },
  { label: 'Courses', to: '/#courses', active: false },
  { label: 'Creators', to: '/#creators', active: false },
];

export function Header() {
  return (
    <header className="relative z-20 h-[120px] w-full overflow-hidden text-subtle">
      <div className="container-page flex h-full items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="ByteSpace home">
          <img src={logoMark} alt="" width={29} height={32} className="h-8 w-[29px]" />
          <span className="font-display text-[24px] font-bold leading-normal">ByteSpace</span>
        </Link>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-6 text-[16px]">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={link.active ? 'font-medium leading-[1.2]' : 'leading-6'}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-6 text-[16px] leading-6">
          <Link to="/login" className="transition-opacity hover:opacity-70">
            Sign In
          </Link>
          <Link to="/signup" className="transition-opacity hover:opacity-70">
            Join Us
          </Link>
          <button type="button" aria-label="Open cart" className="size-6">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M6 7h12l-1 13H7L6 7Z" />
              <path d="M9 7V5.5a3 3 0 0 1 6 0V7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
