import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { otherGamesItems } from "@/contents/othergamesItems";

const OtherGames = () => {
  return (
    <div className="container my-6 md:ml-65">
      <div className="container max-w-5xl mb-4">
        <h2 className="text-lg md:text-xl font-bold my-4">
          Other Notable Games
        </h2>
      </div>

      {/* Desktop View */}
      <div className="items-center justify-center hidden md:flex">
        <Carousel orientation="horizontal" className="w-full max-w-5xl h-70">
          <CarouselContent>
            {otherGamesItems.map((item, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <div>
                  <Card>
                    <CardContent className="flex flex-row items-center justify-center p-6 h-60">
                      <div className="grid grid-cols-1 gap-2 p-4 group">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="p-2 rounded-xl object-cover group-hover:hidden"
                        />
                        <h2 className="text-lg font-semibold mb-2 text-center">
                          {item.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-justify text-xs hidden group-hover:block ">
                          {item.description}
                        </p>
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
      <div className="flex items-center justify-center md:hidden ">
        <Carousel orientation="horizontal" className="w-full max-w-xs h-64">
          <CarouselContent>
            {otherGamesItems.map((item, index) => (
              <CarouselItem key={index} className="basis-full">
                <div>
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-2 w-full h-70">
                      <div className="group w-full flex flex-col items-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="mb-2 rounded-xl object-cover max-w-50 max-h-50 "
                        />
                        <h2 className="text-base font-semibold mb-1 text-center">
                          {item.title}
                        </h2>
                        <p className="text-xs text-gray-600 dark:text-gray-400 text-justify px-2 line-clamp-5">
                          {item.description}
                        </p>
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
  );
};

export default OtherGames;
