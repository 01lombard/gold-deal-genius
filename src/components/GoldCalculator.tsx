import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const goldPrices = {
  "585": 28500, // цена за грамм в тенге
  "750": 36500,
  "999": 47000,
};

const GoldCalculator = () => {
  const [weight, setWeight] = useState("");
  const [purity, setPurity] = useState<keyof typeof goldPrices>("585");

  const calculatePrice = () => {
    const weightNum = parseFloat(weight);
    if (isNaN(weightNum) || weightNum <= 0) return 0;
    return Math.round(weightNum * goldPrices[purity]);
  };

  const totalPrice = calculatePrice();

  return (
    <Card className="w-full shadow-[var(--shadow-elegant)] border-border/50 hover:shadow-[var(--shadow-gold)] transition-all duration-300">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
          Калькулятор приема золота
        </CardTitle>
        <CardDescription>Рассчитайте стоимость вашего золота</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="purity">Проба золота</Label>
            <Select value={purity} onValueChange={(value) => setPurity(value as keyof typeof goldPrices)}>
              <SelectTrigger id="purity" className="border-border/50 focus:ring-gold">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="585">585 проба (28,500 ₸/г)</SelectItem>
                <SelectItem value="750">750 проба (36,500 ₸/г)</SelectItem>
                <SelectItem value="999">999 проба (47,000 ₸/г)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="weight">Вес (граммы)</Label>
            <Input
              id="weight"
              type="number"
              placeholder="0.0"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="border-border/50 focus:ring-gold"
              min="0"
              step="0.1"
            />
          </div>
        </div>

        <div className="rounded-lg bg-gradient-to-br from-gold/10 to-gold-light/10 p-6 border border-gold/20">
          <div className="flex justify-between items-center">
            <span className="text-lg text-muted-foreground">Сумма выкупа:</span>
            <span className="text-3xl font-bold text-gold">
              {totalPrice.toLocaleString('ru-KZ')} ₸
            </span>
          </div>
        </div>

        <div className="text-sm text-muted-foreground space-y-1">
          <p>• Цены актуальны на текущую дату</p>
          <p>• Точная оценка производится при осмотре изделия</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoldCalculator;
