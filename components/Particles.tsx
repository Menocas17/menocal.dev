'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id='tsparticles'
      className='absolute inset-0 pointer-events-none'
      options={{
        fullScreen: { enable: false },
        fpsLimit: 120,
        particles: {
          color: {
            value: '#4ade80',
          },
          move: {
            direction: 'top',
            enable: true,
            random: false,
            speed: 1.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 100,
          },
          opacity: {
            value: { min: 0.1, max: 0.6 },
            animation: {
              enable: true,
              speed: 0.5,
              sync: false,
              mode: 'auto',
              startValue: 'random',
            },
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
