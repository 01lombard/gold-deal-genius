import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import flagKz from '@/assets/flag-kz.jpg';
import flagRu from '@/assets/flag-ru.png';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'kk' : 'ru');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 hover:bg-gold/10 transition-colors"
      title={language === 'ru' ? 'Переключить на казахский' : 'Орысшаға ауыстыру'}
    >
      <img 
        src={language === 'ru' ? flagKz : flagRu} 
        alt={language === 'ru' ? 'Казахстан' : 'Россия'}
        className="w-5 h-3.5 object-cover rounded-sm shadow-sm"
      />
      <span className="font-medium text-foreground">{language === 'ru' ? 'ҚАЗ' : 'РУС'}</span>
    </Button>
  );
};

export default LanguageSwitcher;
