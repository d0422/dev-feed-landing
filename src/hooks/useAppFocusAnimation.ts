import { useFocusAnimation } from '@rapiders/react-hooks';

export default function useAppFocusAnimation() {
  const ref = useFocusAnimation<HTMLDivElement>(
    'animate-fadeInBottom',
    'animate-fadeOutBottom'
  );
  return ref;
}
