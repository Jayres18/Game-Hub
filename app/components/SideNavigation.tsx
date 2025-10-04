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
      className={`fixed top-0 left-0 h-full ${
        isMobileMenuOpen ? "w-50" : "w-23"
      } md:w-65 bg-slate-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 rounded-lg transition-all duration-300 ease-in-out`}
    >
      <div className="container pt-2">
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
          <div className="flex flex-col gap-20 h-full w-full">
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
            className="md:hidden rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen ? (
            <div className="md:hidden flex flex-col gap-5 h-full w-full transition-all duration-300 ease-in-out">
              <div className="flex flex-col mt-4 gap-6">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex text-center text-lg items-center font-bold mb-1"
                >
                  <Image
                    className="rounded-base mx-auto border-1 border-slate-200 dark:border-slate-600 mr-2"
                    src="/GameHub.svg"
                    alt="Game Hub Logo"
                    width={30}
                    height={30}
                  />
                  GameHub&trade;
                </Link>
                {menuItemsTop.map((itemTop) => {
                  const isActive = pathname === itemTop.href;
                  return (
                    <Link
                      key={itemTop.href}
                      href={itemTop.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="ml-2"
                    >
                      <div
                        className={`flex items-center p-1 text-base font-light rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${
                          isActive ? "text-primary" : ""
                        }`}
                      >
                        <Image
                          src={itemTop.image}
                          alt={itemTop.label}
                          width={20}
                          height={20}
                        />
                        <span className="ml-3 mt-1">{itemTop.label}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="flex flex-col mt-18 gap-10">
                {menuItemsBottom.map((itemBottom) => (
                  <Link
                    key={itemBottom.href}
                    href={itemBottom.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="ml-2"
                  >
                    <div className="flex items-center p-1 text-lg font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                      <Image
                        src={itemBottom.image}
                        alt={itemBottom.label}
                        width={20}
                        height={20}
                      />
                      <span className="ml-3 mt-1">{itemBottom.label}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="md:hidden flex flex-col items-center gap-8 h-full w-full pt-4 transition-all duration-300 ease-in-out">
              {/* Icon-only menu when mobile menu is closed */}
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex text-center text-lg items-center font-bold mb-1"
              >
                <Image
                  className="rounded-base mx-auto border-1 border-slate-200 dark:border-slate-600 mr-2"
                  src="/GameHub.svg"
                  alt="Game Hub Logo"
                  width={80}
                  height={80}
                />
              </Link>
              <div className="flex flex-col mt-4 gap-8">
                {menuItemsTop.map((itemTop) => (
                  <Link key={itemTop.href} href={itemTop.href} className="mb-2">
                    <Image
                      src={itemTop.image}
                      alt={itemTop.label}
                      width={20}
                      height={20}
                      className="mx-auto"
                    />
                  </Link>
                ))}
              </div>
              <div className="flex flex-col mt-auto pt-8 gap-8">
                {menuItemsBottom.map((itemBottom) => (
                  <Link
                    key={itemBottom.href}
                    href={itemBottom.href}
                    className="mb-2"
                  >
                    <Image
                      src={itemBottom.image}
                      alt={itemBottom.label}
                      width={20}
                      height={20}
                      className="mx-auto"
                    />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Mobhile Menu */}
      </div>
    </nav>
  );
};

export default SideNavigation;
