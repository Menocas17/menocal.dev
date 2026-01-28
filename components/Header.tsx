'use client';
import data from '@/data/portfolio.json';
import ThemeSelector from '@/components/ThemeSelector';
import { useActiveSection } from '@/Context/sectionActiveContex';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();

  return (
    <header className='m-auto sticky top-4 z-50 mb-10'>
      <nav className='flex justify-center items-center min-[380px]:w-max gap-4 sm:gap-8 md:gap-15 m-auto rounded-2xl mt-6 md:mt-8  mb-6 md:mb-10 lg:mb-0 px-5 py-3 backdrop-blur-md bg-white/70 dark:bg-black/40 border border-white/20 shadow-lg'>
        <ul className='flex flex-wrap min-[380]:flex justify-center items-center gap-4 md:gap-8'>
          {data.navbar.map((item, index) => {
            const isActive = activeSection === item.id;
            const isScrollLink = item.href.startsWith('#');

            const handleScroll = (
              e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
            ) => {
              if (!isScrollLink) return;

              e.preventDefault();

              const elem = document.getElementById(item.id);

              elem?.scrollIntoView({
                behavior: 'smooth',
              });

              setActiveSection(item.id);
              setTimeOfLastClick(Date.now());

              window.history.pushState(null, '', `/#${item.id}`);
            };

            return (
              <li key={index}>
                <a
                  href={item.href}
                  className={`
                  font-bold text-sm sm:text-base transition-colors duration-300
                  ${
                    isActive
                      ? 'text-[#3dc687]'
                      : 'text-gray-800 dark:text-gray-200 hover:text-[#3dc687]'
                  }
                `}
                  onClick={(e) => handleScroll(e)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <ThemeSelector />
      </nav>
    </header>
  );
}
