import Font from '../components/Font';
import Image from '../components/Image';
import SectionLayout from '../components/SectionLayout';
import useAppFocusAnimation from '../hooks/useAppFocusAnimation';

export default function BookmarkSection() {
  const ref = useAppFocusAnimation();
  return (
    <SectionLayout full ref={ref}>
      <div className="flex flex-col gap-2.5">
        <div>
          <Font type="title2">마음에 드는 글은</Font>
          <Font type="title2">북마크로 저장해요</Font>
        </div>
        <div className="flex flex-col gap-1 justify-center mobile:items-center">
          <Font type="body2">글을 읽다가, 글이 마음에 든다면</Font>
          <Font type="body2">오른쪽 아래 북마크 버튼을 </Font>
          <Font type="body2">클릭해서 간편하게 추가해봐요</Font>
        </div>
      </div>

      <div className="flex w-1/2 pc:w-[20%] mobile:w-[80%] relative">
        <Image
          srcFilename="bookmark"
          alt="bookmark"
          className="w-full mobile:w-2/3 tablet:w-2/3"
        />
        <Image
          srcFilename="bookmarkList"
          alt="bookmarkList"
          className="w-full mobile:w-2/3 absolute left-[80%] top-[15%] mobile:left-[40%] tablet:w-2/3 tablet:left-[50%]"
        />
      </div>
    </SectionLayout>
  );
}
