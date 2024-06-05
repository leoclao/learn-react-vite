import type Size from "@/constants/types/size";
import styles from "@/styles/modules/progress.module.scss";
import clsx from "clsx";
import type React from "react";

type Props = {
  size: Size;
  value: number;
}

function Progress({ size = "medium", value = 0 }: Props) {
  return (
    <progress
      className={clsx(
        styles.base,
        size && styles[size],
      )}
      value={value}
      max={100}
    />
  );
}

export default Progress;