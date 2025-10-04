import React from "react";
import {
  BellAlertIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Form from "next/form";

const Header = () => {
  return (
    <div className="container max-w-5xl flex justify-between items-center py-4 px-3">
      <div className="flex items-center space-x-4 bg-slate-100 dark:bg-gray-800 p-2 rounded-lg">
        <Form
          action="/search"
          className="hidden 2xl:flex items-center max-w-lg"
        >
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="bg-transparent focus:outline-none my-auto w-80"
          />
          <button type="submit" className="ml-2">
            <MagnifyingGlassIcon className="h-6 w-6" />
          </button>
        </Form>
      </div>
      <div className="flex items-center space-x-7">
        <button>
          <EnvelopeIcon className="h-6 w-6" />
        </button>
        <button>
          <BellAlertIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Header;
