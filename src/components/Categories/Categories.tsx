const categories = [
  { title: 'Design', count: '128 Courses', icon: 'design' },
  { title: 'Development', count: '96 Courses', icon: 'code' },
  { title: 'Business', count: '74 Courses', icon: 'chart' },
  { title: 'Marketing', count: '62 Courses', icon: 'megaphone' },
];

function CategoryIcon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    design: 'M4 20l4.5-11L19 9.5 4 20zM14 4.5l1.5 1.5M17 2l5 5',
    code: 'm8 8-5 4 5 4m8-8 5 4-5 4M14 4l-4 16',
    chart: 'M4 20V10m6 10V4m6 16v-7m4 7H2',
    megaphone: 'M3 10v4h4l8 4V6l-8 4H3zM17 9a4 4 0 0 1 0 6',
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}

export function Categories() {
  return (
    <section id="courses" className="bg-white py-24">
      <div className="container-page">
        <h2 className="text-center font-heading text-[40px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink">
          Explore our categories
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-center text-[16px] leading-6 text-muted">
          Browse a wide range of subjects taught by working professionals.
        </p>

        <ul className="mt-14 grid grid-cols-4 gap-6">
          {categories.map((category) => (
            <li
              key={category.title}
              className="group rounded-card border border-subtle bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <span className="flex size-12 items-center justify-center rounded-card bg-brand text-white">
                <CategoryIcon name={category.icon} />
              </span>
              <h3 className="mt-5 font-heading text-[20px] font-semibold tracking-[-0.01em] text-ink">
                {category.title}
              </h3>
              <p className="mt-2 text-[12px] font-medium text-muted">{category.count}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
