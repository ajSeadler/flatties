/* eslint-disable react/no-unescaped-entities */
import { Image } from "@heroui/image";
import { BiSolidBullseye } from "react-icons/bi";

import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";
import SingleCard from "@/components/SingleCard";
import HeroSection from "@/components/HeroSection"; // Import the HeroSection

export default function IndexPage() {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <HeroSection /> {/* Use the HeroSection component */}
      {/* SingleCard Section */}
      <section className="">
        <SingleCard />
      </section>
      {/* Additional Content Section */}
      <section className="px-6 sm:px-8 md:px-16 lg:px-24 py-12">
        <div className="max-w-5xl mx-auto">
          <h2
            className={title({ class: "text-4xl sm:text-5xl font-bold" })}
            style={{ fontFamily: "'Rubik Glitch', sans-serif" }}
          >
            About Us
          </h2>

          <section className="mt-6 space-y-6">
            <p
              className={subtitle({
                class: "text-base sm:text-lg md:text-xl leading-relaxed",
              })}
            >
              In the early 1990s, skateboarding saw a significant shift towards
              street skating, leading to the popularity of smaller wheels, often
              referred to as the "Big Pants, Small Wheels Era." Skaters favored
              wheels as small as 35mm to 40mm in diameter, which facilitated...
              well, no one really knows what, but they looked cool.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Flatties Wheels draws inspiration from this era, offering wheels
              that capture the essence of 90s skate culture while utilizing
              modern materials and manufacturing techniques. Our wheels are
              designed to provide the agility and control favored by street
              skaters, making them ideal for looking cool in the streets. By
              choosing Flatties Wheels, you're embracing a piece of
              skateboarding history, reimagined for today's skater.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed p-4 rounded-lg shadow">
              Each set of Flatties Wheels is individually crafted by hand,
              giving your new wheels exceptional attention to detail while
              maintaining a competitive price. Made by skaters for skaters.
            </p>
          </section>
          <div className="mt-8 flex flex-col md:flex-row gap-6">
            <Image
              isBlurred
              isZoomed
              alt="Flatties Wheels"
              className="rounded-md shadow-md"
              height={300}
              src="/pictures/flatties-proto1.jpg"
              width={300}
            />
            <Image
              isBlurred
              isZoomed
              alt="Flatties Wheels"
              className="rounded-md shadow-md"
              height={300}
              src="/pictures/flatties-proto2.jpg"
              width={300}
            />
            <Image
              isBlurred
              isZoomed
              alt="Flatties Wheels"
              className="rounded-md shadow-md"
              height={300}
              src="/pictures/flatties-proto3.jpg"
              width={300}
            />
          </div>

          <ul className="mt-6 space-y-3">
            <li className="flex items-center">
              <BiSolidBullseye className="mr-2" /> High-quality urethane for a
              smooth ride
            </li>
            <li className="flex items-center">
              <BiSolidBullseye className="mr-2" /> Unique handcrafted designs
              for a personal touch
            </li>
            <li className="flex items-center">
              <BiSolidBullseye className="mr-2" /> Available in multiple sizes
              to suit any setup
            </li>
          </ul>
        </div>
      </section>
    </DefaultLayout>
  );
}
