import data from '@/data/portfolio.json';
import ThemeSelector from '@/components/ThemeSelector';
import Link from 'next/link';
import Hero from '@/components/HeroSection';

export default function Home() {
  return (
    <div className='max-w-4/5 m-auto'>
      <header className='m-auto'>
        <nav className='flex justify-center gap-15 w-max m-auto  rounded-2xl mt-4 mb-6 px-5 py-3 text-gray-600 dark:text-gray-200 '>
          <ul className='flex justify-center items-center gap-8'>
            {data.navbar.map((item, index) => (
              <li
                key={index}
                className='hover:text-[#3dc687]  dark:text-gray-200 text-gray-800 font-medium'
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
      </main>
    </div>
  );
}
