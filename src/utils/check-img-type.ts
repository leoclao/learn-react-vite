import React, { useState, useEffect } from "react";

export default function checkImageType({ src }: { src: string}) {
	const [imageType, setImageType] = useState<string | null>(null);

	useEffect(() => {
		const checkImageType = async () => {
			try {
				const response = await fetch(src);
				const contentType = response.headers.get("content-type");
				setImageType(contentType);
			} catch (e) {
				console.error("Error fetching the image", e);
			}
		};
		checkImageType();
	}, [src]);

	return imageType;
}
