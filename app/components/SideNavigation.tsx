"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { menuItemsTop } from "@/contents/sidenavmenutop";
import { menuItemsBottom } from "@/contents/sidenavmenubottom";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

const SideNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 h-full w-23 md:w-65 bg-slate-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 rounded-lg">
      <div className="container pt-7">
        <div className="hidden md:flex flex-col items-center mb-5">
          <Link
            href="/"
            className="flex text-center text-xl items-center font-bold mb-7"
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

          {/* Desktop Menu */}
          <div className="flex flex-col gap-30 h-full w-full">
            <div className="flex flex-col mt-4 gap-6">
              {menuItemsTop.map((itemTop) => {
                const isActive = pathname === itemTop.href;
                return (
                  <Link key={itemTop.href} href={itemTop.href}>
                    <div
                      className={`flex items-center p-2 text-lg font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${
                        isActive ? "text-primary" : ""
                      }`}
                    >
                      <Image
                        src={itemTop.image}
                        alt={itemTop.label}
                        width={25}
                        height={25}
                      />
                      <span className="ml-3">{itemTop.label}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-col mt-auto gap-6">
              {menuItemsBottom.map((itemBottom) => (
                <Link key={itemBottom.href} href={itemBottom.href}>
                  <div className="flex items-center p-2 text-lg font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <Image
                      src={itemBottom.image}
                      alt={itemBottom.label}
                      width={25}
                      height={25}
                    />
                    <span className="ml-3">{itemBottom.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div>
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden  rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobhile Menu */}
      </div>
    </nav>
  );
};

export default SideNavigation;
