import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import slowAging from "@/assets/slow-aging.jpg";

const StagionaturaLenta = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-start">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1920&h=1080&fit=crop"
            alt="Traditional aging cellar"
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
                  Tempo Maestro
                </span>
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Stagionatura lenta
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
                    to="/km-zero"
                    className="block w-full text-left px-4 py-3 bg-white rounded-lg text-forest-green font-medium hover:bg-golden-yellow transition-colors"
                  >
                    Km Zero
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
                  src={slowAging}
                  alt="Slow aging process"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Main Text */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Perché la nostra Stagionatura Lenta è così speciale
                </h2>
                <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                  Nei nostri prosciutti, salumi e coppiette il tempo è l'ingrediente segreto: lasciamo che l'aria della Tuscia, 
                  il microclima delle nostre cantine in pietra e la sapienza norcina di famiglia lavorino lenti, trasformando 
                  ogni taglio in un capolavoro di aromi e morbidezza. Solo sale, pepe, aglio e un filo di vino; nessun additivo, 
                  nessuna scorciatoia – solo pazienza artigianale e controllo impeccabile di temperatura e umidità.
                </p>
              </div>

              {/* Benefits Section */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Benefici chiave
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🕰️</div>
                    <div>
                      <span className="font-semibold">Aromi complessi:</span> mesi (o anni) di affinamento sviluppano profumi unici.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🍖</div>
                    <div>
                      <span className="font-semibold">Morbidezza setosa:</span> le fibre si rilassano, il grasso nobile si scioglie.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🌿</div>
                    <div>
                      <span className="font-semibold">Purezza naturale:</span> zero conservanti, solo spezie e cure quotidiane.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">💪</div>
                    <div>
                      <span className="font-semibold">Proteine integre:</span> lenta disidratazione, digeribilità e valori nutrizionali preservati.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🇮🇹</div>
                    <div>
                      <span className="font-semibold">Eredità familiare:</span> quattro generazioni di metodo norcino perfezionato.
                    </div>
                  </div>
                </div>
              </div>

              {/* Process Section */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Tecniche di stagionatura evolute
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-golden-yellow rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-foreground/80">
                      Sale a secco su piani inclinati, girature manuali regolari.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-golden-yellow rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-foreground/80">
                      Celle ventilate naturalmente; controllo digitale di umidità e temperatura.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-golden-yellow rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-foreground/80">
                      Massima selezione delle carni (Fiore Brado & Mangalica).
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-golden-yellow rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-foreground/80">
                      Analisi periodiche per garantire sicurezza microbiologica senza nitriti.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quality Section */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Cura e monitoraggio continui
                </h3>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Il nostro team controlla quotidianamente ogni lotto: pesi, profumi, consistenza e condizioni ambientali. 
                  Solo quando il salume raggiunge la perfetta maturazione – quella che supera i nostri test sensoriali e 
                  analitici – lo rendiamo disponibile, assicurandovi un'esperienza di gusto intensa e inimitabile.
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

export default StagionaturaLenta;