import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const getPoppins = Poppins({
  weight: '400',
})

export const metadata: Metadata = {
  title: "Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${getPoppins}`}>
        {children}
      </body>
    </html>
  );
}
