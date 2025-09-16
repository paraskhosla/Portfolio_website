import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import CertificationsSection from "./CertificationsSection";
import Chatbot from "./Chatbot";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { ArrowUp, Briefcase, GraduationCap } from "lucide-react";

const HomePage = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const contactTop = contactSection.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;
        const contactBottom = contactTop + contactSection.offsetHeight;

        // Show button when user is in the contact section
        setShowScrollToTop(
          scrollPosition >= contactTop && window.scrollY <= contactBottom,
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* About Me Section */}
      <section
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 max-w-7xl mx-auto"
        id="about"
      >
        <div className="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">About Me</h2>
            <h3 className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6">
              Innovation with Purpose
            </h3>

            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 flex-shrink-0" />
              <p className="text-gray-700 text-sm sm:text-base">
                Information & Communication Technology(2025)
              </p>
            </div>
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 flex-shrink-0" />
              <p className="text-gray-700 text-sm sm:text-base">
                Mechanical Engineering(2020)
              </p>
            </div>

            <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
              With experience in software development and embedded systems, I
              build solutions that are both efficient and impactful. I
              specialize in Full-stack development, cloud integration, and
              dashboards. From internships to personal projects, I turn complex
              ideas into working systems.
            </p>
            {/* Skills grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-gray-200 p-3 sm:p-4 rounded-lg text-center transition-colors duration-200 hover:bg-gray-300">
                <h4 className="font-medium text-xs sm:text-sm">
                  Embedded Systems
                </h4>
              </div>
              <div
                className="bg-gray-200 p-3 sm:p-4 rounded-lg text-center
                  transition-colors duration-200 hover:bg-gray-300"
              >
                <h4 className="font-medium text-xs sm:text-sm">
                  Software Development
                </h4>
              </div>
              <div
                className="bg-gray-200 p-3 sm:p-4 rounded-lg text-center
                  transition-colors duration-200 hover:bg-gray-300"
              >
                <h4 className="font-medium text-xs sm:text-sm">
                  Cloud &amp; Monitoring
                </h4>
              </div>
              <div
                className="bg-gray-200 p-3 sm:p-4 rounded-lg text-center
                  transition-colors duration-200 hover:bg-gray-300"
              >
                <h4 className="font-medium text-xs sm:text-sm">
                  IoT &amp; Sensors
                </h4>
              </div>
              <div
                className="bg-gray-200 p-3 sm:p-4 rounded-lg text-center
                  transition-colors duration-200 hover:bg-gray-300"
              >
                <h4 className="font-medium text-xs sm:text-sm">
                  Git &amp; CI/CD
                </h4>
              </div>
              <div
                className="bg-gray-200 p-3 sm:p-4 rounded-lg text-center
                  transition-colors duration-200 hover:bg-gray-300"
              >
                <h4 className="font-medium text-xs sm:text-sm">
                  Test Automation
                </h4>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src="https://res.cloudinary.com/djraxo05u/image/upload/v1752008523/profile_jwxz4v.jpg"
              alt="Software Developer workspace"
              className="rounded-lg w-full h-auto object-cover shadow-lg hover:shadow-[0_0_35px_rgba(80,80,80,0.6)] transition-shadow duration-500"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30 opacity-50"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 md:mb-12 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Core Tools & Skills
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
            <div className="group space-y-2 p-4 rounded-xl bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-white/90 hover:scale-[1.02]">
              <div className="flex justify-between items-center">
                <span className="font-medium text-sm sm:text-base group-hover:text-blue-600 transition-colors duration-300">
                  Embedded Systems (STM32, Microcontrollers)
                </span>
                <span className="text-sm sm:text-base font-semibold bg-blue-100 px-2 py-1 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                  80%
                </span>
              </div>
              <Progress
                value={80}
                className="h-3 group-hover:h-4 transition-all duration-300"
              />
            </div>

            <div className="group space-y-2 p-4 rounded-xl bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-white/90 hover:scale-[1.02]">
              <div className="flex justify-between items-center">
                <span className="font-medium text-sm sm:text-base group-hover:text-green-600 transition-colors duration-300">
                  Cloud & Azure (Functions, Storage, App Insights)
                </span>
                <span className="text-sm sm:text-base font-semibold bg-green-100 px-2 py-1 rounded-full group-hover:bg-green-200 transition-colors duration-300">
                  80%
                </span>
              </div>
              <Progress
                value={80}
                className="h-3 group-hover:h-4 transition-all duration-300"
              />
            </div>

            <div className="group space-y-2 p-4 rounded-xl bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-white/90 hover:scale-[1.02]">
              <div className="flex justify-between items-center">
                <span className="font-medium text-sm sm:text-base group-hover:text-purple-600 transition-colors duration-300">
                  Automation (Python, Bash)
                </span>
                <span className="text-sm sm:text-base font-semibold bg-purple-100 px-2 py-1 rounded-full group-hover:bg-purple-200 transition-colors duration-300">
                  70%
                </span>
              </div>
              <Progress
                value={70}
                className="h-3 group-hover:h-4 transition-all duration-300"
              />
            </div>

            <div className="group space-y-2 p-4 rounded-xl bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-white/90 hover:scale-[1.02]">
              <div className="flex justify-between items-center">
                <span className="font-medium text-sm sm:text-base group-hover:text-orange-600 transition-colors duration-300">
                  CI/CD & Git
                </span>
                <span className="text-sm sm:text-base font-semibold bg-orange-100 px-2 py-1 rounded-full group-hover:bg-orange-200 transition-colors duration-300">
                  70%
                </span>
              </div>
              <Progress
                value={70}
                className="h-3 group-hover:h-4 transition-all duration-300"
              />
            </div>

            <div className="group space-y-2 p-4 rounded-xl bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-white/90 hover:scale-[1.02]">
              <div className="flex justify-between items-center">
                <span className="font-medium text-sm sm:text-base group-hover:text-indigo-600 transition-colors duration-300">
                  Dashboards (Power BI, Grafana, SCOM)
                </span>
                <span className="text-sm sm:text-base font-semibold bg-indigo-100 px-2 py-1 rounded-full group-hover:bg-indigo-200 transition-colors duration-300">
                  70%
                </span>
              </div>
              <Progress
                value={70}
                className="h-3 group-hover:h-4 transition-all duration-300"
              />
            </div>

            <div className="group space-y-2 p-4 rounded-xl bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-white/90 hover:scale-[1.02]">
              <div className="flex justify-between items-center">
                <span className="font-medium text-sm sm:text-base group-hover:text-teal-600 transition-colors duration-300">
                  Test Automation (Postman, Tosca)
                </span>
                <span className="text-sm sm:text-base font-semibold bg-teal-100 px-2 py-1 rounded-full group-hover:bg-teal-200 transition-colors duration-300">
                  60%
                </span>
              </div>
              <Progress
                value={60}
                className="h-3 group-hover:h-4 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 max-w-7xl mx-auto"
        id="experience"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">
          Professional Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <div className="group bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-gray-200">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
              <div className="md:w-1/3">
                <div className="flex items-start gap-2 mb-1">
                  <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                    <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    DAF Trucks N.V.
                  </h3>
                </div>
                <p className="text-gray-600 mb-2 text-sm sm:text-base font-medium">
                  Cloud Integration & Dashboard Engineer
                </p>
                <p className="text-gray-500 text-xs sm:text-sm bg-gray-50 px-3 py-1 rounded-full inline-block">
                  Eindhoven | Feb 2025 – Jun 2025
                </p>
              </div>

              <div className="md:w-2/3 mt-4 md:mt-0">
                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Developed dashboards in SCOM and Power BI to monitor system health and project 
                      performance after new releases
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Implemented Azure Functions to send certificate 
                      meta data to Application Insights
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Certificate expiration monitoring apps deployed on DAF
                      servers
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Automated API tests using Tosca and Postman</span>
                  </li>
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Worked closely with engineers to define dashboard metrics
                      and validate data
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-gray-300 to-transparent"></div>
          </div>

          <div className="group bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-gray-200">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
              <div className="md:w-1/3">
                <div className="flex items-start gap-2 mb-1">
                  <div className="p-2 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors duration-300">
                    <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl leading-tight group-hover:text-green-600 transition-colors duration-300">
                    Versuni (formerly Philips)
                  </h3>
                </div>
                <p className="text-gray-600 mb-2 text-sm sm:text-base font-medium">
                  Embedded Software & Machine learning Engineer
                </p>
                <p className="text-gray-500 text-xs sm:text-sm bg-gray-50 px-3 py-1 rounded-full inline-block">
                  Drachten | Sept 2023 – Jan 2024
                </p>
              </div>

              <div className="md:w-2/3 mt-4 md:mt-0">
                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Integrated an LIS2DH12 accelerometer with STM32 firmware
                      for real-time motion data
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Improved sensor data accuracy by optimizing embedded
                      algorithms with the dev team
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Collected and logged embedded sensor data for model
                      training
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Developed a deep learning model to enhance floor-type
                      detection performance
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Applied machine learning to real-world embedded systems
                      for smarter device behavior
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-gray-300 to-transparent"></div>
          </div>

        <div className="group bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-gray-200">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
              <div className="md:w-1/3">
                <div className="flex items-start gap-2 mb-1">
                  <div className="p-2 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors duration-300">
                    <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl leading-tight group-hover:text-purple-600 transition-colors duration-300">
                    Color Change Detection – Robot Lab IoT
                  </h3>
                </div>
                <p className="text-gray-600 mb-2 text-sm sm:text-base font-medium">
                  Embedded & Computer Vision Engineer
                </p>
                <p className="text-gray-500 text-xs sm:text-sm bg-gray-50 px-3 py-1 rounded-full inline-block">
                  Eindhoven | Feb 2023 – June 2024
                </p>
              </div>

              <div className="md:w-2/3 mt-4 md:mt-0">
                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Developed a computer vision system on NVIDIA Jetson TX2 to detect color changes in chemical reactions
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Applied OpenCV for real-time image processing to capture subtle color variations
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Created a pipeline storing video streams in MongoDB with Grafana dashboards for visualization
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Explored applications in chemical monitoring, process automation, and industrial IoT
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Collaborated in a multidisciplinary team, combining IoT, vision, and data analytics for real-time monitoring
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-gray-300 to-transparent"></div>
          </div>

          <div className="group bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-gray-200">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
              <div className="md:w-1/3">
                <div className="flex items-start gap-2 mb-1">
                  <div className="p-2 bg-orange-50 rounded-lg group-hover:bg-orange-100 transition-colors duration-300">
                    <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl leading-tight group-hover:text-orange-600 transition-colors duration-300">
                    Chidoz
                  </h3>
                </div>
                <p className="text-gray-600 mb-2 text-sm sm:text-base font-medium">
                  Crew Member
                </p>
                <p className="text-gray-500 text-xs sm:text-sm bg-gray-50 px-3 py-1 rounded-full inline-block">
                  Eindhoven | Dec 2022 – Sept 2023
                </p>
              </div>

              <div className="md:w-2/3 mt-4 md:mt-0">
                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Developed culinary skills and food preparation techniques
                      in a fast-paced kitchen environment
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Gained experience in teamwork and communication within a
                      multicultural work environment
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Learned time management and efficiency in high-pressure
                      situations
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Enhanced customer service skills and attention to detail
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Built adaptability and problem-solving skills in a dynamic
                      work environment
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <div id="certifications">
        <CertificationsSection />
      </div>

      {/* Projects Section */}
      <div id="projects">
        <ProjectsSection />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-8">
            <div className="sm:w-1/3">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                Paras Khosla
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Software developer with passion for development and exciting
                innovation
              </p>
            </div>

            <div className="sm:w-1/3">
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">
                Quick Links
              </h4>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base cursor-pointer"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("certifications")}
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base cursor-pointer"
                >
                  Certifications
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base cursor-pointer"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base cursor-pointer"
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="sm:w-1/3">
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">
                Specializations
              </h4>
              <p className="text-gray-400 text-sm sm:text-base">
                Azure DevOps, Software developer, Embedded systems, PowerBi,
                Test automation
              </p>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
                Copyright © 2025 Paras Khosla. All rights reserved.
              </p>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <a
                href="mailto:prskhsl@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  className="sm:w-5 sm:h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/paraskhosla/"
                target="https://www.linkedin.com/in/paraskhosla/"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  className="sm:w-5 sm:h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://instagram.com/khoslaparas_k.p/"
                target="https://www.instagram.com/khoslaparas_k.p/"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  className="sm:w-5 sm:h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button - only visible in contact section */}
      <div
        className={`fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-40 transition-all duration-500 ease-in-out transform ${
          showScrollToTop
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-gray-900 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default HomePage;
