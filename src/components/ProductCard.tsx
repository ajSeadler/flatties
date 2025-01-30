/* eslint-disable react/no-unescaped-entities */
import { FaCircle } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div className=" text-gray-900 dark:text-white min-h-screen px-6 sm:px-12 lg:px-24 py-16">
      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Product Image */}
        <div className="flex justify-center">
          <img
            alt="Lil Flatties Wheel"
            className="rounded-3xl shadow-lg w-full max-w-md lg:max-w-lg"
            src="/pictures/flatties-decal.jpg"
          />
        </div>

        {/* Right: Product Details */}
        <div className="space-y-8">
          {/* Key Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-lg">
              <FaCircle className="text-green-600" />
              <span className="font-medium">37mm Diameter</span>
            </div>
            <div className="flex items-center gap-4 text-lg">
              <FaCircle className="text-green-600" />
              <span className="font-medium">103a Durometer</span>
            </div>
            <div className="flex items-center gap-4 text-lg">
              <FaCircle className="text-green-600" />
              <span className="font-medium">Handcrafted</span>
            </div>
            <div className="flex items-center gap-4 text-lg">
              <FaCircle className="text-green-600" />
              <span className="font-medium">Perfect for street skating</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            The Lil Flatties Wheels are inspired by the iconic 90s "Big Pants,
            Small Wheels Era," delivering a nostalgic yet modern experience for
            skaters. Each wheel is crafted with high-quality urethane to ensure
            a smooth ride, maximum control, and exceptional durability. Designed
            by skaters for skaters, these wheels are the ultimate blend of
            aesthetics and performance.
          </p>

          {/* Highlights */}
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <FaCircle className="text-green-600 mt-1" />
              <span>
                Crafted with premium urethane for unmatched durability.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaCircle className="text-green-600 mt-1" />
              <span>
                Unique handcrafted design that captures the essence of 90s skate
                culture.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaCircle className="text-green-600 mt-1" />
              <span>
                Versatile size, making it the perfect choice for street skating.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="mt-16 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-sm">
            <FaCircle className="text-green-600 text-3xl" />
            <div>
              <p className="font-medium text-lg">Diameter</p>
              <p className="text-gray-600 dark:text-gray-400">37mm</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-sm">
            <FaCircle className="text-green-600 text-3xl" />
            <div>
              <p className="font-medium text-lg">Durometer</p>
              <p className="text-gray-600 dark:text-gray-400">103a</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-sm">
            <FaCircle className="text-green-600 text-3xl" />
            <div>
              <p className="font-medium text-lg">Finish</p>
              <p className="text-gray-600 dark:text-gray-400">White</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-sm">
            <FaCircle className="text-green-600 text-3xl" />
            <div>
              <p className="font-medium text-lg">Type</p>
              <p className="text-gray-600 dark:text-gray-400">Street Skating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
