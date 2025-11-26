import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroFarm from "@/assets/hero-farm.jpg";
import classico from "@/assets/produzione-classic.jpg";

// Fresco imports
import bracciolaCollo from "@/assets/products/Fiore Classic/Fresco/Bracciola di collo con osso.avif";
import bracciolaLombo from "@/assets/products/Fiore Classic/Fresco/Bracciola di lombo con osso.avif";
import costolette from "@/assets/products/Fiore Classic/Fresco/Costolette.avif";
import fegatelli from "@/assets/products/Fiore Classic/Fresco/Fegatelli.avif";
import fettineCollo from "@/assets/products/Fiore Classic/Fresco/Fettine di collo disossato.avif";
import fettineLombo from "@/assets/products/Fiore Classic/Fresco/Fettine di lombo disossato (Arista).avif";
import fettineScanello from "@/assets/products/Fiore Classic/Fresco/Fettine di scanello di prosciutto.avif";
import filetto from "@/assets/products/Fiore Classic/Fresco/Filetto.avif";
import guancialeFresco from "@/assets/products/Fiore Classic/Fresco/Guanciale fresco.avif";
import macinato from "@/assets/products/Fiore Classic/Fresco/Macinato.avif";
import pancetta from "@/assets/products/Fiore Classic/Fresco/Pancetta.avif";
import prosciuttoFrescoOsso from "@/assets/products/Fiore Classic/Fresco/Prosciutto fresco con osso.avif";
import prosciuttoFrescoDisossato from "@/assets/products/Fiore Classic/Fresco/Prosciutto fresco disossato.avif";
import ribs from "@/assets/products/Fiore Classic/Fresco/Ribs.avif";
import roastBeef from "@/assets/products/Fiore Classic/Fresco/Roast beef.avif";
import salsicce from "@/assets/products/Fiore Classic/Fresco/Salsicce.avif";
import spallaFrescaOsso from "@/assets/products/Fiore Classic/Fresco/Spalla fresca con osso.avif";
import spallaFrescaDisossata from "@/assets/products/Fiore Classic/Fresco/Spalla fresca disossata.avif";
import spezzatino from "@/assets/products/Fiore Classic/Fresco/Spezzatino.avif";
import stinco from "@/assets/products/Fiore Classic/Fresco/Stinco.avif";

// Stagionato imports
import coppiette from "@/assets/products/Fiore Classic/Stagionato/Coppiette.avif";
import culatello from "@/assets/products/Fiore Classic/Stagionato/Culatello.avif";
import guanciale from "@/assets/products/Fiore Classic/Stagionato/Guanciale.avif";
import lomboStagionato from "@/assets/products/Fiore Classic/Stagionato/Lombo stagionato.avif";
import lonzaStagionata from "@/assets/products/Fiore Classic/Stagionato/Lonza Stagionata.avif";
import pancettaArrotolata from "@/assets/products/Fiore Classic/Stagionato/Pancetta arrotolata.avif";
import pancettaTesa from "@/assets/products/Fiore Classic/Stagionato/Pancetta tesa.avif";
import prosciuttoDisossato from "@/assets/products/Fiore Classic/Stagionato/Prosciutto disossato.avif";
import salsicceStag from "@/assets/products/Fiore Classic/Stagionato/Salsicce.avif";
import spallaDisossata from "@/assets/products/Fiore Classic/Stagionato/Spalla disossata.avif";

// Cotto imports
import coppa from "@/assets/products/Fiore Classic/Cotto/Coppa.avif";

// Vasetti imports
import pateFiore from "@/assets/products/Fiore Classic/Vasetti/Patè Fiore.avif";
import prosciuttoOlio from "@/assets/products/Fiore Classic/Vasetti/Prosciutto stagionato sott_olio.avif";
import salsicceOlio from "@/assets/products/Fiore Classic/Vasetti/Salsicce sott_olio.avif";
import strutto from "@/assets/products/Fiore Classic/Vasetti/Strutto Fiore.avif";
import tonnoOlio from "@/assets/products/Fiore Classic/Vasetti/Tonno sott_olio.avif";

const FioreClassic = () => {
  const frescoProducts = [
    { name: "Bracciola di collo con osso", image: bracciolaCollo },
    { name: "Bracciola di lombo con osso", image: bracciolaLombo },
    { name: "Costolette", image: costolette },
    { name: "Fegatelli", image: fegatelli },
    { name: "Fettine di collo disossato", image: fettineCollo },
    { name: "Fettine di lombo disossato (Arista)", image: fettineLombo },
    { name: "Fettine di scanello di prosciutto", image: fettineScanello },
    { name: "Filetto", image: filetto },
    { name: "Guanciale fresco", image: guancialeFresco },
    { name: "Macinato", image: macinato },
    { name: "Pancetta", image: pancetta },
    { name: "Prosciutto fresco con osso", image: prosciuttoFrescoOsso },
    { name: "Prosciutto fresco disossato", image: prosciuttoFrescoDisossato },
    { name: "Ribs", image: ribs },
    { name: "Roast beef", image: roastBeef },
    { name: "Salsicce", image: salsicce },
    { name: "Spalla fresca con osso", image: spallaFrescaOsso },
    { name: "Spalla fresca disossata", image: spallaFrescaDisossata },
    { name: "Spezzatino", image: spezzatino },
    { name: "Stinco", image: stinco },
  ];

  const stagionatoProducts = [
    { name: "Coppiette", image: coppiette },
    { name: "Culatello", image: culatello },
    { name: "Guanciale", image: guanciale },
    { name: "Lombo stagionato", image: lomboStagionato },
    { name: "Lonza Stagionata", image: lonzaStagionata },
    { name: "Pancetta arrotolata", image: pancettaArrotolata },
    { name: "Pancetta tesa", image: pancettaTesa },
    { name: "Prosciutto disossato", image: prosciuttoDisossato },
    { name: "Salsicce", image: salsicceStag },
    { name: "Spalla disossata", image: spallaDisossata },
  ];

  const cottoProducts = [
    { name: "Coppa", image: coppa },
  ];

  const vasettiProducts = [
    { name: "Patè Fiore", image: pateFiore },
    { name: "Prosciutto stagionato sott'olio", image: prosciuttoOlio },
    { name: "Salsicce sott'olio", image: salsicceOlio },
    { name: "Strutto Fiore", image: strutto },
    { name: "Tonno sott'olio", image: tonnoOlio },
  ];

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
                {frescoProducts.map((product, index) => (
                  <div key={index} className="text-center">
                    <div className="aspect-square rounded-lg overflow-hidden mb-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm font-medium">{product.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stagionato Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-8 border-b-2 border-foreground/20 pb-4">
                Stagionato
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {stagionatoProducts.map((product, index) => (
                  <div key={index} className="text-center">
                    <div className="aspect-square rounded-lg overflow-hidden mb-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm font-medium">{product.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cotto Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-8 border-b-2 border-foreground/20 pb-4">
                Cotto
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cottoProducts.map((product, index) => (
                  <div key={index} className="text-center">
                    <div className="aspect-square rounded-lg overflow-hidden mb-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm font-medium">{product.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Vasetti Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-8 border-b-2 border-foreground/20 pb-4">
                Vasetti
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {vasettiProducts.map((product, index) => (
                  <div key={index} className="text-center">
                    <div className="aspect-square rounded-lg overflow-hidden mb-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm font-medium">{product.name}</p>
                  </div>
                ))}
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
