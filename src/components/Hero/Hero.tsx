import { Header } from '../Header/Header';

export function Hero() {
  return (
    <section className="relative bg-brand text-subtle">
      <img
        src="/assets/hero/hero-grid.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-[1024px] w-[1440px] max-w-none"
      />

      <Header />

      <div className="relative z-10 flex w-[1200px] max-w-full flex-col items-center gap-[60px] mx-auto pt-[49px]">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="w-[935px] max-w-full font-heading text-[72px] font-semibold leading-[1.2] tracking-[-0.02em] text-white">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="whitespace-nowrap text-[18px] leading-[1.6] text-subtle">
            Unlock your creativity, gain valuable knowledge, and grow your business with our
            wide range of courses.
          </p>
        </div>

        <form className="flex items-start gap-4" role="search">
          <label className="flex h-[52px] w-[461px] max-w-full items-center gap-2 rounded-pill bg-white px-6 py-3">
            <span className="sr-only">Search courses</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="size-6 shrink-0 text-muted"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="6" />
              <path d="m16 16 4 4" />
            </svg>
            <input
              type="search"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-[18px] leading-[1.6] text-ink outline-none placeholder:text-muted"
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-pill bg-accent px-6 py-3 text-[18px] font-medium leading-[1.2] text-ink transition-opacity hover:opacity-90"
          >
            Search
          </button>
        </form>
      </div>

      <div className="relative mx-auto h-[420px] w-full max-w-[578px]">
        <img
          src="/assets/hero/hero-person.png"
          alt="A course creator presenting to students"
          width={578}
          height={541}
          className="absolute left-1/2 top-0 w-[578px] max-w-full -translate-x-1/2 object-cover"
        />

        <div className="absolute right-0 top-[139px] w-[232px] rounded-card bg-white/80 p-4 backdrop-blur-[10px]">
          <p className="text-[14px] font-medium leading-[1.2] text-ink">Learning Progress</p>
          <p className="mt-2 font-heading text-[48px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink">
            55%
          </p>
          <div className="mt-2 h-2 w-[200px] overflow-hidden rounded-pill bg-[#f6f6f6]">
            <div className="h-full w-[112px] rounded-pill bg-accent" />
          </div>
        </div>

        <div className="absolute left-0 top-[325px] w-[258px] rounded-card bg-white/80 p-4 backdrop-blur-[10px]">
          <p className="text-[16px] font-medium leading-[1.2] text-ink">Happy Students</p>
          <p className="mt-2 text-[12px] leading-[1.6] text-ink">
            <span className="font-medium">4.5</span> <span className="text-muted">(240)</span>
          </p>
        </div>
      </div>
    </section>
  );
}
