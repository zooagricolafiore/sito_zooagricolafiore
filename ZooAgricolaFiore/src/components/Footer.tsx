import { Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/logo_zooagricola.avif";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="bg-forest-green text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="ZooAgricolaFiore Logo" className="h-16 w-auto" />
            </div>
            <p className="text-white/80 mb-6">
              L'eccellenza del suino per voi
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/people/Az-Zooagricola-FIORE-di-Magnaterra-Daniele/100057201650265/?rdid=3NS1I32580AeI2IV&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CQwybdB7v%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-golden-yellow flex items-center justify-center hover:bg-golden-yellow/90 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-forest-green" />
              </a>
              <a
                href="https://www.instagram.com/aziendazooagricolafiore/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-golden-yellow flex items-center justify-center hover:bg-golden-yellow/90 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-forest-green" />
              </a>
            </div>
          </div>

          {/* Su di noi */}
          <div>
            <h4 className="text-xl font-bold mb-4">Su di noi</h4>
            <nav className="space-y-2">
              <Link
                to="/eventi"
                className="block text-white/80 hover:text-white transition-colors"
              >
                Riconoscimenti e Eventi
              </Link>
              <Link
                to="/"
                className="block text-white/80 hover:text-white transition-colors"
              >
                Cosa ci contraddistingue
              </Link>
              <Link
                to="/blog"
                className="block text-white/80 hover:text-white transition-colors"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* La nostra realtà */}
          <div>
            <h4 className="text-xl font-bold mb-4">La nostra realtà</h4>
            <nav className="space-y-2">
              <Link
                to="/prodotti"
                className="block text-white/80 hover:text-white transition-colors"
              >
                I nostri prodotti
              </Link>
              <Link
                to="/storia"
                className="block text-white/80 hover:text-white transition-colors"
              >
                La nostra storia
              </Link>
              <Link
                to="/"
                className="block text-white/80 hover:text-white transition-colors"
              >
                Recensioni
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-4">
              Iscriviti alla newsletter
            </h4>
            <p className="text-white/80 mb-4">
              Rimani aggiornato delle prossime novità
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="indirizzo email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-forest-green border-white/30 text-white placeholder:text-white/50 focus:border-golden-yellow"
              />
              <Button
                type="submit"
                variant="hero"
                className="w-full rounded-full"
              >
                Iscriviti
              </Button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-white/60 text-sm text-center">
            Realizzato da NovaFlow s.r.l.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
