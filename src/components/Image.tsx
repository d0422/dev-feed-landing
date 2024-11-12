interface ImageProps {
  srcFilename: string;
  className: string;
  alt: string;
}

export default function Image({ srcFilename, className, alt }: ImageProps) {
  return (
    <picture className={className}>
      <source srcSet={`picture/webp/${srcFilename}.webp`} type="image/webp" />
      <source srcSet={`picture/png/${srcFilename}.png`} type="image/png" />
      <img src={`picture/png/${srcFilename}.png`} alt={alt} draggable={false} />
    </picture>
  );
}
