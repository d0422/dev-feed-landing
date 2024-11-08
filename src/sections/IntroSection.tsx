import { useFocusAnimation } from '@rapiders/react-hooks';
import SectionLayout from '../components/SectionLayout';
import Image from '../components/Image';

export default function IntroSection() {
  const ref = useFocusAnimation<HTMLDivElement>(
    'animate-fadeInBottom',
    'animate-fadeOutBottom'
  );
  return (
    <SectionLayout full>
      <div className="w-full items-center justify-center flex" ref={ref}>
        <div className="w-[80%] items-center justify-center flex gap-8 mobile:gap-4 mobile:flex-col">
          <div className="flex basis-1/3 pc:basis-[40%]">
            <Image srcFilename="home" className="w-1/2" alt="피드 이미지" />
            <Image
              srcFilename="view"
              className="w-1/2"
              alt="글 조회하기 이미지"
            />
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
