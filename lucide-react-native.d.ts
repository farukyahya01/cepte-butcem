declare module "lucide-react-native" {
  import type { ComponentType } from "react";
  import type { SvgProps } from "react-native-svg";

  export interface IconProps extends SvgProps {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
  }

  type Icon = ComponentType<IconProps>;

  export const HomeIcon: Icon;
  export const ListIcon: Icon;
  export const UserIcon: Icon;

  const createLucideIcon: (name: string, iconNode: unknown[]) => Icon;
  export default createLucideIcon;
}
