import { PropsWithChildren } from 'react';
import Arrow from './Arrow';

interface SectionLayoutProps {
  full?: boolean;
  showArrow?: boolean;
}

export default function SectionLayout({
  children,
  full,
  showArrow,
}: PropsWithChildren<SectionLayoutProps>) {
  const scroll = () => {
    window.scrollBy({
      top: 1,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`flex justify-center items-center py-12 snap-start flex-col relative overflow-hidden ${
        full ? 'min-h-[100dvh]' : 'h-full'
      }`}
    >
      {children}
      {showArrow && (
        <button className="absolute bottom-6 animate-bounce" onClick={scroll}>
          <Arrow />
        </button>
      )}
    </div>
  );
}
