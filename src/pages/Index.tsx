import GoldCalculator from "@/components/GoldCalculator";
import InterestCalculator from "@/components/InterestCalculator";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import { Gem } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
              <Gem className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Золотой Ломбард</h1>
              <p className="text-xs text-muted-foreground">Надежность и выгода</p>
            </div>
          </div>
          <a 
            href="tel:+77771234567" 
            className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors font-medium text-sm"
          >
            +7 (777) 123-45-67
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gold/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-gold/10 border border-gold/20">
              <span className="text-sm font-medium text-gold">🏆 Лидер рынка ломбардных услуг</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent leading-tight">
              Выгодный выкуп золота в Алматы
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональная оценка за 7 минут • Честные цены • Выплата сразу наличными • 20 отделений по городу
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+77771234567"
                className="px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-semibold text-lg shadow-[var(--shadow-gold)] hover:scale-105"
              >
                Позвонить сейчас
              </a>
              <a
                href="#calculators"
                className="px-8 py-4 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-300 font-semibold text-lg"
              >
                Рассчитать стоимость
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="p-4">
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">10+</div>
                <div className="text-sm text-muted-foreground">лет на рынке</div>
              </div>
              <div className="p-4">
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">20</div>
                <div className="text-sm text-muted-foreground">отделений</div>
              </div>
              <div className="p-4">
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">7 мин</div>
                <div className="text-sm text-muted-foreground">оценка</div>
              </div>
              <div className="p-4">
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">работаем</div>
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
            <GoldCalculator />
            <InterestCalculator />
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
          <p>© 2024 Золотой Ломбард. Все права защищены.</p>
          <p className="mt-2">Лицензия на осуществление ломбардной деятельности</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
