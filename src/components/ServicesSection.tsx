import { useLanguage } from "@/contexts/LanguageContext";
import { Coins, Shield, Clock, TrendingUp } from "lucide-react";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Coins,
      title: t.services.items.goldBuyout.title,
      description: t.services.items.goldBuyout.description,
    },
    {
      icon: TrendingUp,
      title: t.services.items.loans.title,
      description: t.services.items.loans.description,
    },
    {
      icon: Shield,
      title: t.services.items.reliability.title,
      description: t.services.items.reliability.description,
    },
    {
      icon: Clock,
      title: t.services.items.fastService.title,
      description: t.services.items.fastService.description,
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 px-3 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent px-2">
          {t.services.title}
        </h2>
        <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          {t.services.subtitle}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 rounded-xl bg-card border border-border/50 hover:border-gold/50 hover:shadow-[var(--shadow-gold)] transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-gold/20 to-gold-light/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
