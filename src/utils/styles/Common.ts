// Common Size
// Extra Small: xs
// Small: sm
// Medium: md 
// Large: lg 
// Extra Large: xl
// Double Extra Large: xxl
// Triple Extra Large: xxxl
// Quadra Extra Large: o-xxxl
// Penta Extra Large: xo-xxxl
export type ButtonSize = "tiny" | "small" | "medium" | "large" | "large-x" | "large-xx" | "large-xxx";
export type CommonSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" | "o-xxxl" | "xo-xxxl";
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

// Heading Size
export type HeadingSize = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

// Media type
export type MediaType = "image" | "video" | "audio";

// Content Layout
export type ObjectLayout = "horizontal" | "vertical" | "variant";

// Profile hide
export type ProfileHidden = "name" | "nickName" | "avatar" | "info";

// Ratio
export type Ratio = "1x1" | "4x3" | "16x9";
