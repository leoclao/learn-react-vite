import type { compProps } from "@/types";

interface Props extends compProps {
  ratio?: string;
  src: string;
  desc?: string;
  title?: string;
  alt?: string;
  isHideFigCap?: boolean;
  loading?: React.ReactNode;
}

function Thumb({ className, ratio, src, desc, title, alt, isHideFigCap = false, loading }: Props) {
  return (
    <figure className={className}>
      <img src={src} alt={alt} title={title} loading={loading} />
      {desc && !isHideFigCap && <figcaption>{desc}</figcaption>}
    </figure>
  );
}

export default Thumb;
