
import { Phone, Mail, MapPin, Shield, CheckCircle, Award, Users, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-900">AB GM</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-blue-900 font-medium hover:text-blue-700 transition-colors">Startseite</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors cursor-not-allowed">News</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors cursor-not-allowed">Portrait</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors cursor-not-allowed">Kompetenzen</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors cursor-not-allowed">Referenzen</a>
              <a href="#contact" className="text-blue-900 hover:text-blue-700 transition-colors">Kontakt</a>
              <div className="relative group">
                <button className="text-gray-500 hover:text-gray-700 transition-colors flex items-center cursor-not-allowed">
                  Leistungen <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-gray-500 hover:bg-gray-50 cursor-not-allowed">Lufthygiene RLT-Anlagen</a>
                    <a href="#" className="block px-4 py-2 text-gray-500 hover:bg-gray-50 cursor-not-allowed">Trinkwasserhygiene</a>
                    <a href="#" className="block px-4 py-2 text-gray-500 hover:bg-gray-50 cursor-not-allowed">Kühlwasserhygiene</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Klar. Erfahren. Zertifiziert.
            </h1>
            <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Ihr Partner für Hygieneinspektionen, Gefährdungsanalysen & Laboruntersuchungen – gemäß VDI 6022, VDI 6023, VDI 2047 & TrinkwV.
            </p>
            <div className="max-w-5xl mx-auto text-lg leading-relaxed">
              <p className="mb-6">
                AB GM ist ein unabhängiges Ingenieurbüro für Lufthygiene und Wasserhygiene mit Sitz in Mannheim. Wir prüfen Ihre Anlagen auf gesetzlich vorgeschriebene Hygieneanforderungen – schnell, zuverlässig und nach Stand der Technik.
              </p>
              <p>
                Ob RLT-Anlage, Trinkwasserinstallation oder Rückkühlwerk: Wir helfen Ihnen, Betreiberpflichten rechtskonform zu erfüllen – mit klaren Ergebnissen, nachvollziehbaren Berichten und langjähriger Erfahrung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ihre Vorteile mit AB GM</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Shield className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle className="text-xl">Rechtssicherheit & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Hygieneprüfungen nach VDI-Richtlinien und gesetzlichen Vorgaben – zuverlässig, dokumentiert, rechtssicher.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Award className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle className="text-xl">Anerkannte Fachkompetenz</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Schulung nach VDI 6022, 6023, 2047 sowie TÜV-zertifizierter Fachberater für Schimmelpilzschäden.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <CheckCircle className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle className="text-xl">Schnelle Ergebnisse & klare Empfehlungen</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Aussagekräftige Berichte mit Fotodokumentation, Gefährdungsanalyse und konkreten Handlungsvorgaben.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Unsere Leistungsbereiche</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Lufthygiene</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Hygieneinspektionen nach VDI 6022</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Luftkeimmessungen & Raumluftanalysen</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Gefährdungsbeurteilungen & Gutachten</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Trinkwasserhygiene</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Legionellenprüfung nach TrinkwV</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Hygieneinspektion VDI 6023</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Gefährdungsanalyse bei Grenzwertüberschreitung</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Kühlwasserhygiene</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Legionellenprüfung & Laboranalytik</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Hygieneinspektion nach VDI 2047</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Gefährdungsbeurteilung gem. 42. BImSchV</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Recht & Betreiberpflichten</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Betreiber von raumluft- und wassertechnischen Anlagen sind gesetzlich verpflichtet, regelmäßig Hygieneprüfungen durchzuführen. Wir unterstützen Sie bei der Umsetzung aller Anforderungen gemäß Trinkwasserverordnung, VDI 6022, 6023, 2047 und der 42. BImSchV. Damit Sie auf der sicheren Seite sind – gegenüber Gesundheitsämtern, Berufsgenossenschaften und Ihren Mitarbeitenden.
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Qualification */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Vertrauen & Qualifikation</h2>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start mb-6">
                <Users className="h-12 w-12 text-blue-600 mr-6 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    AB GM wird geleitet von <strong>Andreas Stefan Bartsch</strong>, Diplom-Ingenieur (FH) mit jahrzehntelanger Erfahrung in Anlagenhygiene, Gefahrstoffmessung und Betreiberberatung. Als akkreditierter Probenehmer und TÜV-zertifizierter Fachberater stehen wir für sachkundige, praxisnahe Prüfung und Beratung – unabhängig, nachvollziehbar, lösungsorientiert.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sprechen Sie uns an – wir helfen Ihnen weiter.</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Phone className="h-5 w-5 mr-2" />
                    Telefon
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">0621 – 733628</p>
                  <p className="text-lg">Mobil: 0173 – 8771474</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Mail className="h-5 w-5 mr-2" />
                    E-Mail
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">info@ab-gm.de</p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <MapPin className="h-5 w-5 mr-2" />
                  Anschrift
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  Andreas Stefan Bartsch<br />
                  Reiherstraße 1<br />
                  68309 Mannheim
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg font-bold mb-2">AB GM</p>
            <p className="text-sm text-gray-400">
              Ingenieurbüro für Lufthygiene und Wasserhygiene
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
