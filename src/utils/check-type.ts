/**
 * The function `isObject` checks if the input value is an object in TypeScript.
 * 
 * @param {any} value - The `value` parameter can be any type of value.
 * @returns {boolean} The `isObject` function returns a boolean value indicating whether the `value` input is an object or not.
 */
export function isObject(value) {
	return value !== null && typeof value === "object";
}

/**
 * The function `isStringOrStringArray` checks if the input parameter is a string or an array of strings in TypeScript.
 * 
 * @param {string | string[]} param - The `param` parameter can be either a string or an array of strings.
 * @returns {boolean} The `isStringOrStringArray` function returns a boolean value indicating whether the `param` input is a string or an array of strings.
 */
export function isStringOrStringArray(
	param: string | string[],
): param is string | string[] {
	return (
		typeof param === "string" ||
		(Array.isArray(param) && param.every((item) => typeof item === "string"))
	);
}
