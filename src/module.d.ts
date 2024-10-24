declare module "@/constants" {
  export const ratioMapping: { [key: string]: string };
  export const sizeMapping: { [key: string]: string };
}

// src/constants.d.ts
declare module "@/types" {
  export { compBaseProps, Product } from './types/interface';
  export {
    ContentDirection,
    ContainerLayout,
    DisplayZone,
    GradientLinearDir,
    GradientLinearDirDiagonal,
    GradientLinearDirAngles,
    RadialGradientShapeSize,
    GradientType,
    GridType,
    HeadingSize,
    List,
    OrderedListType,
    MediaType,
    MessageType,
    ObjectLayout,
    ProfileHidden,
    Ratio,
    Size,
    SizePlus,
    Status,
    UnorderedListMarker
  } from './types/type';
}

declare module "@/utils" {
  export { buildImageUrl } from './utils';
}

