'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ThemeSelector() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const themeChange = e.target.checked ? 'dark' : 'light';
    setTheme(themeChange);
  };

  if (!mounted) {
    return <div className='flex items-center gap-2 w-17.5 h-6' />;
  }

  const isDark = theme === 'dark' || resolvedTheme === 'dark';

  return (
    <div className='flex items-center gap-2'>
      <label className='relative inline-flex items-center cursor-pointer'>
        <input
          type='checkbox'
          className='sr-only peer'
          onChange={handleThemeChange}
          checked={isDark}
        />

        <div className='w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-[linear-gradient(90deg,rgba(1,102,43,1)_0%,rgba(20,58,44,1)_63%,rgba(26,24,25,1)_100%)] transition-colors border border-gray-400 '></div>

        <div className='absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform peer-checked:translate-x-5'></div>
      </label>

      <Image
        src={isDark ? '/moon.png' : '/sun1.png'}
        width={20}
        height={20}
        alt='Theme icon'
      />
    </div>
  );
}
