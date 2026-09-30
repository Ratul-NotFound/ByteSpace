const columns = [
  { heading: 'Featured Courses', links: ['Featured Categories', 'Business', 'IT', 'Design'] },
  { heading: 'Development', links: ['Marketing', 'Photography', 'Finance', 'Sport'] },
  { heading: 'Become a Creator', links: ['Affiliate Program', 'Contact', 'Help', 'About'] },
];

export function Footer() {
  return (
    <footer className="border-t border-[#CED0D3] bg-[#FAF7EE] py-12 sm:py-16 lg:py-20 text-ink">
      <div className="mx-auto flex w-[1200px] max-w-full flex-col gap-12 sm:gap-16 lg:gap-24 px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-10 sm:gap-12 lg:gap-16">
          {/* Left Column: Brand & Newsletter */}
          <div className="flex max-w-[500px] flex-col items-start gap-6 sm:gap-8">
            <div className="flex flex-col items-start gap-3 sm:gap-4">
              <span className="flex items-center gap-2">
                <img src="/assets/hero/logo-mark.svg" alt="" width={29} height={32} className="h-7 w-[26px] sm:h-8 sm:w-[29px]" />
                <span className="font-display text-[22px] sm:text-[24px] font-bold text-ink">ByteSpace</span>
              </span>
              <p className="text-[14px] sm:text-[15px] leading-[1.6] text-muted">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>

            <form className="flex w-full flex-col sm:flex-row items-stretch sm:items-center gap-3" onSubmit={(e) => e.preventDefault()}>
              <label className="flex h-[48px] sm:h-[52px] flex-1 items-center rounded-full border border-[#CED0D3] bg-white px-4 sm:px-6 shadow-sm">
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent text-[14px] sm:text-[15px] leading-[1.6] text-ink outline-none placeholder:text-muted"
                />
              </label>
              <button
                type="submit"
                className="inline-flex h-[48px] sm:h-[52px] items-center justify-center rounded-full bg-accent px-6 sm:px-8 text-[15px] sm:text-[16px] font-medium leading-6 text-ink shadow-sm transition-opacity hover:opacity-90 shrink-0"
              >
                Search
              </button>
            </form>

            <p className="text-[12px] leading-[1.6] text-muted">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from
              our company.
            </p>
          </div>

          {/* Right Navigation Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            {columns.map((column) => (
              <div key={column.heading} className="flex flex-col items-start gap-4 sm:gap-5">
                <p className="font-heading text-[14px] font-semibold text-muted uppercase tracking-wider">
                  {column.heading}
                </p>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[14px] sm:text-[15px] text-ink transition-colors hover:text-brand">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#CED0D3] pt-8 text-[12px] sm:text-[13px] text-muted">
          <p>&copy; 2025 ByteSpace, All rights reserved.</p>
          <ul className="flex flex-wrap gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookies Settings'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-ink transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
