import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, ChevronDown, ChevronUp  } from "lucide-react";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
  skills: string[];
}

interface CertificationsSectionProps {
  certifications?: Certification[];
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  certifications = defaultCertifications,
}) => {
  const [showAll, setShowAll] = useState(false);
  const displayedCertifications = showAll ? certifications : certifications.slice(0, 3);
  
  return (
    <section
      id="certifications"
      //className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-gray-50 relative overflow-hidden"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30 opacity-50"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-200/20 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-800 to-indigo-600 bg-clip-text text-transparent">
            Professional Certifications
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Validated expertise in cloud technologies, development practices,
            and industry standards
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedCertifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 hover:border-blue-200/50 h-full flex flex-col">
                {/* Certificate Image/Icon */}
                <div className="relative mb-4 flex justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    {cert.image ? (
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className={`w-10 h-10 sm:w-12 sm:h-12 object-contain ${
                          cert.issuer.includes("Microsoft")
                            ? "filter brightness-0 invert"
                            : ""
                        }`}
                      />
                    ) : (
                      <Award className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    )}
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="text-center mb-4 flex-grow">
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-1 text-sm sm:text-base">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm mb-3">
                    {cert.date}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 justify-center mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-200 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credential Link */}
                {cert.credentialUrl && (
                  <div className="mt-auto">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-sm font-medium"
                    >
                      View Credential
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All / Show Less Button */}
        {certifications.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-8 sm:mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  View All ({certifications.length} Certifications)
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-blue-500 mb-1">
                {certifications.length}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Certifications
              </div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-1">
                3
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Providers</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">
                100%
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Verified</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">
                Active
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Status</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const defaultCertifications: Certification[] = [
  {
    id: "1",
    title: "Introduction to Platform Engineering",
    issuer: "Platform Engineering",
    date: "2025",
    image:
      "https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png",
    credentialUrl:
      "https://www.virtualbadge.io/certificate-validator?credential=d8359d91-2d26-44ff-b658-583614df0cc4",
    skills: ["Internal Developer Platforms", "CI/CD Integration", "DevOps Practices"],
  },
  {
    id: "2",
    title: "Introduction to Terraform on Azure",
    issuer: "LinkedIn",
    date: "2025",
    image:
      "https://images.credly.com/size/340x340/images/4136ced8-75d5-4afb-8677-40b6236e2672/azure-ai-fundamentals-600x600.png",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/cd415dda309a1f8a8683f3ce076fbddbdfe804ed5c358b355f9c3069eec40d50?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bbxgy0om8RH60m24P1%2BEx8A%3D%3D",
    skills: ["Infrastructure as Code (IaC)", "Azure Resource Provisioning", "Terraform"],
  },
  {
    id: "3",
    title: "Azure Administration Essential Training",
    issuer: "LinkedIn",
    date: "2025",
    image:
      "https://images.credly.com/size/340x340/images/70eb1e3f-d4de-4377-a062-b20fb29594ea/azure-data-fundamentals-600x600.png",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/4a34ff8ddc344d6910118d3ad3a9b01d384f8ee5cac83414c0a49f8222351f0d?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bbxgy0om8RH60m24P1%2BEx8A%3D%3D",
    skills: ["Azure Services Management", "Identity & Access (IAM)", "Resource Monitoring"]
,
  },
  {
    id: "4",
    title: "Windows Server 2022 Essential Training",
    issuer: "LinkedIn",
    date: "2025",
    image:
      "https://images.credly.com/size/340x340/images/70eb1e3f-d4de-4377-a062-b20fb29594ea/azure-data-fundamentals-600x600.png",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/83663a3654132860e02236722534e918f2b229d03b0964d7e452e0fd6f191644?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bbxgy0om8RH60m24P1%2BEx8A%3D%3D",
    skills: ["Windows Server Administration", "Active Directory Basics", "System Configuration"]
,
  },
  {
    id: "5",
    title: "PowerShell 7 Essential Training",
    issuer: "LinkedIn",
    date: "2025",
    image:
      "https://images.credly.com/size/340x340/images/70eb1e3f-d4de-4377-a062-b20fb29594ea/azure-data-fundamentals-600x600.png",
    credentialUrl:
      "https://learn.microsoft.com/en-us/users/paras-5519/achievements/9y94knxu",
    skills: ["Task Automation", "Scripting & Functions", "System Management"]
,
  },
  {
    id: "6",
    title: "Networking Foundations: IP Addressing",
    issuer: "LinkedIn",
    date: "2025",
    image:
      "https://images.credly.com/size/340x340/images/70eb1e3f-d4de-4377-a062-b20fb29594ea/azure-data-fundamentals-600x600.png",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/5056f7bc729d3e3f41849e5adb54b9ac2251b35cdded2e40f4f8abe18527ae70?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bbxgy0om8RH60m24P1%2BEx8A%3D%3D",
    skills: ["IP Addressing", "Network Fundamentals", "Cloud Networking Basics"]
,
  },
  {
    id: "7",
    title: "Scrum: The Basics",
    issuer: "LinkedIn",
    date: "2025",
    image:
      "https://images.credly.com/size/340x340/images/70eb1e3f-d4de-4377-a062-b20fb29594ea/azure-data-fundamentals-600x600.png",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/716eda185689ef1713f0f50ea414a1071d184ccaae36c40f160a6dd859b8e6c8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bbxgy0om8RH60m24P1%2BEx8A%3D%3D",
    skills: [
      "Agile Methodology", "Scrum Framework", "Team Collaboration",
    ],
  },
  {
    id: "8",
    title: "ICT & Technology Semester Advanced (FTRBSpring2024BSC)",
    issuer: "Fontys University",
    date: "2024",
    image: "",
    credentialUrl:
      "https://www.edubadges.nl/public/assertions/sjERzbG5RzaK-g00419__A",
    skills: ["System Architecture", "Software Design", "Solution Engineering"],
  },
  {
    id: "9",
    title: "ICT & Smart Industry Semester 4 (FTRBSPRN2023BSC)",
    issuer: "Fontys University",
    date: "2023",
    image: "",
    credentialUrl:
      "https://www.edubadges.nl/public/assertions/KN7jJy0vSAefDtz2SOePgg",
    skills: ["Industrial Automation", "CI/CD Pipelines", "DevOps Practices"],
  },
  {
    id: "10",
    title: "ICT & Technology Semester 3 (FTCBFALL2022BSC)",
    issuer: "Fontys University",
    date: "2023",
    image: "",
    credentialUrl:
      "https://www.edubadges.nl/public/assertions/QZ2u7AJmSpCgLzvhqkKq4g",
    skills: [
      "Object-Oriented Programming",
      "Software Testing",
      "System Modeling",
    ],
  },
  {
    id: "11",
    title: "ICT & Technology Semester 2 (FTCBSPRN2022BSC)",
    issuer: "Fontys University",
    date: "2022",
    image: "",
    credentialUrl:
      "https://www.edubadges.nl/public/assertions/zv8rJnxuSu6ZQomq-wEgdg",
    skills: ["Agile Methodology", "Scrum Framework", "Team Collaboration"],
  },
  {
    id: "12",
    title: "ICT & Technology Semester 1 (FTCBSPRN2021)",
    issuer: "Fontys University",
    date: "2021",
    image: "",
    credentialUrl:
      "https://www.edubadges.nl/public/assertions/ltsq2Vl4QyOw8JUi3TL_6g",
    skills: ["Relational Databases", "SQL Basics", "Data Modeling"],
  },
];

export default CertificationsSection;
