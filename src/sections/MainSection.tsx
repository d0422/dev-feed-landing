import SectionLayout from '../components/SectionLayout';
import StoreButton from '../components/StoreButton';

export default function MainSection() {
  return (
    <SectionLayout full>
      <div className="flex justify-evenly items-center w-[80%] mobile:gap-4 mobile:flex-col-reverse">
        <div className=" h-full items-start flex flex-col justify-center gap-6 mobile:items-center">
          <div className="font-bold text-[40px]  mobile:text-[27px] tablet:text-[30px]  gap-1 flex flex-col mobile:items-center">
            <div>로그인 없는</div>
            <div>간편한 개발 블로그 구독 서비스</div>
            <div>Dev-Feed</div>
          </div>
          <div className="flex flex-col gap-2">
            <div>개발 블로그, 이제 한 눈에 확인하고, 구독해보세요.</div>
            <div>Dev-Feed로 나만의 기술블로그 피드를 만들어봐요.</div>
          </div>
          <div className="flex gap-4">
            <StoreButton
              href="https://play.google.com/apps/testing/com.devfeed"
              src="googlePlay.png"
              name="Google Play"
            />
            <StoreButton
              href={'mailto:rlfehd2013@naver.com'}
              src="appStore.png"
              name="Apple Store"
            />
          </div>
        </div>
        <img src="/main.png" className="w-1/4 min-w-32" />
      </div>
    </SectionLayout>
  );
}
