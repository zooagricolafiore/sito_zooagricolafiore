import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import innovation from "@/assets/innovation.jpg";

const Innovazione = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-start">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop"
            alt="Innovation and technology"
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
                  Miglioramento continuo
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Innovazione
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
                    to="/km-zero"
                    className="block w-full text-left px-4 py-3 bg-white rounded-lg text-forest-green font-medium hover:bg-golden-yellow transition-colors"
                  >
                    Km Zero
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
                  src={innovation}
                  alt="Innovation in farming"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Main Text */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Come innoviamo all'interno dell'allevamento
                </h2>
                <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                  Abbiamo studiato i migliori modelli di allevamento all'aperto del mondo, li abbiamo reinterpretati 
                  con know-how familiare e li abbiamo integrati nel nostro ecosistema di Orte: grandi paddock modulari, 
                  distanza strategica tra abbeveratoi e zone di riposo per stimolare il movimento, piscine naturali per 
                  la termoregolazione e querce cariche di ghiande che arricchiscono la dieta. Ogni dettaglio nasce da 
                  scelte autonome, testate sul campo, con un unico obiettivo: ottenere la carne suina più morbida, 
                  marezzata e sicura che si possa immaginare.
                </p>
              </div>

              {/* Innovation Areas */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Benefici chiave
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🏆</div>
                    <div>
                      <span className="font-semibold">Carne d'élite:</span> marezzatura perfetta, grasso nobile ricco di omega.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🌳</div>
                    <div>
                      <span className="font-semibold">Benessere oltre-standard:</span> suini liberi di muoversi, stress minimo.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🌡️</div>
                    <div>
                      <span className="font-semibold">Microclima ideale:</span> ombra naturale, ventilazione strategica, temperature controllate.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">💧</div>
                    <div>
                      <span className="font-semibold">Piscine estive:</span> termoregolazione naturale per salute e gusto superiori.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🔬</div>
                    <div>
                      <span className="font-semibold">Ricerca continua:</span> dati su crescita, stress e qualità analizzati ogni ciclo.
                    </div>
                  </div>
                </div>
              </div>

              {/* Technology Implementation */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Tecniche e pratiche adottate
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-golden-yellow rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-foreground/80">
                      Paddock dinamici con rotazione per rigenerare il suolo e l'erba.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-golden-yellow rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-foreground/80">
                      Integrazione di ghiande, frutta e cereali locali in razioni bilanciate.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-golden-yellow rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-foreground/80">
                      Densità bassissima: più spazio, meno competizione, crescita armoniosa.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-golden-yellow rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-foreground/80">
                      Sensori ambientali per registrare umidità, temperatura e comfort animale.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-golden-yellow rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-foreground/80">
                      Protocollo nutraceutico personalizzato per ogni fase di crescita.
                    </p>
                  </div>
                </div>
              </div>

              {/* Future Vision */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Impegno costante
                </h3>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Il nostro team monitora quotidianamente prestazioni, benessere e parametri sensoriali delle carni 
                  per migliorare di stagione in stagione. Così, quando assaggerete un prosciutto Fiore Brado o 
                  Mangalica, sentirete la differenza di un'innovazione nata da studio, passione e autonomia creativa 
                  — non una semplice imitazione, ma l'eccellenza su misura per il nostro territorio.
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

export default Innovazione;