'use client';
import { useSectionInView } from '@/Context/sectionActiveContex';
import Button from '@/components/Button';
import SpecialButton from '@/components/EspecialButton';
import ProgrammingAnimation from '@/components/ProgramingAnimation';
import Image from 'next/image';

import MailIcon from '@/components/icons/MailIcon';
import FileIcon from '@/components/icons/FileIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';

import data from '@/data/portfolio.json';

const iconMap: Record<string, React.ReactNode> = {
  mail: <MailIcon className='size-4' />,
  file: <FileIcon className='size-4' />,
  linkedin: <LinkedinIcon className='size-4' />,
};

export default function Hero() {
  const ref = useSectionInView('hero');
  return (
    <section
      className='flex flex-col lg:flex-row items-center justify-between 2xl:max-w-4/5 m-auto'
      id='hero'
      ref={ref}
    >
      <div className=' max-w-[90%] lg:max-w-[45%]'>
        <div className='flex items-center gap-6'>
          <Image
            src={data.hero.profileImage}
            alt={`${data.hero.name} photo`}
            width={70}
            height={70}
            className='rounded-full'
          />
          <a
            href={data.hero.status.href}
            target='_blank'
            rel='noopener noreferrer'
          >
            <SpecialButton text={data.hero.status.text} />
          </a>
        </div>
        <h1 className='text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white mt-4'>
          Hi, I&apos;m {data.hero.name}
        </h1>
        <p className='mt-6 text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300 '>
          Software Developer (BS in Software Development) specialized in{' '}
          <strong>React & Next.js</strong> with Backend proficiency. Based in
          Nicaragua 🇳🇮.
        </p>
        <nav className='mt-6 flex flex-wrap gap-6'>
          {data.hero.ActionButtons.map((btn, index) => (
            <Button
              key={index}
              text={btn.text}
              href={btn.href}
              outLink={btn.outLink}
            >
              {iconMap[btn.icon]}
            </Button>
          ))}
        </nav>
      </div>
      <div className=''>
        <ProgrammingAnimation />
      </div>
    </section>
  );
}
