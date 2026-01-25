import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import feacLogo from "@/assets/feac-logo.jpg";
const navItems = [
  { label: "Accueil", href: "#hero" },
  { label: "Le Forum", href: "#vision" },
  { label: "Secteurs", href: "#sectors" },
  { label: "Intervenants", href: "#speakers" },
  { label: "Partenaires", href: "#partners" },
  { label: "Contact", href: "#footer" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-nav py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <img
              src={feacLogo}
              alt="Forum Économique Afrique Centrale"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <p className="font-montserrat font-bold text-primary-foreground text-sm leading-tight">
                FORUM ÉCONOMIQUE
              </p>
              <p className="font-montserrat font-medium text-gold text-xs">
                AFRIQUE CENTRALE
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-inter text-sm text-primary-foreground/80 hover:text-gold transition-colors animated-underline"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm" className="btn-outline-light text-sm py-2">
              <Download className="w-4 h-4 mr-2" />
              Dossier
            </Button>
            <Button className="btn-gold text-sm py-2 px-6">
              <UserPlus className="w-4 h-4 mr-2" />
              S'enregistrer
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-primary-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-nav mt-2"
          >
            <div className="container-custom py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block font-inter text-primary-foreground/90 hover:text-gold py-2 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border/20">
                <Button variant="outline" className="btn-outline-light w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger le dossier
                </Button>
                <Button className="btn-gold w-full">
                  <UserPlus className="w-4 h-4 mr-2" />
                  S'enregistrer
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
