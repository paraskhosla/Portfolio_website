import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Quote, Linkedin } from "lucide-react";

interface Recommendation {
  id: string;
  text: string;
  name: string;
  profileUrl: string;
  title: string;
  relationship: string;
}

const recommendations: Recommendation[] = [
  {
    id: "eric-janssens",
    text: "I have been the company mentor for Paras Khosla for his bachelor assignment from Fontys. I have experienced Paras as a very enthusiastic and eager to learn person. He has done a very good job where he balanced well between delivering added value to our company while also reaching the milestones needed to finish his study. Good to add Paras has done very well too in communicating with co-workers, both inside as outside the team he was part of. I would have liked to keep him onboard with DAF, but unfortunately no opportunity was there for this at the end of his assignment.",
    name: "Eric Janssens",
    profileUrl: "https://www.linkedin.com/in/eric-janssens-292b034/",
    title: "IT Manager Vehicle Software Delivery, PACCAR IT Europe",
    relationship: "Paras's company manager/mentor at DAF Trucks",
  },
  {
    id: "brijesh-rana",
    text: "Paras was an outstanding intern during his time with us at DAF Trucks. I personally guided him as he took on the challenge of implementing a monitoring system using Grafana. I was consistently impressed by his curiosity, his willingness to tackle complex problems, and his ability to apply new knowledge effectively.\n\nBeyond his technical skill in building insightful dashboards, Paras is a great communicator and a collaborative team player. Any organization would be lucky to have him.",
    name: "Brijesh Rana",
    profileUrl: "https://www.linkedin.com/in/brijesh-rana-41aa76b2/",
    title: "Data Engineer, DAF Trucks",
    relationship: "Cross-team colleague who introduced Paras to Grafana",
  },
];

const LINKEDIN_RECOMMENDATIONS_URL =
  "https://www.linkedin.com/in/paraskhosla/details/recommendations/";

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const RecommendationText: React.FC<{ text: string }> = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  // Only show "Read more" when the text is actually longer than 4 lines
  useEffect(() => {
    const checkClamp = () => {
      const el = textRef.current;
      if (el && !expanded) {
        setIsClamped(el.scrollHeight > el.clientHeight + 1);
      }
    };
    checkClamp();
    window.addEventListener("resize", checkClamp);
    return () => window.removeEventListener("resize", checkClamp);
  }, [expanded]);

  return (
    <div className="flex-grow">
      <p
        ref={textRef}
        className={`text-gray-700 text-sm sm:text-base leading-relaxed italic whitespace-pre-line ${
          expanded ? "" : "line-clamp-4"
        }`}
      >
        “{text}”
      </p>
      {(isClamped || expanded) && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
};

const RecommendationsSection: React.FC = () => {
  return (
    <section
      id="recommendations"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 max-w-7xl mx-auto"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">
        Recommendations
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
        {recommendations.map((rec, index) => (
          <motion.div
            key={rec.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-gray-200 flex flex-col"
          >
            <div className="p-2 bg-blue-50 rounded-lg w-fit mb-4 group-hover:bg-blue-100 transition-colors duration-300">
              <Quote className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
            </div>

            <RecommendationText text={rec.text} />

            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-100">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-sm flex-shrink-0">
                {getInitials(rec.name)}
              </div>
              <div>
                <a
                  href={rec.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm sm:text-base hover:text-blue-600 transition-colors duration-300"
                >
                  {rec.name}
                </a>
                <p className="text-gray-600 text-xs sm:text-sm">{rec.title}</p>
                <p className="text-gray-500 text-xs">{rec.relationship}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href={LINKEDIN_RECOMMENDATIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm sm:text-base text-blue-600 hover:text-blue-700 font-medium"
        >
          <Linkedin className="h-4 w-4" />
          View all recommendations on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default RecommendationsSection;
