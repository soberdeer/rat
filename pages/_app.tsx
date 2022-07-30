import { useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { Navigation } from '../components/Navigation/Navigation';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [theme, setTheme] = useState<ColorScheme>('dark');

  const toggleColorScheme = (value?: ColorScheme) =>
    setTheme(value || (theme === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <ColorSchemeProvider colorScheme={theme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: theme,
          }}
        >
          <Navigation />
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
