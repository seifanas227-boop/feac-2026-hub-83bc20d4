import { motion } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Gallery images
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
const galleryImages = [{
  src: gallery1,
  title: "Conférence Plénière",
  description: "Session d'ouverture avec les délégués du forum économique"
}, {
  src: gallery2,
  title: "Networking Professionnel",
  description: "Échanges entre leaders d'entreprises et décideurs politiques"
}, {
  src: gallery3,
  title: "Panel d'Experts",
  description: "Discussions stratégiques sur l'intégration économique régionale"
}, {
  src: gallery4,
  title: "Signature d'Accords",
  description: "Partenariats commerciaux entre entreprises d'Afrique centrale"
}, {
  src: gallery5,
  title: "Espace Exposition",
  description: "Stands des entreprises et institutions participantes"
}, {
  src: gallery6,
  title: "Gala de Clôture",
  description: "Dîner officiel réunissant les participants du forum"
}];
export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };
  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };
  return;
}