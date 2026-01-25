import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeUnit {
  value: number;
  label: string;
}

function getTimeRemaining(targetDate: Date): TimeUnit[] {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  if (diff <= 0) {
    return [
      { value: 0, label: "Jours" },
      { value: 0, label: "Heures" },
      { value: 0, label: "Minutes" },
      { value: 0, label: "Secondes" },
    ];
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return [
    { value: days, label: "Jours" },
    { value: hours, label: "Heures" },
    { value: minutes, label: "Minutes" },
    { value: seconds, label: "Secondes" },
  ];
}

export function CountdownTimer() {
  // Target date: June 24, 2026
  const targetDate = new Date("2026-06-24T00:00:00");
  const [timeUnits, setTimeUnits] = useState<TimeUnit[]>(getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeUnits(getTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="relative overflow-hidden rounded-2xl bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 p-3 md:p-4 min-w-[70px] md:min-w-[90px]">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Value */}
            <motion.span
              key={unit.value}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
              className="block text-2xl md:text-4xl font-montserrat font-black text-gold text-center"
            >
              {String(unit.value).padStart(2, "0")}
            </motion.span>
            
            {/* Label */}
            <span className="block text-[10px] md:text-xs font-inter font-medium text-primary-foreground/70 text-center uppercase tracking-wider mt-1">
              {unit.label}
            </span>
          </div>
          
          {/* Separator colon */}
          {index < timeUnits.length - 1 && (
            <span className="absolute -right-2 md:-right-3 top-1/2 -translate-y-1/2 text-gold/60 text-xl md:text-2xl font-bold hidden sm:block">
              :
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}
