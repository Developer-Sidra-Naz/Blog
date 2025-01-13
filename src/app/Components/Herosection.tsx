'use client';
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 500); // Delay before text shows up
    return () => clearTimeout(timer);
  }, []);

  const textLines = [
    "Governor Initiative",
    "for",
    "Artificial Intelligence,", "Web 3.0", "&", "Metaverse.",
  ];

  return (
    <div
      className="lg:flex items-center h-[full] bg-cover bg-center p-8 mx-3"
      style={{ backgroundImage: 'url("/hero2.jpg")' }} 
    >
      {/* Left Section: Text */}
      <div className="w-full lg:flex-col lg:w-2/3 max-w-3xl space-y-6">
        {textLines.map((line, lineIndex) => (
          <h1
            key={lineIndex}
            className={`text-blue-950 text-left ${
              lineIndex === 0
                ? "text-3xl sm:text-3xl md:text-5xl lg:text-6xl"
                : "text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            } font-bold`}
          >
            {line.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-1"> {/* Adds space between words */}
                {word.split("").map((letter, letterIndex) => (
                  <span
                    key={letterIndex}
                    className={`inline-block transform transition duration-700 ease-in-out ${
                      showText
                        ? `opacity-100 translate-y-0 delay-[${lineIndex * 300 + wordIndex * 50 + letterIndex * 50}ms]`
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            ))}
          </h1>
        ))}
      </div>

      {/* Right Section: Logo */}
      <div className="w-full lg:w-1/3 flex justify-center items-center">
        <div className="relative w-96 h-96">
          <Image
            src="/sindh.png" // Replace with the correct path to your logo
            alt="Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
