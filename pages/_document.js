// Externals
import NextDocument, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class Document extends NextDocument {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>LunchHero - Raise money for charity by getting lunch</title>
          <meta name="charset" content="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Website's description" />
          <meta property="og:description" content="Sharing content here." />
          <meta property="og:image" content="http://url-image.jpg" />
          <meta property="og:title" content="Sharing title here." />
          <meta property="og:url" content="http://url.com" />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default Document;
