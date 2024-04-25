interface Props {
	className: string;
	children: React.ReactElement;
}

function Fluid({ className, children }: Props) {
	return <div className={className}>{children}</div>;
}

export default Fluid;
