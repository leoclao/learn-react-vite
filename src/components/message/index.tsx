import type { MessageType, Size } from "@/styles";
import clsx from "clsx";
import type React from "react";

import styles from "@/styles/modules/message.module.scss";

interface Props {
	types: MessageType;
	size?: Size;
	content: React.ReactNode;
}

function Message({ types = "Base", size = "medium", content }: Props) {
	const newType = (key) => {
		let type = "";
		switch (key) {
			case "warning":
				type = "Warning";
				break;
			case "error":
				type = "Error";
				break;

			default:
				type = "Info";
				break;
		}
		return type;
	}

	const newSize = (key) => {
		let size = "";
		switch (key) {
			case "tiny":
				size = "Tiny";
				break;

			case "small":
				size = "Small";
				break;

			case "large":
				size = "Large";
				break;

			case "large-x":
				size = "LargeX";
				break;

			case "large-xx":
				size = "Large2X";
				break;

			case "large-xxx":
				size = "Large3X";
				break;

			default:
				size = "Medium";
				break;
		}

		return size;
	}

	const className = clsx(
		styles.Base,
		types && styles[`${newType(types)}`],
		size && styles[`${newSize(size)}`]
	);

	return <div className={className}>{content}</div>;
}

export default Message;
