interface Props {
	className: string;
	children: React.ReactElement;
}

/**
 * Renders a fluid container with the specified className and children elements.
 * 
 * @param className - The CSS class name for the container.
 * @param children - The child elements to be rendered inside the container.
 * @returns A React element representing the fluid container.
 */
function Fluid({ className, children }: Props) {
	return <div className={className}>{children}</div>;
}

export default Fluid;
