const stats = [
  { value: '12K', label: 'Students' },
  { value: '70+', label: 'Courses' },
  { value: '2K+', label: 'Creators' },
];

const creatorBenefits = ['Monetize Your Passion', 'Flexibility and Autonomy', 'Build a Community'];

export function Growth() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto flex w-[1200px] max-w-full flex-col items-center gap-14 px-6 text-center">
        <div className="flex flex-col items-center gap-6">
          <h2 className="max-w-[820px] font-heading text-[44px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink">
            Your Path to Professional Growth Starts Here!
          </h2>
          <p className="max-w-[900px] text-[18px] leading-7 text-[#4b4c53]">
            Explore our curated selection of courses tailored to enhance your capabilities and
            accelerate your career journey. Whether you are looking to sharpen specific skills, gain
            industry expertise, or embark on a new career path entirely, we have the resources you
            need.
          </p>
        </div>

        <ul className="flex items-center justify-center gap-24">
          {stats.map((stat) => (
            <li key={stat.label} className="flex flex-col items-center gap-2">
              <p className="font-heading text-[64px] font-semibold leading-[1.2] tracking-[-0.02em] text-brand">
                {stat.value}
              </p>
              <p className="text-[18px] leading-[1.2] text-ink">{stat.label}</p>
            </li>
          ))}
        </ul>

        <div className="flex w-full items-center gap-12 rounded-card bg-surface p-10 text-left">
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-[36px] font-medium leading-[44px] tracking-[-0.01em] text-ink">
              Share Your Expertise
            </h3>
            <p className="max-w-[420px] text-[16px] leading-6 text-[#4f4f4f]">
              Turn what you know into a course. Our editor handles the heavy lifting so you can
              focus on teaching.
            </p>
          </div>
          <ul className="flex flex-1 flex-col gap-4">
            {creatorBenefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-[18px] leading-[1.2] text-ink">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="size-5 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <path d="m4 10 4 4 8-8" />
                </svg>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
