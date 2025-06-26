
import { Phone, Mail, MapPin, Shield, CheckCircle, Award, Users, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">AB GM</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <span className="text-gray-900 font-medium">Startseite</span>
              <span className="text-gray-400 font-light cursor-default">News</span>
              <span className="text-gray-400 font-light cursor-default">Portrait</span>
              <span className="text-gray-400 font-light cursor-default">Kompetenzen</span>
              <span className="text-gray-400 font-light cursor-default">Referenzen</span>
              <span className="text-gray-900 hover:text-gray-700 cursor-pointer">Kontakt</span>
              <div className="relative">
                <span className="text-gray-400 font-light cursor-default flex items-center">
                  Leistungen <ChevronDown className="ml-1 h-4 w-4" />
                </span>
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md opacity-0 invisible">
                  <div className="py-2">
                    <span className="block px-4 py-2 text-gray-400 font-light cursor-default">Lufthygiene RLT-Anlagen</span>
                    <span className="block px-4 py-2 text-gray-400 font-light cursor-default">Trinkwasserhygiene</span>
                    <span className="block px-4 py-2 text-gray-400 font-light cursor-default">Kühlwasserhygiene</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Height */}
      <section className="h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-8">
            Klar. Erfahren. Zertifiziert.
          </h1>
          <p className="text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            Ihr Partner für Hygieneinspektionen, Gefährdungsanalysen & Laboruntersuchungen – gemäß VDI 6022, VDI 6023, VDI 2047 & TrinkwV.
          </p>
          <div className="max-w-5xl mx-auto text-lg leading-relaxed text-gray-600">
            <p className="mb-6">
              AB GM ist ein unabhängiges Ingenieurbüro für Lufthygiene und Wasserhygiene mit Sitz in Mannheim. Wir prüfen Ihre Anlagen auf gesetzlich vorgeschriebene Hygieneanforderungen – schnell, zuverlässig und nach Stand der Technik.
            </p>
            <p>
              Ob RLT-Anlage, Trinkwasserinstallation oder Rückkühlwerk: Wir helfen Ihnen, Betreiberpflichten rechtskonform zu erfüllen – mit klaren Ergebnissen, nachvollziehbaren Berichten und langjähriger Erfahrung.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ihre Vorteile mit AB GM</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 border-gray-200 bg-white">
              <CardHeader>
                <Shield className="h-12 w-12 mx-auto text-gray-600 mb-4" />
                <CardTitle className="text-xl text-gray-900">Rechtssicherheit & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  Hygieneprüfungen nach VDI-Richtlinien und gesetzlichen Vorgaben – zuverlässig, dokumentiert, rechtssicher.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-gray-200 bg-white">
              <CardHeader>
                <Award className="h-12 w-12 mx-auto text-gray-600 mb-4" />
                <CardTitle className="text-xl text-gray-900">Anerkannte Fachkompetenz</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  Schulung nach VDI 6022, 6023, 2047 sowie TÜV-zertifizierter Fachberater für Schimmelpilzschäden.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-gray-200 bg-white">
              <CardHeader>
                <CheckCircle className="h-12 w-12 mx-auto text-gray-600 mb-4" />
                <CardTitle className="text-xl text-gray-900">Schnelle Ergebnisse & klare Empfehlungen</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  Aussagekräftige Berichte mit Fotodokumentation, Gefährdungsanalyse und konkreten Handlungsvorgaben.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Unsere Leistungsbereiche</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Lufthygiene</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Hygieneinspektionen nach VDI 6022</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Luftkeimmessungen & Raumluftanalysen</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Gefährdungsbeurteilungen & Gutachten</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Trinkwasserhygiene</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Legionellenprüfung nach TrinkwV</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Hygieneinspektion VDI 6023</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Gefährdungsanalyse bei Grenzwertüberschreitung</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kühlwasserhygiene</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Legionellenprüfung & Laboranalytik</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Hygieneinspektion nach VDI 2047</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Gefährdungsbeurteilung gem. 42. BImSchV</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Recht & Betreiberpflichten</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Betreiber von raumluft- und wassertechnischen Anlagen sind gesetzlich verpflichtet, regelmäßig Hygieneprüfungen durchzuführen. Wir unterstützen Sie bei der Umsetzung aller Anforderungen gemäß Trinkwasserverordnung, VDI 6022, 6023, 2047 und der 42. BImSchV. Damit Sie auf der sicheren Seite sind – gegenüber Gesundheitsämtern, Berufsgenossenschaften und Ihren Mitarbeitenden.
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Qualification */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Vertrauen & Qualifikation</h2>
            </div>
            <div className="bg-white p-8 border-2 border-gray-200">
              <div className="flex items-start">
                <Users className="h-12 w-12 text-gray-600 mr-6 mt-1 flex-shrink-0" />
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
      <section id="contact" className="py-24 bg-white border-t-4 border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sprechen Sie uns an – wir helfen Ihnen weiter.</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-2 border-gray-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-900">
                    <Phone className="h-5 w-5 mr-2" />
                    Telefon
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">0621 – 733628</p>
                  <p className="text-lg text-gray-700">Mobil: 0173 – 8771474</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-900">
                    <Mail className="h-5 w-5 mr-2" />
                    E-Mail
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">info@ab-gm.de</p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border-2 border-gray-300">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900">
                  <MapPin className="h-5 w-5 mr-2" />
                  Anschrift
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">
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
      <footer className="bg-gray-200 border-t border-gray-300 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg font-bold text-gray-900 mb-2">AB GM</p>
            <p className="text-sm text-gray-600">
              Ingenieurbüro für Lufthygiene und Wasserhygiene
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
