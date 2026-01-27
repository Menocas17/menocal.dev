import MailIcon from '@/components/icons/MailIcon';

import LinkedinIcon from '@/components/icons/LinkedinIcon';
import GitHubIcon from './icons/GithubIcon';

export default function Footer() {
  return (
    <footer className='w-full py-6 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950'>
      <div className='max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4'>
        <div className='text-xs text-gray-500 flex items-center gap-1'>
          <p>Developed by Rodolfo Menocal • Inspired by Midudev</p>
        </div>

        <div className='flex gap-4'>
          <a
            href='https://github.com/Menocas17'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
            className='text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors'
          >
            <GitHubIcon />
          </a>
          <a
            href='https://www.linkedin.com/in/menocas'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            className='text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors'
          >
            <LinkedinIcon />
          </a>
          <a
            href='mailto:rodolfomenocal17@gmail.com'
            aria-label='Email'
            className='text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors'
          >
            <MailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
