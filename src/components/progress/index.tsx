import styles from "@/styles/modules/progress.module.scss";
import clsx from "clsx";
import type React from "react";

interface Props {
  size: string;
  value: number;
}

function Progress({ size, value = 0 }: Props) {
  return (
    <div className={clsx(styles.container)}>
      <svg width="0" height="0" viewBox="0 0 811 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <clipPath id="progressClipPath">
          <path d="M33.1943 0.504929L0.5 31.9369L33.1943 64L779.482 62.8639L810.536 30.927L779.735 0L33.1943 0.504929Z" fill="white" />
        </clipPath>
      </svg>
      <progress
        className={clsx(
          styles.base,
          size && styles[size],
        )}
        value={value}
        max={100}
      />
    </div>
  );
}

export default Progress;