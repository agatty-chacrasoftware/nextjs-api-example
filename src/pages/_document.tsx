import Document, { Head, Html, Main, NextScript } from 'next/document'

import { ColorModeScript } from '@chakra-ui/react'
import theme from '@/styles/theme'

class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="referrer" content="no-referrer" />
          <link rel="icon" href="/favicons/favicon.svg" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="description" content="TODO INSERT DESCRIPTION HERE" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <link rel="apple-touch-icon" href="/favicons/logo192.png" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
