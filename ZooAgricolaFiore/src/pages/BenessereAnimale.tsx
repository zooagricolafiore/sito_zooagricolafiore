import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const BenessereAnimale = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-start">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1920&h=1080&fit=crop"
            alt="Farm landscape with pigs"
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
                  Vita Serena
                </span>
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Benessere Animale
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
                  src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&h=400&fit=crop"
                  alt="Pigs in natural environment"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Main Text */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Perché il Benessere dei nostri animali è così importante
                </h2>
                <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                  Nel nostro allevamento i suini crescono in ampie aree semi-brade ombreggiate da querce cariche di 
                  ghiande e dotate di piscine naturali per rinfrescarsi nelle giornate calde. La densità è volutamente 
                  bassa, l'acqua scorre sempre fresca e l'alimentazione – macinata ogni giorno nel mulino aziendale – 
                  è composta solo da cereali selezionati e foraggi naturali, senza acceleratori di crescita. Giochi 
                  masticabili, pavimentazioni antistress e una ventilazione studiata riducono al minimo l'aggressività, 
                  garantendo animali sereni e carni di qualità superiore.
                </p>
              </div>

              {/* Benefits Section */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Benefici chiave
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🍃</div>
                    <div>
                      <span className="font-semibold">Carne più sana:</span> equilibrio ideale di omega 3/6, colesterolo bassissimo.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🍃</div>
                    <div>
                      <span className="font-semibold">Sapore autentico:</span> marezzatura fine, grasso nobile che si scioglie.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🍃</div>
                    <div>
                      <span className="font-semibold">Etica garantita:</span> zero stress, rispetto completo dei ritmi naturali.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🍃</div>
                    <div>
                      <span className="font-semibold">Filiera sicura:</span> controlliamo internamente ogni fase, dall'allevamento alla vendita.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🍃</div>
                    <div>
                      <span className="font-semibold">Sostenibilità reale:</span> meno emissioni grazie a fotovoltaico e cereali a km 0.
                    </div>
                  </div>
                </div>
              </div>

              {/* Techniques Section */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Tecniche evolute
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-golden-yellow rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-foreground/80">
                      Grandi paddock con alberi da frutto e ghiande naturali.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-golden-yellow rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-foreground/80">
                      Distanza tra abbeveratoi e aree di riposo per stimolare il movimento.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-golden-yellow rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-foreground/80">
                      Piscine estive e ventilazione mirata per un microclima ideale.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-golden-yellow rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-foreground/80">
                      Giochi e materiali masticabili per ridurre lo stress comportamentale.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-golden-yellow rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-foreground/80">
                      Pavimentazioni igieniche in steinit, PVC e acciaio inox.
                    </p>
                  </div>
                </div>
              </div>

              {/* Continuous Care Section */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Cura continua
                </h3>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Seguiamo ogni animale quotidianamente con <strong>personale specializzato</strong>: monitoriamo salute, 
                  alimentazione e comfort ambientale per garantire che ogni prosciutto, salume e taglio fresco 
                  porti sulla vostra tavola l'eccellenza di un allevamento fondato sul <strong>rispetto e la passione</strong>.
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

export default BenessereAnimale;