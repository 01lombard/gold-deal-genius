import { useState } from "react";
import GoldCalculator from "@/components/GoldCalculator";
import InterestCalculator from "@/components/InterestCalculator";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import heroImage from "@/assets/hero-image.png";
import logo from "@/assets/logo.jpeg";

const Index = () => {
  const [goldPrice, setGoldPrice] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="01 ломбард логотип" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h1 className="text-base md:text-xl font-bold text-foreground">01 ломбард</h1>
              <p className="text-xs text-muted-foreground">Надежность и выгода</p>
            </div>
          </div>
        <a 
          href="tel:+77770399921" 
          className="px-3 md:px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors font-medium text-xs md:text-sm"
        >
          +7 (777) 039-99-21
        </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gold/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            {/* Text Content */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent leading-tight">
                Выгодный выкуп золота
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                Профессиональная оценка за 7 минут • Честные цены • Выплата сразу наличными
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                <a
                  href="tel:+77770399921"
                  className="px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-semibold text-lg shadow-[var(--shadow-gold)] hover:scale-105"
                >
                  Позвонить сейчас
                </a>
                <a
                  href="#calculators"
                  className="px-8 py-4 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-500 font-semibold text-lg animate-[scale-in_2s_ease-in-out_infinite] hover:scale-110 hover:shadow-[var(--shadow-gold)] shadow-lg"
                >
                  Рассчитать стоимость
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-card/50 rounded-lg border border-border/50">
                  <div className="text-2xl font-bold text-gold mb-1">10+</div>
                  <div className="text-xs text-muted-foreground">лет на рынке</div>
                </div>
                <div className="p-3 bg-card/50 rounded-lg border border-border/50">
                  <div className="text-2xl font-bold text-gold mb-1">95%</div>
                  <div className="text-xs text-muted-foreground">от стоимости</div>
                </div>
                <div className="p-3 bg-card/50 rounded-lg border border-border/50">
                  <div className="text-2xl font-bold text-gold mb-1">7 мин</div>
                  <div className="text-xs text-muted-foreground">оценка</div>
                </div>
                <div className="p-3 bg-card/50 rounded-lg border border-border/50">
                  <div className="text-2xl font-bold text-gold mb-1">24/7</div>
                  <div className="text-xs text-muted-foreground">работаем</div>
                </div>
              </div>
            </div>

            {/* Hero Image - Larger and Animated */}
            <div className="lg:col-span-3 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-gold)] border-2 border-gold/20 animate-fade-in hover:scale-105 transition-transform duration-700">
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
      <section id="calculators" className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
            Онлайн калькуляторы
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Рассчитайте предварительную стоимость сделки прямо сейчас
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
      <footer className="border-t border-border/50 bg-card/50 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 01 ломбард. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
