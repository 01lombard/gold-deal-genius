import benefitTimeIcon from "@/assets/benefit-time.png";
import benefitCashIcon from "@/assets/benefit-cash.png";
import benefit247Icon from "@/assets/benefit-247.png";
import benefitValueIcon from "@/assets/benefit-value.png";
import benefitSecurityIcon from "@/assets/benefit-security.png";
import benefitLocationIcon from "@/assets/benefit-location.png";

const benefits = [
  { text: "Оценка за 7-15 минут", icon: benefitTimeIcon },
  { text: "Выплата сразу наличными", icon: benefitCashIcon },
  { text: "Работаем круглосуточно, без перерывов и выходных", icon: benefit247Icon },
  { text: "Выкуп до 95% от стоимости", icon: benefitValueIcon },
  { text: "Конфиденциальность сделок", icon: benefitSecurityIcon },
  { text: "Удобное расположение", icon: benefitLocationIcon },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gold/5 via-transparent to-secondary/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
          Почему выбирают нас
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Более 10 лет на рынке Казахстана — надежность и честность в каждой сделке
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50 hover:border-gold/50 hover:shadow-[var(--shadow-gold)] transition-all duration-500 group hover:scale-[1.02]"
            >
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-fade-in">
                <img 
                  src={benefit.icon} 
                  alt="" 
                  className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(218,165,32,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(218,165,32,0.6)]"
                  style={{
                    animation: `fade-in 0.6s ease-out ${index * 0.1}s both`
                  }}
                />
              </div>
              <span className="text-foreground font-medium group-hover:text-gold transition-colors duration-300">{benefit.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-gold/10 to-gold-light/5 border border-gold/20">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Получите оценку прямо сейчас
            </h3>
            <p className="text-muted-foreground mb-6">
              Приходите в любое из наших отделений с изделием и документом — получите деньги за 15 минут
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+77770399921"
                className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-semibold shadow-[var(--shadow-gold)] hover:scale-105 hover:shadow-[0_15px_50px_-15px_hsl(43_100%_48%/0.4)] animate-fade-in"
              >
                Позвонить сейчас
              </a>
              <a
                href="#calculators"
                className="px-8 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-300 font-semibold hover:scale-105 animate-fade-in"
              >
                Рассчитать стоимость
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
