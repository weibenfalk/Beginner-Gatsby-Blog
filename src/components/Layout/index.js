import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
// Query Hooks
import { useSiteMetaDataQuery } from 'hooks/useSiteMetaDataQuery';
// Components
import Header from 'components/Header';
// Styles
import { GlobalStyles } from 'styles/GlobalStyle';
import { lightTheme, darkTheme } from 'styles/GlobalStyle';
// Theme Context
import { ModeContext } from 'context/ModeProvider';

const Layout = ({ children }) => {
  const [darkMode] = useContext(ModeContext);
  const data = useSiteMetaDataQuery();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header siteTitle={data.title} />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
