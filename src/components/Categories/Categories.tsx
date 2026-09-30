interface CategoryItem {
  id: string;
  title: string;
  coursesCount: string;
  icon: string;
  badge?: string;
}

const categories: CategoryItem[] = [
  {
    id: '1',
    title: 'UI/UX Design',
    coursesCount: '200 Courses',
    icon: 'design',
  },
  {
    id: '2',
    title: 'Web Development',
    coursesCount: '150 Courses',
    icon: 'code',
  },
  {
    id: '3',
    title: 'Digital Marketing',
    coursesCount: '120 Courses',
    icon: 'marketing',
  },
  {
    id: '4',
    title: 'Business & Finance',
    coursesCount: '95 Courses',
    icon: 'finance',
  },
  {
    id: '5',
    title: 'Photography & Video',
    coursesCount: '80 Courses',
    icon: 'camera',
  },
  {
    id: '6',
    title: 'Artificial Intelligence',
    coursesCount: '110 Courses',
    icon: 'ai',
  },
];

function CategoryIcon({ type }: { type: string }) {
  switch (type) {
    case 'design':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="size-6">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      );
    case 'code':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="size-6">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case 'marketing':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="size-6">
          <path d="M3 11l19-9-9 19-2-8-8-2z" />
        </svg>
      );
    case 'finance':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="size-6">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    case 'camera':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="size-6">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      );
    case 'ai':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="size-6">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      );
    default:
      return null;
  }
}

export function Categories() {
  return (
    <section id="categories" className="bg-white py-20 lg:py-24" aria-labelledby="categories-heading">
      <div className="mx-auto w-[1200px] max-w-full px-6">
        {/* Heading (Figma Node #34:684) */}
        <div className="mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center">
          <h2
            id="categories-heading"
            className="font-heading text-[28px] sm:text-[32px] lg:text-[36px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#040819]"
          >
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-[16px] sm:text-[18px] leading-[1.6] text-muted">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range
            of courses spans various fields, ensuring there's something for everyone. Unleash your
            potential and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Cards Grid (Figma Node #34:725, EL-071976c8: 3 cols x 2 rows, gap 40px) */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group flex cursor-pointer items-center justify-between rounded-[24px] border border-[#CED0D3] bg-white p-6 sm:p-7 transition-all duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-lg"
            >
              <div className="flex items-center gap-5">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-surface text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <CategoryIcon type={cat.icon} />
                </div>
                <div>
                  <h3 className="font-heading text-[18px] sm:text-[20px] font-semibold leading-[1.3] text-[#040819] transition-colors group-hover:text-brand">
                    {cat.title}
                  </h3>
                  <p className="mt-1 text-[14px] leading-[1.4] text-muted">{cat.coursesCount}</p>
                </div>
              </div>

              <div className="flex size-10 items-center justify-center rounded-full border border-subtle text-muted transition-all group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="size-4 -rotate-45 transition-transform group-hover:rotate-0"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
