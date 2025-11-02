import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InterestCalculator = () => {
  const [amount, setAmount] = useState("");
  const [days, setDays] = useState("");

  const calculateInterest = () => {
    const amountNum = parseFloat(amount);
    const daysNum = parseInt(days);
    
    if (isNaN(amountNum) || isNaN(daysNum) || amountNum <= 0 || daysNum <= 0) {
      return { dailyRate: 0, dailyInterest: 0, totalInterest: 0, total: 0 };
    }

    const dailyRate = amountNum <= 100000 ? 0.25 : 0.19;
    const dailyInterest = (amountNum * dailyRate) / 100;
    const totalInterest = dailyInterest * daysNum;
    const total = amountNum + totalInterest;

    return { dailyRate, dailyInterest, totalInterest, total };
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
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="amount">Сумма займа (₸)</Label>
            <Input
              id="amount"
              type="number"
              placeholder="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border-border/50 focus:ring-gold"
              min="0"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="days">Срок (дней)</Label>
            <Input
              id="days"
              type="number"
              placeholder="0"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              className="border-border/50 focus:ring-gold"
              min="0"
            />
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
            <span className="text-lg text-muted-foreground">Итого к выплате:</span>
            <span className="text-3xl font-bold text-gold">
              {total.toLocaleString('ru-KZ', { maximumFractionDigits: 2 })} ₸
            </span>
          </div>
        </div>

        <div className="text-sm text-muted-foreground space-y-1 p-4 bg-secondary/5 rounded-lg border border-secondary/10">
          <p className="font-medium text-foreground mb-2">Условия:</p>
          <p>• До 100,000 ₸ - 0.25% в день</p>
          <p>• Свыше 100,000 ₸ - 0.19% в день</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default InterestCalculator;
