import Image from '../components/Image';
import SectionLayout from '../components/SectionLayout';
import StoreButton from '../components/StoreButton';

export default function MainSection() {
  return (
    <SectionLayout full showArrow>
      <div className="flex justify-evenly items-center w-[80%] mobile:gap-4 mobile:flex-col-reverse">
        <div className=" h-full items-start flex flex-col justify-center gap-6 mobile:items-center">
          <div className="text-[50px]">Dev-Feed</div>
          <div className="font- text-[25px]  mobile:text-[20px] tablet:text-[30px]  gap-1 flex flex-col mobile:items-center">
            <div>로그인 없는</div>
            <div>간편한 개발 블로그 구독 서비스</div>
          </div>
          <div className="flex gap-4">
            <StoreButton
              href="https://play.google.com/store/apps/details?id=com.devfeed"
              src="googlePlay"
              name="Google Play"
            />
            <StoreButton
              href="https://apps.apple.com/kr/app/dev-feed/id6737579223"
              src="appStore"
              name="Apple Store"
            />
          </div>
        </div>
        <Image
          srcFilename="main"
          className="w-1/4 min-w-32"
          alt="앱 메인이미지"
        />
      </div>
    </SectionLayout>
  );
}
