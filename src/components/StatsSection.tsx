import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, TrendingUp, DollarSign, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 200,
    suffix: "M",
    label: "Habitants",
    description: "Population de l'Afrique centrale",
    color: "gold",
  },
  {
    icon: TrendingUp,
    value: 5,
    suffix: "%",
    label: "Croissance",
    description: "Moyenne sur les 5 dernières années",
    color: "forest",
  },
  {
    icon: DollarSign,
    value: 523,
    suffix: "Mds $",
    label: "PIB (PPA)",
    description: "Produit Intérieur Brut régional",
    color: "navy",
  },
  {
    icon: Globe,
    value: 6.67,
    suffix: "M km²",
    label: "Superficie",
    description: "Un territoire vaste et riche",
    color: "gold",
    isDecimal: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

// Animated counter hook
function useAnimatedCounter(target: number, isInView: boolean, duration = 2000, isDecimal = false): string {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function: easeOutExpo
      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      const currentValue = target * easeOutExpo;
      
      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, target, duration]);

  if (isDecimal) {
    return count.toFixed(2).replace(".", ",");
  }
  return Math.floor(count).toString();
}

function AnimatedStatValue({ target, isInView, isDecimal = false }: { target: number; isInView: boolean; isDecimal?: boolean }) {
  const displayValue = useAnimatedCounter(target, isInView, 2000, isDecimal);
  return <>{displayValue}</>;
}

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="py-24 md:py-32 bg-muted relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      
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
            L'AFRIQUE CENTRALE EN CHIFFRES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-black text-foreground mb-4">
            Le Nouveau Terrain de Jeu
            <br />
            <span className="text-gradient-gold">des Entreprises</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-inter">
            La ZLECAF ouvre une ère nouvelle avec un accès à un marché continental de <strong>1,3 milliard de consommateurs</strong> et un <strong>PIB de 3 000 milliards de dollars</strong>.
          </p>
        </motion.div>

        {/* Bento Grid Stats */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className={`bento-card ${
                index === 0 ? "bento-card-gold" : 
                index === 1 ? "bento-card-forest" :
                index === 2 ? "bento-card-navy" : ""
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
                index === 0 ? "bg-navy/20" :
                index === 3 ? "bg-gold-gradient" : "bg-primary-foreground/10"
              }`}>
                <stat.icon className={`w-7 h-7 ${
                  index === 0 ? "text-navy" :
                  index === 3 ? "text-navy" : "text-primary-foreground"
                }`} />
              </div>
              
              <div className="mb-2">
                <span className={`text-4xl md:text-5xl font-montserrat font-black ${
                  index === 0 ? "text-navy" :
                  index === 3 ? "text-gradient-gold" : "text-primary-foreground"
                }`}>
                  <AnimatedStatValue 
                    target={stat.value} 
                    isInView={isInView} 
                    isDecimal={stat.isDecimal} 
                  />
                </span>
                <span className={`text-xl font-montserrat font-bold ml-1 ${
                  index === 0 ? "text-navy/80" :
                  index === 3 ? "text-gold" : "text-primary-foreground/80"
                }`}>
                  {stat.suffix}
                </span>
              </div>
              
              <h3 className={`text-lg font-montserrat font-bold mb-1 ${
                index === 0 ? "text-navy" :
                index === 3 ? "text-foreground" : "text-primary-foreground"
              }`}>
                {stat.label}
              </h3>
              
              <p className={`text-sm font-inter ${
                index === 0 ? "text-navy/70" :
                index === 3 ? "text-muted-foreground" : "text-primary-foreground/70"
              }`}>
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
