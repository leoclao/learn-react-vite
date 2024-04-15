export function isStringOrStringArray(
	param: string | string[],
): param is string | string[] {
	return (
		typeof param === "string" ||
		(Array.isArray(param) && param.every((item) => typeof item === "string"))
	);
}
