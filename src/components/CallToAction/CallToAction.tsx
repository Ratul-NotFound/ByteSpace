import { Link } from 'react-router-dom';

export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-brand py-[92px] text-center text-white">
      <img
        src="/assets/cta/cta-grid.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
      />
      <img
        src="/assets/cta/cta-shapes.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
      />

      <div className="relative mx-auto flex w-[1200px] max-w-full flex-col items-center gap-6 px-6">
        <h2 className="max-w-[720px] font-heading text-[44px] font-semibold leading-[1.2] tracking-[-0.01em]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="max-w-[1000px] text-[18px] leading-[1.6] text-white/90">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>
        <Link
          to="/signup"
          className="mt-4 inline-flex items-center justify-center rounded-pill bg-accent px-8 py-3.5 text-[18px] font-medium leading-[1.2] text-ink transition-opacity hover:opacity-90"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
