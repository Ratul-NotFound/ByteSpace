import { Hero } from '../components/Hero/Hero';
import { Partners } from '../components/Partners/Partners';
import { Growth } from '../components/Growth/Growth';
import { Testimonials } from '../components/Testimonials/Testimonials';
import { CallToAction } from '../components/CallToAction/CallToAction';
import { Footer } from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Partners />
        <Growth />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
