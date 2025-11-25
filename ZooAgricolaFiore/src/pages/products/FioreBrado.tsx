import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroFarm from "@/assets/hero-farm.jpg";
import brado from "@/assets/produzione-brado.jpg";

const FioreBrado = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-start">
        <div className="absolute inset-0">
          <img
            src={heroFarm}
            alt="Fiore Brado"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Fiore Brado
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
              Caratteristiche del Fiore Brado
            </h2>
            
            <p className="text-foreground/80 text-lg leading-relaxed mb-8">
              La linea Fiore Brado nasce dalla volontà di offrire carni di altissima qualità e autenticamente naturali. I suini, allevati con metodo semi-brado, sviluppano una carne dalla marezzatura fine, delicata e uniforme. Questa caratteristica, unita al grasso particolarmente morbido, rende i prodotti stagionati Fiore Brado estremamente morbidi, profumati e dal sapore delicato e unico, capace di conquistare anche i palati più esigenti.
            </p>

            <div className="rounded-2xl overflow-hidden mb-12">
              <img
                src={brado}
                alt="Fiore Brado Allevamento"
                className="w-full h-[600px] object-cover"
              />
            </div>

            <h2 className="text-4xl font-bold text-foreground mb-8">
              La cura per l'allevamento del Fiore Brado
            </h2>
            
            <p className="text-foreground/80 text-lg leading-relaxed mb-16">
              Nell'allevamento semi-brado, i suini vivono in ampi spazi aperti favorendo il benessere dell'animale: ampi spazi aperti favoriscono il movimento naturale, piscine naturali garantiscono la freschezza nei mesi caldi, e alberi di frutto e querce forniscono protezione e alimentazione spontanea a base di frutta e ghiande. Questa combinazione ideale di movimento e alimentazione naturale, unita all'attenzione quotidiana del nostro team specializzato, permette di ottenere carni dalla qualità superiore, perfette per stagionature tradizionali e rispettose, senza alcun tipo di additivo chimico.
            </p>

            {/* Stagionato Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-8 border-b-2 border-foreground/20 pb-4">
                Stagionato
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-muted">
                    {/* Culatello (Fiorello) image */}
                  </div>
                  <p className="text-sm font-medium">Culatello (Fiorello)</p>
                </div>
                <div className="text-center">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-muted">
                    {/* Guanciale image */}
                  </div>
                  <p className="text-sm font-medium">Guanciale</p>
                </div>
                <div className="text-center">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-muted">
                    {/* Lombetto image */}
                  </div>
                  <p className="text-sm font-medium">Lombetto</p>
                </div>
                <div className="text-center">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-muted">
                    {/* Lonza image */}
                  </div>
                  <p className="text-sm font-medium">Lonza</p>
                </div>
                <div className="text-center">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-muted">
                    {/* Pancetta tesa image */}
                  </div>
                  <p className="text-sm font-medium">Pancetta tesa</p>
                </div>
                <div className="text-center">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-muted">
                    {/* Prosciutto con osso image */}
                  </div>
                  <p className="text-sm font-medium">Prosciutto con osso</p>
                </div>
                <div className="text-center">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-muted">
                    {/* Prosciutto disossato image */}
                  </div>
                  <p className="text-sm font-medium">Prosciutto disossato</p>
                </div>
                <div className="text-center">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-muted">
                    {/* Spalla con osso image */}
                  </div>
                  <p className="text-sm font-medium">Spalla con osso</p>
                </div>
                <div className="text-center">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-muted">
                    {/* Spalla disossata image */}
                  </div>
                  <p className="text-sm font-medium">Spalla disossata</p>
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

export default FioreBrado;
