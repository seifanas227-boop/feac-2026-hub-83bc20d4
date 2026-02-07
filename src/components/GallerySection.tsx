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
  return (
    <section id="gallery" className="py-24 md:py-32 bg-muted">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
            Galerie Photo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Revivez les moments forts des éditions précédentes du Forum Économique Afrique Centrale
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-montserrat font-semibold text-lg">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white hover:text-gold transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 p-2 text-white hover:text-gold transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 p-2 text-white hover:text-gold transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <div className="max-w-4xl max-h-[80vh] px-12" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].title}
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-white font-montserrat font-semibold text-xl">
                {galleryImages[selectedImage].title}
              </h3>
              <p className="text-white/70">{galleryImages[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}