import ChevronRightIcon from './icons/ChevronIcon';
import data from '@/data/portfolio.json';
import EducationIcon from './icons/EducationIcon';

export default function Education() {
  return (
    <section id='education' className='pl-8 mt-10 mb-10'>
      <h2 className='flex items-center justify-center mb-18 text-4xl font-semibold gap-x-3 text-black/80 dark:text-white undefined'>
        <EducationIcon />
        Education
      </h2>
      {data.education.map((edu) => (
        <div
          className="relative mx-12 pb-12 grid before:absolute before:-left-8.75 before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"
          key={edu.id}
        >
          <div className='relative pb-12 md:col-span-2'>
            <div className='sticky top-0'>
              <span className='text-yellow-400 -left-11 absolute rounded-full text-5xl'>
                •
              </span>
              <h3 className='text-xl font-bold text-yellow-400'>{edu.title}</h3>
              <h4 className='font-semibold text-xl text-gray-600 dark:text-white'>
                {edu.institution}
              </h4>
              <time className='p-0 m-0 text-sm text-gray-600/80 dark:text-white/80'>
                {edu.time}
              </time>
            </div>
          </div>
          <div className='relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3'>
            {edu.description}
            <a
              href={edu.link}
              role='link'
              target='_blank'
              className='inline-flex items-center text-lg font-medium text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-yellow-700'
            >
              {edu.type === 'degree'
                ? 'View Degree Verification'
                : 'View Certificate'}
              <ChevronRightIcon />
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
