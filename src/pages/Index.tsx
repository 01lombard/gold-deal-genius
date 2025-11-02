import GoldCalculator from "@/components/GoldCalculator";
import InterestCalculator from "@/components/InterestCalculator";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-secondary/5" />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              Выгодный выкуп золота и займы под залог
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Профессиональная оценка, честные цены и быстрое обслуживание в Алматы
            </p>
          </div>
        </div>
      </section>

      {/* Calculators Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
            Калькуляторы
          </h2>
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
