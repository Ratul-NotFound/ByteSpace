import { Hero } from '../components/Hero/Hero';
import { Partners } from '../components/Partners/Partners';
import { Courses } from '../components/Courses/Courses';
import { Categories } from '../components/Categories/Categories';
import { Growth } from '../components/Growth/Growth';
import { CallToAction } from '../components/CallToAction/CallToAction';
import { Testimonials } from '../components/Testimonials/Testimonials';
import { Footer } from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Partners />
        <Courses />
        <Categories />
        <Growth />
        <CallToAction />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
