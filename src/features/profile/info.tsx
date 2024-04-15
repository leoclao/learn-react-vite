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
