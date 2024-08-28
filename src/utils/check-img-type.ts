/**
 * Asynchronous function to check the type of an image from a given source URL.
 * @param {Object} src - The URL source of the image to check.
 * @returns {string} The content type of the image fetched from the source URL.
 */

import React, { useState, useEffect } from "react";

export default function checkImageType({ src }) {
	const [imageType, setImageType] = useState(null);

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
