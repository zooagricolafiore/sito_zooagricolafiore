import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroFarm from "@/assets/hero-farm.jpg";
import fiore from "@/assets/produzione-fiore.jpg";

const FioreMangalica = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-start">
        <div className="absolute inset-0">
          <img
            src={heroFarm}
            alt="Fiore Mangalica"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-block mb-4 px-4 py-2 border-2 border-golden-yellow rounded-full">
              <p className="text-golden-yellow font-semibold">"The kobe of pork"</p>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Fiore Mangalica
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Antica razza ungherese "maiale pecora", famosa come "Kobe of pork" per la marezzatura elevata, il grasso ricco di omega-3/6 e il gusto profondo
            </p>
          </div>
        </div>
      </section>

      {/* Caratteristiche Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Caratteristiche del Fiore Mangalica
            </h2>
            
            <p className="text-foreground/80 text-lg leading-relaxed mb-8">
              La carne del maiale Mangalica, conosciuto anche come "maiale pecora", è tra le più pregiate e apprezzate al mondo. Questo animale, grazie al suo caratteristico strato di grasso nobile, ha una carne dalla straordinaria marezzatura, ricca di Omega-3 e Omega-6 e con livelli molto bassi di colesterolo. Il suo sapore unico e intenso, insieme alla morbidezza conferita dal particolare grasso, rendono il Mangalica ideale per prodotti stagionati d'eccellenza e ricette gourmet che valorizzano l'autenticità dei sapori naturali
            </p>

            <div className="rounded-2xl overflow-hidden mb-12">
              <img
                src={fiore}
                alt="Fiore Mangalica Allevamento"
                className="w-full h-[600px] object-cover"
              />
            </div>

            <h2 className="text-4xl font-bold text-foreground mb-8">
              La cura per l'allevamento del Fiore Mangalica
            </h2>
            
            <p className="text-foreground/80 text-lg leading-relaxed mb-8">
              I nostri suini Mangalica vivono in condizioni ideali per esprimere il massimo del loro potenziale qualitativo: allevati in spazi semi-bradi molto ampi, dispongono di alberi da frutto e querce che offrono protezione, cibo naturale e ghiande spontanee. Durante l'estate, una piscina esterna garantisce loro freschezza e benessere, mentre la cura quotidiana e la dieta bilanciata a base di cereali freschi e foraggi selezionati, assicura una crescita lenta e naturale. Ogni fase del processo è attentamente controllata, dall'allevamento fino alla stagionatura tradizionale, per ottenere prodotti di qualità superiore, dal gusto inconfondibile
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={fiore}
                  alt="Mangalica Allevamento 1"
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={fiore}
                  alt="Mangalica Allevamento 2"
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={fiore}
                  alt="Mangalica Allevamento 3"
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>

            {/* Fresco Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-8 border-b-2 border-foreground/20 pb-4">
                Fresco
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-muted">
                    {/* Braciola di collo con osso image */}
                  </div>
                  <p className="text-sm font-medium">Braciola di collo con osso</p>
                </div>
                <div className="text-center">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-muted">
                    {/* Braciola di lombo con osso image */}
                  </div>
                  <p className="text-sm font-medium">Braciola di lombo con osso</p>
                </div>
                <div className="text-center">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-muted">
                    {/* Costolette image */}
                  </div>
                  <p className="text-sm font-medium">Costolette</p>
                </div>
                <div className="text-center">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-muted">
                    {/* Filetto image */}
                  </div>
                  <p className="text-sm font-medium">Filetto</p>
                </div>
                <div className="text-center">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-muted">
                    {/* Salsicce image */}
                  </div>
                  <p className="text-sm font-medium">Salsicce</p>
                </div>
              </div>
            </div>

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
                    {/* Lonza (Capocollo) image */}
                  </div>
                  <p className="text-sm font-medium">Lonza (Capocollo)</p>
                </div>
                <div className="text-center">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-muted">
                    {/* Pancetta (tesa) image */}
                  </div>
                  <p className="text-sm font-medium">Pancetta (tesa)</p>
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
                    {/* Salsiccie image */}
                  </div>
                  <p className="text-sm font-medium">Salsiccie</p>
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
                  Linea Fiore Mangalica
                </Button>
              </Link>
              <Link to="/prodotti">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full px-8 border-2 border-golden-yellow text-golden-yellow hover:bg-golden-yellow hover:text-white"
                >
                  Tutti i prodotti
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

export default FioreMangalica;
