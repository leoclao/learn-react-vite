interface Props {
  className?: string;
  ratio?: string;
  imgClassName?: string;
  src: string;
  desc: string;
}

function Thumb({ className, ratio, imgClassName, src, desc }: Props) {
  return (
    <div className={className}>
      <img className={imgClassName} src={src} alt={desc} />
    </div>
  );
}

export default Thumb;
