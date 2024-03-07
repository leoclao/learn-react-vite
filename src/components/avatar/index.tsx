interface Props {
	className?: string;
	src: string;
	title: string;
}

function Avatar({ className, src, title }: Props) {
	return (
		<div>
			<div>{title}</div>
			<img className={className} src={src} alt={title} />
		</div>
	);
}

export default Avatar;
