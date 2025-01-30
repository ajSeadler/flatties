import React from "react";
import "../styles/HeroSection.css";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen px-6 sm:px-8 md:px-16 lg:px-24 space-y-8 text-center">
      <div className="space-y-6">
        <h1
          className="text-6xl sm:text-7xl font-extrabold tracking-tight leading-tight spinning-text"
          style={{ fontFamily: "'Rubik Glitch', sans-serif" }}
        >
          Flatties
        </h1>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 w-full sm:w-auto text-lg font-semibold rounded-xl border border-gray-600 hover:opacity-80 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
