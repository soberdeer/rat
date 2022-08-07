import { useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useColorScheme, useHotkeys } from '@mantine/hooks';
import mockdata from '../mockdata/mockdata';
import { getCookie, setCookie } from 'cookies-next';
import { Navigation } from '../components/Navigation/Navigation';
import { GetServerSidePropsContext } from 'next';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const preferredColorScheme = useColorScheme();
  const [theme, setTheme] = useState<ColorScheme>(props.colorScheme || preferredColorScheme || 'dark');

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (theme === 'dark' ? 'light' : 'dark');
    setTheme(nextColorScheme);
    // when color scheme is updated save it to cookie
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

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
          <Navigation {...mockdata.navigation} />
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}


App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});

