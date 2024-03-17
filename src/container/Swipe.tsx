interface Props {
	className: string;
	children: React.ReactElement;
}

function Swipe({ className, children }: Props) {
	return <div className={className}>{children}</div>;
}

export default Swipe;
