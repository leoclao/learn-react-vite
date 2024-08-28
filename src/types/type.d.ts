// Content Direction
export type ContentDirection = "ltr" | "rtl" | "auto";
// Container Layout
export type ContainerLayout = "fluid" | "swipe" | "default";
// Display Zone
export type DisplayZone =
	| "top"
	| "right"
	| "bottom"
	| "left"
	| "top-right"
	| "bottom-right"
	| "bottom-left"
	| "top-left"
	| "center";

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

// Grid TypeType
export type GridType = "default" | "masonry";

// Heading Size
export type HeadingSize = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

// List type
export type List = "unordered" | "ordered" | "description";
export type UnorderedListMarker = "none" | "disc" | "circle" | "square";
export type OrderedListType = "1" | "A" | "a" | "I" | "i";

// Media type
export type MediaType = "image" | "video" | "audio";

// Message types
export type MessageType = "info" | "warning" | "error";

// Content Layout
export type ObjectLayout = "horizontal" | "vertical" | "variant";

// Profile hide
export type ProfileHidden = "name" | "nickName" | "avatar" | "info";

// Ratio
export type Ratio =
	| "1x1"
	| "1x2"
	| "3x2"
	| "3x4"
	| "4x3"
	| "9x16"
	| "16x9"
	| "16x10";

// Size
export type Size =
	| "tiny"
	| "small"
	| "medium"
	| "large"
	| "large-x"
	| "large-xx"
	| "large-xxx";
// Size plus
export type SizePlus =
	| "xs"
	| "sm"
	| "md"
	| "lg"
	| "xl"
	| "xxl"
	| "xxxl"
	| "o-xxxl"
	| "xo-xxxl";
// Status
export type Status =
	| { status: "idle" }
	| { status: "loading" }
	| { status: "success"; data: DataType }
	| { status: "error"; error: "Error" };
