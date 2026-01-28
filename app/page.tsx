// import data from '@/data/portfolio.json';
// import ThemeSelector from '@/components/ThemeSelector';
// import Link from 'next/link';
import Hero from '@/components/HeroSection';
import Proyects from '@/components/ProyectsSection';
import Education from '@/components/EducationSection';
import About from '@/components/AboutSection';
import Footer from '@/components/Footer';
import { ScrollProvider } from '@/Context/sectionActiveContex';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className='max-w-[90%] md:max-w-4/5 m-auto'>
      <ScrollProvider>
        <Header />
        <main>
          <Hero />
          <Proyects />
          <Education />
          <About />
        </main>
      </ScrollProvider>

      <Footer />
    </div>
  );
}
