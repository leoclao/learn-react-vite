import clsx from "clsx";
import Message from "../message";

interface Props {
	className?: string;
	type?: string;
	msType?: string;
	msContent?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

function Field({ className, type, msType, onChange }: Props) {
	return (
		<div className={clsx(styles.base, className)}>
			<div className={styles.container}>
				<input
					type={type}
					ref={inputRef}
					value={colValue}
					onChange={onChange}
					placeholder={placeHolder}
				/>
			</div>
			{msContent && <Message types={msType} content={msContent} />}
		</div>
	);
}

export default Field;
