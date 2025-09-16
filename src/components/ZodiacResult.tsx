import React, { memo } from 'react';
import { ArrowLeft, Star, Heart, Palette, Car, MapPin, Diamond, Calendar, Zap, Shield, Users } from 'lucide-react';
import { ZodiacSign } from '../types/zodiac';
import { getAge } from '../utils/dateHelpers';

interface ZodiacResultProps {
  zodiac: ZodiacSign;
  onReset: () => void;
}

const ZodiacResult: React.FC<ZodiacResultProps> = memo(({ zodiac, onReset }) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onReset();
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <button
        onClick={onReset}
        onKeyDown={handleKeyPress}
        className="mb-8 flex items-center space-x-2 px-6 py-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-500/20 transform hover:scale-105"
        aria-label="Go back to calculator"
      >
        <ArrowLeft className="w-5 h-5" aria-hidden="true" />
        <span className="font-semibold">Back to Calculator</span>
      </button>

      <article className="backdrop-blur-md bg-white/70 dark:bg-gray-800/70 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden">
        {/* Header Section */}
        <header className="relative p-8 md:p-12 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10 text-center">
            <div className="text-8xl mb-6 animate-float" role="img" aria-label={`${zodiac.name} zodiac symbol`}>
              {zodiac.emoji}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{zodiac.name}</h1>
            <p className="text-xl md:text-2xl font-light opacity-90 mb-6">{zodiac.years}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                <span className="font-semibold">Element: {zodiac.element}</span>
              </div>
              <div className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                <span className="font-semibold">Yin/Yang: {zodiac.yinYang}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 md:p-12">
          {/* Description */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
              <Star className="w-6 h-6 text-purple-500 mr-3" aria-hidden="true" />
              Your Cosmic Profile
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {zodiac.description}
            </p>
          </section>

          {/* Personality Traits */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <Heart className="w-6 h-6 text-pink-500 mr-3" aria-hidden="true" />
              Personality Traits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-3 flex items-center">
                  <Zap className="w-5 h-5 mr-2" aria-hidden="true" />
                  Strengths
                </h3>
                <ul className="space-y-2" role="list">
                  {zodiac.traits.positive.map((trait, index) => (
                    <li key={index} className="px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800 transform hover:scale-105 transition-transform duration-200">
                      <span className="text-green-700 dark:text-green-300 font-medium">{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-400 mb-3 flex items-center">
                  <Shield className="w-5 h-5 mr-2" aria-hidden="true" />
                  Areas for Growth
                </h3>
                <ul className="space-y-2" role="list">
                  {zodiac.traits.negative.map((trait, index) => (
                    <li key={index} className="px-4 py-2 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800 transform hover:scale-105 transition-transform duration-200">
                      <span className="text-amber-700 dark:text-amber-300 font-medium">{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Lifestyle Recommendations */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
              Lifestyle Recommendations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Lucky Colors */}
              <div className="backdrop-blur-sm bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-pink-200/50 dark:border-pink-700/50 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                  <Palette className="w-5 h-5 text-pink-500 mr-2" aria-hidden="true" />
                  Lucky Colors
                </h3>
                <ul className="space-y-3" role="list">
                  {zodiac.luckyColors.map((color, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div 
                        className="w-6 h-6 rounded-full border-2 border-white shadow-md transform hover:scale-125 transition-transform duration-200"
                        style={{ backgroundColor: color.toLowerCase() }}
                        aria-label={`${color} color sample`}
                      />
                      <span className="text-gray-700 dark:text-gray-300 font-medium capitalize">{color}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Vehicles */}
              <div className="backdrop-blur-sm bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-700/50 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                  <Car className="w-5 h-5 text-blue-500 mr-2" aria-hidden="true" />
                  Ideal Vehicles
                </h3>
                <ul className="space-y-2" role="list">
                  {zodiac.recommendedVehicles.map((vehicle, index) => (
                    <li key={index} className="px-3 py-2 bg-white/50 dark:bg-gray-700/30 rounded-xl transform hover:scale-105 transition-transform duration-200">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{vehicle}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Favorable Locations */}
              <div className="backdrop-blur-sm bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-200/50 dark:border-green-700/50 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                  <MapPin className="w-5 h-5 text-green-500 mr-2" aria-hidden="true" />
                  Favorable Places
                </h3>
                <ul className="space-y-2" role="list">
                  {zodiac.favorableCities.map((city, index) => (
                    <li key={index} className="px-3 py-2 bg-white/50 dark:bg-gray-700/30 rounded-xl transform hover:scale-105 transition-transform duration-200">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{city}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lucky Numbers */}
              <div className="backdrop-blur-sm bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-2xl p-6 border border-orange-200/50 dark:border-orange-700/50 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                  <Diamond className="w-5 h-5 text-orange-500 mr-2" aria-hidden="true" />
                  Lucky Numbers
                </h3>
                <div className="flex flex-wrap gap-2">
                  {zodiac.luckyNumbers.map((number, index) => (
                    <div key={index} className="w-10 h-10 bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-bold rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-200">
                      {number}
                    </div>
                  ))}
                </div>
              </div>

              {/* Best Months */}
              <div className="backdrop-blur-sm bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-purple-200/50 dark:border-purple-700/50 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                  <Calendar className="w-5 h-5 text-purple-500 mr-2" aria-hidden="true" />
                  Best Months
                </h3>
                <ul className="space-y-2" role="list">
                  {zodiac.bestMonths.map((month, index) => (
                    <li key={index} className="px-3 py-2 bg-white/50 dark:bg-gray-700/30 rounded-xl transform hover:scale-105 transition-transform duration-200">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{month}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compatibility */}
              <div className="backdrop-blur-sm bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-red-200/50 dark:border-red-700/50 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                  <Users className="w-5 h-5 text-red-500 mr-2" aria-hidden="true" />
                  Best Matches
                </h3>
                <ul className="space-y-2" role="list">
                  {zodiac.compatibility.map((sign, index) => (
                    <li key={index} className="px-3 py-2 bg-white/50 dark:bg-gray-700/30 rounded-xl transform hover:scale-105 transition-transform duration-200">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
});

ZodiacResult.displayName = 'ZodiacResult';

export default ZodiacResult;