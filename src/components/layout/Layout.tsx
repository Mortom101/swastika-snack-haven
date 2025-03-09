
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CallButton } from "../CallButton";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-cream">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <CallButton />
      <Footer />
    </div>
  );
};

export default Layout;
