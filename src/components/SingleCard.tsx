/* eslint-disable react/no-unescaped-entities */
import { Card, CardHeader, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";

export default function SingleCard() {
  return (
    <div className="mx-auto px-4 sm:px-8 lg:px-16 py-12">
      {/* Section Title */}
      <div className="text-center mb-8">
        {/* <h2 className="text-4xl sm:text-5xl font-semibold">
          Featured Skate Gear
        </h2> */}
      </div>

      {/* Card Section */}
      <div className="flex justify-center items-center">
        <Card className="w-full h-full sm:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto relative bg-gray-800 text-white">
          <CardHeader className="absolute z-10 top-4 left-4 sm:left-6 flex flex-col items-start">
            <p className="text-xs sm:text-sm uppercase font-semibold bg-black/70 p-1 rounded-md">
              Featured
            </p>
            <h4 className="text-lg sm:text-xl font-bold bg-black/70 p-2 rounded-md mt-2">
              LIL' FLATTIES
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Flatties Decal"
            className="z-0 w-full h-full object-cover rounded-md"
            src="/pictures/flatties-decal.jpg"
          />
          <CardFooter className="absolute bg-black/70 bottom-0 left-0 right-0 z-10 p-4 flex flex-col justify-between">
            <div className="flex-grow">
              <p className="text-sm sm:text-base">
                Lil' Flatties – skate wheels inspired by the enduring look and
                feel of years of worn-in rides.
              </p>
            </div>
            <Button
              className="mt-4 mx-auto sm:mx-0 bg-gray-700 text-white"
              radius="sm"
              size="md"
            >
              Learn More
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Additional Content Below the Card */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl sm:text-3xl font-semibold">
          Why Choose Lil' Flatties?
        </h3>
        <p className="text-lg sm:text-xl mt-4 max-w-2xl mx-auto">
          Lil' Flatties are engineered for skaters who demand smooth,
          long-lasting performance. Crafted to withstand extensive use, they
          ensure a comfortable ride from the first to the last.
        </p>

        {/* Key Features */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
          <div className="text-center bg-gray-700 rounded-lg p-2">
            <h4 className="text-lg font-semibold">Durability</h4>
            <p className="text-sm mt-2">
              Designed to endure long rides and harsh conditions.
            </p>
          </div>
          <div className="text-center bg-gray-700 rounded-lg p-2">
            <h4 className="text-lg font-semibold">Smooth Ride</h4>
            <p className="text-sm mt-2">
              Engineered for a smooth and effortless glide.
            </p>
          </div>
          <div className="text-center bg-gray-700 rounded-lg p-2">
            <h4 className="text-lg font-semibold">Sleek Design</h4>
            <p className="text-sm mt-2">
              A modern, stylish design that pairs well with any setup.
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
      </div>
    </div>
  );
}
