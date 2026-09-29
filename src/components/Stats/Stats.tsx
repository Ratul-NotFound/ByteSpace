const stats = [
  { value: '10K+', label: 'Active learners' },
  { value: '450+', label: 'Expert courses' },
  { value: '120+', label: 'Certified mentors' },
  { value: '4.9', label: 'Average rating' },
];

const logos = ['Northwind', 'Vertex', 'Lumen', 'Coreline', 'Ardent'];

export function Stats() {
  return (
    <section className="border-y border-subtle bg-white py-16">
      <div className="container-page">
        <ul className="grid grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <li key={stat.label}>
              <p className="font-heading text-[48px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink">
                {stat.value}
              </p>
              <p className="mt-2 text-[16px] leading-6 text-muted">{stat.label}</p>
            </li>
          ))}
        </ul>

        <ul className="mt-16 flex flex-wrap items-center justify-center gap-x-14 gap-y-6 text-subtle">
          {logos.map((logo) => (
            <li key={logo} className="font-display text-[20px] font-semibold">
              {logo}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
