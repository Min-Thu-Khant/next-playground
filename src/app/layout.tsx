

import react from "react";
import "./globals.css";
import NavBar from "@/components/nav";

export default function RootLayout({
  children,
}:{
  children: react.ReactNode;

}) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
