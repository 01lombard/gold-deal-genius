import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Phone, Clock, Instagram, Music } from "lucide-react";

const ContactSection = () => {
  const { t } = useLanguage();

  const locations = [
    {
      name: t.contact.branches.esenberlin,
      address: t.contact.address.location1,
      mapLink: "https://2giskz.app/astana/geo/70000001054951722",
    },
    {
      name: t.contact.branches.baiseitova,
      address: t.contact.address.location2,
      mapLink: "https://2giskz.app/astana/geo/70000001055231611",
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 px-3 sm:px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent px-2">
          {t.contact.title}
        </h2>
        <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 px-4">
          {t.contact.subtitle}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          <div className="flex flex-col items-center text-center p-5 sm:p-6 rounded-xl bg-card border border-border/50">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-gold/20 to-gold-light/20 flex items-center justify-center mb-3 sm:mb-4">
              <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">{t.contact.address.title}</h3>
            <div className="text-muted-foreground space-y-4 w-full">
              <div className="space-y-1">
                <p className="text-xs sm:text-sm leading-relaxed font-medium text-foreground">{t.contact.branches.esenberlin}</p>
                <p className="text-xs sm:text-sm leading-relaxed">{t.contact.address.location1}</p>
                <a
                  href={locations[0].mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light text-xs sm:text-sm font-medium transition-colors inline-block mt-1"
                >
                  {t.contact.branches.openMap}
                </a>
              </div>
              <div className="space-y-1 pt-2 border-t border-border/50">
                <p className="text-xs sm:text-sm leading-relaxed font-medium text-foreground">{t.contact.branches.baiseitova}</p>
                <p className="text-xs sm:text-sm leading-relaxed">{t.contact.address.location2}</p>
                <a
                  href={locations[1].mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light text-xs sm:text-sm font-medium transition-colors inline-block mt-1"
                >
                  {t.contact.branches.openMap}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center text-center p-5 sm:p-6 rounded-xl bg-card border border-border/50">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-gold/20 to-gold-light/20 flex items-center justify-center mb-3 sm:mb-4">
              <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">{t.contact.phone.title}</h3>
            <a href="tel:+77770399921" className="text-sm sm:text-base text-muted-foreground hover:text-gold transition-colors mb-3">
              +7 (777) 039-99-21
            </a>
            <div className="flex items-center gap-3">
              <a 
                href="https://www.instagram.com/01market.kz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-accent rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-gold" />
              </a>
              <a 
                href="https://www.tiktok.com/@01market.kz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-accent rounded-lg transition-colors"
                aria-label="TikTok"
              >
                <Music className="h-5 w-5 text-gold" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center text-center p-5 sm:p-6 rounded-xl bg-card border border-border/50 sm:col-span-2 md:col-span-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-gold/20 to-gold-light/20 flex items-center justify-center mb-3 sm:mb-4">
              <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">{t.contact.schedule.title}</h3>
            <p className="text-sm sm:text-base text-muted-foreground" dangerouslySetInnerHTML={{ __html: t.contact.schedule.time }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
