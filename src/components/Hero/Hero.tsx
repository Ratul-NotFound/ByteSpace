import { Header } from '../Header/Header';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand text-subtle">
      {/* Background Grid */}
      <img
        src="/assets/hero/hero-grid.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[1024px] w-[1440px] -translate-x-1/2 max-w-none"
      />

      {/* Decorative Lime Circle Arc (Figma Node #1:1866) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[520px] h-[1149px] w-[1149px] -translate-x-1/2 rounded-full border-[180px] md:border-[280px] border-[#CBFC01] opacity-90 blur-[1px]"
      />

      <Header />

      <div className="relative z-10 mx-auto flex w-[1200px] max-w-full flex-col items-center gap-[52px] px-6 pt-[40px]">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="max-w-[935px] font-heading text-[48px] sm:text-[60px] lg:text-[72px] font-semibold leading-[1.15] tracking-[-0.02em] text-white">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="max-w-[700px] text-[16px] sm:text-[18px] leading-[1.6] text-subtle">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
        </div>

        <form className="flex w-full max-w-[580px] items-center gap-3 sm:gap-4" role="search" onSubmit={(e) => e.preventDefault()}>
          <label className="flex h-[52px] flex-1 items-center gap-3 rounded-pill bg-white px-5 sm:px-6 py-3 shadow-sm">
            <span className="sr-only">Search courses</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="size-5 shrink-0 text-muted"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="6" />
              <path d="m16 16 4 4" />
            </svg>
            <input
              type="search"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-[16px] sm:text-[18px] leading-[1.6] text-ink outline-none placeholder:text-muted"
            />
          </label>
          <button
            type="submit"
            className="inline-flex h-[52px] items-center justify-center rounded-pill bg-accent px-6 sm:px-8 text-[16px] sm:text-[18px] font-medium leading-[1.2] text-ink shadow-sm transition-all hover:opacity-90 hover:shadow"
          >
            Search
          </button>
        </form>
      </div>

      {/* Hero Visual Presentation with Floating Metric Badges */}
      <div className="relative mx-auto mt-6 h-[440px] sm:h-[480px] w-full max-w-[760px] px-4">
        {/* Main Hero Person */}
        <img
          src="/assets/hero/hero-person.png"
          alt="A course creator presenting to students"
          width={578}
          height={541}
          className="relative z-10 mx-auto h-[460px] sm:h-[500px] w-auto max-w-full object-contain"
        />

        {/* Badge 1: UI/UX Design (Figma Node #46:126) */}
        <div className="absolute left-2 sm:left-6 top-[80px] z-20 rounded-card bg-white/95 p-4 shadow-lg backdrop-blur-md">
          <p className="font-medium text-[15px] sm:text-[16px] leading-[1.2] text-ink">UI/UX Design</p>
          <div className="mt-1 flex items-center gap-2 text-[12px] text-muted">
            <span>200 Courses</span>
            <span>•</span>
            <span>1000+ Students</span>
          </div>
        </div>

        {/* Badge 2: Learning Progress 55% (Figma Node #1:1797) */}
        <div className="absolute right-2 sm:right-6 top-[60px] z-20 w-[210px] sm:w-[232px] rounded-card bg-white/95 p-4 shadow-lg backdrop-blur-md">
          <p className="text-[13px] sm:text-[14px] font-medium leading-[1.2] text-ink">Learning Progress</p>
          <p className="mt-1 font-heading text-[40px] sm:text-[48px] font-semibold leading-[1.1] tracking-[-0.01em] text-ink">
            55%
          </p>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-pill bg-[#F0F1F3]">
            <div className="h-full w-[55%] rounded-pill bg-accent" />
          </div>
        </div>

        {/* Badge 3: Happy Students with Avatar Stack (Figma Node #1:1821) */}
        <div className="absolute left-4 sm:left-12 bottom-6 z-20 rounded-card bg-white/95 p-4 shadow-lg backdrop-blur-md">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[14px] sm:text-[15px] font-medium leading-[1.2] text-ink">Happy Students</p>
            <div className="flex items-center gap-1 text-[12px] text-muted">
              <span className="font-medium text-ink">4.5</span>
              <span>(240)</span>
              <svg viewBox="0 0 24 24" fill="#D4FB20" className="size-3.5">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>
          <div className="mt-3 flex items-center -space-x-2">
            {['/assets/testimonials/sarah.png', '/assets/testimonials/james.png', '/assets/testimonials/alex.png'].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="size-8 rounded-full border-2 border-white object-cover"
              />
            ))}
            <span className="flex size-8 items-center justify-center rounded-full border-2 border-white bg-accent text-[11px] font-bold text-ink">
              2K+
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
