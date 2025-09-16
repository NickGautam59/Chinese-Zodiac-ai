export interface ZodiacSign {
  name: string;
  emoji: string;
  element: string;
  yinYang: 'Yin' | 'Yang';
  years: string;
  description: string;
  traits: {
    positive: string[];
    negative: string[];
  };
  luckyColors: string[];
  luckyNumbers: number[];
  compatibility: string[];
  recommendedVehicles: string[];
  favorableCities: string[];
  bestMonths: string[];
}