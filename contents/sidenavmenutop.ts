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
    href: "/library",
    label: "Library",
    icon: BookOpenIcon,
  },
  {
    href: "/community",
    label: "Community",
    icon: UserGroupIcon,
  },
  {
    href: "/friends",
    label: "Friends",
    icon: UserIcon,
  },
  {
    href: "/downloads",
    label: "Downloads",
    icon: ArrowDownTrayIcon,
  },
];
