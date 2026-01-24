import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const speakers = [
  {
    name: "Alamine Ousmane Mey",
    role: "Parrain du Forum",
    title: "Ministre de l'Économie, de la Planification et de l'Aménagement du Territoire",
    country: "Cameroun",
    featured: true,
  },
  {
    name: "Achille Bassilekin III",
    role: "Invité d'honneur",
    title: "Ministre des PME, de l'Économie Sociale et de l'Artisanat",
    country: "Cameroun",
    featured: true,
  },
  {
    name: "Dieudonné Evou Mekou",
    role: "Intervenant principal",
    title: "Président de la BDEAC",
    country: "Afrique Centrale",
    featured: true,
  },
  {
    name: "Jean Baptiste Fouda",
    role: "Président du Forum",
    title: "Président du Forum Économique Afrique Centrale",
    country: "Cameroun",
    featured: false,
  },
  {
    name: "Debora Ngo Tonye",
    role: "Commissaire Général",
    title: "Commissaire général du Forum",
    country: "Cameroun",
    featured: false,
  },
  {
    name: "Dr Maximilien Emagna",
    role: "Comité Scientifique",
    title: "Président comité scientifique, DG Audace",
    country: "Cameroun",
    featured: false,
  },
];

export function SpeakersSection() {
  return (
    <section id="speakers" className="section-padding bg-muted relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-forest/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-navy/10 text-navy font-montserrat font-semibold text-sm mb-4">
            LES ACTEURS DU FORUM
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-black text-foreground mb-4">
            Intervenants
            <br />
            <span className="text-gradient-gold">de Haut Niveau</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            Décideurs politiques, experts économiques et leaders d'opinion réunis pour façonner l'avenir économique de l'Afrique centrale.
          </p>
        </motion.div>

        {/* Featured Speakers */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {speakers.filter(s => s.featured).map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="speaker-card group"
            >
              {/* Avatar Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-forest to-navy overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="text-5xl font-montserrat font-black text-gold">
                      {speaker.name.charAt(0)}
                    </span>
                  </div>
                </div>
                
                {/* Role Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-gold text-navy text-xs font-montserrat font-bold">
                    {speaker.role}
                  </span>
                </div>

                {/* Social Links */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-gold transition-colors">
                    <Linkedin className="w-4 h-4 text-primary-foreground" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-gold transition-colors">
                    <Twitter className="w-4 h-4 text-primary-foreground" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-bold text-foreground mb-1">
                  {speaker.name}
                </h3>
                <p className="text-sm text-muted-foreground font-inter mb-2">
                  {speaker.title}
                </p>
                <span className="inline-block px-3 py-1 rounded-full bg-forest/10 text-forest text-xs font-inter">
                  {speaker.country}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Speakers */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.filter(s => !s.featured).map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-gold/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-forest to-navy flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-montserrat font-bold text-gold">
                  {speaker.name.charAt(0)}
                </span>
              </div>
              <div>
                <h4 className="font-montserrat font-bold text-foreground text-sm">
                  {speaker.name}
                </h4>
                <p className="text-xs text-muted-foreground font-inter">
                  {speaker.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
