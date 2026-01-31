import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, UserPlus, Building2, Mail, Phone, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const participationTypes = [
  { value: "visitor", label: "Visiteur / Participant" },
  { value: "speaker", label: "Intervenant / Speaker" },
  { value: "sponsor", label: "Sponsor / Partenaire" },
  { value: "exhibitor", label: "Exposant" },
  { value: "media", label: "Presse / Média" },
];

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    participationType: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.participationType) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email invalide",
        description: "Veuillez entrer une adresse email valide.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Inscription réussie !",
      description: "Nous vous contacterons bientôt avec plus d'informations.",
    });
    
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      participationType: "",
    });
    setIsSubmitting(false);
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy/80 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-lg bg-card rounded-2xl shadow-2xl overflow-hidden">
              {/* Gold accent top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/20 transition-colors z-10"
                aria-label="Fermer"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>

              {/* Header */}
              <div className="bg-gradient-to-r from-forest to-navy p-6 pb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center">
                    <UserPlus className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h2 className="font-montserrat font-bold text-xl text-white">
                      S'enregistrer au FEAC 2026
                    </h2>
                    <p className="text-sm text-white/70 font-inter">
                      24 - 26 Juin 2026 | Douala, Cameroun
                    </p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 text-sm font-medium">
                    <Users className="w-4 h-4 text-gold" />
                    Nom complet <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Jean Dupont"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="h-12 bg-muted/50 border-border focus:border-gold focus:ring-gold"
                    maxLength={100}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium">
                    <Mail className="w-4 h-4 text-gold" />
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jean.dupont@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="h-12 bg-muted/50 border-border focus:border-gold focus:ring-gold"
                    maxLength={255}
                  />
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <Label htmlFor="company" className="flex items-center gap-2 text-sm font-medium">
                    <Building2 className="w-4 h-4 text-gold" />
                    Entreprise / Organisation
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Nom de votre entreprise"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="h-12 bg-muted/50 border-border focus:border-gold focus:ring-gold"
                    maxLength={150}
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium">
                    <Phone className="w-4 h-4 text-gold" />
                    Téléphone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+237 6XX XXX XXX"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="h-12 bg-muted/50 border-border focus:border-gold focus:ring-gold"
                    maxLength={20}
                  />
                </div>

                {/* Participation Type */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-sm font-medium">
                    <UserPlus className="w-4 h-4 text-gold" />
                    Type de participation <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.participationType}
                    onValueChange={(value) => handleInputChange("participationType", value)}
                  >
                    <SelectTrigger className="h-12 bg-muted/50 border-border focus:border-gold focus:ring-gold">
                      <SelectValue placeholder="Sélectionnez votre rôle" />
                    </SelectTrigger>
                    <SelectContent>
                      {participationTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold w-full h-12 text-base mt-6"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    <>
                      <UserPlus className="w-5 h-5 mr-2" />
                      Confirmer l'inscription
                    </>
                  )}
                </Button>

                {/* Contact info */}
                <p className="text-xs text-muted-foreground text-center pt-2">
                  Pour plus d'informations, contactez-nous : <br />
                  <span className="text-gold font-medium">+237 699 03 56 45</span> | <span className="text-gold font-medium">+237 651 41 39 39</span>
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
