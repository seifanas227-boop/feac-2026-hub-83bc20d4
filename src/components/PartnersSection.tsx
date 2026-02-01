import { motion } from "framer-motion";
import { BookOpen, Megaphone, Mic, Video, Award, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: BookOpen,
    title: "Magazine du Forum",
    description: "Une page de publicité et votre logo sur la page réservée aux partenaires",
  },
  {
    icon: Megaphone,
    title: "Bannière Publicitaire",
    description: "Visibilité sur le site web officiel, Facebook, X et LinkedIn du forum",
  },
  {
    icon: Mic,
    title: "Prise de Parole",
    description: "Intervention comme speaker pendant les plénières",
  },
  {
    icon: Video,
    title: "Spot Vidéo",
    description: "Diffusion pendant la cérémonie d'ouverture",
  },
  {
    icon: Award,
    title: "Branding Premium",
    description: "Roll-up, mur de marques, écran géant, badges et cartons d'invitation",
  },
  {
    icon: Users,
    title: "Exposition",
    description: "Stands disponibles pour présenter vos produits et services",
  },
];

const whyParticipate = [
  {
    title: "Rencontrer",
    description: "Des investisseurs susceptibles de porter votre projet et trouver des financements",
  },
  {
    title: "Découvrir",
    description: "Les opportunités d'affaires en zone CEMAC/CEEAC dans l'agribusiness, le digital, les énergies renouvelables",
  },
  {
    title: "Investir",
    description: "Sur les PMEs en zone CEMAC pour les rendre plus compétitives sur le marché international",
  },
];

export function PartnersSection() {
  return (
    <section id="partners" className="py-24 md:py-32 bg-forest-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/10 to-transparent" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Become Partner */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold font-montserrat font-semibold text-sm mb-6">
              DEVENIR PARTENAIRE
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-black text-primary-foreground mb-6 leading-tight">
              Sponsors, Mécènes,
              <br />
              <span className="text-gold">Exposants</span>
            </h2>
            
            <p className="text-lg text-primary-foreground/80 mb-10 font-inter leading-relaxed">
              Accédez à un monde de privilèges pendant les 3 jours du forum. Nous vous réservons le meilleur dans notre dispositif de promotion.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-primary-foreground text-sm mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-xs text-primary-foreground/60 font-inter">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button className="btn-gold">
              Devenir Partenaire
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          {/* Right - Why Participate */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground font-montserrat font-semibold text-sm mb-6">
              POURQUOI PARTICIPER ?
            </span>
            
            <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-primary-foreground mb-8">
              Les Temps Forts du Forum
            </h3>

            {/* Why Participate Cards */}
            <div className="space-y-6 mb-10">
              {whyParticipate.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex gap-4 p-5 rounded-xl bg-primary-foreground/5 border-l-4 border-gold"
                >
                  <div>
                    <h4 className="font-montserrat font-bold text-gold text-lg mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-primary-foreground/70 font-inter">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Event Highlights */}
            <div className="p-6 rounded-2xl bg-gold-gradient">
              <h4 className="font-montserrat font-bold text-navy text-lg mb-4">
                Au Programme
              </h4>
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "Expositions économiques",
                  "Conférences-débats",
                  "Rencontres B2B",
                  "Pitchs de projets innovants",
                  "Formations entrepreneurs",
                  "Networking stratégique",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-navy/80 font-inter">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
