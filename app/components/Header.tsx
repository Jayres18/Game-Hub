import React from "react";
import {
  BellAlertIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Form from "next/form";

const Header = () => {
  return (
    <div className="flex ml-18 md:ml-65  gap-5 md:justify-between items-center bg-slate-50 py-4 px-5 md:px-15">
      <div className="flex items-center space-x-4 bg-slate-100 dark:bg-gray-800 p-2 rounded-lg">
        <Form action="/search" className="flex max-w-3xs md:max-w-md">
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="bg-transparent focus:outline-none my-auto w-40 md:w-80"
          />
          <button type="submit" className="ml-2">
            <MagnifyingGlassIcon className="h-6 w-6" />
          </button>
        </Form>
      </div>
      <div className="flex items-center space-x-5 md:space-x-7">
        <button className="rounded-full bg-slate-100 md:p-2 hover:bg-slate-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
          <EnvelopeIcon className="h-6 w-6" />
        </button>
        <button className="rounded-full bg-slate-100 md:p-2 hover:bg-slate-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
          <BellAlertIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Header;
