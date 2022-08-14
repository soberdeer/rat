import { useState } from 'react';
import { AppProps as AppDefaultProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useColorScheme, useHotkeys } from '@mantine/hooks';
import mockdata from '../mockdata';
import LocaleContext from '../components/LocaleContext';
import { getCookie, setCookie } from 'cookies-next';
import { Navigation } from '../components/Navigation/Navigation';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';

interface AppProps extends AppDefaultProps {
  colorScheme: ColorScheme,
  locale?: keyof typeof mockdata,
  locales?: (keyof typeof mockdata)[],
}

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const router = useRouter();
  const preferredColorScheme = useColorScheme();
  const [theme, setTheme] = useState<ColorScheme>(props.colorScheme || preferredColorScheme || 'dark');
  const [locale, setLocale] = useState<'en' | 'ru'>(props.locale || 'ru');

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (theme === 'dark' ? 'light' : 'dark');
    setTheme(nextColorScheme);
    // when color scheme is updated save it to cookie
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  const updateLocale = (value?: 'en' | 'ru') => {
    const { pathname, asPath, query } = router;
    setCookie('NEXT_LOCALE', value, { maxAge: 60 * 60 * 24 * 30 });
    setLocale(value || 'ru')
    router.push({ pathname, query });
  };

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <>
      <Head>
        <title>RAT - Russian-Armenian transcription</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <LocaleContext.Provider
        value={{
          locale: locale || 'ru',
          setLocale: updateLocale,
        }}
      >
        <ColorSchemeProvider colorScheme={theme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              colorScheme: theme,
            }}
          >
            <Navigation
              {...mockdata[locale || 'ru'].navigation}
              locales={props.locales}
            />
            <Component {...pageProps} locale={locale} />
          </MantineProvider>
        </ColorSchemeProvider>
      </LocaleContext.Provider>
    </>
  );
}


App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  locale: ctx.req?.cookies?.NEXT_LOCALE || 'ru',
  locales: ctx.locales || ['en', 'ru'],
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});

