import { useDragIndexCarousel, useInterval } from '@rapiders/react-hooks';
import Image from '../components/Image';
import SectionLayout from '../components/SectionLayout';
import useAppFocusAnimation from '../hooks/useAppFocusAnimation';
import useFocus from '../hooks/useFocus';
import { useEffect } from 'react';
type ImageSrc = {
  fileName: string;
  alt: string;
};

const IMAGE: ImageSrc[] = [
  {
    fileName: 'home',
    alt: '피드이미지',
  },
  {
    fileName: 'view',
    alt: '글 조회하기 이미지',
  },
];
export default function FeedSection() {
  const focusRef = useAppFocusAnimation();

  const { CarouselWrapper, ref, next, isEnd, prev, isDragging } =
    useDragIndexCarousel(IMAGE.length);

  const { stop, continueTimer } = useInterval(() => {
    if (!isEnd) {
      next();
    }
  }, 1000);

  const resetRef = useFocus<HTMLDivElement>({
    onFocusCallback: () => {
      continueTimer();
    },
    onFocusOutCallback: () => {
      stop();
      prev();
    },
  });

  useEffect(() => {
    if (isDragging) stop();
  }, [isDragging]);

  return (
    <SectionLayout full>
      <div className="w-full pc:w-1/4 mobile:w-2/3" ref={resetRef}>
        <CarouselWrapper ref={ref}>
          {IMAGE.map((image) => (
            <div className="w-full" key={image.fileName}>
              <Image
                srcFilename={image.fileName}
                className="w-full"
                alt={image.alt}
              />
            </div>
          ))}
        </CarouselWrapper>
      </div>
      <div className="flex-col gap-6 flex basis-1/3" ref={focusRef}>
        <div className="font-bold text-[40px]  mobile:text-[30px] tablet:text-[30px]  gap-1 flex flex-col mobile:items-center">
          <div>나만의 개발 블로그 피드</div>
        </div>
        <div className="flex flex-col gap-1 mobile:items-center text-[20px] mobile:text-[16px]">
          <div>직접 구독한 블로그로만 구성된 피드를 </div>
          <div>살펴보고 편하게 읽어봐요.</div>
        </div>
      </div>
    </SectionLayout>
  );
}
