// import data from '@/data/portfolio.json';
// import ThemeSelector from '@/components/ThemeSelector';
// import Link from 'next/link';
import Hero from '@/components/HeroSection';
import Projects from '@/components/ProjectsSection';
import Education from '@/components/EducationSection';
import About from '@/components/AboutSection';
import Footer from '@/components/Footer';
import { ScrollProvider } from '@/Context/sectionActiveContex';
import Header from '@/components/Header';

export default function Home() {
  return (
    <ScrollProvider>
      <Header />
      <div className='max-w-[90%] md:max-w-4/5 m-auto'>
        <main>
          <Hero />
          <Projects />
          <Education />
          <About />
        </main>

        <Footer />
      </div>
    </ScrollProvider>
  );
}
