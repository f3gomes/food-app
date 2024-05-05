import Image, { ImageProps } from "next/image";

const PromoBanner = (props: ImageProps) => {
  return (
    <Image
      width={0}
      height={0}
      sizes="100%"
      quality={100}
      className="h-auto w-full object-contain"
      {...props}
    />
  );
};

export default PromoBanner;
