import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import familyRecipes from "@/assets/family-recipes.jpg";

const RicetteFamiliari = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-start">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop"
            alt="Traditional family recipes and spices"
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
                  Sapori Veraci
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Ricette Familiari
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
                  src={familyRecipes}
                  alt="Traditional family recipes"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Main Text */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  L'importanza delle nostre Ricette Familiari
                </h2>
                <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                  Seguiamo le dosi tramandate dalla tradizione contadina ortana: solo sale marino integrale, pepe nero 
                  macinato fresco, aglio pestato a mano e, quando serve, un tocco di finocchio o vino locale. Niente 
                  nitriti, nitrati, glutine o conservanti: la purezza degli ingredienti si fonde con l'arte norcina di 
                  quattro generazioni, trasformando carni selezionate in salumi genuini dal sapore antico e rassicurante.
                </p>
              </div>

              {/* Benefits Section */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Benefici chiave
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🧄</div>
                    <div>
                      <span className="font-semibold">Ingredienti essenziali:</span> spezie naturali, zero additivi industriali.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🌾</div>
                    <div>
                      <span className="font-semibold">Gluten Free:</span> ricette inclusive per tutte le tavole.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">👨‍👩‍👦</div>
                    <div>
                      <span className="font-semibold">Tradizione viva:</span> tecnica custodita e affinata dal 1956.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🍴</div>
                    <div>
                      <span className="font-semibold">Gusto autentico:</span> sapori nitidi, profumi contadini inconfondibili.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🔍</div>
                    <div>
                      <span className="font-semibold">Trasparenza totale:</span> filiera sotto controllo, etichette chiare e sincere.
                    </div>
                  </div>
                </div>
              </div>

              {/* Techniques Section */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Tecniche norcine tradizionali
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-golden-yellow rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-foreground/80">
                      Macinatura lenta e impastatura a freddo per preservare gli aromi.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-golden-yellow rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-foreground/80">
                      Legatura manuale con spago di canapa, come una volta.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-golden-yellow rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-foreground/80">
                      Bilanciamento spezie calibrato su ogni lotto, testato "a naso".
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-golden-yellow rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-foreground/80">
                      Riposo in cella "di asciugatura" prima della stagionatura finale.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quality Section */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Qualità monitorata di continuo
                </h3>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Ogni produzione viene degustata internamente, analizzata in laboratorio e marchiata solo se supera 
                  i nostri standard familiari di sapore e sicurezza. Così, dal primo morso del salame alla fetta 
                  sottile di lonzino, ritroverete sempre la magia semplice delle ricette di casa Fiore.
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

export default RicetteFamiliari;