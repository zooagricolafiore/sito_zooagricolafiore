import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Story from "./pages/Story";
import Eventi from "./pages/Eventi";
import Contatti from "./pages/Contatti";
import Blog from "./pages/Blog";
import Prodotti from "./pages/Prodotti";
import BenessereAnimale from "./pages/BenessereAnimale";
import StagionaturaLenta from "./pages/StagionaturaLenta";
import RicetteFamiliari from "./pages/RicetteFamiliari";
import EnergiaSolare from "./pages/EnergiaSolare";
import KmZero from "./pages/KmZero";
import Innovazione from "./pages/Innovazione";
import RotaryClubViterbo from "./pages/RotaryClubViterbo";
import InaugurazioneVendita from "./pages/InaugurazioneVendita";
import RestylingVendita from "./pages/RestylingVendita";
import DegustazioneVonBlumen from "./pages/DegustazioneVonBlumen";
import CentenarioAeronautica from "./pages/CentenarioAeronautica";
import RicetteItalianaMengacci from "./pages/RicetteItalianaMengacci";
import SpartanRaceOrte from "./pages/SpartanRaceOrte";
import VinitalyVerona from "./pages/VinitalyVerona";
import SelezioneGenetica from "./pages/blog/SelezioneGenetica";
import MangimeNaturale from "./pages/blog/MangimeNaturale";
import Omega3CLA from "./pages/blog/Omega3CLA";
import TagliAlternativi from "./pages/blog/TagliAlternativi";
import CarniSostenibili from "./pages/blog/CarniSostenibili";
import AgricolturaRigenerativa from "./pages/blog/AgricolturaRigenerativa";
import Prosciutto40 from "./pages/blog/Prosciutto40";
import NoseToTail from "./pages/blog/NoseToTail";
import AntibioticFree from "./pages/blog/AntibioticFree";
import RareBreed from "./pages/blog/RareBreed";
import WineHam from "./pages/blog/WineHam";
import Mangalica from "./pages/blog/Mangalica";
import GrigliatEstiva from "./pages/blog/GrigliatEstiva";
import SuinoSemibrado from "./pages/blog/SuinoSemibrado";
import ProduzioneLocale from "./pages/blog/ProduzioneLocale";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/storia" element={<Story />} />
          <Route path="/eventi" element={<Eventi />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/prodotti" element={<Prodotti />} />
          <Route path="/benessere-animale" element={<BenessereAnimale />} />
          <Route path="/stagionatura-lenta" element={<StagionaturaLenta />} />
          <Route path="/ricette-familiari" element={<RicetteFamiliari />} />
          <Route path="/energia-solare" element={<EnergiaSolare />} />
          <Route path="/km-zero" element={<KmZero />} />
          <Route path="/innovazione" element={<Innovazione />} />
          <Route path="/rotary-club-viterbo" element={<RotaryClubViterbo />} />
          <Route path="/inaugurazione-punto-vendita" element={<InaugurazioneVendita />} />
          <Route path="/restyling-punto-vendita" element={<RestylingVendita />} />
          <Route path="/degustazione-von-blumen" element={<DegustazioneVonBlumen />} />
          <Route path="/centenario-aeronautica" element={<CentenarioAeronautica />} />
          <Route path="/ricette-italiana-mengacci" element={<RicetteItalianaMengacci />} />
          <Route path="/spartan-race-orte" element={<SpartanRaceOrte />} />
          <Route path="/vinitaly-verona" element={<VinitalyVerona />} />
          <Route path="/blog/selezione-genetica-suinicoltura" element={<SelezioneGenetica />} />
          <Route path="/blog/mangime-naturale-filiera-circolare" element={<MangimeNaturale />} />
          <Route path="/blog/omega3-cla-profilo-nutrizionale" element={<Omega3CLA />} />
          <Route path="/blog/tagli-alternativi-maiale-cucina" element={<TagliAlternativi />} />
          <Route path="/blog/carni-suine-sostenibili-innovazione" element={<CarniSostenibili />} />
          <Route path="/blog/agricoltura-rigenerativa-suinicoltura" element={<AgricolturaRigenerativa />} />
          <Route path="/blog/prosciutto-40-tradizione-innovazione" element={<Prosciutto40 />} />
          <Route path="/blog/nose-to-tail-usare-tutto-maiale" element={<NoseToTail />} />
          <Route path="/blog/antibiotic-free-pork-carne-sana" element={<AntibioticFree />} />
          <Route path="/blog/rare-breed-pork-razze-antiche" element={<RareBreed />} />
          <Route path="/blog/wine-ham-abbinamenti-prosciutto" element={<WineHam />} />
          <Route path="/blog/mangalica-storia-sapori" element={<Mangalica />} />
          <Route path="/blog/guida-grigliata-estiva" element={<GrigliatEstiva />} />
          <Route path="/blog/perche-scegliere-suino-semibrado" element={<SuinoSemibrado />} />
          <Route path="/blog/benefici-produzione-locale" element={<ProduzioneLocale />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
