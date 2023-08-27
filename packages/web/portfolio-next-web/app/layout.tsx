import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import Footer from "./Footer";
import Header from "./components/Header/Header";

export const metadata: Metadata = {
  title: "Mister Joessef Portfolio",
  description: "checkout @misterjoessef everywhere",
  viewport: "width=device-width, initial-scale=1", // --> <meta name="viewport" content="width=device-width, initial-scale=1"/>
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col justify-between ">
        <Providers>
          <Header />
          <div className="flex flex-grow bg-base-100">{children}</div>
          <Footer></Footer>
        </Providers>
      </body>
    </html>
  );
}
