import SectionLayout from '../components/SectionLayout';
import Image from '../components/Image';
import useAppFocusAnimation from '../hooks/useAppFocusAnimation';

export default function SubscribeSection() {
  const ref = useAppFocusAnimation();
  return (
    <SectionLayout full ref={ref}>
      <div className="flex-col gap-6 flex basis-1/3">
        <div className="font-bold text-[40px]  mobile:text-[20px] tablet:text-[30px]  gap-1 flex flex-col mobile:items-center justify-start">
          <div>다양한 방식의 구독</div>
        </div>
        <div className="flex flex-col gap-4 mobile:items-center text-[20px] mobile:text-[16px] ">
          <div className="flex flex-col gap-1.5 mobile:items-center">
            <div>Dev-Feed에서는 아래 </div>
            <div>세가지 방식으로 구독할 수 있어요.</div>
          </div>
          <div className="flex-col gap-1.5 flex">
            <div>1. 웹 탐색 중 구독</div>
            <div>2. 다양한 테크회사의 블로그</div>
            <div>3. 직접 등록</div>
          </div>
        </div>
      </div>
      <div className="flex basis-1/3 gap-4 items-center justify-center">
        <div className="w-1/3 rounded-2xl overflow-hidden">
          <Image srcFilename="rss" className="w-1/2" alt="RSSicon" />
        </div>
      </div>
    </SectionLayout>
  );
}
