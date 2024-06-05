// Gradient Linear direction
// Default: to top, to right, to bottom, to left
// Diagonal: to top right, to bottom right, to bottom left, to top left
// Angles: angle 0, angle 45, angle 90, angle 135, angle 180, angle 225, angle 270, angle 315
// Angle value: "angle" | number
export type GradientLinearDir = "to top" | "to right" | "to bottom" | "to left";
export type GradientLinearDirDiagonal =
	| "to top right"
	| "to bottom right"
	| "to bottom left"
	| "to top left";
export type GradientLinearDirAngles = number;
// Radial Gradients:
// Shape: circle, ellipse[default]
// Size: closest-side, farthest-side, closest-corner, farthest-corner
export type RadialGradientShapeSize =
	| "circle"
	| "ellipse"
	| "closest-side"
	| "farthest-side"
	| "closest-corner"
	| "farthest-corner";

// Gradient types: Linear, Radial, Conic
export type GradientType = "linear" | "radial" | "conic";
