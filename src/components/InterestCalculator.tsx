import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface InterestCalculatorProps {
  amount?: number;
}

const InterestCalculator = ({ amount: externalAmount = 0 }: InterestCalculatorProps) => {
  const [days, setDays] = useState([14]);
  const [amount, setAmount] = useState(externalAmount);

  useEffect(() => {
    setAmount(externalAmount);
  }, [externalAmount]);

  const calculateInterest = () => {
    const amountNum = amount;
    const daysNum = days[0];

    if (isNaN(amountNum) || isNaN(daysNum) || amountNum <= 0 || daysNum <= 0) {
      return {
        dailyRate: 0,
        dailyInterest: 0,
        totalInterest: 0,
        total: 0,
      };
    }

    // Автоматическое переключение ставки в зависимости от суммы
    const dailyRate = amountNum <= 100000 ? 0.25 : 0.19;
    const dailyInterest = (amountNum * dailyRate) / 100;
    const totalInterest = dailyInterest * daysNum;
    const total = amountNum + totalInterest;

    return {
      dailyRate,
      dailyInterest,
      totalInterest,
      total,
    };
  };

  const { dailyRate, dailyInterest, totalInterest, total } = calculateInterest();

  return (
    <Card className="w-full shadow-[var(--shadow-elegant)] border-border/50 hover:shadow-[var(--shadow-gold)] transition-all duration-300">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
          Калькулятор процентов
        </CardTitle>
        <CardDescription>Рассчитайте сумму займа с процентами</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="amount">Сумма займа (₸)</Label>
          <div className="text-3xl font-bold text-gold">
            {amount.toLocaleString('ru-KZ')} ₸
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label htmlFor="days">Срок займа: {days[0]} дней</Label>
          </div>
          <Slider
            id="days"
            min={14}
            max={30}
            step={1}
            value={days}
            onValueChange={setDays}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>14 дней</span>
            <span>30 дней</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
            <span className="text-sm text-muted-foreground">Ставка в день:</span>
            <span className="font-semibold text-foreground">{dailyRate}%</span>
          </div>
          <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
            <span className="text-sm text-muted-foreground">Процент в день:</span>
            <span className="font-semibold text-foreground">{dailyInterest.toLocaleString('ru-KZ', { maximumFractionDigits: 2 })} ₸</span>
          </div>
          <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
            <span className="text-sm text-muted-foreground">Всего процентов:</span>
            <span className="font-semibold text-foreground">{totalInterest.toLocaleString('ru-KZ', { maximumFractionDigits: 2 })} ₸</span>
          </div>
        </div>

        <div className="rounded-lg bg-gradient-to-br from-gold/10 to-gold-light/10 p-6 border border-gold/20">
          <div className="flex justify-between items-center">
            <span className="text-lg text-muted-foreground">Сумма на выкуп:</span>
            <span className="text-3xl font-bold text-gold">
              {total.toLocaleString('ru-KZ', { maximumFractionDigits: 2 })} ₸
            </span>
          </div>
        </div>

        <div className="text-sm text-muted-foreground space-y-2 p-4 bg-muted/20 rounded-lg">
          <p className="font-medium text-foreground">ℹ️ Важная информация:</p>
          <p>• Гарантийный срок: 30 дней</p>
          <p>• До 100 000 ₸: 0.25% в день</p>
          <p>• Свыше 100 000 ₸: 0.19% в день</p>
          <p>• Досрочное погашение без штрафов</p>
          <p>• Продление займа возможно</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default InterestCalculator;
