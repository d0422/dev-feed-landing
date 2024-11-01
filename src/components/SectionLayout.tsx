import { PropsWithChildren } from 'react';

interface SectionLayoutProps {
  full?: boolean;
}

export default function SectionLayout({
  children,
  full,
}: PropsWithChildren<SectionLayoutProps>) {
  return (
    <div
      className={`flex justify-center items-center py-12 ${
        full ? 'min-h-[100vh]' : 'h-full'
      }`}
    >
      {children}
    </div>
  );
}
