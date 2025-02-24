import { Geist, Geist_Mono } from "next/font/google";
import "@/public/assets/fonts/fonts.css";
import "@/public/assets/fonts/font-icons.css";
import "@/public/assets/css/bootstrap.min.css";
import "@/public/assets/css/swiper-bundle.min.css";
import "@/public/assets/css/animate.css";
import "@/public/assets/css/bootstrap-select.min.css";
import "@/public/assets/css/sib-styles.css";
import "./globals.css";
import Script from "next/script";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://misi.ng"),
  title: "Misi Nigeria | Luxury Fashion & Bespoke Couture",
  description:
    "Discover Misi Nigeria's exclusive collection of bespoke luxury couture and handcrafted fashion pieces. Experience elegance redefined with our made-to-measure services, traditional designs, and contemporary African fashion.",
  keywords: [
    "Misi Nigeria",
    "luxury fashion",
    "bespoke couture",
    "Nigerian fashion",
    "custom tailoring",
    "fashion design",
    "African fashion",
    "made-to-measure",
    "traditional attire",
    "Lagos fashion",
    "luxury clothing",
    "designer wear",
  ],
  authors: [{ name: "Misi Nigeria" }],
  applicationName: "Misi Nigeria",
  referrer: "origin-when-cross-origin",
  creator: "Misi Nigeria",
  publisher: "Misi Nigeria",
  category: "Fashion & Luxury",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="top-right" />
        <Script src="/assets/js/bootstrap.min.js" />
        <Script src="/assets/js/jquery.min.js" />
        <Script src="/assets/js/swiper-bundle.min.js" />
        <Script src="/assets/js/carousel.js" />
        <Script src="/assets/js/bootstrap-select.min.js" />
        <Script src="/assets/js/lazysize.min.js" />
        <Script src="/assets/js/count-down.js" />
        <Script src="/assets/js/wow.min.js" />
        <Script src="/assets/js/multiple-modal.js" />
        <Script src="/assets/js/main.js" />
      </body>
    </html>
  );
}
