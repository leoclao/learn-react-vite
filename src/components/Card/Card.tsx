// Card
import type { ObjectLayout } from "@/utils";
import type React from "react";

import styles from "@/styles/modules/card.module.scss";

interface Props {
  className?: string;
  // layout: ObjectLayout; // This is use when apply to component api
  // layoutVariant?: string; // This is use when apply to component api
  children: React.ReactNode;
}

function Card({ className, children }: Props) {

  // This is use when apply to component api
  // if (layout !== 'variant' && layoutVariant) {
  //   console.warn('`layoutVariant` is only available when `layout` is `variant`')
  // }

  // This is use when apply to component api
  // const setLayout = () => {
  //   switch (layout) {
  //     case 'variant':
  //       return layoutVariant;
  //     case 'horizontal':
  //       return styles.horizontal;
  //     default:
  //       return styles.vertical;
  //   }
  // }

  return (
    <article className={className}>
      {children}
    </article>
  );
}

export default Card;
