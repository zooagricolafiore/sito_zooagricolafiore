import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroFarm from "@/assets/hero-farm.jpg";

const MangimeNaturale = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative h-[50vh] flex items-center justify-start">
        <div className="absolute inset-0">
          <img src={heroFarm} alt="Mangime Naturale" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Mangime naturale e filiera circolare: come alimentare suini in modo sostenibile
            </h1>
            <p className="text-xl text-white/90">
              Dal campo aziendale alla stalla: perché il mangime autoprodotto fa la differenza in qualità, ambiente ed economia locale
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <aside className="lg:col-span-3">
              <div className="sticky top-24 space-y-6">
                <div className="bg-forest-green text-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">Esplora tutta la nostra conoscenza</h3>
                  <p className="text-sm mb-6 opacity-90">Scopri tutti i nostri articoli sul mondo della suinicoltura</p>
                  <Link to="/blog"><Button variant="secondary" className="w-full">Vai al Blog</Button></Link>
                </div>
                <div className="bg-forest-green text-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">Eccellenza suina da quattro generazioni</h3>
                  <Link to="/contatti"><Button variant="secondary" className="w-full">Contattaci</Button></Link>
                </div>
              </div>
            </aside>

            <article className="lg:col-span-9">
              <div className="mb-6">
                <span className="inline-block bg-golden-yellow/15 text-golden-yellow px-4 py-2 rounded-full text-sm font-medium">25 Ott, 2025</span>
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-8">Mangime naturale e filiera circolare</h2>
              <div className="rounded-2xl overflow-hidden mb-8">
                <img src={heroFarm} alt="Mangime Naturale" className="w-full h-[600px] object-cover" />
              </div>
              <div className="prose prose-lg max-w-none space-y-6">
                <div className="bg-forest-green/10 border-l-4 border-forest-green p-6 rounded-r-lg mt-8">
                  <p className="text-forest-green font-semibold text-lg">
                    Dal campo aziendale alla stalla: perché il mangime autoprodotto fa la differenza in qualità, ambiente ed economia locale
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <ContactInfoSection />
      <Footer />
    </div>
  );
};

export default MangimeNaturale;
