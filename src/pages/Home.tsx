import { Hero } from '../components/Hero/Hero';
import { Categories } from '../components/Categories/Categories';
import { Stats } from '../components/Stats/Stats';
import { Testimonials } from '../components/Testimonials/Testimonials';
import { CallToAction } from '../components/CallToAction/CallToAction';
import { Footer } from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Stats />
        <Categories />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
