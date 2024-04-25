// CardMedia
import type React from "react";
import { MediaType, Ratio } from "@/utils";
import clsx from "clsx";

interface Props {
  className?: string;
  ratio?: string;
  type?: MediaType;
  url?: string;
  desc?: string;
}

function CardMedia({ className, ratio, type = 'image' }: Props) {
  const mediaDom = () => {
    switch (type) {
      case 'image':
        return <img className={ratio} src={url} alt={desc} />;
      case 'video':
        return <video className={ratio} src={url} />;
      case 'audio':
        return <audio src={url} />;
      default:
        return null;
    }
  }

  return (
    <div className={className}>
      {mediaDom}
    </div>
  );
}

export default CardMedia;