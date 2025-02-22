"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageModal({
  isOpen,
  onClose,
  image,
  images,
  onNavigate,
}) {
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        navigateImage(-1);
      } else if (e.key === "ArrowRight") {
        navigateImage(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [image, images]);

  const navigateImage = (step) => {
    if (!image) return;
    const currentIndex = images.findIndex((img) => img.id === image.id);
    const nextIndex = (currentIndex + step + images.length) % images.length;
    setDirection(step);
    onNavigate(images[nextIndex]);
  };

  if (!image) return null;

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
      className="border-2 border-red-600"
    >
      <DialogContent className="max-w-4xl w-full h-[80vh] p-0 overflow-hidden border-0 bg-background/80 backdrop-blur-sm">
        <div className="relative w-full h-full flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={image.id}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>
          {/* <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 text-primary-foreground"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button> */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-primary-foreground"
            onClick={() => navigateImage(-1)}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary-foreground"
            onClick={() => navigateImage(1)}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
