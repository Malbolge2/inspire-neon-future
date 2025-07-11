
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Streaming from '@/components/Streaming';
import Calls from '@/components/Calls';
import Plans from '@/components/Plans';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Benefits />
      <Streaming />
      <Calls />
      <Plans />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
