import { Link } from 'react-router-dom';

export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-brand py-20 lg:py-24 text-center text-white">
      {/* Background Grid */}
      <img
        src="/assets/cta/cta-grid.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-15"
      />

      {/* Exact 3D Geometric Ornaments from Figma (Node #46:78) */}
      <img
        src="/assets/cta/cta-ornament.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-contain"
      />

      <div className="relative z-10 mx-auto flex w-[1200px] max-w-full flex-col items-center gap-6 px-6">
        <h2 className="max-w-[720px] font-heading text-[32px] sm:text-[40px] lg:text-[44px] font-semibold leading-[1.2] tracking-[-0.01em]">
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h2>
        <p className="max-w-[900px] text-[16px] sm:text-[18px] leading-[1.6] text-white/90">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>
        <Link
          to="/signup"
          className="mt-4 inline-flex items-center justify-center rounded-pill bg-accent px-8 py-3.5 text-[16px] sm:text-[18px] font-medium leading-[1.2] text-ink shadow-sm transition-all hover:opacity-90"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
