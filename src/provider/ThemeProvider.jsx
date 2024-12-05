import { getTheme, setLocalTheme } from "@/lib/addToLocal";
import { createContext, useEffect, useState } from "react";

export const themeContext = createContext(null);
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getTheme());
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setTheme(theme);
    setLocalTheme(theme);
  }, [theme]);
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
}

export default ThemeProvider;
