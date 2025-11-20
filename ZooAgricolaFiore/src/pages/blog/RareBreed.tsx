import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import blogSustainable from "@/assets/blog-sustainable.jpg";

const RareBreed = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative h-[50vh] flex items-center justify-start">
        <div className="absolute inset-0">
          <img src={blogSustainable} alt="Rare Breed" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Rare Breed Pork: Il Mercato Gourmet Delle Razze Antiche
            </h1>
            <p className="text-xl text-white/90">
              Perché i consumatori premium scelgono Berkshire, Tamworth e Mangalica.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <aside className="lg:col-span-3">
              <div className="sticky top-24 space-y-6">
                <div className="bg-forest-green text-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">Esplora tutta la nostra conoscenza</h3>
                  <p className="text-sm mb-6 opacity-90">Scopri tutti i nostri articoli sul mondo della suinicoltura</p>
                  <Link to="/blog"><Button variant="secondary" className="w-full">Vai al Blog</Button></Link>
                </div>
                <div className="bg-forest-green text-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">Eccellenza suina da quattro generazioni</h3>
                  <Link to="/contatti"><Button variant="secondary" className="w-full">Contattaci</Button></Link>
                </div>
              </div>
            </aside>

            <article className="lg:col-span-9">
              <div className="mb-6">
                <span className="inline-block bg-golden-yellow/15 text-golden-yellow px-4 py-2 rounded-full text-sm font-medium">5 Ago, 2025</span>
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-8">Rare Breed Pork: Il Mercato Gourmet Delle Razze Antiche</h2>
              <div className="rounded-2xl overflow-hidden mb-8">
                <img src={blogSustainable} alt="Rare Breed" className="w-full h-[600px] object-cover" />
              </div>
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Il segmento "Rare Breed Pork" – carni suine da razze antiche come Berkshire, Tamworth e Mangalica – sta vivendo un boom mondiale: nel 2024 il giro d'affari ha superato la soglia dei 3 miliardi di dollari e potrebbe raddoppiare entro il 2030, spinto da consumatori disposti a pagare fino al 40 % in più per qualità, storia e sostenibilità.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Dal 2020 la domanda di carni heritage cresce con un CAGR intorno al 7% nel Nord America e sfiora l'8 % in Europa, trainata da ristorazione gourmet e retail specializzato. I driver chiave? Ricchezza di grassi insaturi, allevamento a pastura e storytelling territoriale che rassicura i "conscious consumers" sui temi di benessere animale e gusto autentico.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Il Berkshire – noto in Asia come Kurobuta – è celebre per la marezzatura paragonata al Wagyu: gli studi scientifici indicano intramuscolare fat superiore, minore perdita in cottura e tenerezza elevata. Tagli certificati 100% Berkshire possono toccare i 40 €/kg in macelleria premium e compaiono con regolarità nei menu stellati statunitensi, spinti dalle preferenze di chef che ne lodano "affidabilità e sapore burroso".
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Originaria delle Midlands, la Tamworth è amata per il lombo lungo e il grasso compatto ideale per bacon artigianali. Il Rare Breeds Survival Trust la classifica ancora "a rischio" con meno di 500 scrofe registrate, ma gli allevamenti boschivi la riportano sui banchi gourmet grazie al gusto "fruttato e dolce".
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Rianimata da progetti ungheresi e dall'azienda spagnola Monte Nevado, la popolazione di Mangalica è passata da poche centinaia di capi negli anni '90 a oltre 60 000 nel 2024. Il fitto pelo riccio protegge l'animale nei pascoli invernali, mentre il grasso ricco di omega-3 regala una scioglievolezza unica, ricercata nei prosciutti lunga stagionatura.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Perché il consumatore premium li preferisce: Marbling & mouthfeel - rispetto ai suini commerciali, le razze antiche mostrano una marezzatura più fine che eleva succulenza e sapidità. Storytelling e sostenibilità - piccoli allevamenti all'aperto, assenza di antibiotici e focus su biodiversità attraggono i buyer di fascia alta. Esperienza sensoriale - note di nocciola (Berkshire), frutta secca (Tamworth) o burro e spezie (Mangalica) ampliano il pairing con vini e craft beer, valorizzando la cucina nose-to-tail.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Tra marketplace online e macellerie d'eccellenza, il prezzo medio al dettaglio dei tagli heritage oscilla tra 18 € (spalla) e 55 € (costata) al kg. La bassa prolificità (Tamworth 7,8 suinetti/litter) e la crescita lenta limitano l'offerta; inoltre logistica e certificazioni di purezza genetica rendono la filiera più costosa rispetto ai ibridi industriali. Tuttavia, il margine premium compensa gli oneri e stimola nuovi allevatori rigenerativi ad entrare nel segmento.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Il mercato gourmet delle razze suine antiche mette d'accordo chef e consumatori consapevoli, offrendo un mix di gusto superiore, sostenibilità e patrimonio culturale. Con la crescita della ristorazione fine-casual e dell'e-commerce di nicchia, Berkshire, Tamworth e Mangalica possono diventare ambasciatori di una nuova economia agricola attenta alla biodiversità.
                </p>
                <div className="bg-forest-green/10 border-l-4 border-forest-green p-6 rounded-r-lg mt-8">
                  <p className="text-forest-green font-semibold text-lg">
                    Dalla marezzatura del Berkshire alla "lana" del Mangalica: perché i tagli heritage seducono chef e food-lover premium.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <ContactInfoSection />
      <Footer />
    </div>
  );
};

export default RareBreed;
