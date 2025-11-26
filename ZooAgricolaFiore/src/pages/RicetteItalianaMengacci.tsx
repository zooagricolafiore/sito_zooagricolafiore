import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import rotaryAward from "@/assets/rotary-award.jpg";
import storeOpening from "@/assets/store-opening.jpg";
import storeRestyling from "@/assets/store-restyling.jpg";
import tastingEvent from "@/assets/tasting-event.jpg";
import areonautica from "@/assets/areonautica.jpg";
import vinitaly from "@/assets/vinitaly.jpg";
import rete4 from "@/assets/rete4.jpg";
import spartanrace from "@/assets/spartan-race.jpg";

const RicetteItalianaMengacci = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const allProjects = [
    {
      title: "Rotary Club Viterbo",
      image: rotaryAward,
      link: "/rotary-club-viterbo",
    },
    {
      title: "Inaugurazione punto vendita",
      image: storeOpening,
      link: "/inaugurazione-punto-vendita",
    },
    {
      title: "Restyling punto vendita", 
      image: storeRestyling,
      link: "/restyling-punto-vendita",
    },
    {
      title: "Degustazione Von Blumen",
      image: tastingEvent,
      link: "/degustazione-von-blumen",
    },
    {
      title: "Centenario Aeronautica",
      image: areonautica,
      link: "/centenario-aeronautica",
    },
    {
      title: "Spartan Race Orte",
      image: spartanrace,
      link: "/spartan-race-orte",
    },
    {
      title: "Vinitaly Verona",
      image: vinitaly,
      link: "/vinitaly-verona",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-start">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&h=1080&fit=crop"
            alt="Awards and recognition ceremony"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Riconoscimenti ed eventi
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Rete4 - Ricette all'Italiana con Davide Mengacci
              </h2>
              <p className="text-muted-foreground text-lg">
                La nostra tradizione in TV
              </p>
            </div>

            {/* Article Image */}
            <div className="rounded-2xl overflow-hidden mb-8">
              <img
                src={rete4}
                alt="Ricette all'Italiana Mengacci"
                className="w-full h-[600px] object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 text-lg leading-relaxed">
                Nel cuore della Tuscia, il nostro allevamento è stato protagonista della trasmissione di Davide Mengacci "Ricette all'Italiana". 
                Davanti alle telecamere, abbiamo raccontato la nostra filosofia produttiva e presentato salumi e specialità artigianali, portando 
                il gusto autentico e la qualità della tradizione direttamente nelle case degli italiani.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Projects Carousel Section */}
      <section className="bg-gradient-to-b from-background via-amber-50/30 to-amber-100/50 py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold text-foreground">
              Tutti i nostri progetti
            </h3>
            
            <div className="flex gap-3">
              <Button
                variant="hero"
                size="icon"
                className="rounded-full w-12 h-12"
                aria-label="Previous"
                onClick={() => setCurrentIndex((currentIndex - 1 + allProjects.length) % allProjects.length)}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="hero"
                size="icon"
                className="rounded-full w-12 h-12"
                aria-label="Next"
                onClick={() => setCurrentIndex((currentIndex + 1) % allProjects.length)}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {allProjects.map((project, index) => (
                <Link
                  key={index}
                  to={project.link}
                  className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-96 flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-white text-xl font-bold leading-tight">
                      {project.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Link to="/eventi">
              <Button
                variant="hero"
                size="lg"
                className="rounded-full px-12 text-base"
              >
                Scopri di più
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ContactInfoSection />
      <Footer />
    </div>
  );
};

export default RicetteItalianaMengacci;
