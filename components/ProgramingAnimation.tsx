'use client';

import coding from '@/public/Coding.json';
import Lottie from 'lottie-react';

export default function ProgrammingAnimation() {
  return (
    <div className='hidden lg:block  xl:w-xl  aspect-square mx-auto'>
      <Lottie animationData={coding} loop={true} />
    </div>
  );
}
