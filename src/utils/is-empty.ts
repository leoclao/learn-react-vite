/**
 * Checks if a given value is empty.
 * @param {*} value - The value to check for emptiness.
 * @returns {boolean} Returns true if the value is empty, false otherwise.
 */
export default function isEmpty(value) {
	if (value === null || value === undefined) {
		return true;
	}

	if (typeof value === "string" && value.trim().length === 0) {
		return true;
	}

	if (Array.isArray(value) && value.length === 0) {
		return true;
	}

	if (typeof value === "object" && Object.keys(value).length === 0) {
		return true;
	}

	return false;
}
