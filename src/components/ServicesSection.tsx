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
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
          {t.services.title}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t.services.subtitle}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border/50 hover:border-gold/50 hover:shadow-[var(--shadow-gold)] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold/20 to-gold-light/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
