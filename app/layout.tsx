import type { Metadata } from "next";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import { basePath } from "../next.config";

export const metadata: Metadata = {
  title: "Alessandro Quets",
  description:
    "Alessandro Quets' personal website. Projects, experiments and CV",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth antialiased break-words md:subpixel-antialiased">
      <head>
        <link rel="icon" href={basePath + "/favicon.svg"} />
      </head>
      <body>
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
