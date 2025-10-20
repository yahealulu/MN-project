import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Products from '@/components/sections/Products';
import WhyUs from '@/components/sections/WhyUs';
import Projects from '@/components/sections/Projects';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Loader onComplete={handleLoaderComplete} />
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          {!isLoading && (
            <>
              <About />
              <Products />
              <WhyUs />
              <Projects />
              <Testimonials />
              <Contact />
            </>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;