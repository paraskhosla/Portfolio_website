import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";

interface ContactSectionProps {
  email?: string;
  instagram?: string;
  linkedin?: string;
  location?: string;
}

const ContactSection = ({
  email = "prskhsl@gmail.com",
  instagram = "https://www.instagram.com/khoslaparas_k.p/",
  linkedin = "https://www.linkedin.com/in/paraskhosla/",
  location = "Eindhoven, Netherlands",
}: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [robotExpression, setRobotExpression] = useState("default");
  const [activeField, setActiveField] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Change robot expression based on field interaction
    if (value.length > 0) {
      setRobotExpression("typing");
    } else {
      setRobotExpression("focused");
    }
  };

  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName);
    setRobotExpression("focused");
  };

  const handleBlur = () => {
    setActiveField("");
    const hasContent = Object.values(formData).some(
      (value) => value.length > 0,
    );
    setRobotExpression(hasContent ? "happy" : "default");
  };

  useEffect(() => {
    // Robot waves when component mounts
    setRobotExpression("waving");
    const timer = setTimeout(() => {
      setRobotExpression("default");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init("flg-ivosfc3seriai"); // Replace with your actual public key

      // Send email using EmailJS
      const result = await emailjs.send(
        "service_19p2axp", // Replace with your EmailJS service ID
        "template_gfdwch3", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "prskhsl@gmail.com",
        },
      );

      console.log("Email sent successfully:", result);
      setSubmitSuccess(true);
      setRobotExpression("celebrating");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setRobotExpression("default");
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setRobotExpression("sad");
      // You might want to show an error message to the user here
      alert(
        "Failed to send message. Please try again or contact directly via email.",
      );
      setTimeout(() => setRobotExpression("default"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
            Let's create something innovative. I'm available for fulltime
            projects and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-xl shadow-lg p-4 sm:p-6 md:p-8 order-2 lg:order-1 relative">
            {submitSuccess ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-8">
                <div className="bg-primary/10 rounded-full p-3 sm:p-4 mb-3 sm:mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 sm:h-10 sm:w-10 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus("name")}
                    onBlur={handleBlur}
                    required
                    className="w-full text-sm sm:text-base"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={handleBlur}
                    required
                    className="w-full text-sm sm:text-base"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus("subject")}
                    onBlur={handleBlur}
                    required
                    className="w-full text-sm sm:text-base"
                  />
                </div>

                {/* Robot Character */}
                <div className="flex items-start space-x-4 mt-6">
                  <div className="flex-shrink-0 mt-4">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                      <div
                        className={`w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg transition-all duration-300 ${
                          robotExpression === "waving"
                            ? "animate-bounce"
                            : robotExpression === "focused"
                              ? "scale-110 shadow-xl"
                              : robotExpression === "typing"
                                ? "animate-pulse"
                                : robotExpression === "happy"
                                  ? "scale-105"
                                  : robotExpression === "celebrating"
                                    ? "animate-spin"
                                    : robotExpression === "sad"
                                      ? "scale-95 opacity-75"
                                      : ""
                        }`}
                      >
                        <div className="text-white text-lg sm:text-xl font-bold">
                          {robotExpression === "default" && "😊"}
                          {robotExpression === "waving" && "👋"}
                          {robotExpression === "focused" && "🤔"}
                          {robotExpression === "typing" && "✍️"}
                          {robotExpression === "happy" && "😄"}
                          {robotExpression === "celebrating" && "🎉"}
                          {robotExpression === "sad" && "😢"}
                        </div>
                      </div>
                      {/* Speech bubble */}
                      {activeField && (
                        <div className="absolute -top-8 -right-4 bg-white rounded-lg px-3 py-2 text-xs shadow-md border animate-fade-in z-10">
                          <div className="text-gray-600 whitespace-nowrap">
                            {activeField === "name" && "Nice to meet you!"}
                            {activeField === "email" && "Got your email!"}
                            {activeField === "subject" && "What's this about?"}
                            {activeField === "message" && "Tell me more!"}
                          </div>
                          <div className="absolute bottom-0 left-6 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-white transform translate-y-full"></div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus("message")}
                      onBlur={handleBlur}
                      required
                      className="w-full min-h-[120px] sm:min-h-[150px] text-sm sm:text-base"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full text-sm sm:text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info & Image */}
          <div className="flex flex-col space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="relative rounded-xl overflow-hidden h-48 sm:h-64 md:h-80">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
                alt="Paras working on design"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="bg-card rounded-xl shadow-lg p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-semibold">
                Contact Information
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg transition-all duration-300 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/20 cursor-pointer group">
                  <div className="bg-primary/10 p-2 sm:p-3 rounded-full transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/30 group-hover:scale-110 flex-shrink-0">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary transition-all duration-300 group-hover:scale-110" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-muted-foreground transition-colors duration-300 group-hover:text-primary/70">
                      Email
                    </p>
                    <a
                      href={`mailto:${email}`}
                      className="font-medium hover:text-primary transition-colors duration-300 text-sm sm:text-base break-all"
                    >
                      {email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg transition-all duration-300 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/20 cursor-pointer group">
                  <div className="bg-primary/10 p-2 sm:p-3 rounded-full transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/30 group-hover:scale-110 flex-shrink-0">
                    <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-primary transition-all duration-300 group-hover:scale-110" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-muted-foreground transition-colors duration-300 group-hover:text-primary/70">
                      Instagram
                    </p>
                    <a
                      href={instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-primary transition-colors duration-300 text-sm sm:text-base"
                    >
                      @khoslaparas_k.p
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg transition-all duration-300 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/20 cursor-pointer group">
                  <div className="bg-primary/10 p-2 sm:p-3 rounded-full transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/30 group-hover:scale-110 flex-shrink-0">
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-primary transition-all duration-300 group-hover:scale-110" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-muted-foreground transition-colors duration-300 group-hover:text-primary/70">
                      LinkedIn
                    </p>
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-primary transition-colors duration-300 text-sm sm:text-base"
                    >
                      Paras Khosla
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg transition-all duration-300 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/20 cursor-pointer group">
                  <div className="bg-primary/10 p-2 sm:p-3 rounded-full transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/30 group-hover:scale-110 flex-shrink-0">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary transition-all duration-300 group-hover:scale-110" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-muted-foreground transition-colors duration-300 group-hover:text-primary/70">
                      Location
                    </p>
                    <p className="font-medium transition-colors duration-300 group-hover:text-primary text-sm sm:text-base">
                      {location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
