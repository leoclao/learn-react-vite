import React from "react";
import clsx from "clsx";

import styles from "./../../styles/modules/button.module.scss";

interface Props {
  label?: string;
  size: string;
  hollow: boolean;
  modifyClass?: string;
  desc: string;
  type: React.ButtonHTMLAttributes;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ 
  label,
  modifyClass,
  size = "medium",
  hollow = false,
  onClick,
  title,
  type = 'button'
}: Props) {
  const className = clsx(
    !modifyClass && styles[`base`],
    (!modifyClass && !!size) && styles[`${size}`],
    (!modifyClass && !!hollow) && styles[`hollow`],
    modifyClass
  );

  return (
    <button className={className} onClick={onClick} title={title} type={type}>{label}</button>
  );
}

export default Button;