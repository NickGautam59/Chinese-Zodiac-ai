import React, { memo } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = memo(() => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={toggleTheme}
        className="p-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/20 hover:shadow-xl transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-purple-500/20"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        type="button"
      >
        {isDark ? (
          <Sun className="w-6 h-6 text-yellow-500 group-hover:rotate-180 transition-transform duration-500" />
        ) : (
          <Moon className="w-6 h-6 text-indigo-600 group-hover:rotate-180 transition-transform duration-500" />
        )}
      </button>
    </div>
  );
});

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;