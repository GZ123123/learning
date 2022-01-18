import '../src/styles/globals.css';
import type { AppProps } from 'next/app';
import { MainLayout } from '../src/components/layouts';

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => <MainLayout>{ page } </MainLayout>)
  return getLayout(<Component {...pageProps}/>);
}

export default MyApp
