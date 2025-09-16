import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ZodiacApp from './components/ZodiacApp';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <ZodiacApp />
    </ThemeProvider>
  );
}

export default App;