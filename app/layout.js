import { Inter } from "next/font/google";
import "./globals.css";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
    <div>
      {children}
    </div>
    </body>
    </html>
  );
}
