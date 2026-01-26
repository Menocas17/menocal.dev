'use client';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import coding from '@/public/Coding.json';
import Lottie from 'lottie-react';

export default function ProgrammingAnimation() {
  return (
    // <div className='w-full h-full'>
    //   <DotLottieReact
    //     src='https://lottie.host/81125435-4ca3-46ff-9ce0-66911b34e56a/SY2gXLeTm8.lottie'
    //     autoplay
    //     className='w-full h-full'
    //     style={{ maxWidth: '100%', maxHeight: '100%' }}
    //   />
    // </div>
    <div className='w-100  aspect-square mx-auto'>
      <Lottie animationData={coding} loop={true} />
    </div>
  );
}
