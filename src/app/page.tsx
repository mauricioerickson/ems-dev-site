// src/app/page.tsx
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";
import { Portfolio } from "@/components/Portifolio";
import { Differentials } from "@/components/Differentials";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Products />
        <Portfolio />
        <Differentials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
