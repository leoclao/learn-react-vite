import styles from "@/styles/modules/field.module.scss";
import type { Size } from "@/utils";
import clsx from "clsx";
import Message from "../Message";

interface Props {
	label?: string;
	className?: string;
	size?: Size;
	id?: string;
	placeHolder?: string;
	type?: string;
	value?: string;
	alt?: string;
	inputRef?: React.RefObject<HTMLInputElement>;
	msType?: string;
	msContent?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	required?: boolean;
}

function FieldBase({
	label,
	className,
	size = "medium",
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
	return (
		<div className={clsx(styles.base, className)}>
			<div className={styles.container}>
				{label &&
					<label className={styles.Label} htmlFor={id}>{label}</label>
				}
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
			{msContent && <Message types={msType} content={msContent} />}
		</div>
	);
}

export default FieldBase;
