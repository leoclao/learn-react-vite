import clsx from "clsx";
import { useId, useState } from "react";
import Avatar from "../../components/avatar";
import Grid from "../../components/grid";
import styles from "../styles/modules/profile.module.scss";
import Info from "./info";

type Hide = {
	isHideName: boolean;
	isHideNickName: boolean;
	isHideAvatar: boolean;
	isHideInfo: boolean;
};

interface Props {
	className?: string;
	profileData?: object;
	isShowFull: boolean;
}

function Profile({ className, profileData, isShowFull = false }: Props) {
	const [filterText, setFilterText] = useState("");
	const [inStockOnly, setInStockOnly] = useState(false);

	return (
		<div className={clsx(styles.filterable)}>
			{profileData.avatar && (
				<Avatar
					src={profileData.avatar}
					desc={profileData.fullName || profileData.nickName}
					size={profileData.avatarSize}
				/>
			)}
			{profileData.fullName && <label>{profileData.fullName}</label>}
			{profileData.nickName && <label>{profileData.nickName}</label>}
			{isShowFull && profileData.info && <Info info={profileData.info} />}
		</div>
	);
}

export default Profile;
