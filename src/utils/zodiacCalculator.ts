import { ZodiacSign } from '../types/zodiac';
import { zodiacData } from '../data/zodiacData';

export const calculateZodiac = (birthDate: Date): ZodiacSign => {
  const year = birthDate.getFullYear();
  const month = birthDate.getMonth() + 1; // JavaScript months are 0-indexed
  const day = birthDate.getDate();
  
  // Chinese New Year dates vary each year, but we'll use a simplified calculation
  // Most Chinese New Years fall between late January and mid February
  let chineseYear = year;
  
  // If born before Chinese New Year, use previous year
  // Simplified: if before February 10th, use previous year
  if (month === 1 || (month === 2 && day < 10)) {
    chineseYear = year - 1;
  }
  
  // Calculate zodiac index (Rat = 0, Ox = 1, etc.)
  // 1900 was the year of the Rat (index 0)
  const zodiacIndex = (chineseYear - 1900) % 12;
  
  // Ensure positive index
  const adjustedIndex = zodiacIndex < 0 ? zodiacIndex + 12 : zodiacIndex;
  
  return zodiacData[adjustedIndex];
};

export const getZodiacByYear = (year: number): ZodiacSign => {
  const zodiacIndex = (year - 1900) % 12;
  const adjustedIndex = zodiacIndex < 0 ? zodiacIndex + 12 : zodiacIndex;
  return zodiacData[adjustedIndex];
};

export const getAllZodiacSigns = (): ZodiacSign[] => {
  return [...zodiacData];
};