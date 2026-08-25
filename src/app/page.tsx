// src/app/page.tsx
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portifolio";
import { CTOAsAService } from "@/components/CTOAsAService";
import { Products } from "@/components/Products";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Technologies } from "@/components/Technologies";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problems />
        <Services />
        <Portfolio />
        <CTOAsAService />
        <Products />
        <Process />
        <About />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
