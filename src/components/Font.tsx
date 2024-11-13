import { PropsWithChildren } from 'react';

type FontType = 'body1' | 'body2' | 'title' | 'title2' | 'introText';

interface FontProps {
  type: FontType;
}

const CLASS_NAME: Record<FontType, string> = {
  title: 'text-[50px] mobile:text-[35px]',
  title2: 'text-[40px]  mobile:text-[30px] tablet:text-[30px]',
  introText: 'text-[50px] mobile:text-[20px]  whitespace-pre-wrap',
  body1: 'text-[25px]  mobile:text-[20px] tablet:text-[30px]',
  body2: 'text-[20px] mobile:text-[14px]',
};

export default function Font({ type, children }: PropsWithChildren<FontProps>) {
  return <p className={CLASS_NAME[type]}>{children}</p>;
}
