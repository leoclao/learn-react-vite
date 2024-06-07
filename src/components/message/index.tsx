import { messageStatusMapping, sizeMapping } from "@/constants"
import type MessageType from "@/constants/types/common";
import type Size from "@/constants/types/size";
import styles from "@/styles/modules/message.module.scss";
import clsx from "clsx";

interface Props {
	types: MessageType;
	size?: Size;
	content: React.ReactNode;
}

function Message({ types = "Info", size = "medium", content }: Props) {

	const newType = (key: string) => messageStatusMapping[key] || "Info";
	const newSize = (key: string) => sizeMapping[key] || "Medium";

	const className = clsx(
		styles.Base,
		types && styles[`${newType(types)}`],
		size && styles[`${newSize(size)}`]
	);

	return <div className={className}>{content}</div>;
}

export default Message;
