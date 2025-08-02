import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  name?: string;
  title?: string;
  description?: string;
}

const HeroSection = ({
  name = "Hi, I'm Paras Khosla",
  title = "Embedded & Software Developer",
  description = "I am an Embedded & Software Engineer with a passion for turning complex data into clear, actionable insights. With hands-on experience in dashboard development, cloud integration, and embedded systems, I bring a blend of technical expertise and a strong commitment to delivering reliable, high-quality solutions. Organized, driven, and eager to learn, I thrive on challenges and continuously aim for excellence in every project I undertake.",
}: HeroSectionProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="relative w-full h-screen min-h-[600px] sm:min-h-[700px] md:min-h-[800px] bg-background flex items-center justify-center overflow-hidden">
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src="https://res.cloudinary.com/djraxo05u/video/upload/v1754088242/Home_xqlh4i.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        {/* Left content - Text and buttons */}
        <motion.div
          className="text-white max-w-xl text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 leading-tight">
            {name}
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-4 md:mb-6">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 text-gray-200 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center md:justify-start">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 w-full sm:w-auto text-sm sm:text-base"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-gray-200 text-gray-800 hover:text-white hover:border-white hover:bg-white/10 transition-colors duration-200 px-8"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </motion.div>
          </div>
        </motion.div>
        {/* Right content - Profile image */}
        <motion.div
          className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] transition-shadow duration-500 mt-4 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="https://res.cloudinary.com/djraxo05u/image/upload/v1752012575/dp_tl0p3k.jpg"
            alt="Paras Khosla"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center bottom-[60px] sm:bottom-[80px] md:bottom-[102px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <span className="text-white text-xs sm:text-sm mb-2 sm:mb-3">
          Scroll Down
        </span>
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center pt-1.5 sm:pt-2">
          <motion.div
            className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
