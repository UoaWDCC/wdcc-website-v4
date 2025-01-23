"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface Theme {
    isLight: boolean;
    // toggleTheme: () => { isLight: boolean };
}

const defaultTheme: Theme = {
    isLight: true,
    // toggleTheme: () => {throw new Error('toggleTheme() should not be called outside the ThemeContextProvider')},
};

const ThemeContext = createContext(defaultTheme);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState(defaultTheme);

    // const toggleTheme = () => {
    //   setTheme({ isLight: !theme.isLight });
    // }

    return <ThemeContext.Provider value={{ ...theme }}>{children}</ThemeContext.Provider>;
};

export function useTheme() {
    return useContext(ThemeContext);
}
