import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
// Это так же вспомогательный файл от next js сюда вы можете импортировтаь скрипты
// как этто сделано ниже

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        <Script src="/scripts/jquery.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></Script>
        <Script src="/scripts/owl.carousel.min.js"></Script>
        <Script src="/scripts/easing.min.js"></Script>
        <Script src="/scripts/wow.min.js"></Script>
        <Script src="/scripts/waypoints.min.js"></Script>
        <Script src="/scripts/counterup.min.js"></Script>
        <Script src="/scripts/main.js"></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
