const columns = [
  { heading: 'Featured Courses', links: ['Featured Categories', 'Business', 'IT', 'Design'] },
  { heading: 'Development', links: ['Marketing', 'Photography', 'Finance', 'Sport'] },
  { heading: 'Become a Creator', links: ['Affiliate Program', 'Contact', 'Help', 'About'] },
];

export function Footer() {
  return (
    <footer className="bg-surface py-[71px] text-ink">
      <div className="mx-auto flex w-[1200px] max-w-full flex-col gap-[130px] px-6">
        <div className="flex gap-[92px]">
          <div className="flex w-[528px] shrink-0 flex-col items-start gap-[45px]">
            <div className="flex flex-col items-start gap-4">
              <span className="flex items-center gap-2">
                <img src="/assets/hero/logo-mark.svg" alt="" width={29} height={32} className="h-8 w-[29px]" />
                <span className="font-display text-[24px] font-bold">ByteSpace</span>
              </span>
              <p className="w-[528px] text-[14px] leading-[1.6] text-ink">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>

            <form className="flex items-center gap-6" onSubmit={(e) => e.preventDefault()}>
              <label className="flex h-[52px] w-[376px] items-center rounded-full border border-[#ced0d3] bg-white px-6 py-[18px]">
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent text-[14px] leading-[1.6] text-ink outline-none placeholder:text-ink"
                />
              </label>
              <button
                type="submit"
                className="inline-flex h-[52px] items-center justify-center rounded-full bg-accent px-8 text-[16px] font-medium leading-6 text-ink transition-opacity hover:opacity-90"
              >
                Search
              </button>
            </form>

            <p className="w-[504px] text-[12px] leading-[1.6] text-ink">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from
              our company.
            </p>
          </div>

          <ul className="flex w-[580px] items-end justify-between">
            {columns.map((column) => (
              <li key={column.heading} className="flex w-[167px] flex-col items-start gap-6">
                <ul className="flex flex-col gap-6">
                  <li>
                    <span className="text-[14px] text-muted">{column.heading}</span>
                  </li>
                  {column.links.map((link) => (
                    <li key={link}>
                      <span className="text-[14px] text-ink">{link}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-end justify-between border-t border-[#ced0d3] pt-8 text-[12px] text-muted">
          <p>&copy; 2025 ByteSpace, All rights reserved.</p>
          <ul className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookies Settings'].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
