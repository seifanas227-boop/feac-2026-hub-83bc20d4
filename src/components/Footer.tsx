import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";
import feacLogo from "@/assets/feac-logo.jpg";
const quickLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Le Forum", href: "#vision" },
  { label: "Secteurs", href: "#sectors" },
  { label: "Intervenants", href: "#speakers" },
  { label: "Partenaires", href: "#partners" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-navy-gradient text-primary-foreground relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(45 100% 50%) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container-custom relative">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <img
                src={feacLogo}
                alt="Forum Économique Afrique Centrale"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-montserrat font-bold text-primary-foreground text-sm leading-tight">
                  FORUM ÉCONOMIQUE
                </p>
                <p className="font-montserrat font-medium text-gold text-xs">
                  AFRIQUE CENTRALE
                </p>
              </div>
            </div>
            
            <p className="text-primary-foreground/70 font-inter text-sm mb-6 italic">
              "Ensemble, réinventons la PME en Afrique centrale"
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-montserrat font-bold text-gold text-lg mb-6">
              Liens Rapides
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-gold font-inter text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-montserrat font-bold text-gold text-lg mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-primary-foreground/90 font-inter text-sm">
                    +237 699 03 56 45
                  </p>
                  <p className="text-primary-foreground/90 font-inter text-sm">
                    +237 651 41 39 39
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-primary-foreground/90 font-inter text-sm">
                  contact@forumeconomiqueac.com
                </p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-primary-foreground/90 font-inter text-sm">
                  Douala, Cameroun
                </p>
              </li>
            </ul>
          </motion.div>

          {/* Organizer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-montserrat font-bold text-gold text-lg mb-6">
              Organisateur
            </h3>
            <div className="p-5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
              <p className="font-montserrat font-bold text-primary-foreground mb-2">
                CABC
              </p>
              <p className="text-xs text-primary-foreground/60 font-inter mb-3">
                Central Africa Business Council
              </p>
              <p className="text-sm text-primary-foreground/70 font-inter mb-3">
                Organisation à but non lucratif promouvant la compétitivité des PMEs. Services: prospection de marchés, identification d'opportunités, et gestion de projets.
              </p>
              <p className="text-xs text-gold font-montserrat font-semibold italic">
                "Ensemble, réinventons la PME en Afrique centrale"
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60 font-inter text-center md:text-left">
            © 2026 Forum Économique Afrique Centrale. Tous droits réservés.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-gold transition-colors font-inter"
          >
            Retour en haut
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
