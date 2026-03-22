import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyle from './styles/GlobalStyles.ts' // Import GlobalStyle
import { ThemeProvider } from 'styled-components'; // Import ThemeProvider

// Define a basic theme (optional, but good practice for styled-components)
const theme = {
  colors: {
    ink: '#121212', // Richer deep black
    charcoal: '#1A1A1A', // Richer dark gray
    metal: '#D4AF37', // Royal Gold
    gray100: '#f3f4f6', 
    gray200: '#e5e7eb', 
    gray300: '#d1d5db', 
    gray400: '#9ca3af', 
  },
  fonts: {
    sans: 'Inter, sans-serif',
    serif: 'Playfair Display, serif',
  },
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
