import "./globals.css";
import { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import Footer from "./Footer";
import Header from "./components/Header/Header";

export const metadata: Metadata = {
  title: "Mister Joessef Portfolio",
  keywords: [
    "misterjoessef",
    "ai",
    "entrepreneur",
    "social networking",
    "gaming",
    "openai",
  ],
  metadataBase: new URL("https://mltask.com"),
  description: "checkout @misterjoessef everywhere",
};
export const viewport: Viewport = {
  themeColor: "black",
  width: "device-width",
  initialScale: 1,
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
