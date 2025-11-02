import { MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
          Контакты
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Мы всегда рады помочь вам
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border/50">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/20 to-gold-light/20 flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-gold" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Адрес</h3>
            <p className="text-muted-foreground">г. Алматы, ул. Примерная, д. 123</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border/50">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/20 to-gold-light/20 flex items-center justify-center mb-4">
              <Phone className="w-7 h-7 text-gold" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Телефон</h3>
            <p className="text-muted-foreground">+7 (777) 123-45-67</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border/50">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/20 to-gold-light/20 flex items-center justify-center mb-4">
              <Clock className="w-7 h-7 text-gold" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Режим работы</h3>
            <p className="text-muted-foreground">Пн-Сб: 9:00 - 20:00<br />Вс: 10:00 - 18:00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
