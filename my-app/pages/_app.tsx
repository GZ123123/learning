mport '../src/styles/globals.css'

import { AppProps } from 'next/app';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';

import AppProvider from '../src/contexts/AppContext';

import theme, { createEmotionCache } from '../src/theme';
import { MainLayout } from '../src/components/layouts';

const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  Component: any,
  emotionCache?: EmotionCache;
}

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps) {  
  const getLayout = Component.getLayout || ((page: React.ReactNode) => <MainLayout>{page}</MainLayout>)

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <CssBaseline />
          { getLayout(<Component {...pageProps} />) }
        </AppProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp
