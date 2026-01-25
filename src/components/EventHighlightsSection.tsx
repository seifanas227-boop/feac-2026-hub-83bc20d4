import { motion } from "framer-motion";
import { Users, Building2, Banknote, Newspaper, Presentation, Handshake, GraduationCap, Rocket } from "lucide-react";
import panelImage from "@/assets/panel-discussion.png";

const activities = [
  {
    icon: Presentation,
    title: "Conférences de Haut Niveau",
    description: "Analyses prospectives et décisions concrètes",
  },
  {
    icon: Handshake,
    title: "Rencontres B2B",
    description: "Networking stratégique avec investisseurs",
  },
  {
    icon: Rocket,
    title: "Pitchs de Projets",
    description: "Projets innovants et opportunités de financement",
  },
  {
    icon: GraduationCap,
    title: "Coaching Entrepreneurs",
    description: "Formation pour jeunes entrepreneurs",
  },
];

const attendees = [
  {
    icon: Building2,
    label: "Institutions Publiques",
    description: "Ministères et agences gouvernementales",
  },
  {
    icon: Banknote,
    label: "Partenaires Financiers",
    description: "BAD, Banque Mondiale, BDEAC",
  },
  {
    icon: Users,
    label: "Banques d'Investissement",
    description: "Acteurs financiers régionaux et internationaux",
  },
  {
    icon: Newspaper,
    label: "Médias Économiques",
    description: "Couverture médiatique continentale",
  },
];

export function EventHighlightsSection() {
  return (
    <section className="section-padding bg-muted relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-forest/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-forest/10 text-forest font-montserrat font-semibold text-sm mb-4">
            TEMPS FORTS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-black text-foreground mb-4">
            Activités &
            <br />
            <span className="text-gradient-gold">Participants</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            Un programme riche en échanges, analyses et opportunités d'affaires pour tous les acteurs économiques.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={panelImage}
                alt="Panel de discussion au Forum"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground font-montserrat font-bold text-lg">
                  Éditions Précédentes
                </p>
                <p className="text-primary-foreground/80 font-inter text-sm">
                  Des rencontres de haut niveau pour l'avenir économique de l'Afrique centrale
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Activities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-montserrat font-bold text-foreground mb-6">
              Au Programme
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="p-4 rounded-xl bg-card border border-border hover:border-gold/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-3">
                    <activity.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h4 className="font-montserrat font-bold text-foreground text-sm mb-1">
                    {activity.title}
                  </h4>
                  <p className="text-xs text-muted-foreground font-inter">
                    {activity.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-montserrat font-bold text-foreground mb-6">
              Qui Participe ?
            </h3>
            <div className="space-y-3">
              {attendees.map((attendee, index) => (
                <motion.div
                  key={attendee.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-forest/5 border border-forest/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-forest flex items-center justify-center flex-shrink-0">
                    <attendee.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-foreground text-sm">
                      {attendee.label}
                    </h4>
                    <p className="text-xs text-muted-foreground font-inter">
                      {attendee.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
