import { useFocusAnimation } from '@rapiders/react-hooks';
import SectionLayout from '../components/SectionLayout';

export default function SubscribeSection() {
  const ref = useFocusAnimation<HTMLDivElement>(
    'animate-fadeInRight',
    'animate-fadeOutRight'
  );

  return (
    <SectionLayout full>
      <div className="w-full items-center justify-center flex">
        <div className="w-[80%] items-center justify-center flex gap-8 mobile:gap-4 mobile:flex-col-reverse">
          <div className="flex-col gap-6 flex basis-1/3">
            <div className="font-bold text-[40px]  mobile:text-[20px] tablet:text-[30px]  gap-1 flex flex-col mobile:items-center">
              <div>다양한 방식의 구독</div>
            </div>
            <div className="flex flex-col gap-4 mobile:items-center text-[20px] mobile:text-[16px] ">
              <div>Dev-Feed에서는 세가지 방식으로 구독할 수 있어요.</div>
              <div className="flex-col gap-1.5 flex">
                <div>1. 웹 탐색 중 구독</div>
                <div>2. 다양한 테크회사의 블로그</div>
                <div>3. 직접 등록</div>
              </div>
            </div>
          </div>
          <div ref={ref} className="flex basis-1/3 pc:basis-[40%]">
            <img src="/subscribe.png" className="w-1/2" />
            <img src="/subscribeVelog.png" className="w-1/2" />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
