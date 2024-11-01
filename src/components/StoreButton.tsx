interface StoreButtonProps {
  src: string;
  name: string;
  href: string;
}

export default function StoreButton({ src, name, href }: StoreButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="bg-black rounded-xl p-2.5 px-6 flex items-center gap-4"
    >
      <img src={src} className="w-7 mobile:w-5" />
      <div className="text-white">{name}</div>
    </a>
  );
}