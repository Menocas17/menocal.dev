'use client';
import { useSectionInView } from '@/Context/sectionActiveContex';
import ProyectIcon from '@/components/icons/ProyectsIcon';
import { NextIcon } from '@/components/icons/NextIcon';
import Image from 'next/image';
import { TailwindIcon } from '@/components/icons/TailwindIcon';
import { SupabaseIcon } from '@/components/icons/SupabaseIcon';
import GitHubIcon from '@/components/icons/GithubIcon';
import LinkIcon from '@/components/icons/LinkIcon';
import ParticlesBackground from './Particles';
import data from '@/data/portfolio.json';

const iconMap: Record<string, React.ReactNode> = {
  next: <NextIcon className='size-4' />,
  tailwind: <TailwindIcon className='size-4' />,
  supabase: <SupabaseIcon className='size-4' />,
};

const iconStyles: Record<string, string> = {
  next: 'bg-black border-gray-400',
  tailwind: 'bg-[#003159] border-blue-300',
  supabase: 'bg-black border-green-400',
};

export default function Proyects() {
  const ref = useSectionInView('projects');
  return (
    <section
      className='relative w-full overflow-hidden  py-10 mb-20 scroll-mt-25'
      ref={ref}
      id='projects'
    >
      <ParticlesBackground />

      <div className='max-w-[90%] m-auto relative z-10'>
        <h2 className='flex items-center justify-center mb-18 text-4xl font-semibold gap-x-3 text-black/80 dark:text-white undefined'>
          <ProyectIcon />
          Projects
        </h2>
        <div className='flex flex-col gap-y-16'>
          {data.proyects.map((proyect) => (
            <article
              className='flex flex-col space-x-0 space-y-8 group lg:flex-row md:space-x-8 md:space-y-0'
              key={proyect.id}
            >
              <div className='w-full lg:w-1/2'>
                <div className='transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50 max-h-75'>
                  <Image
                    src={proyect.image}
                    alt='FitShare home dashboard page'
                    width={600}
                    height={400}
                    className='object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105'
                  />
                </div>
              </div>
              <div className='w-full lg:w-1/2 lg:max-w-lg'>
                <h3 className='text-2xl font-bold text-gray-800 dark:text-gray-100'>
                  {proyect.name} - {proyect.extendedName}
                </h3>
                <div className='flex flex-wrap mt-2'>
                  <ul className='flex flex-row mb-2 gap-x-2'>
                    {proyect.technologies.map((tech) => (
                      <li key={tech.name}>
                        <span
                          className={`flex gap-x-2 rounded-full text-xs  text-white py-1 px-2 border ${iconStyles[tech.icon]}`}
                        >
                          {iconMap[tech.icon]}
                          {tech.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className='mt-2 text-gray-700 dark:text-gray-400'>
                    {proyect.description}
                  </p>
                  <footer className='flex items-end justify-start mt-4 gap-x-4'>
                    <a
                      target='_blank'
                      href='https://github.com/pheralb/svgl'
                      role='link'
                      className='inline-flex bg-gray-100 text-gray-800 border-gray-300 items-center justify-center gap-2 px-3 py-2 transition dark:text-white dark:bg-gray-800 border dark:border-gray-600  text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white '
                    >
                      <GitHubIcon />
                      Code
                    </a>
                    <a
                      target='_blank'
                      href='https://svgl.vercel.app/'
                      role='link'
                      className='inline-flex bg-gray-100 text-gray-800 border-gray-300 items-center justify-center gap-2 px-3 py-2 transition dark:text-white dark:bg-gray-800 border dark:border-gray-600  text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white '
                    >
                      <LinkIcon className='size-5' />
                      Preview
                    </a>
                  </footer>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
