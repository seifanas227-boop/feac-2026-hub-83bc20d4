import { motion } from "framer-motion";
import { 
  Presentation, 
  Handshake, 
  Rocket, 
  GraduationCap,
  Building2,
  Banknote,
  Users,
  Newspaper,
  ArrowRight
} from "lucide-react";

const activities = [
  {
    icon: Presentation,
    title: "Expositions",
    description: "Expositions économiques et sectorielles",
    color: "gold",
  },
  {
    icon: Handshake,
    title: "Conférences-débats",
    description: "Conférences-débats de haut niveau",
    color: "forest",
  },
  {
    icon: Rocket,
    title: "B2B & Networking",
    description: "Rencontres B2B et networking stratégique",
    color: "navy",
  },
  {
    icon: GraduationCap,
    title: "Pitchs & Coaching",
    description: "Pitchs de projets innovants et coaching entrepreneurs",
    color: "gold",
  },
];

const participants = [
  { icon: Building2, label: "Institutions publiques", count: "50+" },
  { icon: Banknote, label: "Bailleurs de fonds", count: "80+" },
  { icon: Users, label: "Chambres consulaires", count: "200+" },
  { icon: Newspaper, label: "Médias économiques", count: "30+" },
];

export function EventHighlightsSection() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} 
        />
      </div>

      <div className="container-custom relative">
        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column - Activities */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-black text-foreground tracking-tight leading-none">
                Programme
                <br />
                <span className="text-gradient-gold">& Activités</span>
              </h2>
            </motion.div>

            {/* Activity Cards - 2x2 Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="group relative"
                >
                  <div className={`
                    relative p-6 rounded-2xl border transition-all duration-500 h-full
                    ${activity.color === 'gold' 
                      ? 'bg-gold/5 border-gold/20 hover:bg-gold/10 hover:border-gold/40' 
                      : activity.color === 'forest'
                      ? 'bg-forest/5 border-forest/20 hover:bg-forest/10 hover:border-forest/40'
                      : 'bg-navy/5 border-navy/20 hover:bg-navy/10 hover:border-navy/40'
                    }
                  `}>
                    {/* Icon */}
                    <div className={`
                      w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110
                      ${activity.color === 'gold' 
                        ? 'bg-gold text-navy' 
                        : activity.color === 'forest'
                        ? 'bg-forest text-primary-foreground'
                        : 'bg-navy text-primary-foreground'
                      }
                    `}>
                      <activity.icon className="w-7 h-7" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-montserrat font-bold text-foreground mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                      {activity.description}
                    </p>

                    {/* Arrow indicator */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className={`w-5 h-5 ${
                        activity.color === 'gold' ? 'text-gold' : 
                        activity.color === 'forest' ? 'text-forest' : 'text-navy'
                      }`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Participants */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-24"
            >
              {/* Participants Header */}
              <div className="mb-8">
                <span className="inline-block px-3 py-1.5 rounded-full bg-forest/10 text-forest font-montserrat font-semibold text-xs mb-4">
                  QUI PARTICIPE ?
                </span>
                <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground">
                  Un écosystème<br />complet
                </h3>
              </div>

              {/* Participant Stats */}
              <div className="space-y-4 mb-8">
                {participants.map((participant, index) => (
                  <motion.div
                    key={participant.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + 0.1 * index }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted border border-border hover:border-gold/30 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center flex-shrink-0 group-hover:border-gold/50 transition-colors">
                      <participant.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-montserrat font-bold text-foreground text-sm">
                        {participant.label}
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-montserrat font-black text-gradient-gold">
                        {participant.count}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="p-6 rounded-2xl bg-navy text-primary-foreground"
              >
                <h4 className="font-montserrat font-bold text-lg mb-2">
                  Rejoignez-nous
                </h4>
                <p className="text-primary-foreground/80 text-sm font-inter mb-4">
                  3 jours d'échanges, de networking et d'opportunités business.
                </p>
                <a 
                  href="#register"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gold text-navy font-montserrat font-semibold text-sm hover:bg-gold/90 transition-colors"
                >
                  S'inscrire maintenant
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}