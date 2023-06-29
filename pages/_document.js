import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const GTM = "GTM-T6HB7TD";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM}');`,
          }}
        />
        <meta property="og:site_name" content="José the PePe" />
        <meta property="og:title" content="José the PePe" />
        <meta
          property="og:description"
          content="José the Pepe for the people. Bringing green to your PFP, one Pepe at a time"
        />
        <meta
          property="og:image"
          itemprop="image"
          content="https://i.ibb.co/wMzjPXf/Pin-Clipart-com-murder-clip-art-5376441.jpg"
        />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM}" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        />
      </body>
    </Html>
  );
}
