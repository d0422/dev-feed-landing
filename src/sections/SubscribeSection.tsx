import SectionLayout from '../components/SectionLayout';
import Image from '../components/Image';
import useAppFocusAnimation from '../hooks/useAppFocusAnimation';
import Font from '../components/Font';

export default function SubscribeSection() {
  const ref = useAppFocusAnimation();
  return (
    <SectionLayout full ref={ref}>
      <div className="flex-col gap-6 flex basis-1/3">
        <div className="gap-1 flex flex-col mobile:items-center justify-start">
          <Font type="title2">다양한 방식의 구독</Font>
        </div>
        <div className="flex flex-col gap-4 mobile:items-center text-body1 ">
          <div className="flex flex-col gap-1.5 mobile:items-center">
            <Font type="body1">Dev-Feed에서는 아래 </Font>
            <Font type="body1">세가지 방식으로 구독할 수 있어요.</Font>
          </div>
          <div className="flex-col gap-1.5 flex">
            <Font type="body2">1. 웹 탐색 중 구독</Font>
            <Font type="body2">2. 다양한 테크회사의 블로그</Font>
            <Font type="body2">3. 직접 등록</Font>
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
