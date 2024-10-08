import { Avatar, Card } from "@/components";
import styles from "@/styles/modules/profile.module.scss";
import type Hide from "@/utils";
import clsx from "clsx";
import { useId, useState } from "react";
import Info from "./info";

interface Props {
	className?: string;
	profileData?: object;
	showInfo?: boolean;
}

function Profile({ className, profileData, showInfo = false }: Props) {
	const [filterText, setFilterText] = useState("");

	return (
		<Card className={clsx(styles.filterable)}>
			{profileData.avatar && (
				<Avatar
					src={profileData.avatar}
					alt={profileData.fullName || profileData.nickName}
					title={profileData.fullName || profileData.nickName}
					size={profileData.avatarSize}
					ratio={profileData.avatarRatio}
					ariaDescribedby={profileData.fullName || profileData.nickName}
				/>
			)}
			{profileData.fullName && <label>{profileData.fullName}</label>}
			{profileData.nickName && <label>{profileData.nickName}</label>}
			{showInfo && profileData.info && <Info info={profileData.info} />}
		</Card>
	);
}

export default Profile;
