"use client";

import { Footer, Navbar } from "@/features/ui";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <div className="flex-grow">
      <Navbar />
      <main>{children}</main>
    </div>
    <Footer />
  </div>
);

export default RootLayout;
