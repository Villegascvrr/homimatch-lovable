import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

interface FooterProps {
  cityName?: string;
}

const Footer = ({ cityName }: FooterProps = {}) => {
  const location = cityName || "España";
  const popularCities = [{
    name: "Madrid",
    slug: "madrid"
  }, {
    name: "Barcelona",
    slug: "barcelona"
  }, {
    name: "Sevilla",
    slug: "sevilla"
  }, {
    name: "Valencia",
    slug: "valencia"
  }, {
    name: "Málaga",
    slug: "malaga"
  }, {
    name: "Bilbao",
    slug: "bilbao"
  }];
  return <footer className="bg-gradient-to-br from-homi-ultraLightPurple/10 to-background border-t border-border/50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              
              <span className="font-bold text-2xl homi-gradient-text">HomiMatch</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Encuentra tu compañero de piso ideal en {location}. Descubre personas afines, conecta con ellas y comparte piso con total confianza y comodidad.
            </p>
            <div className="flex flex-col gap-2">
              <a href="mailto:hola@homimatch.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-homi-purple transition-colors">
                <Mail className="w-4 h-4" />
                hola@homimatch.com
              </a>
              <a href="https://instagram.com/homimatch" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-homi-purple transition-colors">
                <Instagram className="w-4 h-4" />
                @homimatch
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-homi-purple transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/matching" className="text-sm text-muted-foreground hover:text-homi-purple transition-colors">
                  Encontrar Compañeros
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-homi-purple transition-colors">
                  Cómo Funciona
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Cities */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Ciudades populares</h3>
            <ul className="space-y-2">
              {popularCities.map(city => <li key={city.slug}>
                  <Link to={`/companero-de-piso/${city.slug}`} className="text-sm text-muted-foreground hover:text-homi-purple transition-colors">
                    {city.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-homi-purple transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-homi-purple transition-colors">
                  Términos de Servicio
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-muted-foreground hover:text-homi-purple transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 HomiMatch. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com/homimatch" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-homi-purple transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;