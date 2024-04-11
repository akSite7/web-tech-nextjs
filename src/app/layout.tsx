import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const raleway = Raleway({
  subsets: ['cyrillic'],
  weight: ['300', '400', '500', '700'],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "HouseVOP - жилой комплекс",
  description: "HouseVOP - жилой комплекс в историческом центре, обеспечит вам лучшую жизнь!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className + ' bg-background '}>
        <div className="__next">
          <Header/>
          <main className="main w-full" id="main">
            <div className="w-full" id="mainPage">
              {children}
            </div>
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
