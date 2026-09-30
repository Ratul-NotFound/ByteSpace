interface Category {
  id: string;
  title: string;
  icon: 'design' | 'dev' | 'it' | 'business' | 'marketing' | 'photography';
}

const categories: Category[] = [
  { id: '1', title: 'Design', icon: 'design' },
  { id: '2', title: 'Development', icon: 'dev' },
  { id: '3', title: 'IT & Software', icon: 'it' },
  { id: '4', title: 'Business', icon: 'business' },
  { id: '5', title: 'Marketing', icon: 'marketing' },
  { id: '6', title: 'Photography', icon: 'photography' },
];

function CategoryIcon({ type }: { type: Category['icon'] }) {
  switch (type) {
    case 'design':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="size-6 text-ink">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      );
    case 'dev':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="size-6 text-ink">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
          <polyline points="9 8 7 10 9 12" />
          <polyline points="15 8 17 10 15 12" />
        </svg>
      );
    case 'it':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="size-6 text-ink">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case 'business':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="size-6 text-ink">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <path d="M12 12v2" />
        </svg>
      );
    case 'marketing':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="size-6 text-ink">
          <path d="M3 11l19-9-9 19-2-8-8-2z" />
        </svg>
      );
    case 'photography':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="size-6 text-ink">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      );
  }
}

export function Categories() {
  return (
    <section id="categories" className="bg-[#FAF7EE] py-16 lg:py-20" aria-labelledby="categories-heading">
      <div className="mx-auto w-[1200px] max-w-full px-6">
        {/* Heading */}
        <div className="mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center">
          <h2
            id="categories-heading"
            className="font-heading text-[28px] sm:text-[34px] lg:text-[36px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#040819]"
          >
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="max-w-[760px] text-[16px] sm:text-[18px] leading-[1.6] text-muted">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range
            of courses spans various fields, ensuring there's something for everyone. Unleash your
            potential and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Cards in a Single Row (Exact Figma Screenshot Layout) */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group flex flex-col items-center justify-center rounded-[20px] border border-[#E5E7EB] bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-md cursor-pointer"
            >
              {/* Circular Lime Icon Badge */}
              <div className="flex size-14 items-center justify-center rounded-full bg-accent transition-transform duration-200 group-hover:scale-110">
                <CategoryIcon type={cat.icon} />
              </div>

              {/* Category Name */}
              <h3 className="mt-4 font-heading text-[16px] sm:text-[17px] font-semibold text-[#040819] transition-colors group-hover:text-brand text-center">
                {cat.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
