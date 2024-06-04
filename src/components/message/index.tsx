import type { MessageType, Size } from "@/styles";
import clsx from "clsx";
import type React from "react";

import styles from "@/styles/modules/message.module.scss";

interface Props {
	types: MessageType;
	size?: Size;
	content: React.ReactNode;
}

function Message({ types = "Info", size = "medium", content }: Props) {

	const typeMapping = {
		warning: "Warning",
		error: "Error",
		info: "Info",
	}

	const sizeMapping = {
		tiny: "Tiny",
		small: "Small",
		medium: "Medium",
		large: "Large",
		"large-x": "LargeX",
		"large-xx": "Large2X",
		"large-xxx": "Large3X",
	}

	const newType = (key: string) => typeMapping[key] || "Info";
	const newSize = (key: string) => sizeMapping[key] || "Medium";

	const className = clsx(
		styles.Base,
		types && styles[`${newType(types)}`],
		size && styles[`${newSize(size)}`]
	);

	return <div className={className}>{content}</div>;
}

export default Message;
