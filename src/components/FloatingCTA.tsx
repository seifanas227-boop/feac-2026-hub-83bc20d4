import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserPlus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RegistrationModal } from "@/components/RegistrationModal";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approximately 100vh)
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      
      if (scrollY > heroHeight * 0.8 && !isDismissed) {
        setIsVisible(true);
      } else if (scrollY <= heroHeight * 0.5) {
        setIsVisible(false);
        setIsDismissed(false); // Reset dismissal when back at top
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20 
            }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
          >
            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="w-8 h-8 rounded-full bg-muted/80 backdrop-blur-sm flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Fermer"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
            
            {/* Main CTA */}
            <Button 
              className="btn-gold shadow-2xl group relative overflow-hidden"
              onClick={handleRegisterClick}
            >
              {/* Animated pulse ring */}
              <span className="absolute inset-0 rounded-xl">
                <span className="absolute inset-0 rounded-xl animate-ping bg-gold/30" style={{ animationDuration: "2s" }} />
              </span>
              
              <UserPlus className="w-5 h-5 mr-2 relative z-10" />
              <span className="relative z-10 font-montserrat font-bold">S'enregistrer</span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
