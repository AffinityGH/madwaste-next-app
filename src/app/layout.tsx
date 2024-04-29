import Footer from "@/app/_components/footer";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `MadWaste.`,
  description: `An e-waste awareness blog based in Madison.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
  metadataBase: new URL('https://REPLACEME.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000" />
      </head> */}
      <head>
        <link rel='icon' href='/favicon/favicon.ico?v=2' />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/> */}
        {/* <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/> */}
        <link rel="manifest" href="/favicon/site.webmanifest"/>
      </head>
      <body className={inter.className}>
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
