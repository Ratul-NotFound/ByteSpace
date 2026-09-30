const partnerLogos = [
  { src: '/assets/partners/partner-1.svg', width: 167, height: 41 },
  { src: '/assets/partners/partner-2.svg', width: 168, height: 41 },
  { src: '/assets/partners/partner-3.svg', width: 170, height: 41 },
  { src: '/assets/partners/partner-4.svg', width: 170, height: 41 },
  { src: '/assets/partners/partner-5.svg', width: 169, height: 42 },
];

export function Partners() {
  return (
    <section className="bg-[#FAF7EE] py-10 sm:py-16" aria-label="Our partners">
      <div className="mx-auto w-[1200px] max-w-full px-4 sm:px-6">
        <ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-[72px]">
          {partnerLogos.map((logo) => (
            <li key={logo.src} className="flex items-center justify-center opacity-70 transition-opacity hover:opacity-100">
              <img
                src={logo.src}
                alt="Partner logo"
                width={logo.width}
                height={logo.height}
                className="h-[28px] sm:h-[36px] w-auto max-w-[120px] sm:max-w-[168px] object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
