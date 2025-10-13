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

const Featured = () => {
  return (
    <div className="container mt-4 md:ml-65">
      <div className="container max-w-5xl mb-4">
        <h1 className="text-xl font-bold my-4">
          Featured and Recommended Games
        </h1>
      </div>
      <div className="items-center justify-center flex">
        <Carousel
          orientation="horizontal"
          className="w-full max-w-5xl h-120" // Wider and shorter
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
                      <div className="grid grid-cols-1 gap-2 p-4">
                        <h2 className="text-xl font-semibold mb-2">
                          {item.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
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
    </div>
  );
};

export default Featured;
