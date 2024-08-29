import type React from "react";
import type { ReactNode } from "react";

interface ListItemProps {
	id?: string;
	className?: string;
	children: ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ className, id, children }) => {
	return (
		<li key={id} id={id} className={className}>
			{children}
		</li>
	);
}

export default ListItem;
