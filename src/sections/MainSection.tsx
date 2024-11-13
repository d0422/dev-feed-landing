import Font from '../components/Font';
import Image from '../components/Image';
import SectionLayout from '../components/SectionLayout';
import StoreButton from '../components/StoreButton';

export default function MainSection() {
  return (
    <SectionLayout full showArrow>
      <div className="flex justify-evenly items-center w-[80%] mobile:gap-4 mobile:flex-col-reverse">
        <div className=" h-full items-start flex flex-col justify-center gap-6 mobile:items-center">
          <Font type="title">Dev-Feed</Font>
          <div className="gap-1 flex flex-col mobile:items-center">
            <Font type="body1">로그인 없는</Font>
            <Font type="body1">간편한 개발 블로그 구독 서비스</Font>
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
