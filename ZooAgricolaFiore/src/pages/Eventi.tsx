import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Link } from "react-router-dom";
import eventiHero from "@/assets/eventi-hero.jpg";
import rotaryAward from "@/assets/rotary-award.jpg";
import storeOpening from "@/assets/store-opening.jpg";
import storeRestyling from "@/assets/store-restyling.jpg";
import tastingEvent from "@/assets/tasting-event.jpg";
import areonautica from "@/assets/areonautica.jpg"
import vinitaly from "@/assets/vinitaly.jpg"
import rete4 from "@/assets/rete4.jpg"
import spartanrace from "@/assets/spartan-race.jpg"


const Eventi = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-start">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${eventiHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Riconoscimenti ed Eventi
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Non solo Allevamento
          </p>
        </div>
      </section>

      {/* Events Grid Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Rotary Club Viterbo", image: rotaryAward, link: "/rotary-club-viterbo" },
              { title: "Inaugurazione punto vendita", image: storeOpening, link: "/inaugurazione-punto-vendita" },
              { title: "Restyling punto vendita", image: storeRestyling, link: "/restyling-punto-vendita" },
              { title: "Degustazione stalla San Sebastiano cantina Von Blumen", image: tastingEvent, link: "/degustazione-von-blumen" },
              { title: "Stand Gastronomico Centenario Aeronautica Militare", image: areonautica, link: "/centenario-aeronautica" },
              { title: "Rete4 - Ricette all'Italiana Mengacci", image: rete4, link: "/ricette-italiana-mengacci" },
              { title: "Spartan Race Orte", image: spartanrace, link: "/spartan-race-orte" },
              { title: "Vinitaly Verona", image: vinitaly, link: "/vinitaly-verona" },
            ].map((event, index) => (
              <Link
                key={index}
                to={event.link}
                className="relative group overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold leading-tight">
                    {event.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactInfoSection />
      <Footer />
    </div>
  );
};

export default Eventi;
