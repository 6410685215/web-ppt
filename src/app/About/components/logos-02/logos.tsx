import Image from "next/image";

interface LogoProps {
  src: string;
  alt: string;
  height?: number;
}

export const Logo = (props: LogoProps) => (

      <Image
        src={props.src}
        alt={props.alt}
        height={props.height || 40}
      />
);