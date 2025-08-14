import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Add keyframes for glow animation
const glowStyles = `
  @keyframes glow {
    0% {
      box-shadow: 0 0 20px rgba(34, 197, 94, 0.6), 0 0 40px rgba(34, 197, 94, 0.4), 0 0 60px rgba(34, 197, 94, 0.2);
    }
    50% {
      box-shadow: 0 0 30px rgba(59, 130, 246, 0.7), 0 0 50px rgba(59, 130, 246, 0.5), 0 0 70px rgba(59, 130, 246, 0.3);
    }
    100% {
      box-shadow: 0 0 25px rgba(168, 85, 247, 0.6), 0 0 45px rgba(168, 85, 247, 0.4), 0 0 65px rgba(168, 85, 247, 0.2);
    }
  }
`;

// Inject styles
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = glowStyles;
  document.head.appendChild(styleSheet);
}

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatbotProps {
  isOpen?: boolean;
}

const Chatbot = ({ isOpen = false }: ChatbotProps) => {
  const [isChatOpen, setIsChatOpen] = useState(isOpen);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Paras's assistant. I can help you navigate the website and learn more about him. Try asking me about his experience, skills, or projects!",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showInitialMessage, setShowInitialMessage] = useState(false);
  const [hasInitiallyLoaded, setHasInitiallyLoaded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isChatOpen) {
      // Show initial message with delay when chat opens
      const timer = setTimeout(() => {
        setShowInitialMessage(true);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setShowInitialMessage(false);
    }
  }, [isChatOpen]);

  useEffect(() => {
    // Add initial load animation with delay
    const timer = setTimeout(() => {
      setHasInitiallyLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      // Add a smooth transition effect before scrolling
      setTimeout(() => {
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }, 200);
    }
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Quick links responses
    if (
      message.includes("about") ||
      message.includes("who") ||
      message.includes("introduction")
    ) {
      setTimeout(() => scrollToSection("about"), 1000);
      return "Paras is a curious problem-solver who thrives on challenges across domains. Combining technical skills with creative thinking, he delivers practical solutions with determination. Outside work, he enjoys cycling, traveling, exploring cultures, and pursuing projects that fuel his growth.";
    }

    if (
      message.includes("experience") ||
      message.includes("work") ||
      message.includes("job")
    ) {
      setTimeout(() => scrollToSection("experience"), 1000);
      return "Paras has professional experience at DAF Trucks N.V. (Software Integration & Dashboard Development) and Versuni (Machine learning Engineer & Embedded systems). Let me take you to the Experience section!";
    }

    if (
      message.includes("skill") ||
      message.includes("technology") ||
      message.includes("tech")
    ) {
      return "Paras specializes in:\n• Embedded Software \n• Azure DevOps(Functions, Storage, AppIn) \n• Python & Scripting \n• STM32 & Microcontrollers \n• Power BI / Grafana Dashboards \n• Test Automation in Tosca & Postman \n\nHe also has experience with IoT & Sensors, Git & CI/CD, and Cloud & Monitoring.";
    }

    if (
      message.includes("project") ||
      message.includes("portfolio") ||
      message.includes("work")
    ) {
      setTimeout(() => scrollToSection("projects"), 1000);
      return "Paras has worked on various projects including embedded systems, dashboard development, and machine learning applications. I'm taking you to the Projects section to see his work!";
    }

    if (
      message.includes("certification") || 
      message.includes("certificate")
    ) {
      setTimeout(() => scrollToSection("certifications"), 1000);
      return "Paras has certifications from Microsoft and Fontys University. Let me show you the Certifications section!";
    }

    if (
      message.includes("contact") ||
      message.includes("email") ||
      message.includes("reach") ||
      message.includes("meet") ||
      message.includes("hire")
    ) {
      setTimeout(() => scrollToSection("contact"), 1000);
      return "You can reach Paras at prskhsl@gmail.com or connect with him on LinkedIn and Instagram. He's currently looking for his next full-time role! I'm scrolling to the Contact section.";
    }

    if (
      message.includes("education") ||
      message.includes("study") ||
      message.includes("degree")
    ) {
      return "Paras has:\n• Information & Communication Technology(ICT) \n• Diploma in Mechanical Engineering \n\nHe brings together hands-on engineering experience with strong IT skills to build practical, tech-driven solutions.";
    }

    if (
      message.includes("location") || 
      message.includes("where")
    ) {
      return "Paras is based in Eindhoven, Netherlands. He's open to opportunities in the Netherlands";
    }

    if (
      message.includes("education") ||
      message.includes("study") ||
      message.includes("degree") ||
      message.includes("university") ||
      message.includes("college")
    ) {
  setTimeout(() => scrollToSection("education"), 1000);
  return "Paras studied both Information & Communication Technology(2025) at Fontys University of Applied Sciences and Mechanical Engineering(2020) at Govt. Polytechnic College. This combination of fields highlights his adaptability, ability to learn across disciplines, and enthusiasm for tackling new challenges.";
    }

    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("hey")
    ) {
      return "Hello! I'm here to help you learn more about Paras Khosla. You can ask me about his experience, skills, projects, or how to contact him. What would you like to know?";
    }

    if (
      message.includes("bye") ||
      message.includes("goodbye") ||
      message.includes("see you") ||
      message.includes("take care") ||
      message.includes("doei") ||
      message.includes("doi") ||
      message.includes("later") ||
      message.includes("good night")
    ) {
      return "Goodbye! Feel free to explore the site more, and reach out anytime if you have questions. 👋";
    }

    if (
      message.includes("help") || 
      message.includes("what can you do")
    ) {
      return "I can help you with:\n• Learn about Paras's background and experience\n• Navigate to different sections (About, Experience, Projects, etc.)\n• Get his contact information\n• Learn about his skills and certifications\n\nJust ask me anything about Paras or the website!";
    }

    // Default response
    return "Hi! I'd be happy to help! You can ask me about Paras's experience, skills, projects, education, or how to contact him. Try asking something like 'Tell me about his experience' or 'How can I contact him?'";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(
      () => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: getBotResponse(inputValue),
          isBot: true,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
        setIsTyping(false);
      },
      1000 + Math.random() * 1000,
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    {
      label: "About Paras",
      action: () => {
        setInputValue("Tell me about Paras");
        // Auto-send the message with a slight delay for smooth UX
        setTimeout(() => {
          const userMessage: Message = {
            id: Date.now().toString(),
            text: "Tell me about Paras",
            isBot: false,
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, userMessage]);
          setInputValue("");
          setIsTyping(true);

          setTimeout(
            () => {
              const botResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: getBotResponse("Tell me about Paras"),
                isBot: true,
                timestamp: new Date(),
              };
              setMessages((prev) => [...prev, botResponse]);
              setIsTyping(false);
            },
            1000 + Math.random() * 1000,
          );
        }, 100);
      },
    },
    {
      label: "Experience",
      action: () => {
        setInputValue("What's his experience?");
        setTimeout(() => {
          const userMessage: Message = {
            id: Date.now().toString(),
            text: "What's his experience?",
            isBot: false,
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, userMessage]);
          setInputValue("");
          setIsTyping(true);

          setTimeout(
            () => {
              const botResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: getBotResponse("What's his experience?"),
                isBot: true,
                timestamp: new Date(),
              };
              setMessages((prev) => [...prev, botResponse]);
              setIsTyping(false);
            },
            1000 + Math.random() * 1000,
          );
        }, 100);
      },
    },
    {
      label: "Skills",
      action: () => {
        setInputValue("What are his skills?");
        setTimeout(() => {
          const userMessage: Message = {
            id: Date.now().toString(),
            text: "What are his skills?",
            isBot: false,
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, userMessage]);
          setInputValue("");
          setIsTyping(true);

          setTimeout(
            () => {
              const botResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: getBotResponse("What are his skills?"),
                isBot: true,
                timestamp: new Date(),
              };
              setMessages((prev) => [...prev, botResponse]);
              setIsTyping(false);
            },
            1000 + Math.random() * 1000,
          );
        }, 100);
      },
    },
    
    {
      label: "Contact",
      action: () => {
        setInputValue("How can I contact him?");
        setTimeout(() => {
          const userMessage: Message = {
            id: Date.now().toString(),
            text: "How can I contact him?",
            isBot: false,
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, userMessage]);
          setInputValue("");
          setIsTyping(true);

          setTimeout(
            () => {
              const botResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: getBotResponse("How can I contact him?"),
                isBot: true,
                timestamp: new Date(),
              };
              setMessages((prev) => [...prev, botResponse]);
              setIsTyping(false);
            },
            1000 + Math.random() * 1000,
          );
        }, 100);
      },
    },
  ];

  return (
    <div className="fixed bottom-24 right-4 sm:bottom-20 sm:right-6 z-50">
      {/* Chat Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-lg shadow-2xl border border-gray-200 w-80 sm:w-96 h-[450px] mb-4 flex flex-col overflow-hidden max-h-[80vh] sm:max-h-[450px]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                <div>
                  <h3 className="font-semibold text-sm">Paras's Assistant</h3>
                  <p className="text-xs opacity-90">Ask me anything!</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:bg-white/20 p-1 h-auto"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message, index) => {
                // Show initial message with delay and animation
                const isInitialMessage = index === 0;
                const shouldShow = !isInitialMessage || showInitialMessage;

                return shouldShow ? (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: isInitialMessage ? 0.2 : 0,
                    }}
                    className={`flex gap-2 ${message.isBot ? "" : "flex-row-reverse"}`}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: isInitialMessage ? 0.3 : 0.1,
                      }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.isBot
                          ? "bg-gradient-to-r from-green-100 to-blue-100"
                          : "bg-gradient-to-r from-gray-100 to-gray-200"
                      }`}
                    >
                      {message.isBot ? (
                        <Bot className="h-4 w-4 text-green-600" />
                      ) : (
                        <User className="h-4 w-4 text-gray-600" />
                      )}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: message.isBot ? -10 : 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: isInitialMessage ? 0.4 : 0.2,
                      }}
                      className={`max-w-[70%] p-3 rounded-lg text-sm whitespace-pre-line ${
                        message.isBot
                          ? "bg-gradient-to-r from-blue-50 to-purple-50 text-gray-800 border border-blue-200"
                          : "bg-gradient-to-r from-green-500 to-blue-500 text-white"
                      }`}
                    >
                      {message.text}
                    </motion.div>
                  </motion.div>
                ) : null;
              })}

              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-2"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-green-100 to-blue-100 flex items-center justify-center flex-shrink-0"
                    >
                      <Bot className="h-4 w-4 text-green-600" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg border border-blue-200"
                    >
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <AnimatePresence>
              {messages.length === 1 && showInitialMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="px-4 pb-2"
                >
                  <div className="flex flex-wrap gap-1">
                    {quickActions.map((action, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.7 + index * 0.1,
                          ease: "easeOut",
                        }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={action.action}
                          className="text-xs h-7 px-2 hover:scale-105 transition-transform duration-200"
                        >
                          {action.label}
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="p-4 border-t border-gray-200"
            >
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 text-sm transition-all duration-200 focus:scale-[1.02]"
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    size="sm"
                    className="px-3"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Toggle Button */}
      <motion.div
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        animate={{
          scale: hasInitiallyLoaded ? 1 : 0,
          rotate: hasInitiallyLoaded ? 0 : -180,
          opacity: hasInitiallyLoaded ? 1 : 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{
            y: hasInitiallyLoaded ? [0, -10, 0] : 0,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: 10,
            delay: 1.2,
          }}
        >
          <Button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            style={{
              animation: hasInitiallyLoaded
                ? "glow 2s ease-in-out infinite alternate"
                : "none",
            }}
            size="sm"
          >
            <AnimatePresence mode="wait">
              {isChatOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Chatbot;