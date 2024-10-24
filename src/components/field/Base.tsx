import { sizeMapping } from "@/constants/mapping";
import styles from "@/styles/modules/field.module.scss";
import type { MessageType, Size } from "@/types/type";
import clsx from "clsx";
import Message from "../Message";

interface Props {
	label?: string;
	className?: string;
	size: Size;
	id?: string;
	placeHolder?: string;
	type?: string;
	value?: string;
	alt?: string;
	inputRef?: React.RefObject<HTMLInputElement>;
	msType?: MessageType;
	msContent?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	required?: boolean;
}

function FieldBase({
	label,
	className,
	size,
	id,
	placeHolder = "Input placeholder",
	type = "text",
	value = "",
	alt = "Input description",
	inputRef,
	msType,
	msContent,
	onChange,
	required = false,
}: Props) {
	const newSize = (key: Size) => sizeMapping[key] || "Medium";
	return (
		<div
			className={clsx(
				styles.base,
				size && styles[`${newSize(size)}`],
				className,
			)}
		>
			<div className={styles.container}>
				{label && (
					<label className={styles.Label} htmlFor={id}>
						{label}
					</label>
				)}
				<input
					id={id}
					placeholder={placeHolder}
					type={type}
					value={value}
					alt={alt}
					ref={inputRef}
					onChange={onChange}
				/>
			</div>
			{msContent && msType && <Message types={msType} content={msContent} />}
		</div>
	);
}

export default FieldBase;
