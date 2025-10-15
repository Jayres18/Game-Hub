"use client";

import React from "react";
import {
  BellAlertIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import Form from "next/form";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed top-0 w-full flex gap-10 ml-4 justify-center items-center bg-slate-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-600 py-4 px-2 md:px-15 z-49">
      <div className="flex items-center space-x-4 bg-slate-100 dark:bg-gray-700 p-2 rounded-lg">
        <Form action="/search" className="flex max-w-3xs md:max-w-md">
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="bg-transparent focus:outline-none my-auto w-30 md:w-80"
          />
          <button type="submit" className="ml-2">
            <MagnifyingGlassIcon className="h-6 w-6" />
          </button>
        </Form>
      </div>
      <div className="flex items-center md:space-x-7">
        <button className="hidden md:flex rounded-full bg-slate-100 md:p-2 hover:bg-slate-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
          <EnvelopeIcon className="h-6 w-6" />
        </button>
        <button className="hidden md:flex rounded-full bg-slate-100 md:p-2 hover:bg-slate-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
          <BellAlertIcon className="h-6 w-6" />
        </button>
        <button
          className="rounded-full bg-slate-100 md:p-2 hover:bg-slate-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <SunIcon className="h-6 w-6 " />
          ) : (
            <MoonIcon className="h-6 w-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
