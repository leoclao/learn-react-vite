import { sizeMapping, statusMapping } from "@/constants/mapping";
import styles from "@/styles/modules/message.module.scss";
import type { MessageType, Size } from "@/types/type";
import clsx from "clsx";

interface Props {
	types: MessageType;
	size?: Size;
	content: React.ReactNode;
}

function Message({ types = "info", size = "medium", content }: Props) {
	type MessageTypeKeys = keyof typeof statusMapping;
	const newType = (key: MessageTypeKeys) => statusMapping[key] || "Info";
	const newSize = (key: Size) => sizeMapping[key] || "Medium";

	const className = clsx(
		styles.Base,
		types && styles[`${newType(types)}`],
		size && styles[`${newSize(size)}`],
	);

	return <div className={className}>{content}</div>;
}

export default Message;
