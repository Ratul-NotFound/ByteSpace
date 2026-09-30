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
    <section id="creators" className="relative overflow-hidden bg-[#FAF7EE] py-14 sm:py-20 lg:py-28" aria-label="Professional growth">
      {/* Ambient background glows matching Figma */}
      <div
        className="pointer-events-none absolute -left-40 top-1/4 size-[500px] rounded-full bg-[#EBF686]/30 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-1/4 size-[500px] rounded-full bg-[#D4E2FC]/40 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-[1200px] max-w-full px-4 sm:px-6 flex flex-col gap-14 sm:gap-20 lg:gap-28">
        {/* Block 1: Your Path to Professional Growth Starts Here! */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Left: Text & Stats */}
          <div className="flex flex-col items-start gap-4 sm:gap-6 text-left">
            <h2 className="max-w-[540px] font-heading text-[28px] sm:text-[36px] lg:text-[44px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#040819]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="max-w-[490px] text-[15px] sm:text-[18px] leading-[1.6] text-muted">
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills,
              gain industry expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>

            {/* Metrics */}
            <div className="mt-2 sm:mt-4 flex items-center gap-6 sm:gap-10 lg:gap-14">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-start gap-1">
                  <p className="font-heading text-[32px] sm:text-[44px] font-semibold leading-[1.1] tracking-[-0.02em] text-brand">
                    {stat.value}
                  </p>
                  <p className="text-[13px] sm:text-[16px] font-medium text-ink">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Illustration from Figma */}
          <div className="relative flex items-center justify-center">
            <img
              src="/assets/growth/growth-illustration-1.png"
              alt="Course learning platform showcase"
              width={675}
              height={670}
              loading="lazy"
              className="w-full max-w-[540px] h-auto object-contain drop-shadow-md"
            />
          </div>
        </div>

        {/* Block 2: Create & Manage Courses Easily. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Left: Visual Illustration from Figma */}
          <div className="relative flex items-center justify-center order-2 lg:order-1">
            <img
              src="/assets/growth/growth-illustration-2.png"
              alt="Creator course publishing and analytics"
              width={640}
              height={670}
              loading="lazy"
              className="w-full max-w-[540px] h-auto object-contain drop-shadow-md"
            />
          </div>

          {/* Right: Text & Benefits */}
          <div className="flex flex-col items-start gap-4 sm:gap-6 text-left order-1 lg:order-2">
            <h2 className="max-w-[540px] font-heading text-[28px] sm:text-[36px] lg:text-[44px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#040819]">
              Create & Manage Courses Easily.
            </h2>
            <p className="max-w-[490px] text-[15px] sm:text-[18px] leading-[1.6] text-muted">
              ByteSpace supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            {/* 4 Benefits with Checkmarks */}
            <ul className="mt-1 sm:mt-2 flex flex-col gap-3 sm:gap-4">
              {creatorBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-[15px] sm:text-[18px] font-medium text-ink">
                  <span className="flex size-5 sm:size-6 items-center justify-center rounded-full bg-brand text-white shrink-0">
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2.5} className="size-3 sm:size-3.5">
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
