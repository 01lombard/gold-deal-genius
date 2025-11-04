import { useState, useEffect } from "react";
import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const goldPrices = {
  "585": 37500,
  "750": 36500,
  "999": 47000,
};

const currentDate = new Date().toLocaleDateString("ru-RU", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

interface GoldCalculatorProps {
  onPriceChange?: (price: number) => void;
}

const GoldCalculator = ({ onPriceChange }: GoldCalculatorProps) => {
  const [weight, setWeight] = useState("");
  const [purity, setPurity] = useState<keyof typeof goldPrices>("585");

  const calculatePrice = () => {
    const weightNum = parseFloat(weight);
    if (isNaN(weightNum) || weightNum <= 0) return 0;
    return Math.round(weightNum * goldPrices[purity]);
  };

  const totalPrice = calculatePrice();

  // Update parent component when price changes
  React.useEffect(() => {
    onPriceChange?.(totalPrice);
  }, [totalPrice, onPriceChange]);

  return (
    <Card className="w-full shadow-[var(--shadow-elegant)] border-border/50 hover:shadow-[var(--shadow-gold)] transition-all duration-300">
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
            Калькулятор приема золота
          </CardTitle>
        </div>
        <CardDescription>Рассчитайте стоимость вашего золота • Цены актуальны на {currentDate}</CardDescription>
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
                <SelectItem value="585">585 проба (37,500 ₸/г)</SelectItem>
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
            <span className="text-lg text-muted-foreground">Сумма оценки:</span>
            <span className="text-3xl font-bold text-gold">{totalPrice.toLocaleString("ru-KZ")} ₸</span>
          </div>
        </div>

        <div className="text-sm text-muted-foreground space-y-2 p-4 bg-muted/20 rounded-lg">
          <p className="font-medium text-foreground">ℹ️ Важная информация:</p>
          <p>• Цены обновляются ежедневно</p>
          <p>• Финальная оценка после проверки изделия</p>
          <p>• Оплата сразу после оценки</p>
          <p>• Требуется документ, удостоверяющий личность</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoldCalculator;
