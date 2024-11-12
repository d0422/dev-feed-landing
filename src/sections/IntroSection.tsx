import { useAnimation, useInterval } from '@rapiders/react-hooks';
import SectionLayout from '../components/SectionLayout';
import { useState } from 'react';
import useFocus from '../hooks/useFocus';

const MESSAGE = [
  '개발 블로그, 어떻게 읽고 계세요?',
  '혹시 브라우저로 귀찮고,\n어렵게 읽고 계신가요?',
  '그렇다면 Dev-Feed는 어때요?',
];

export default function IntroSection() {
  const [messageIndex, setMessageIndex] = useState(0);

  const { AnimationWrapper, show } = useAnimation({
    mountClassName: 'animate-fadeInBottom',
    unmountClassName: 'animate-fadeOutBottom',
  });

  const { continueTimer, stop, intervalRunning } = useInterval(() => {
    setMessageIndex((prev) => {
      if (prev < MESSAGE.length - 1) return prev + 1;
      return prev;
    });
    show();
    if (messageIndex === MESSAGE.length - 2) {
      stop();
    }
  }, 2000);

  const focusRef = useFocus<HTMLDivElement>({
    onFocusCallback: () => {
      show();
      continueTimer();
    },
    onFocusOutCallback: () => {
      stop();
      setMessageIndex(0);
    },
  });

  return (
    <SectionLayout full showArrow={!intervalRunning}>
      <div
        className="text-[50px] mobile:text-[25px] whitespace-pre-wrap"
        ref={focusRef}
      >
        <AnimationWrapper>{MESSAGE[messageIndex]}</AnimationWrapper>
      </div>
    </SectionLayout>
  );
}
