import { useLanguage } from "@/contexts/LanguageContext";
import benefitTimeIcon from "@/assets/benefit-time.png";
import benefitCashIcon from "@/assets/benefit-cash.png";
import benefit247Icon from "@/assets/benefit-247.png";
import benefitValueIcon from "@/assets/benefit-value.png";
import benefitSecurityIcon from "@/assets/benefit-security.png";
import benefitLocationIcon from "@/assets/benefit-location.png";

const BenefitsSection = () => {
  const { t } = useLanguage();

  const benefits = [
    { text: t.benefits.items.time, icon: benefitTimeIcon },
    { text: t.benefits.items.cash, icon: benefitCashIcon },
    { text: t.benefits.items.availability, icon: benefit247Icon },
    { text: t.benefits.items.value, icon: benefitValueIcon },
    { text: t.benefits.items.security, icon: benefitSecurityIcon },
    { text: t.benefits.items.location, icon: benefitLocationIcon },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gold/5 via-transparent to-secondary/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
          {t.benefits.title}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t.benefits.subtitle}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-gold/60 hover:shadow-[0_8px_30px_rgba(218,165,32,0.25)] transition-all duration-500 group hover:scale-[1.03] backdrop-blur-sm"
              style={{
                animation: `fade-in 0.5s ease-out ${index * 0.15}s both`
              }}
            >
              <div className="relative flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold-light/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                <img 
                  src={benefit.icon} 
                  alt="" 
                  className="relative w-full h-full object-contain drop-shadow-[0_4px_20px_rgba(218,165,32,0.4)] group-hover:drop-shadow-[0_8px_35px_rgba(218,165,32,0.7)] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6"
                  style={{
                    filter: 'brightness(1.1) contrast(1.05)',
                  }}
                />
              </div>
              <span className="text-foreground font-semibold group-hover:text-gold transition-colors duration-300 leading-tight">{benefit.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-gold/10 to-gold-light/5 border border-gold/20">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              {t.benefits.cta.title}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t.benefits.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+77770399921"
                className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-semibold shadow-[var(--shadow-gold)] hover:scale-105 hover:shadow-[0_15px_50px_-15px_hsl(43_100%_48%/0.4)] animate-fade-in"
              >
                {t.benefits.cta.callNow}
              </a>
              <a
                href="#calculators"
                className="px-8 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-300 font-semibold hover:scale-105 animate-fade-in"
              >
                {t.benefits.cta.calculate}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
