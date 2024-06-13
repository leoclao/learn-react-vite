import clsx from "clsx";

type InfoItem = {
	id: number;
	label: string;
	value: string;
	isPrimary: string;
};

interface Props {
	className?: string;
	info?: InfoItem[] | null;
}

/**
 * Renders a list of information items.
 * 
 * @param className - Additional CSS class for styling.
 * @param info - An array of information items to display.
 * @returns JSX element displaying the list of information items.
 */
export default function Info({ className, info = null }: Props) {
	if (!info) {
		return null;
	}
	return (
		<div className={"info"}>
			{info.map((item) => (
				<div key={item.id}>
					{item.label}: {item.value} {item.isPrimary && "(primary)"}
				</div>
			))}
		</div>
	);
}
