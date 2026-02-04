import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Download, UserPlus, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/CountdownTimer";
import { RegistrationModal } from "@/components/RegistrationModal";
import heroVideo from "@/assets/hero-video.mp4";
import heroBg from "@/assets/hero-bg.jpg";
import feacLogo from "@/assets/feac-logo.jpg";
export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return <>
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video autoPlay loop muted playsInline poster={heroBg} className="w-full h-full object-cover">
            <source src={heroVideo} type="video/mp4" />
            {/* Fallback to image if video doesn't load */}
            <img src={heroBg} alt="Port africain au coucher du soleil" className="w-full h-full object-cover" />
          </video>
          <div className="absolute inset-0 bg-hero-gradient" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-forest-light/10 rounded-full blur-3xl animate-float animate-delay-300" />

        {/* Content */}
        <div className="relative z-10 container-custom text-center pt-24 pb-16">
          {/* Logo */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6
        }} className="flex justify-center mb-6">
            <img src={feacLogo} alt="FEAC Logo" className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-gold/30" />
          </motion.div>

          {/* Edition Badge */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-gradient mb-6">
            <span className="font-montserrat font-bold text-navy text-sm">
              4ème Édition | Central Africa Business Forum
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-black text-primary-foreground mb-4 leading-tight">
            Afrique Centrale,
            <br />
            <span className="text-gradient-gold">Un Marché Émergent</span>
            <br />
            dans la ZLECAF
          </motion.h1>

          {/* Subtitle */}
          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 font-inter">
            Opportunités et défis pour les entreprises
          </motion.p>

          {/* Event Info */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <Calendar className="w-5 h-5 text-gold" />
              <span className="font-montserrat font-semibold text-primary-foreground">
                24 - 26 Juin 2026
              </span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <MapPin className="w-5 h-5 text-gold" />
              <span className="font-montserrat font-semibold text-primary-foreground">
                Douala, Cameroun
              </span>
            </div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.45
        }} className="mb-8">
            <p className="text-sm text-primary-foreground/60 font-inter mb-3 uppercase tracking-wider">
              L'événement commence dans
            </p>
            <CountdownTimer />
          </motion.div>

          {/* Organizer Badge */}
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.5
        }} className="text-sm text-primary-foreground/60 font-inter mb-6">
            Organisé par le <span className="text-gold font-semibold">Central Africa Business Council (CABC)</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.5
        }} className="flex flex-wrap justify-center gap-4">
            <Button className="btn-gold text-lg py-6 px-10" onClick={() => setIsModalOpen(true)}>
              <UserPlus className="w-5 h-5 mr-2" />
              S'enregistrer
            </Button>
            <Button variant="outline" className="btn-outline-light text-lg py-6 px-10">
              <Download className="w-5 h-5 mr-2" />
              Télécharger le dossier
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.8
        }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
            
          </motion.div>
        </div>
      </section>

      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>;
}