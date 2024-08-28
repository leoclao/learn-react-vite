/* The `export const sizeMapping` object in the TypeScript code snippet is defining a mapping between
size keys and their corresponding values. Each key represents a size category (e.g., tiny, small,
medium, large) and each value represents the corresponding size label (e.g., Tiny, Small, Medium,
Large). The keys with special characters like "large-x", "large-xx", and "large-xxx" are also
included in the mapping. */
export const sizeMapping = {
	tiny: "Tiny",
	small: "Small",
	medium: "Medium",
	large: "Large",
	"large-x": "LargeX",
	"large-xx": "Large2X",
	"large-xxx": "Large3X",
};

/* The `export const statusMapping` object in the TypeScript code snippet is defining a mapping between
status keys and their corresponding values. Each key represents a status category (e.g., warning,
error, info) and each value represents the corresponding status label (e.g., Warning, Error, Info).
This mapping allows you to easily reference and retrieve the status labels based on their keys in
your TypeScript code. */
export const statusMapping = {
	warning: "Warning",
	error: "Error",
	info: "Info",
};
