import React, { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  caseStudyUrl?: string;
  demoUrl?: string;
}

const ProjectCard = ({
  image = "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  title = "Project Title",
  description = "Short project description goes here",
  tags = ["UI Design", "Branding"],
  caseStudyUrl = "#",
  demoUrl = "#",
}: ProjectCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentPdfUrl, setCurrentPdfUrl] = useState("");
  const [currentPdfTitle, setCurrentPdfTitle] = useState("");
  const [isPdfLoading, setIsPdfLoading] = useState(true);
  const [showLoadingMessage, setShowLoadingMessage] = useState(false);
  const isPdfUrl = (url: string) => {
    return (
      url.toLowerCase().includes(".pdf") || url.toLowerCase().endsWith(".pdf")
    );
  };

  const handleButtonClick = (url: string, buttonType: string) => {
    if (isPdfUrl(url)) {
      setCurrentPdfUrl(url);
      setCurrentPdfTitle(`${title} - ${buttonType}`);
      setIsPdfLoading(true);
      setShowLoadingMessage(true);
      setIsDialogOpen(true);

      // Hide loading message after 1 second
      setTimeout(() => {
        setShowLoadingMessage(false);
      }, 2000);
    } else {
      window.open(url, "_blank");
    }
  };
  return (
    <>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white h-auto sm:h-[420px] flex flex-col">
        <div className="relative h-40 sm:h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardContent className="p-4 sm:p-5 flex-1 flex flex-col">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm flex-1 line-clamp-3">
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs px-2 py-1"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="px-4 sm:px-5 pb-4 sm:pb-5 pt-3 flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
          {caseStudyUrl && (
            <Button
              variant="outline"
              className="w-full sm:flex-1 border-gray-300 hover:bg-gray-100 hover:text-gray-900 text-sm"
              onClick={() => handleButtonClick(caseStudyUrl, "Case Study")}
            >
              Case Study
            </Button>
          )}

          {demoUrl && (
            <Button
              className="w-full sm:flex-1 text-sm"
              onClick={() => handleButtonClick(demoUrl, "Demo")}
            >
              Demo
            </Button>
          )}
        </CardFooter>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0">
          <DialogHeader className="p-6 pb-2">
            <DialogTitle className="text-xl font-semibold">
              {currentPdfTitle}
            </DialogTitle>
            {showLoadingMessage && (
              <div className="flex items-center space-x-2 mt-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                <span className="text-sm text-gray-600">
                  Document is loading...
                </span>
              </div>
            )}
          </DialogHeader>
          <div className="relative flex-1 px-6 pb-6">
            {isPdfLoading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-md">
                <div className="flex flex-col items-center space-y-3">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  <span className="text-gray-700 text-sm font-medium">
                    Document is loading…
                  </span>
                </div>
              </div>
            )}
            <iframe
              src={`${currentPdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
              className="w-full h-[calc(90vh-120px)] border-0 rounded-md bg-gray-100"
              title={currentPdfTitle}
              onLoad={() => setIsPdfLoading(false)}
            // <iframe
            //   src={`https://docs.google.com/viewer?embedded=true&url=${encodeURIComponent(currentPdfUrl)}`}
            //   className="w-full h-[calc(90vh-120px)] border-0 rounded-md bg-gray-100"
            //   title={currentPdfTitle}
            //   onLoad={() => setIsPdfLoading(false)}
            // />
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
