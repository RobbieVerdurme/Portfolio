import useLocalStorage from '@hooks/useLocalStorage';
import { createContext, useEffect } from 'react';

type ThemeContextType = { theme: 'dark' | 'light' | 'solar'; toggleTheme: () => void };
export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => '',
});

const themeMap: {
  dark: 'dark' | 'light' | 'solar';
  light: 'dark' | 'light' | 'solar';
  solar: 'dark' | 'light' | 'solar';
} = {
  dark: 'light',
  light: 'solar',
  solar: 'dark',
};

export default function ThemeProvider({ children }: { children?: React.ReactNode }) {
  const [theme, setTheme] = useLocalStorage<'dark' | 'light' | 'solar'>('theme', 'dark');

  useEffect(() => {
    window.document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => setTheme(themeMap[theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
