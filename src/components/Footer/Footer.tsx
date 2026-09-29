import { Link } from 'react-router-dom';
import { Container } from '../layout/Container';

const columns = [
  {
    heading: 'Product',
    links: ['Courses', 'Categories', 'Mentors', 'Pricing'],
  },
  {
    heading: 'Company',
    links: ['About', 'Careers', 'Blog', 'Contact'],
  },
  {
    heading: 'Resources',
    links: ['Help centre', 'Community', 'Terms', 'Privacy'],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink py-16 text-subtle">
      <Container>
        <div className="grid grid-cols-4 gap-8">
          <div>
            <p className="font-display text-[24px] font-bold">ByteSpace</p>
            <p className="mt-4 max-w-[240px] text-[14px] leading-[1.6] text-muted">
              Learn practical skills from people who do the work.
            </p>
          </div>

          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="text-[14px] font-medium text-white">{column.heading}</h2>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link to="/" className="text-[14px] text-muted transition-colors hover:text-white">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 text-[12px] text-muted">
          <p>&copy; {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <p>Designed and built in React.</p>
        </div>
      </Container>
    </footer>
  );
}
