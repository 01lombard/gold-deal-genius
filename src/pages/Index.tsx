import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import GoldCalculator from "@/components/GoldCalculator";
import InterestCalculator from "@/components/InterestCalculator";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import heroImage from "@/assets/hero-image.png";
import logo from "@/assets/logo.jpeg";

const Index = () => {
  const [goldPrice, setGoldPrice] = useState(0);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <img 
              src={logo} 
              alt="01 ломбард логотип" 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
            />
            <div className="min-w-0">
              <h1 className="text-sm sm:text-base md:text-xl font-bold text-foreground truncate">{t.header.title}</h1>
              <p className="text-[10px] sm:text-xs text-muted-foreground truncate">{t.header.subtitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <LanguageSwitcher />
            <a 
              href="tel:+77770399921" 
              className="px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors font-medium text-[10px] sm:text-xs md:text-sm whitespace-nowrap"
            >
              {t.header.phone}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gold/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 items-center">
            {/* Text Content */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent leading-tight px-2 sm:px-0">
                {t.hero.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 px-2 sm:px-0">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 px-2 sm:px-0">
                <a
                  href="tel:+77770399921"
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-semibold text-base sm:text-lg shadow-[var(--shadow-gold)] hover:scale-105"
                >
                  {t.hero.callNow}
                </a>
                <a
                  href="#calculators"
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-500 font-semibold text-base sm:text-lg animate-[scale-in_2s_ease-in-out_infinite] hover:scale-110 hover:shadow-[var(--shadow-gold)] shadow-lg"
                >
                  {t.hero.calculate}
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 px-2 sm:px-0">
                <div className="p-2.5 sm:p-3 bg-card/50 rounded-lg border border-border/50">
                  <div className="text-xl sm:text-2xl font-bold text-gold mb-0.5 sm:mb-1">10+</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground leading-tight">{t.hero.stats.yearsOnMarket}</div>
                </div>
                <div className="p-2.5 sm:p-3 bg-card/50 rounded-lg border border-border/50">
                  <div className="text-xl sm:text-2xl font-bold text-gold mb-0.5 sm:mb-1">95%</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground leading-tight">{t.hero.stats.fromValue}</div>
                </div>
                <div className="p-2.5 sm:p-3 bg-card/50 rounded-lg border border-border/50">
                  <div className="text-xl sm:text-2xl font-bold text-gold mb-0.5 sm:mb-1">7 {t.hero.stats.evaluation.includes('мин') ? 'мин' : 'мин'}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground leading-tight">{t.hero.stats.evaluation}</div>
                </div>
                <div className="p-2.5 sm:p-3 bg-card/50 rounded-lg border border-border/50">
                  <div className="text-xl sm:text-2xl font-bold text-gold mb-0.5 sm:mb-1">24/7</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground leading-tight">{t.hero.stats.workTime}</div>
                </div>
              </div>
            </div>

            {/* Hero Image - Larger and Animated */}
            <div className="lg:col-span-3 relative px-2 sm:px-0">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-[var(--shadow-gold)] border border-gold/20 sm:border-2 animate-fade-in hover:scale-105 transition-transform duration-700">
                <img 
                  src={heroImage} 
                  alt="Профессиональная оценка золота в 01 ломбарде" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* How It Works */}
      <HowItWorksSection />

      {/* Calculators Section */}
      <section id="calculators" className="py-12 sm:py-16 px-3 sm:px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent px-2">
            {t.calculators.title}
          </h2>
          <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 px-4">
            {t.calculators.subtitle}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <GoldCalculator onPriceChange={setGoldPrice} />
            <InterestCalculator amount={goldPrice} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 text-center text-xs sm:text-sm text-muted-foreground">
          <p>{t.footer.copyright}</p>
        </div>
      </footer>

      {/* WhatsApp Widget */}
      <WhatsAppWidget />
    </div>
  );
};

export default Index;
