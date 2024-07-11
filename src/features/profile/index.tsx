import { Avatar, Card, Grid } from "@/components";
import styles from "@/styles/modules/profile.module.scss";
import type Hide from "@/utils";
import clsx from "clsx";
import { useId, useState } from "react";
import Info from "./info";

type IsShowFull = Hide extends { [K in keyof HTMLVideoElement]: false } ? true : false;

interface Props {
	className?: string;
	profileData?: object;
	showInfo?: boolean;
}

/**
 * Profile component to display user profile information.
 * 
 * @param {string} className - Additional CSS class for styling.
 * @param {object} profileData - Object containing user profile data.
 * @param {boolean} showInfo - Flag to determine if additional info should be displayed.
 * @returns {JSX.Element} Rendered Profile component.
 */
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
