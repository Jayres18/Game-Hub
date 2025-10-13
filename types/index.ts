import { ComponentType, SVGProps } from "react";

export interface MenuItem {
  href: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}
