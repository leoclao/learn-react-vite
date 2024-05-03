import type { ButtonSize } from "@/utils";
import clsx from "clsx";
import type React from "react";

import styles from "@/styles/modules/button.module.scss";

interface Props {
  className?: string;
  hollow: boolean;
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size: ButtonSize;
  title: string;
}

function Button({
  className,
  hollow = false,
  label,
  onClick,
  size = "medium",
  title,
}: Props) {
  const newClassName = clsx(
    styles.base,
    styles[`${size}`],
    hollow && styles.hollow
  );

  return (
    <button className={newClassName} onClick={onClick} title={title} type="button">
      {label}
    </button>
  );
}

export default Button;
