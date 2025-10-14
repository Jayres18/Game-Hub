"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { menuItemsTop } from "@/contents/sidenavmenutop";
import { menuItemsBottom } from "@/contents/sidenavmenubottom";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

export const SideNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 h-18 md:h-full w-18 md:w-65 bg-slate-50 dark:bg-gray-800 border-b border-r border-gray-200 dark:border-gray-600 p-4 md:rounded-b-md transition-all duration-300 ease-in-out z-50`}
    >
      <div className="md:container pt-2 max-h-xl flex flex-col justify-between h-full">
        <div className="hidden md:flex flex-col items-center mb-5">
          <Link
            href="/"
            className="flex text-center text-xl items-center font-bold mb-7 pt-5"
          >
            <Image
              className="rounded-base mx-auto border-1 border-slate-200 dark:border-slate-600 mr-2"
              src="/GameHub.svg"
              alt="Game Hub Logo"
              width={50}
              height={50}
            />
            GameHub&trade;
          </Link>

          {/* Desktop Menu */}
          <div className="flex flex-col gap-10 h-full w-full">
            <div className="flex flex-col max-h-2/3 gap-4">
              {menuItemsTop.map((itemTop) => {
                const isActive = pathname === itemTop.href;
                return (
                  <Link key={itemTop.href} href={itemTop.href}>
                    <div
                      className={`flex items-center p-2 text-lg font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${
                        isActive ? "text-primary" : ""
                      }`}
                    >
                      {/* Icon before label */}
                      <itemTop.icon className="h-6 w-6 mr-2" />
                      <span className="ml-3">{itemTop.label}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-col mt-auto gap-4">
              {menuItemsBottom.map((itemBottom) => (
                <Link key={itemBottom.href} href={itemBottom.href}>
                  <div className="flex items-center p-2 text-lg font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    {/* Icon before label */}
                    <itemBottom.icon className="h-6 w-6 mr-2" />
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
            className="md:hidden rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 pl-2.5 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
        {/* Mobile SideNavigation Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-slate-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 flex flex-col h-full w-64">
            <div className="flex flex-col items-center mt-6 mb-5">
              <Link
                href="/"
                className="flex text-center text-xl items-center font-bold mb-7 pt-5"
                onClick={toggleMobileMenu}
              >
                <Image
                  className="rounded-base mx-auto border-1 border-slate-200 dark:border-slate-600 mr-2"
                  src="/GameHub.svg"
                  alt="Game Hub Logo"
                  width={50}
                  height={50}
                />
                GameHub&trade;
              </Link>
              <div className="flex flex-col gap-10 h-full w-full">
                <div className="flex flex-col max-h-2/3 gap-4">
                  {menuItemsTop.map((itemTop) => {
                    const isActive = pathname === itemTop.href;
                    return (
                      <Link
                        key={itemTop.href}
                        href={itemTop.href}
                        onClick={toggleMobileMenu}
                      >
                        <div
                          className={`flex items-center p-2 text-lg font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${
                            isActive ? "text-primary" : ""
                          }`}
                        >
                          {/* Icon before label */}
                          <itemTop.icon className="h-6 w-6 mr-2" />
                          <span className="ml-3">{itemTop.label}</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="flex flex-col mt-auto gap-4">
                  {menuItemsBottom.map((itemBottom) => (
                    <Link
                      key={itemBottom.href}
                      href={itemBottom.href}
                      onClick={toggleMobileMenu}
                    >
                      <div className="flex items-center p-2 text-lg font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                        {/* Icon before label */}
                        <itemBottom.icon className="h-6 w-6 mr-2" />
                        <span className="ml-3">{itemBottom.label}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="absolute top-4 right-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 p-2 transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default SideNavigation;
