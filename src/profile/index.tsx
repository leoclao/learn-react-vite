import clsx from "clsx";
import { useState } from "react";
import Avatar from "../components/avatar";
import styles from "./../styles/modules/profile.module.scss";

interface Props {
	className?: string;
	avatarClassName?: string;
	avatarImgClassName?: string;
	desc: string;
}

function Profile({ className, avatarClassName, avatarImgClassName }: Props) {
	const [filterText, setFilterText] = useState("");
	const [inStockOnly, setInStockOnly] = useState(false);
	return (
		<div className={clsx(styles.filterable)}>
			<Avatar />
		</div>
	);
}

export default Profile;
