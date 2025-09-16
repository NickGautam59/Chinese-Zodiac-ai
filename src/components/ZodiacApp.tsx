import React, { useState, useMemo, useCallback } from 'react';
import { Calendar, Star, Palette, Car, MapPin, Heart, Sparkles, AlertCircle } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import ZodiacResult from './ZodiacResult';
import LoadingSpinner from './LoadingSpinner';
import ErrorBoundary from './ErrorBoundary';
import { calculateZodiac } from '../utils/zodiacCalculator';
import { validateDate, formatDateForDisplay } from '../utils/dateHelpers';
import { ZodiacSign } from '../types/zodiac';

const ZodiacApp: React.FC = () => {
  const [birthDate, setBirthDate] = useState('');
  const [zodiacResult, setZodiacResult] = useState<ZodiacSign | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Memoize date validation
  const dateValidation = useMemo(() => {
    if (!birthDate) return { isValid: true, message: '' };
    return validateDate(birthDate);
  }, [birthDate]);

  const handleDateChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBirthDate(value);
    setError(null);
  }, []);

  const handleCalculate = useCallback(async () => {
    if (!birthDate) {
      setError('Please enter your birth date');
      return;
    }

    if (!dateValidation.isValid) {
      setError(dateValidation.message);
      return;
    }
    
    setIsCalculating(true);
    setError(null);
    
    try {
      // Simulate API call delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      const result = calculateZodiac(new Date(birthDate));
      setZodiacResult(result);
    } catch (err) {
      setError('Failed to calculate zodiac sign. Please try again.');
      console.error('Zodiac calculation error:', err);
    } finally {
      setIsCalculating(false);
    }
  }, [birthDate, dateValidation]);

  const handleReset = useCallback(() => {
    setZodiacResult(null);
    setBirthDate('');
    setError(null);
  }, []);

  // Keyboard navigation support
  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && birthDate && dateValidation.isValid) {
      handleCalculate();
    }
  }, [birthDate, dateValidation.isValid, handleCalculate]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 transition-all duration-700">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%236366f1%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse-glow" />
        
        <div className="relative z-10">
          <ThemeToggle />
          
          <main className="container mx-auto px-4 py-8" role="main">
            <header className="text-center mb-12">
              <div className="flex justify-center items-center mb-6">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full shadow-2xl animate-float">
                  <Star className="w-12 h-12 text-white" aria-hidden="true" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-400 dark:via-indigo-400 dark:to-blue-400 bg-clip-text text-transparent mb-4 animate-gradient">
                Chinese Zodiac Oracle
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Discover your celestial destiny through ancient wisdom and cosmic insights
              </p>
            </header>

            {!zodiacResult ? (
              <section className="max-w-2xl mx-auto" aria-label="Zodiac Calculator">
                <div className="backdrop-blur-md bg-white/70 dark:bg-gray-800/70 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 p-8 md:p-12">
                  <div className="text-center mb-8">
                    <Calendar className="w-16 h-16 text-purple-500 mx-auto mb-4" aria-hidden="true" />
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                      Enter Your Birth Date
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      Unlock the secrets of your Chinese zodiac sign
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="relative">
                      <label htmlFor="birthDate" className="sr-only">
                        Select your birth date
                      </label>
                      <input
                        id="birthDate"
                        type="date"
                        value={birthDate}
                        onChange={handleDateChange}
                        onKeyPress={handleKeyPress}
                        max={new Date().toISOString().split('T')[0]}
                        className={`w-full px-6 py-4 text-lg bg-white/50 dark:bg-gray-700/50 border-2 rounded-2xl focus:outline-none focus:ring-4 transition-all duration-300 text-gray-800 dark:text-white ${
                          error || !dateValidation.isValid
                            ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
                            : 'border-purple-200 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-purple-500/20'
                        }`}
                        aria-describedby={error ? "date-error" : undefined}
                        aria-invalid={!!error || !dateValidation.isValid}
                      />
                      {birthDate && (
                        <div className="absolute right-4 top-4 text-sm text-gray-500 dark:text-gray-400">
                          {formatDateForDisplay(birthDate)}
                        </div>
                      )}
                    </div>

                    {(error || !dateValidation.isValid) && (
                      <div 
                        id="date-error" 
                        className="flex items-center space-x-2 text-red-600 dark:text-red-400"
                        role="alert"
                      >
                        <AlertCircle className="w-5 h-5" />
                        <span>{error || dateValidation.message}</span>
                      </div>
                    )}

                    <button
                      onClick={handleCalculate}
                      disabled={!birthDate || !dateValidation.isValid || isCalculating}
                      className="w-full py-4 px-8 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 disabled:from-gray-400 disabled:via-gray-500 disabled:to-gray-600 text-white font-bold text-xl rounded-2xl shadow-2xl transform hover:scale-105 active:scale-95 transition-all duration-300 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus:ring-4 focus:ring-purple-500/20"
                      aria-label={isCalculating ? "Calculating zodiac sign" : "Calculate zodiac sign"}
                    >
                      {isCalculating ? (
                        <div className="flex items-center justify-center space-x-3">
                          <LoadingSpinner />
                          <span>Consulting the Stars...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-3">
                          <Sparkles className="w-6 h-6" aria-hidden="true" />
                          <span>Reveal My Destiny</span>
                        </div>
                      )}
                    </button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
                    {[
                      { icon: Heart, label: 'Personality', gradient: 'from-pink-400 to-red-500' },
                      { icon: Palette, label: 'Colors', gradient: 'from-blue-400 to-indigo-500' },
                      { icon: Car, label: 'Vehicles', gradient: 'from-green-400 to-emerald-500' },
                      { icon: MapPin, label: 'Places', gradient: 'from-orange-400 to-yellow-500' }
                    ].map(({ icon: Icon, label, gradient }, index) => (
                      <div key={label} className="group">
                        <div className={`p-4 bg-gradient-to-br ${gradient} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 mb-3 transform group-hover:scale-110`}>
                          <Icon className="w-8 h-8 text-white mx-auto" aria-hidden="true" />
                        </div>
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ) : (
              <ZodiacResult zodiac={zodiacResult} onReset={handleReset} />
            )}
          </main>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default ZodiacApp;