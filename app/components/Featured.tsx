import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { featuredItems } from "@/contents/featuredItems";
import Autoplay from "embla-carousel-autoplay";

const Featured = () => {
  return (
    <div className="container">
      <div className="mt-25 mb-5 md:ml-65 px-2 items-center">
        <div className="container max-w-5xl mb-4 px-0 md:px-4">
          <h1 className="text-lg md:text-xl font-bold my-4 text-center md:text-left">
            Featured and Recommended Games
          </h1>
        </div>
        {/* Desktop View */}
        <div className="items-center justify-center hidden md:flex">
          <Carousel
            orientation="horizontal"
            className="w-full max-w-5xl h-120"
            plugins={[
              Autoplay({
                delay: 3500,
              }),
            ]}
          >
            <CarouselContent>
              {featuredItems.map((item, index) => (
                <CarouselItem key={index}>
                  <div>
                    <Card>
                      <CardContent className="flex flex-row items-center justify-center p-6 h-110">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="p-2 rounded-xl object-cover"
                        />
                        <div className="grid grid-cols-1 gap-3 p-4">
                          <h2 className="text-xl font-semibold mb-1">
                            {item.title}
                          </h2>
                          <p className="text-gray-600 dark:text-gray-400 text-justify">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-slate-200 dark:bg-gray-700 rounded-full text-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Mobile View */}
        <div className="flex items-center justify-center md:hidden">
          <Carousel
            className="w-full max-w-xs h-100"
            orientation="horizontal"
            plugins={[
              Autoplay({
                delay: 3500,
              }),
            ]}
          >
            <CarouselContent>
              {featuredItems.map((item, index) => (
                <CarouselItem key={index}>
                  <div>
                    <Card>
                      <CardContent className="flex flex-col items-center p-2 w-full h-93">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="mb-2 rounded-xl object-cover w-full max-h-55"
                        />
                        <div className="w-full px-2">
                          <h2 className="text-base font-semibold mb-1 text-center">
                            {item.title}
                          </h2>
                          <p className="text-xs text-gray-600 dark:text-gray-400 text-justify line-clamp-6">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 bg-slate-200 dark:bg-gray-700 rounded-full text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Featured;
