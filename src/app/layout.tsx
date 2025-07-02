

import react from "react";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header"
import CartContextProvider from "@/providers/CartContextProvider";

export default function RootLayout({
  children,
}: {
  children: react.ReactNode;

}) {
  return (
    <html lang="en">
      <body>
        <CartContextProvider>
          <Header />
          {children}
          <Footer />
        </CartContextProvider>
      </body>

    </html>
  );
}
