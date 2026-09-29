import { Link } from 'react-router-dom';
import { Container } from '../layout/Container';

const benefits = ['Unlimited course access', 'Live mentor sessions', 'Certificate on completion'];

export function CallToAction() {
  return (
    <section className="bg-brand py-24 text-subtle">
      <Container className="flex flex-col items-center text-center">
        <h2 className="max-w-[720px] font-heading text-[48px] font-semibold leading-[1.2] tracking-[-0.01em] text-white">
          Ready to start learning?
        </h2>
        <p className="mt-5 max-w-[520px] text-[18px] leading-[1.6]">
          Join thousands of learners building real skills with ByteSpace.
        </p>

        <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-2 text-[16px]">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} className="size-4 text-accent" aria-hidden="true">
                <path d="m4 10 4 4 8-8" />
              </svg>
              {benefit}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/signup"
            className="inline-flex items-center justify-center rounded-pill bg-accent px-8 py-3.5 text-[18px] font-medium leading-[1.2] text-ink transition-opacity hover:opacity-90"
          >
            Get started
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center justify-center rounded-pill border border-white/30 px-8 py-3.5 text-[18px] font-medium leading-[1.2] text-white transition-colors hover:border-white"
          >
            Sign in
          </Link>
        </div>
      </Container>
    </section>
  );
}
