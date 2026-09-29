const testimonials = [
  {
    name: 'Jamie Davis',
    role: 'Product Designer',
    quote:
      'The courses are well structured and the mentors actually answer questions. I shipped a client project two weeks after finishing.',
  },
  {
    name: 'Alex Morgan',
    role: 'Frontend Engineer',
    quote:
      'Straightforward lessons without the filler. I used the design module to rebuild our component library at work.',
  },
  {
    name: 'Priya Shah',
    role: 'Founder',
    quote:
      'The business track covered pricing and positioning properly, which most courses skip. Worth the time.',
  },
];

export function Testimonials() {
  return (
    <section className="bg-surface py-24">
      <div className="container-page">
        <h2 className="text-center font-heading text-[40px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink">
          What our students say
        </h2>

        <ul className="mt-14 grid grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <li key={item.name} className="flex flex-col rounded-card bg-white p-6">
              <p className="text-[16px] leading-6 text-ink">{item.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="size-10 rounded-full bg-brand" aria-hidden="true" />
                <div>
                  <p className="text-[14px] font-medium text-ink">{item.name}</p>
                  <p className="text-[12px] text-muted">{item.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
