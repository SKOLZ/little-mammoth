import type { Metadata } from "next";
import { Cairo, Gabriela } from "next/font/google";
import "../styles/globals.scss";
import { Footer } from "./_components/footer";

const gabriela = Gabriela({
  variable: "--font-gabriela",
  subsets: ["latin"],
  weight: ["400"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Little Mammoth",
  description:
    "Little Mammoth is a powerful web app for Albion Online traders, helping you find the best locations to buy and sell resources for maximum profit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="apple-mobile-web-app-title" content="Little Mammoth" />
      <body className={`${gabriela.variable} ${cairo.variable} body`}>
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
