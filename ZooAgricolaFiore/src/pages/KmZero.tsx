import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import kmZero from "@/assets/km-zero.jpg";

const KmZero = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-start">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&h=1080&fit=crop"
            alt="Local farm landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block mb-6">
              <div className="border-2 border-golden-yellow rounded-full px-6 py-2">
                <span className="text-golden-yellow text-sm font-medium">
                  Filiera corta
                </span>
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Km Zero
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Left Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Navigation Menu */}
              <div className="bg-forest-green rounded-2xl p-6">
                <div className="text-center mb-6">
                  <div className="inline-block border-2 border-golden-yellow rounded-full px-4 py-2 mb-4">
                    <span className="text-golden-yellow text-xs font-medium">
                      tutti i punti di forza
                    </span>
                  </div>
                  <h3 className="text-white text-xl font-bold">
                    Cosa ci contraddistingue
                  </h3>
                </div>
                
                <nav className="space-y-3">
                  <Link
                    to="/benessere-animale"
                    className="block w-full text-left px-4 py-3 bg-white rounded-lg text-forest-green font-medium hover:bg-golden-yellow transition-colors"
                  >
                    Benessere Animale
                  </Link>
                  <Link
                    to="/stagionatura-lenta"
                    className="block w-full text-left px-4 py-3 bg-white rounded-lg text-forest-green font-medium hover:bg-golden-yellow transition-colors"
                  >
                    Stagionatura lenta
                  </Link>
                  <Link
                    to="/ricette-familiari"
                    className="block w-full text-left px-4 py-3 bg-white rounded-lg text-forest-green font-medium hover:bg-golden-yellow transition-colors"
                  >
                    Ricette Familiari
                  </Link>
                  <Link
                    to="/energia-solare"
                    className="block w-full text-left px-4 py-3 bg-white rounded-lg text-forest-green font-medium hover:bg-golden-yellow transition-colors"
                  >
                    Energia Solare
                  </Link>
                  <Link
                    to="/innovazione"
                    className="block w-full text-left px-4 py-3 bg-white rounded-lg text-forest-green font-medium hover:bg-golden-yellow transition-colors"
                  >
                    Innovazione
                  </Link>
                </nav>
              </div>

              {/* Excellence Card */}
              <div className="bg-forest-green rounded-2xl p-6 text-center">
                <h3 className="text-white text-lg font-bold mb-4">
                  Eccellenza suina da quattro generazioni
                </h3>
                <Link to="/contatti">
                  <Button variant="hero" className="rounded-full px-6">
                    Contattaci
                  </Button>
                </Link>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              {/* Hero Image */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={kmZero}
                  alt="Local supply chain"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Main Text */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Quanto è importante il Km Zero
                </h2>
                <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                  Coltiviamo e trasformiamo tutto in un raggio di pochi chilometri: dai campi di mais, orzo e favino 
                  coltivati dalla nostra famiglia alle celle dove stagioniamo i salumi, fino al punto vendita interno 
                  all'azienda. Con l'aiuto di agricoltori ortani selezionati, riduciamo al minimo i trasporti, 
                  maciniamo i cereali ogni giorno nel nostro mulino e consegniamo carne e salumi freschissimi 
                  direttamente a voi. Una filiera cortissima che abbatte CO₂, assicura tracciabilità totale e 
                  sostiene l'economia locale.
                </p>
              </div>

              {/* Benefits Section */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Benefici chiave
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🚜</div>
                    <div>
                      <span className="font-semibold">Freschezza quotidiana:</span> dalla macina al banco in poche ore.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🌍</div>
                    <div>
                      <span className="font-semibold">Impronta ridotta:</span> meno trasporti, meno emissioni, aria più pulita.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🔍</div>
                    <div>
                      <span className="font-semibold">Tracciabilità totale:</span> sappiamo esattamente da quale campo arriva ogni chicco.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">💚</div>
                    <div>
                      <span className="font-semibold">Territorio vivo:</span> acquisti che sostengono famiglie e terreni di Orte.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">💡</div>
                    <div>
                      <span className="font-semibold">Qualità coerente:</span> controllo costante su coltivazioni, mangimi e lavorazioni.
                    </div>
                  </div>
                </div>
              </div>

              {/* Local Network */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Tecniche e pratiche adottate
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-golden-yellow rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-foreground/80">
                      Coltiviamo cereali su terreni di proprietà o in affitto entro 10 km.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-golden-yellow rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-foreground/80">
                      Stoccaggio in silos dedicati per lotti separati e controllati.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-golden-yellow rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-foreground/80">
                      Mulino aziendale: macinatura e miscelazione giornaliera dei mangimi.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-golden-yellow rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-foreground/80">
                      Punto vendita interno: filiera chiusa senza passaggi intermedi.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-golden-yellow rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-foreground/80">
                      Logistica smart locale per consegne rapide e a temperatura controllata.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sustainability */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Impegno continuo
                </h3>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Collaboriamo con agronomi e partner locali per migliorare rotazioni colturali, ridurre gli input 
                  chimici e aumentare la fertilità del suolo. Monitoriamo costantemente i tempi di raccolta, 
                  stoccaggio e consegna per garantirvi un'esperienza fresca, etica e sostenibile in ogni morso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactInfoSection />
      <Footer />
    </div>
  );
};

export default KmZero;