import { Card, CardHeader, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";

export default function SingleCard() {
  return (
    <div className="mx-auto px-8">
      <Card className="w-full h-full sm:w-1/2 sm:h-auto mx-auto">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Featured
          </p>
          <h4 className="text-white font-medium text-large">Flatties Decal</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Flatties Decal"
          className="z-0 w-full h-full object-cover"
          src="/pictures/flatties-decal.jpg"
        />
        <CardFooter className="absolute bg-black/80 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <p className="text-tiny text-white/60">
              Show off your style with this amazing decal.
            </p>
          </div>
          <Button radius="full" size="sm">
            Learn More
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
