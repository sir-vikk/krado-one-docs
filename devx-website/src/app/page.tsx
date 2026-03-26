import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Portals from '@/components/Portals';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Integrations from '@/components/Integrations';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Portals />
        <HowItWorks />
        <Integrations />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
