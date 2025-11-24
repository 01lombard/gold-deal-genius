import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppWidget = () => {
  const whatsappUrl = "https://wa.me/7770399921";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-fade-in"
      aria-label="Связаться через WhatsApp"
    >
      <img 
        src={whatsappIcon} 
        alt="WhatsApp" 
        className="w-full h-full rounded-full"
      />
    </a>
  );
};

export default WhatsAppWidget;
