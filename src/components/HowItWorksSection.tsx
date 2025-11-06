import stepBring from "@/assets/step-bring.png";
import stepEvaluate from "@/assets/step-evaluate.png";
import stepMoney from "@/assets/step-money.png";

const steps = [
  {
    number: "01",
    title: "Принесите изделие",
    description: "Приходите в любое отделение с золотом и документом",
    icon: stepBring,
  },
  {
    number: "02",
    title: "Бесплатная оценка",
    description: "Специалист проверит пробу и взвесит изделие за 7 минут",
    icon: stepEvaluate,
  },
  {
    number: "03",
    title: "Получите деньги",
    description: "Принимаем решение о сделке и выдаем деньги сразу",
    icon: stepMoney,
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
          Как это работает
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Простой и прозрачный процесс в 3 шага
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-gold to-gold-light mb-6 shadow-[var(--shadow-gold)] group-hover:shadow-[0_0_30px_rgba(218,165,32,0.6)] transition-all duration-500 group-hover:scale-110 animate-fade-in p-3">
                  <img 
                    src={step.icon} 
                    alt={step.title}
                    className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-500"
                    style={{ animation: `fade-in 0.6s ease-out ${index * 0.2}s backwards` }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-gold transition-colors duration-300">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gold/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
