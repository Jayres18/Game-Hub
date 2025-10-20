"use client";

import React, { useMemo, useState } from "react";
import { allItems } from "@/contents/AllItems";
import { Button } from "@/components/ui/button";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

const Category = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // NEW: state that holds the currently displayed list (initially all items)
  const [filteredItems, setFilteredItems] = useState(allItems);

  // Collect unique tags from the contents file (no repeats)
  const uniqueTags = useMemo(() => {
    const categories = new Set<string>();
    allItems?.forEach((items) => {
      items.tags?.forEach((listOfTags: string) => categories.add(listOfTags));
    });
    return Array.from(categories);
  }, []);

  const toggleTag = (tag: string, checked: boolean) => {
    setSelectedTags((prev) =>
      checked ? [...prev, tag] : prev.filter((t) => t !== tag)
    );
  };

  const toggleFilters = () => {
    setShowFilters((v) => !v);
  };

  // NEW: apply filters based on checked tags
  const applyFilters = () => {
    if (selectedTags.length === 0) {
      setFilteredItems(allItems);
      return;
    }

    const updated = allItems.filter((item) =>
      Array.isArray(item.tags)
        ? item.tags.some((tag: string) => selectedTags.includes(tag))
        : false
    );

    setFilteredItems(updated);
  };

  return (
    <div className="container">
      <div className="mt-25 mb-5 md:ml-65 px-2 items-center">
        <div className="flex justify-between">
          <h1 className="text-xl md:text-3xl font-bold">Game Categories</h1>
          <Button
            variant="outline"
            onClick={toggleFilters}
            aria-pressed={showFilters}
            aria-expanded={showFilters}
          >
            <AdjustmentsHorizontalIcon className="w-5 h-5 mr-2" />
            Filter
          </Button>
        </div>

        {/* Filter panel - initially hidden, toggled by the Filter button */}
        <div
          className={`bg-slate-100 dark:bg-gray-800 border border-slate-200 max-w-7xl mt-4 p-4 rounded-md transition-all duration-300 overflow-hidden ${
            showFilters
              ? "max-h-[1000px] opacity-100 mb-10"
              : "max-h-0 opacity-0 p-0"
          }`}
        >
          <fieldset
            className={`grid grid-cols-2 md:grid-cols-5 gap-3 transition-opacity duration-300 ${
              showFilters ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {uniqueTags.length === 0 ? (
              <p className="col-span-full text-sm text-gray-500">
                No tags available.
              </p>
            ) : (
              uniqueTags.map((tag) => (
                <label
                  key={tag}
                  className="inline-flex items-center space-x-2 rounded-md p-2 hover:bg-slate-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={tag}
                    checked={selectedTags.includes(tag)}
                    onChange={(e) => toggleTag(tag, e.target.checked)}
                    className="h-4 w-4"
                  />
                  <span className="text-xs md:text-sm">{tag}</span>
                </label>
              ))
            )}
          </fieldset>

          {/* Submit applies the filter */}
          <div className="flex items-center justify-center mt-4">
            <Button
              variant="outline"
              size="lg"
              aria-label="Submit"
              onClick={applyFilters}
            >
              Submit
            </Button>
          </div>
        </div>

        {/* List of Games Section */}
        <div>
          <h2 className="text-lg md:text-2xl font-bold mb-2 md:mb-5">
            List of Games
          </h2>

          {/* 3-column grid (responsive) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border p-5 rounded-lg">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="rounded-lg shadow-lg dark:shadow-slate-700 p-4 duration-300 hover:scale-[1.02] transition-transform group"
              >
                <div className="flex flex-col items-center gap-2 p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="p-2 rounded-xl object-cover w-full h-40 group-hover:hidden"
                  />
                  <h2 className="text-lg font-semibold mb-2 text-center">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-justify text-xs hidden group-hover:block">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
