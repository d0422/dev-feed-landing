import { useFocusAnimation } from '@rapiders/react-hooks';
import SectionLayout from '../components/SectionLayout';

export default function IntroSection() {
  const ref = useFocusAnimation<HTMLDivElement>(
    'animate-fadeInLeft',
    'animate-fadeOutLeft'
  );
  return (
    <SectionLayout full>
      <div className="w-full items-center justify-center flex">
        <div className="w-[80%] items-center justify-center flex gap-8 mobile:gap-4 mobile:flex-col">
          <div ref={ref} className="flex basis-1/3 pc:basis-[40%]">
            <img src="/feed.png" className="w-1/2" />
            <img src="/read.png" className="w-1/2" />
          </div>
          <div className="flex-col gap-6 flex basis-1/3">
            <div className="font-bold text-[40px]  mobile:text-[20px] tablet:text-[30px]  gap-1 flex flex-col mobile:items-center">
              <div>나만의 개발 블로그 피드</div>
            </div>
            <div className="flex flex-col gap-1 mobile:items-center text-[20px] mobile:text-[16px]">
              <div>직접 구독한 블로그로만 구성된 피드를 </div>
              <div>살펴보고 편하게 읽어봐요.</div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
