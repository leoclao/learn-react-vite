import styles from "@/styles/modules/progress.module.scss";
import type { Size } from "@/utils"
import clsx from "clsx";
import type React from "react";

type Props = {
  size: Size;
  value: number;
  clipPath: React.ReactNode;
}

function ProgressClipPath({ size, value = 0, clipPath }: Props) {
  if (value < 0 || value > 100) {
    console.error("Progress value must be between 0 and 100");
    value = Math.max(0, Math.min(value, 100));
  }

  return (
    <div className={clsx(styles.clipPathContainer)}>
      {/* <svg width="0" height="0" viewBox="0 0 811 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <clipPath id="progressClipPath">
          <path d="M33.1943 0.504929L0.5 31.9369L33.1943 64L779.482 62.8639L810.536 30.927L779.735 0L33.1943 0.504929Z" fill="white" />
        </clipPath>
      </svg> */}
      {clipPath}
      <progress
        className={clsx(
          styles.clipPath
        )}
        value={value}
        max={100}
      />
    </div>
  );
}

export default ProgressClipPath;