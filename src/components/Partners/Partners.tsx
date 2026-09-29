const partnerLogos = [
  { src: '/assets/partners/partner-1.svg', width: 167, height: 41 },
  { src: '/assets/partners/partner-2.svg', width: 168, height: 41 },
  { src: '/assets/partners/partner-3.svg', width: 170, height: 41 },
  { src: '/assets/partners/partner-4.svg', width: 170, height: 41 },
  { src: '/assets/partners/partner-5.svg', width: 169, height: 42 },
];

export function Partners() {
  return (
    <section className="bg-surface" aria-label="Our partners">
      <ul className="flex items-end justify-center gap-[72px] py-20">
        {partnerLogos.map((logo) => (
          <li key={logo.src}>
            <img
              src={logo.src}
              alt=""
              width={logo.width}
              height={logo.height}
              className="h-[41px] w-[168px]"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
