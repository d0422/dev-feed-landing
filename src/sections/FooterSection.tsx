import Image from '../components/Image';
import SectionLayout from '../components/SectionLayout';

export default function FooterSection() {
  return (
    <SectionLayout full>
      <Image
        srcFilename="dev-feed-logo"
        alt="dev-feed-logo"
        className="w-1/3"
      />
      <div className="flex flex-col gap-4 items-center">
        <div className="text-[40px]">Dev-feed</div>
        <div className="flex flex-col gap-2 mobile:text-[14px]">
          <div>개발 블로그, 이제 한 눈에 확인하고, 구독해보세요.</div>
          <div>Dev-Feed로 나만의 기술블로그 피드를 만들어봐요.</div>
        </div>
      </div>
    </SectionLayout>
  );
}
