import { type MediaType, Ratio } from "@/utils";
import clsx from "clsx";
// CardMedia
import type React from "react";

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
        return <video autoPlay {...props} />;
      case 'audio':
        return (
          <audio>
            <track kind="captions" {...props} />
          </audio>
        );
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