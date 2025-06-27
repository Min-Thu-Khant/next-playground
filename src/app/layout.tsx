

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
        {/* <NavBar/> */}
        {children}
         <footer className="text-center p-4 text-sm text-gray-500">
          &copy; 2025 ShopMate. All rights reserved.
        </footer>
      </body>
      
    </html>
  );
}
