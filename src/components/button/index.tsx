import React from "react";

interface Props {
  label?: string;
  desc: string;
  type: React.ButtonHTMLAttributes;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ label, onClick, title, type = 'button' }: Props) {
  return (
    <button onClick={onClick} title={title} type={type}>{label}</button>
  );
}

export default Button;