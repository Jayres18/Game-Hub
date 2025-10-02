"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/category", label: "Category" },
  { href: "/library", label: "Library" },
  { href: "/community", label: "Community" },
  { href: "/friends", label: "Friends" },
  { href: "/wishlists", label: "Wishlists" },
  { href: "/downloads", label: "Downloads" },
];

const SideNavigation = () => {
  return (
    <nav className="fixed top-0 left-0 h-full w-65 bg-slate-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 rounded-lg">
      <div className="container pt-7">
        <div className="flex flex-col items-center mb-5">
          <Link
            href="/"
            className="flex text-center text-xl items-center font-bold mb-4"
          >
            <Image
              className="rounded-full mx-auto border-1 border-slate-200 dark:border-slate-600 mr-2"
              src="/GamehubLogo.jpg"
              alt="Game Hub Logo"
              width={50}
              height={50}
            />
            GameHub&trade;
          </Link>
          <div className="flex flex-col mt-4 gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg hover:bg-slate-200 dark:hover:bg-gray-600 p-2 rounded-lg w-full text-center"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideNavigation;
