import Home from "@/app/page";
import { MenuItem } from "@/types";
import {
  HomeIcon,
  ListBulletIcon,
  BookOpenIcon,
  UserGroupIcon,
  UserIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

export const menuItemsTop: MenuItem[] = [
  {
    href: "/",
    label: "Home",
    icon: HomeIcon,
  },
  {
    href: "/category",
    label: "Category",
    icon: ListBulletIcon,
  },
  {
    href: "/downloads",
    label: "Downloads",
    icon: ArrowDownTrayIcon,
  },
];
