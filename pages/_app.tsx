import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import('webfontloader').then(WebFontLoader => {
      WebFontLoader.load({
        google: {
          families: ['Cutive', 'Jura', 'Slabo']
        }
      });
    });
  }, []);

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
