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

const galleryImages = [
  {
    src: gallery1,
    title: "Conférence Plénière",
    description: "Session d'ouverture avec les délégués du forum économique",
  },
  {
    src: gallery2,
    title: "Networking Professionnel",
    description: "Échanges entre leaders d'entreprises et décideurs politiques",
  },
  {
    src: gallery3,
    title: "Panel d'Experts",
    description: "Discussions stratégiques sur l'intégration économique régionale",
  },
  {
    src: gallery4,
    title: "Signature d'Accords",
    description: "Partenariats commerciaux entre entreprises d'Afrique centrale",
  },
  {
    src: gallery5,
    title: "Espace Exposition",
    description: "Stands des entreprises et institutions participantes",
  },
  {
    src: gallery6,
    title: "Gala de Clôture",
    description: "Dîner officiel réunissant les participants du forum",
  },
];

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

  return (
    <section id="gallery" className="py-24 md:py-32 bg-muted relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-forest/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold font-montserrat font-semibold text-sm mb-4">
            ÉDITIONS PRÉCÉDENTES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-black text-foreground mb-4">
            Retour en
            <br />
            <span className="text-gradient-gold">Images</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            Revivez les moments forts des précédentes éditions du Forum Économique Afrique Centrale.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-montserrat font-bold text-primary-foreground mb-1">
                  {image.title}
                </h3>
                <p className="text-sm text-primary-foreground/80 font-inter opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {image.description}
                </p>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/50 rounded-2xl transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-navy/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].title}
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h3 className="text-xl font-montserrat font-bold text-primary-foreground mb-2">
                {galleryImages[selectedImage].title}
              </h3>
              <p className="text-primary-foreground/70 font-inter">
                {galleryImages[selectedImage].description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
