import clsx from "clsx";
import React from "react";

import styles from "./../../styles/modules/message.module.scss";

interface Props {
	types: string;
	content: string;
}

function Message({ types = "base", content }: Props) {
	const className = clsx(styles.base, !!types && styles[`${types}`]);

	return <div className={className}>{content}</div>;
}

export default Message;
