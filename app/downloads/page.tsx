import React from "react";
import { downloadedItems } from "@/contents/downloadedItems";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayIcon } from "@heroicons/react/24/outline";

const Downloads = () => {
  return (
    <div className="container">
      <div className="mt-25 mb-5 md:ml-65 px-2 items-center">
        <div className="flex justify-between">
          <h1 className="text-xl md:text-3xl font-bold mb-4">Downloads</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {downloadedItems.map((item) => (
            <Card className="items-center justify-center" key={item.id}>
              <CardContent>
                <img
                  src={item.image}
                  alt={item.title}
                  className="mb-2 aspect-video rounded-lg object-cover"
                />
                <div className="flex flex-wrap items-center md:justify-between p-2 gap-2 ">
                  <h2 className="text-xs md:text-base font-semibold">
                    {item.title}
                  </h2>
                  <Button
                    variant="outline"
                    className="font-semibold text-xs md:text-base"
                  >
                    <PlayIcon />
                    Play
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Downloads;
