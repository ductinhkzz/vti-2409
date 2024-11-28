import { useEffect, useMemo, useState } from 'react';

import { Theme, ThemeProviderContext } from '@/contexts';
import { THEME_STORAGE_KEY } from '@/constants';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const ThemeProvider = ({ children, defaultTheme = systemTheme }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(THEME_STORAGE_KEY) as Theme) || defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    root.classList.add(theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme: (theme: Theme) => {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
        setTheme(theme);
      },
    }),
    [theme],
  );

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>;
};
