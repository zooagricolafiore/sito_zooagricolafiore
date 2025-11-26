import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import energySolar from "@/assets/energy-solar.jpg";

const EnergiaSolare = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-start">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop"
            alt="Solar panels on farm"
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
                  Energia Pulita
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Energia Solare
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
                  src={energySolar}
                  alt="Solar energy installation"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Main Text */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Come scegliamo di essere Energeticamente Autosufficienti
                </h2>
                <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                  La azienda Fiore è alimentata da un impianto fotovoltaico di ultima generazione che copre quasi 
                  interamente il fabbisogno energetico dell'allevamento, dei laboratori e del punto vendita. Questa 
                  scelta - nata dalla volontà di ridurre il nostro impatto ambientale e di rendere la filiera ancora 
                  più etica - permette di trasformare ogni raggio di sole in energia pulita, abbattendo i costi di 
                  produzione e le emissioni di CO₂ senza mai scendere a compromessi sulla qualità del prodotto.
                </p>
              </div>

              {/* Benefits Section */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Benefici chiave
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">☀️</div>
                    <div>
                      <span className="font-semibold">Emissioni ridotte:</span> energia rinnovabile significa minore impronta ecologica.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">⚡</div>
                    <div>
                      <span className="font-semibold">Autonomia energetica:</span> impianto fotovoltaico copre quasi il 100% dei consumi.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🌍</div>
                    <div>
                      <span className="font-semibold">Filiera verde:</span> coerenza tra benessere animale e rispetto dell'ambiente.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">💶</div>
                    <div>
                      <span className="font-semibold">Costi contenuti:</span> risparmio energetico che sosteniamo, non i vostri sapori.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🔋</div>
                    <div>
                      <span className="font-semibold">Continuità garantita:</span> batterie e rete smart assicurano operatività costante.
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Details */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Tecnologie e pratiche adottate
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-golden-yellow rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-foreground/80">
                      Pannelli ad alto rendimento orientati per massimizzare l'irraggiamento.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-golden-yellow rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-foreground/80">
                      Monitoraggio digitale in tempo reale di produzione e consumi.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-golden-yellow rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-foreground/80">
                      Scambio sul posto: l'energia in eccesso ritorna alla rete.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-golden-yellow rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-foreground/80">
                      Illuminazione LED e motori ad alta efficienza collegati all'impianto.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-golden-yellow rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-foreground/80">
                      Manutenzione programmata e pulizia regolare per performance ottimali.
                    </p>
                  </div>
                </div>
              </div>

              {/* Environmental Impact */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Impegno continuo
                </h3>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Il nostro team verifica giornalmente i parametri dell'impianto, programmando interventi preventivi 
                  per mantenerlo sempre al massimo dell'efficienza. In questo modo, possiamo dirvi con orgoglio che 
                  ogni salume, ogni taglio fresco e ogni porchetta Fiore è frutto di un allevamento sostenuto dal sole 
                  di Orte – perché l'eccellenza, per noi, inizia anche da una scelta energetica responsabile.
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

export default EnergiaSolare;