const stats = [
  { value: '12K', label: 'Students' },
  { value: '70+', label: 'Courses' },
  { value: '16', label: 'Creators' },
];

const creatorBenefits = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
];

export function Growth() {
  return (
    <section id="creators" className="relative overflow-hidden bg-[#FAFAFA] py-20 lg:py-28" aria-label="Professional growth">
      {/* Decorative Radial Background Glows matching Figma #34:1309 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-1/3 size-[672px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(203,252,1,0.5)_0%,rgba(203,252,1,0.12)_53%,rgba(203,252,1,0)_100%)] blur-[40px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-1/4 size-[672px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,59,226,0.15)_0%,rgba(0,59,226,0.04)_53%,rgba(0,59,226,0)_100%)] blur-[40px]"
      />

      <div className="relative mx-auto flex w-[1200px] max-w-full flex-col gap-24 lg:gap-32 px-6">
        {/* Block 1: Student Growth & Course Discovery */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-1 flex-col items-start gap-6 text-left">
            <h2 className="max-w-[540px] font-heading text-[32px] sm:text-[40px] lg:text-[44px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#040819]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="max-w-[500px] text-[16px] sm:text-[18px] leading-[1.6] text-muted">
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills,
              gain industry expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>

            {/* Metrics */}
            <div className="mt-4 flex items-center gap-10 sm:gap-14">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-start gap-1">
                  <p className="font-heading text-[36px] sm:text-[44px] font-semibold leading-[1.1] tracking-[-0.02em] text-brand">
                    {stat.value}
                  </p>
                  <p className="text-[14px] sm:text-[16px] font-medium text-ink">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="relative flex flex-1 items-center justify-center">
            {/* Visual Container */}
            <div className="relative w-full max-w-[480px]">
              {/* Main Course Preview Card */}
              <div className="relative z-10 overflow-hidden rounded-[24px] border border-[#CED0D3] bg-white p-5 shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[16px]">
                  <img
                    src="/assets/growth/growth-bottom.jpg"
                    alt="Course workspace"
                    width={440}
                    height={275}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute left-3 top-3 flex items-center gap-2">
                    <span className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-ink backdrop-blur-sm">
                      17 Lessons
                    </span>
                    <span className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-ink backdrop-blur-sm">
                      2 hours 16 mins
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-[18px] font-semibold text-[#040819]">
                      Learn Figma from Scratch
                    </h3>
                    <span className="rounded-full bg-surface px-2.5 py-0.5 text-[11px] font-medium text-muted">
                      Beginner
                    </span>
                  </div>
                  <p className="mt-1 text-[13px] text-muted">by purepearl studio</p>
                  <div className="mt-4 flex items-center justify-between border-t border-[#F0F1F3] pt-3">
                    <p className="font-heading text-[16px] font-semibold text-brand">$25/lifetime</p>
                    <button
                      type="button"
                      className="rounded-full bg-accent px-4 py-1.5 text-[13px] font-medium text-ink transition-opacity hover:opacity-90"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Progress Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 z-20 w-[200px] rounded-[18px] border border-[#CED0D3] bg-white p-4 shadow-lg">
                <p className="text-[12px] font-medium text-muted">Learning Progress</p>
                <p className="mt-1 font-heading text-[32px] font-semibold leading-none text-[#040819]">
                  55%
                </p>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-surface">
                  <div className="h-full w-[55%] rounded-full bg-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Block 2: Create & Manage Courses Easily */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Visual Composition */}
          <div className="relative flex flex-1 items-center justify-center">
            <div className="relative w-full max-w-[480px]">
              {/* Creator Analytics Panel */}
              <div className="relative z-10 rounded-[24px] border border-[#CED0D3] bg-white p-6 shadow-xl">
                <div className="flex items-center justify-between border-b border-[#F0F1F3] pb-4">
                  <div>
                    <p className="text-[12px] font-medium text-muted">Total Revenue</p>
                    <p className="font-heading text-[28px] font-semibold text-brand">$120.29</p>
                  </div>
                  <span className="rounded-full bg-accent/30 px-3 py-1 text-[12px] font-bold text-ink">
                    July 1-28
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="text-[12px] font-medium text-muted">Year to Date 2023</p>
                    <p className="font-heading text-[24px] font-semibold text-[#040819]">$1,200.38</p>
                  </div>
                  <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-[12px] font-semibold text-green-700">
                    +12%
                  </span>
                </div>

                {/* Happy Students Stack */}
                <div className="mt-6 rounded-2xl bg-surface p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] font-medium text-ink">Happy Students</p>
                    <div className="flex items-center gap-1 text-[12px] text-muted">
                      <span className="font-medium text-ink">4.5</span>
                      <span>(240) ★</span>
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
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-1 flex-col items-start gap-6 text-left">
            <h2 className="max-w-[540px] font-heading text-[32px] sm:text-[40px] lg:text-[44px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#040819]">
              Create & Manage Courses Easily.
            </h2>
            <p className="max-w-[500px] text-[16px] sm:text-[18px] leading-[1.6] text-muted">
              ByteSpace supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            {/* 4 Benefits with Checkmarks */}
            <ul className="mt-2 flex flex-col gap-4">
              {creatorBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-[16px] sm:text-[18px] font-medium text-ink">
                  <span className="flex size-6 items-center justify-center rounded-full bg-brand text-white">
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2.5} className="size-3.5">
                      <polyline points="4 10 8 14 16 6" />
                    </svg>
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
