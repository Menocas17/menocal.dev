import data from '@/data/portfolio.json';
import ThemeSelector from '@/components/ThemeSelector';
import Link from 'next/link';
import Hero from '@/components/HeroSection';
import Proyects from '@/components/ProyectsSection';
import Education from '@/components/EducationSection';
import About from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className='max-w-[90%] md:max-w-4/5 m-auto'>
      <header className='m-auto'>
        <nav className='flex justify-center items-center min-[380px]:w-max gap-4 sm:gap-8 md:gap-15 m-auto rounded-2xl mt-6 md:mt-8  mb-6 md:mb-10 lg:mb-0 px-5 py-3 text-gray-600 dark:text-gray-200 '>
          <ul className='flex flex-wrap min-[380]:flex justify-center items-center gap-4 md:gap-8'>
            {data.navbar.map((item, index) => (
              <li
                key={index}
                className='hover:text-[#3dc687]  dark:text-gray-200 text-gray-800 font-bold text-sm sm:text-base'
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <ThemeSelector />
        </nav>
      </header>
      <main>
        <Hero />
        <Proyects />
        <Education />
        <About />
      </main>
      <Footer />
    </div>
  );
}
