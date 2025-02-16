import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="ahmuktar" />
        <meta
          name="description"
          content="Discover Misi Nigeria's exclusive collection of bespoke luxury couture and handcrafted fashion pieces. Experience elegance redefined."
        />
        <meta
          name="keywords"
          content="Misi Nigeria, luxury fashion, bespoke couture, Nigerian fashion, custom tailoring, fashion design"
        />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <body className="preload-wrapper popup-loader">
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
