import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroFarm from "@/assets/hero-farm.jpg";
import classico from "@/assets/produzione-classic.jpg";

const FioreClassic = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-start">
        <div className="absolute inset-0">
          <img
            src={heroFarm}
            alt="Fiore Classic"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Fiore Classic
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Linea esclusiva dell'azienda: suini allevati bradi fra querce, ghiande e piscine naturali; movimento costante, stress minimo e aromi delicati
            </p>
          </div>
        </div>
      </section>

      {/* Caratteristiche Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Caratteristiche del Fiore Classic
            </h2>
            
            <p className="text-foreground/80 text-lg leading-relaxed mb-8">
              La linea Fiore Classic è espressione di una tradizione consolidata e affidabile, dove qualità e gusto si incontrano con equilibrio perfetto. I nostri suini, allevati con cura in ambienti tradizionali e a bassa densità, garantiscono carni dalla consistenza ideale. Grazie a una dieta bilanciata conforme ai disciplinari del prosciutto di Parma e San Daniele, la carne Fiore Classic offre gusto autentico, morbidezza costante e una qualità accessibile e familiare per ogni occasione.
            </p>

            <div className="rounded-2xl overflow-hidden mb-12">
              <img
                src={classico}
                alt="Fiore Classic Allevamento"
                className="w-full h-[600px] object-cover"
              />
            </div>

            <h2 className="text-4xl font-bold text-foreground mb-8">
              La cura per l'allevamento del Fiore Classic
            </h2>
            
            <p className="text-foreground/80 text-lg leading-relaxed mb-16">
              I suini Fiore Classic vengono allevati secondo tecniche tradizionali in stalle appositamente progettate per il loro benessere. Spazi puliti, impeccabile, alimentazione sana e naturale, composta principalmente da cereali aziendali macinati freschi ogni giorno, assicurano una crescita regolare e armoniosa. Questo metodo di allevamento, affiancato da una lavorazione attenta e tradizionale senza conservanti artificiali, consente di produrre salumi e carni fresche dalla qualità costante, genuina e sempre affidabile.
            </p>

            {/* Fresco Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-8 border-b-2 border-foreground/20 pb-4">
                Fresco
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Product images will be added here */}
                <div className="text-center">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-muted">
                    {/* Image placeholder */}
                  </div>
                  <p className="text-sm font-medium">Prodotto</p>
                </div>
              </div>
            </div>

            {/* Stagionato Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-8 border-b-2 border-foreground/20 pb-4">
                Stagionato
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Product images will be added here */}
                <div className="text-center">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-muted">
                    {/* Image placeholder */}
                  </div>
                  <p className="text-sm font-medium">Prodotto</p>
                </div>
              </div>
            </div>

            {/* Cotto Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-8 border-b-2 border-foreground/20 pb-4">
                Cotto
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Product images will be added here */}
                <div className="text-center">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-muted">
                    {/* Image placeholder */}
                  </div>
                  <p className="text-sm font-medium">Prodotto</p>
                </div>
              </div>
            </div>

            {/* Vasetti Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-8 border-b-2 border-foreground/20 pb-4">
                Vasetti
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Product images will be added here */}
                <div className="text-center">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-muted">
                    {/* Image placeholder */}
                  </div>
                  <p className="text-sm font-medium">Prodotto</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-start">
              <Link to="/prodotti">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="rounded-full px-8 bg-forest-green hover:bg-dark-green text-white"
                >
                  Tutti i prodotti
                </Button>
              </Link>
              <Link to="/contatti">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full px-8 border-2 border-golden-yellow text-golden-yellow hover:bg-golden-yellow hover:text-white"
                >
                  Di più su di noi
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactInfoSection />
      <Footer />
    </div>
  );
};

export default FioreClassic;
