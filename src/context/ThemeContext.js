import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('red');

  const values = { theme, setTheme };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
