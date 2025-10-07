import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  caseStudyUrl?: string;
  demoUrl?: string;
}

interface ProjectsSectionProps {
  projects?: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects = defaultProjects,
}) => {
  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
            A selection of my recent technical projects across embedded systems,
            cloud integration, and intelligent applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                caseStudyUrl={project.caseStudyUrl}
                demoUrl={project.demoUrl}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "VSS Insights",
    description:
      "During my graduation project at DAF, I automated monitoring of VSS metrics and certificate expirations with Azure DevOps, Azure functions, Application Insights, Power BI, and SCOM.",
    image:
      "https://res.cloudinary.com/djraxo05u/image/upload/v1759790108/daf_grafana_qja1uy.png",
    tags: ["Azure DevOps", ".Net Framework", "Power Bi"],
    caseStudyUrl: "https://paraskhosla.github.io/Portfolio_website/Daf_Internship_Product_System_Design_Document.pdf",
    demoUrl: "https://paraskhosla.github.io/Portfolio_website/Daf_Dashboard_Demo.pdf",
  },
  {
    id: "2",
    title: "Floor Detection using ML",
    description:
      "At Versuni (Philips), I developed a deep learning model for floor-type classification using motor current data and implemented the LIS2DH12 sensor, achieving 70% accuracy.",
    image:
      "https://res.cloudinary.com/djraxo05u/image/upload/v1752007180/philips_tcdcum.jpg",
    tags: ["LIS2DH12", "Python", "Deep Learning"],
    caseStudyUrl: "https://paraskhosla.github.io/Portfolio_website/Versuni_Internship_Research_Report_signed.pdf",
    demoUrl: "https://paraskhosla.github.io/Portfolio_website/versuni-presentation.pdf",
  },
  {
    id: "3",
    title: "Azure & Node-RED Integration",
    description:
      "Connected IoT devices to Azure IoT Hub for real-time data monitoring using Azure dashboards. Linked Node-RED for message processing and visualization, enabling smooth IoT data flow within the Azure DevOps setup.",
    image:
      "https://res.cloudinary.com/djraxo05u/image/upload/v1759763171/azure_project__sssahr.png",
    tags: ["Azure IoT Hub", "Node-RED", "Cloud Integration"],
    caseStudyUrl: "https://paraskhosla.github.io/Portfolio_website/Challenge Azure.pdf",
    demoUrl: "https://paraskhosla.github.io/Portfolio_website/Challenge Azure.pdf",
  },
  {
    id: "4",
    title: "Cricket Learning App",
    description:
      "A sleek Figma prototype designed to help beginners understand the basics of cricket through visual guides and engaging UI tailored for mobile users",
    image:
      "https://res.cloudinary.com/djraxo05u/image/upload/v1752007286/Minor_r6wzxm.png",
    tags: ["Figma", "Research", "Design"],
    caseStudyUrl:
      "https://miro.com/app/board/uXjVLbGmNv4=/?share_link_id=307061218433",
    demoUrl:
      "https://www.figma.com/proto/PxFOOiLLVXVehnuxh7NtgA/Personal-project-cricket-learning-app?page-id=33%3A39&node-id=2053-221&p=f&viewport=327%2C1042%2C0.27&t=hUcoJ74u279vFOCa-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2053%3A221",
  },
  {
    id: "5",
    title: "Bluetooth-Controlled Rover",
    description:
      "A 4WD Bluetooth-controlled rover built with ESP32, navigated using the Dabble app for seamless wireless control and mobility.",
    image:
      "https://res.cloudinary.com/djraxo05u/image/upload/v1752007285/Screenshot_4_jcdyia.png",
    tags: ["C/C++", "PWM", "4-Motor Drive"],
    caseStudyUrl: "https://paraskhosla.github.io/Portfolio_website/Smart_car_using_BL.pdf",
    demoUrl: "https://youtu.be/9DCF5yQoPSY",
  },
  {
    id: "6",
    title: "Color Detection with OpenCV",
    description:
      "A real-time color change detection system using the Jetson TX2's onboard camera like cabbage water, enabling real-world chemical reaction analysis directly at the edge",
    image:
      "https://res.cloudinary.com/djraxo05u/image/upload/v1752007829/colordetect_celjua.jpg",
    tags: ["GNSS", "IOT", "VS Code"],
    caseStudyUrl: "https://paraskhosla.github.io/Portfolio_website/Color_Change_detection.pdf",
    demoUrl: "https://youtu.be/j5ihSZjRxy4",
  },
];

export default ProjectsSection;
