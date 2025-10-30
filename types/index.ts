import { ComponentType, SVGProps } from "react";

export interface MenuItem {
  href: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface FeaturedItems {
  id: number;
  image: string;
  title: string;
  description: string;
  tags: string[];
}

export interface OtherGamesItems {
  id: number;
  image: string;
  title: string;
  description: string;
  tags: string[];
}

export interface AllItems {
  id: number;
  image: string;
  title: string;
  description: string;
  tags: string[];
}

export interface DownloadedItems {
  id: number;
  image: string;
  title: string;
  description: string;
  tags: string[];
}
