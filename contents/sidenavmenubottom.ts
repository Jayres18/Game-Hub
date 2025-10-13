import { MenuItem } from "@/types";
import {
  Cog6ToothIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

export const menuItemsBottom: MenuItem[] = [
  {
    href: "/settings",
    label: "Settings",
    icon: Cog6ToothIcon,
  },
  {
    href: "/help",
    label: "Help",
    icon: InformationCircleIcon,
  },
];
