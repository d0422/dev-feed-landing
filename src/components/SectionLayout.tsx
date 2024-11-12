import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import Arrow from './Arrow';

interface SectionLayoutProps {
  full?: boolean;
  showArrow?: boolean;
}

const SectionLayout = forwardRef(
  (
    { children, full, showArrow }: PropsWithChildren<SectionLayoutProps>,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const scroll = () => {
      window.scrollBy({
        top: 1,
        behavior: 'smooth',
      });
    };

    return (
      <div className="flex justify-center items-center py-12 snap-end flex-col relative overflow-hidden w-full">
        <div className="w-full items-center justify-center flex">
          <div
            className={`w-[80%] items-center mobile:justify-center justify-evenly flex gap-8 mobile:gap-4 mobile:flex-col ${
              full ? 'min-h-[100svh]' : 'h-full'
            }`}
            ref={ref}
          >
            {children}
          </div>
        </div>
        {showArrow && (
          <button className="absolute bottom-6 animate-bounce" onClick={scroll}>
            <Arrow />
          </button>
        )}
      </div>
    );
  }
);

export default SectionLayout;
