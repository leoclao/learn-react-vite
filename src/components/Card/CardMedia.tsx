import { type MediaType, Ratio } from "@/utils";
import clsx from "clsx";
import type React from "react";

interface Props {
  className?: string;
  ratio?: string;
  type?: MediaType;
  url?: string;
  desc?: string;
  captions?: string;
}

function CardMedia({ className, ratio, type, captions }: Props) {
  const mediaDom = () => {
    switch (type) {
      case "video":
        return (
          <video className={clsx(ratio)} src={url} muted controls>
            {captions && <track kind="captions" src={captions} />}
          </video>
        );
      case "audio":
        return (
          <audio src={url} alt={desc} muted controls>
            {captions && <track kind="captions" src={captions} />}
          </audio>
        );
      default:
        return <img className={clsx(ratio)} src={url} alt={desc} />;
    }
  };

  return <div className={className}>{mediaDom()}</div>;
}

export default CardMedia;
