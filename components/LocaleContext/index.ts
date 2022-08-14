import React from 'react';

const ThemeContext = React.createContext({
  locale: 'ru',
  setLocale: (locale?: 'en' | 'ru') => {},
});

export default ThemeContext;
