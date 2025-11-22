import { useLanguage } from '@/contexts/LanguageContext';
import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      className="flex items-center gap-2 hover:bg-gold/10 hover:text-gold transition-colors"
      title={language === 'ru' ? 'Переключить на казахский' : 'Орысшаға ауыстыру'}
    >
      <Languages className="w-4 h-4" />
      <span className="font-medium">{language === 'ru' ? 'ҚАЗ' : 'РУС'}</span>
    </Button>
  );
};

export default LanguageSwitcher;
