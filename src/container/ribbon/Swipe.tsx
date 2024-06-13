interface Props {
	className: string;
	children: React.ReactElement;
}

/**
 * Swipe component
 * 
 * @param className - The CSS class name for the component
 * @param children - The child elements to be rendered inside the component
 * @returns A div element with the specified class name and children elements
 */
function Swipe({ className, children }: Props) {
	return <div className={className}>{children}</div>;
}

export default Swipe;
