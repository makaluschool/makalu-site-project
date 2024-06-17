import type { Metadata } from "next";
import { Montserrat, Nunito, Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Home/Navbar/Nav";
import Footer from "@/components/Footer";

const montserrat = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"], // Include the weights you need
});

export const metadata: Metadata = {
  title: "School Website",
  description: "Welcome to our school website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="nav">
          <Nav />
        </div>
        <div className="">{children}</div>
        <div className="footer">
          <Footer />
        </div>
      </body>
    </html>
  );
}
