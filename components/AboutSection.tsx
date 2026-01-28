'use client';
import Image from 'next/image';
import AboutIcon from './icons/AboutIcon';
import { useSectionInView } from '@/Context/sectionActiveContex';

export default function About() {
  const ref = useSectionInView('about');
  return (
    <section id='about' ref={ref} className='mb-20 scroll-mt-25'>
      <h2 className='flex items-center justify-center mb-18 text-4xl font-semibold gap-x-3 text-black/80 dark:text-white undefined'>
        <AboutIcon />
        About me
      </h2>
      <article className='flex flex-col items-center justify-center gap-20 text-gray-700 dark:text-gray-300 lg:flex-row'>
        <div className='[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 lg:order-1'>
          <p>
            I’m a developer who loves to figure out how things work. Since I was
            a little kid, I fell in love with computers, and I went from
            repairing them to understanding the boundaries between hardware and
            software, and eventually discovering my{' '}
            <strong>
              passion for designing and architecting web applications.
            </strong>
          </p>

          <p>
            I enjoy breaking down complex problems, thinking in terms of
            scalability and maintainability, and understanding the tradeoffs
            behind technical decisions,{' '}
            <strong>
              not just making things work, but making them work well.
            </strong>
          </p>

          <p>
            I earned a B.S. in Software Development from BYU-Idaho, this
            milestone helped to solidify my self-taught foundation.{' '}
            <strong>
              I chose to specialize in the React and Next.js ecosystem
            </strong>
            , though I have strong foundations in backend technologies and
            architectures.
          </p>

          <p>
            I’m currently seeking my first professional role, where I can grow
            alongside a collaborative team and contribute by turning technical
            curiosity into clean, reliable, and scalable software.
          </p>
        </div>
        <Image
          src={'/photo2.jpeg'}
          alt='Rodolfo Menocal'
          width={200}
          height={200}
          className='order-1 object-cover w-64 h-full p-1 lg:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20 '
        />
      </article>
    </section>
  );
}
