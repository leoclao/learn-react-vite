interface Props {
	className?: string;
	imgClassName?: string;
	src: string;
	desc: string;
}

function Avatar({ className, imgClassName, src, desc }: Props) {
	return (
		<div className={className}>
			<img className={imgClassName} src={src} alt={desc} />
		</div>
	);
}

export default Avatar;
