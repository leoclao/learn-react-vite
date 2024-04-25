import { Avatar, Card, Grid } from "@/components";
import styles from "@/styles/modules/profile.module.scss";
import type Hide from "@/utils";
import clsx from "clsx";
import { useId, useState } from "react";
import Info from "./Info";

type IsShowFull = Hide extends { [K in keyof HTMLVideoElement]: false } ? true : false;

interface Props {
	className?: string;
	profileData?: object;
	showInfo?: boolean;
}

function Profile({ className, profileData, showInfo = false }: Props) {
	const [filterText, setFilterText] = useState("");
	// const [inStockOnly, setInStockOnly] = useState(false);

	return (
		<Card className={clsx(styles.filterable)}>
			{profileData.avatar && (
				<Avatar
					src={profileData.avatar}
					desc={profileData.fullName || profileData.nickName}
					size={profileData.avatarSize}
				/>
			)}
			{profileData.fullName && <label>{profileData.fullName}</label>}
			{profileData.nickName && <label>{profileData.nickName}</label>}
			{showInfo && profileData.info && <Info info={profileData.info} />}
		</Card>
	);
}

export default Profile;
