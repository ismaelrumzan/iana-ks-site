import type { Metadata } from "next";
import { Inter, Noto_Naskh_Arabic, Noto_Serif } from "next/font/google";
import Header from "@/components/header";
import "./css/style.css";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const noto_Naskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-noto-naskh",
});

const noto_serif = Noto_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-serif",
});

export const metadata: Metadata = {
  title: "IANA Financial",
  description: "Website coming soon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${noto_Naskh.variable} ${noto_serif.variable}`}>
      <body
        className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          <main className="grow pt-28 md:pt-32">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
