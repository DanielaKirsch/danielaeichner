import '../styles/plugins.css';
import '../styles/dark.css';
import '../styles/colors.css';
import '../styles/style.css';
import '../styles/custom.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
