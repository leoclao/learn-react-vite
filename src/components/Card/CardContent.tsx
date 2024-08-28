// CardContent
import type React from "react";

interface Props {
	className?: string;
	children: React.ReactNode;
}

function CardContent({ className, children }: Props) {
	return <div className={className}>{children}</div>;
}

export default CardContent;
