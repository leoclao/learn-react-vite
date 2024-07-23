import styles from "@/styles/modules/avatar.module.scss";
/**
 * The Avatar component in TypeScript React renders an image with optional attributes like size,
 * source, alt text, title, long description, and ARIA describedby.
 * @param {Props}  - The `Avatar` component takes the following props:
 * @returns The Avatar component is being returned, which is a functional component that renders an
 * image inside a div element with optional props such as className, size, src, alt, title, longdesc,
 * and ariaDescribedby.
 */
import type { Ratio, Size } from "@/utils";
import getImageUrl from "@/utils/get-img-url";
import clsx from "clsx";
import { useEffect, useState } from "react";

interface Props {
  className?: string;
  size?: Size;
  ratio?: Ratio;
  src?: string;
  alt?: string;
  title?: string;
  longdesc?: string;
  ariaDescribedby?: string;
}

function Avatar({
  className,
  size,
  ratio,
  src,
  alt,
  title,
  longdesc,
  ariaDescribedby
}: Props) {

  const [newSize, setNewSize] = useState("");
  const [newRatio, setNewRatio] = useState("");

  useEffect(() => {
    if (size !== undefined) setNewSize(size);
    if (ratio !== undefined) setNewRatio(ratio);
  });
  // const newSrc = () => {
  //   src.map((item) => {
  //     console.log(getImageUrl(item));
  //   })
  // }
  // src.map((item) => {
  //   console.log(getImageUrl(item.domain));
  // })


  return (
    <div className={clsx(styles.base, className, styles[`${newSize}${newRatio}`])}>
      <img
        src={getImageUrl(src[0])}
        alt={alt}
        title={title}
        longdesc={longdesc}
        aria-describedby={ariaDescribedby}
      />
    </div>
  );
}

export default Avatar;
