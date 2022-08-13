import { useState } from 'react';
import { AppProps as AppDefaultProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useColorScheme, useHotkeys } from '@mantine/hooks';
import mockdata from '../mockdata';
import { getCookie, setCookie } from 'cookies-next';
import { Navigation } from '../components/Navigation/Navigation';
import { GetServerSidePropsContext } from 'next';

interface AppProps extends AppDefaultProps {
  colorScheme: ColorScheme,
  locale?: keyof typeof mockdata,
  locales?: (keyof typeof mockdata)[],
}

export default function App(props: AppProps) {
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
        <title>RAT - Russian-Armenian transcription</title>
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
          <Navigation
            {...mockdata[props.locale || 'ru'].navigation}
            locale={props.locale || 'ru'}
            locales={props.locales}
          />
          <Component {...pageProps} locale={props.locale}/>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}


App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  locale: ctx.locale || ctx.defaultLocale,
  locales: ctx.locales || ['en', 'ru'],
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});

