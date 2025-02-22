"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ImageModal from "./ImageModal";

export default function GalleryGrid({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 max-w-7xl mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-10 px-4">
        {images.map((image) => (
          <motion.div
            key={image.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer overflow-hidden rounded-lg "
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={300}
              height={200}
              className="object-cover w-full h-[400px] transition-transform duration-300 hover:scale-110"
            />
          </motion.div>
        ))}
      </div>
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        image={selectedImage}
        images={images}
        onNavigate={setSelectedImage}
      />
    </>
  );
}
