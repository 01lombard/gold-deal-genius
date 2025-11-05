import { MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  const locations = [
    {
      name: "Филиал Есенберлина",
      address: "город Астана, ул. Есенберлина 20",
      mapLink: "https://2giskz.app/astana/geo/70000001054951722",
    },
    {
      name: "Филиал Байсеитовой",
      address: "город Астана, ул. К. Байсеитовой 103",
      mapLink: "https://2giskz.app/astana/geo/70000001055231611",
    },
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
          Контакты
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Мы всегда рады помочь вам
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border/50">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/20 to-gold-light/20 flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-gold" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Адреса</h3>
            <div className="text-muted-foreground space-y-2">
              <p className="text-sm">город Астана, ул. Есенберлина 20</p>
              <p className="text-sm">город Астана, ул. К. Байсеитовой 103</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border/50">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/20 to-gold-light/20 flex items-center justify-center mb-4">
              <Phone className="w-7 h-7 text-gold" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Телефон</h3>
            <a href="tel:+77770399921" className="text-muted-foreground hover:text-gold transition-colors">
              +7 (777) 039-99-21
            </a>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border/50">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/20 to-gold-light/20 flex items-center justify-center mb-4">
              <Clock className="w-7 h-7 text-gold" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Режим работы</h3>
            <p className="text-muted-foreground">Круглосуточно,<br />без перерывов и выходных</p>
          </div>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border/50 hover:border-gold/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/20 to-gold-light/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{location.name}</h4>
                  <p className="text-muted-foreground text-sm mb-3">{location.address}</p>
                  <a
                    href={location.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-light text-sm font-medium transition-colors inline-flex items-center gap-1"
                  >
                    Открыть на карте →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
