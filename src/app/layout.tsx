import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { CartProvider } from "@/context/CartContext";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://meoflow.com.tr"),
  title: {
    default: "Meoflow | Endüstriyel Ölçüm ve Kontrol Ekipmanları",
    template: "%s | Meoflow",
  },
  description:
    "Elektromanyetik debimetre, manyetik bypass seviye göstergesi, basınç transmitteri, sıcaklık sensörü ve proses kontrol cihazları. Endüstriyel otomasyon çözümleri. Uluslararası teslimat.",
  keywords: [
    "elektromanyetik debimetre",
    "electromagnetic flowmeter",
    "مقياس التدفق الكهرومغناطيسي",
    "электромагнитный расходомер",
    "电磁流量计",
    "manyetik bypass seviye göstergesi",
    "magnetic bypass level indicator",
    "basınç transmitteri",
    "pressure transmitter",
    "sıcaklık sensörü",
    "PT100",
    "termokupl",
    "seviye sensörü",
    "proses kontrol",
    "endüstriyel otomasyon",
    "industrial automation",
    "meoflow",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: ["en_US", "ar_SA", "ru_RU", "zh_CN", "az_AZ", "es_ES"],
    siteName: "Meoflow",
    title: "Meoflow | Industrial Measurement & Control Equipment",
    description:
      "Electromagnetic flowmeters, magnetic bypass level indicators, pressure transmitters. Worldwide shipping.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "https://meoflow.com.tr",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-50 text-gray-900 antialiased">
        <LanguageProvider>
          <CartProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <ChatBot />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
