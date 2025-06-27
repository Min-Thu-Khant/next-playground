

import react from "react";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header"

export default function RootLayout({
  children,
}:{
  children: react.ReactNode;

}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
         <Footer/>
      </body>
      
    </html>
  );
}
