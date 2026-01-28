'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollContextType {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<string>('');

  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

  return (
    <ScrollContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export const useActiveSection = (): ScrollContextType => {
  const context = useContext(ScrollContext);

  if (!context) {
    throw new Error('useActiveSection must be used inside an ScrollProvider');
  }

  return context;
};

export const useSectionInView = (sectionId: string) => {
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  const { ref, inView } = useInView({
    threshold: 0,

    rootMargin: '-45% 0px -45% 0px',
  });

  useEffect(() => {
    if (inView) {
    }
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionId);
    }
  }, [inView, sectionId, setActiveSection, timeOfLastClick]);

  return ref;
};
