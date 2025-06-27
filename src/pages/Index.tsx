

import { useState } from "react";
import { Phone, Mail, MapPin, Shield, CheckCircle, Award, Users, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation - Burger Menu */}
      <nav className="bg-white border-b border-gray-200 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">AB GM</span>
            </div>
            <button onClick={toggleMenu} className="p-2 transition-transform duration-300 ease-in-out">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Full-screen Menu Overlay with Enhanced Transition */}
        <div className={`fixed inset-0 bg-white z-40 pt-16 transition-all duration-400 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="max-w-3xl mx-auto px-8 py-16">
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="block text-3xl font-medium text-gray-900 cursor-default">Startseite</span>
                <span className="block text-xl text-gray-400 font-light cursor-default">News</span>
                <span className="block text-xl text-gray-400 font-light cursor-default">Portrait</span>
                <span className="block text-xl text-gray-400 font-light cursor-default">Kompetenzen</span>
                <span className="block text-xl text-gray-400 font-light cursor-default">Referenzen</span>
                <span className="block text-xl text-gray-400 font-light cursor-default">Jobs</span>
                <span className="block text-3xl font-medium text-gray-900 cursor-default">Kontakt</span>
              </div>
              
              <div className="border-t border-gray-200 pt-8">
                <span className="block text-2xl font-medium text-gray-600 mb-6 cursor-default">Leistungen</span>
                <div className="ml-6 space-y-3">
                  <span className="block text-xl text-gray-400 font-light cursor-default">Lufthygiene RLT-Anlagen</span>
                  <span className="block text-xl text-gray-400 font-light cursor-default">Trinkwasserhygiene</span>
                  <span className="block text-xl text-gray-400 font-light cursor-default">Kühlwasserhygiene</span>
                  <span className="block text-xl text-gray-400 font-light cursor-default">Gefahrstoffmessung & Raumluftanalytik</span>
                </div>
              </div>

              {/* Contact Details in Menu */}
              <div className="border-t border-gray-200 pt-8">
                <div className="space-y-3">
                  <p className="text-lg font-medium text-gray-700">0621 – 733628</p>
                  <p className="text-lg font-medium text-gray-700">info@ab-gm.de</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Height */}
      <section className="h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-8">
            Klarheit, Verantwortung, Hygiene.
          </h1>
          <p className="text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            AB GM – Ihr zertifizierter Partner für Hygieneinspektionen, Gefährdungsanalysen und Laboruntersuchungen nach VDI 6022, VDI 6023, VDI 2047 und TrinkwV.
          </p>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto font-medium">
            Wir sichern Ihre Anlagenhygiene – unabhängig, nachvollziehbar und rechtssicher.
          </p>
          <Button className="bg-gray-800 text-white px-8 py-4 text-lg hover:bg-gray-700">
            Jetzt beraten lassen
          </Button>
        </div>
      </section>

      <div className="border-t border-gray-200"></div>

      {/* Problem/Solution Intro */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Viele Betreiber wissen: Hygieneprüfungen sind Pflicht – aber die Umsetzung ist komplex.
              Als unabhängiges Ingenieurbüro helfen wir Ihnen dabei, gesetzliche Vorgaben zuverlässig zu erfüllen und Risiken zu vermeiden. Wir prüfen Ihre Anlagen, analysieren relevante Hygienedaten und liefern klare Ergebnisse mit konkreten Empfehlungen – für Ihre Sicherheit und die Ihrer Nutzer.
            </p>
            <p className="text-xl font-medium text-gray-900">
              RLT-Anlage, Trinkwasser, Rückkühlwerk – wir prüfen, analysieren, dokumentieren.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200"></div>

      {/* Benefits Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ihre Vorteile mit AB GM</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border border-gray-300 bg-white shadow-none">
              <CardHeader>
                <Shield className="h-12 w-12 mx-auto text-gray-500 mb-4" />
                <CardTitle className="text-xl text-gray-900">Rechtssicherheit & Nachvollziehbarkeit</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  Hygieneprüfungen nach VDI 6022, 6023, 2047 & TrinkwV – mit klarer Dokumentation für Behörden & Betreiberpflicht.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border border-gray-300 bg-white shadow-none">
              <CardHeader>
                <Award className="h-12 w-12 mx-auto text-gray-500 mb-4" />
                <CardTitle className="text-xl text-gray-900">Anerkannte Fachkompetenz</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  Zertifizierter Probenehmer, TÜV-geprüfter Fachberater für Schimmelpilz – praxisnahe Beratung auf höchstem Niveau.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border border-gray-300 bg-white shadow-none">
              <CardHeader>
                <CheckCircle className="h-12 w-12 mx-auto text-gray-500 mb-4" />
                <CardTitle className="text-xl text-gray-900">Effizient & lösungsorientiert</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  Schnelle Ergebnisse mit Fotodokumentation, Laborwerten und konkreten Handlungsempfehlungen.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200"></div>

      {/* Service Overview - 4 Clusters */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Unsere Leistungsbereiche</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 border border-gray-300 hover:bg-gray-100 transition-colors cursor-default">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Lufthygiene (RLT-Anlagen)</h3>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Hygieneinspektionen nach VDI 6022</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Luftkeimmessungen & Raumluftanalysen</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Gefährdungsbeurteilungen & Gutachten</span>
                </li>
              </ul>
              <p className="text-sm text-gray-400 font-light">Demnächst mehr erfahren</p>
            </div>

            <div className="bg-gray-50 p-8 border border-gray-300 hover:bg-gray-100 transition-colors cursor-default">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Trinkwasserhygiene</h3>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Legionellenprüfung gemäß Trinkwasserverordnung</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Hygieneinspektion nach VDI 6023</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Gefährdungsanalyse bei Grenzwertüberschreitung</span>
                </li>
              </ul>
              <p className="text-sm text-gray-400 font-light">Demnächst mehr erfahren</p>
            </div>

            <div className="bg-gray-50 p-8 border border-gray-300 hover:bg-gray-100 transition-colors cursor-default">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kühlwasserhygiene (Rückkühlwerke)</h3>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Hygieneprüfungen gemäß 42. BImSchV</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Laboranalytik und Gefährdungsbeurteilung</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">VDI 2047-konforme Dokumentation</span>
                </li>
              </ul>
              <p className="text-sm text-gray-400 font-light">Demnächst mehr erfahren</p>
            </div>

            <div className="bg-gray-50 p-8 border border-gray-300 hover:bg-gray-100 transition-colors cursor-default">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Gefahrstoffmessung & Raumluftanalytik</h3>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Schimmel- und Asbestuntersuchungen</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">VOC-, PCB-Messungen nach TRGS 519</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Raumluftqualität nach BGR 128</span>
                </li>
              </ul>
              <p className="text-sm text-gray-400 font-light">Demnächst mehr erfahren</p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200"></div>

      {/* Legal Compliance */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Recht & Betreiberpflichten</h2>
            <p className="text-xl font-medium text-gray-900 mb-6">
              Gesetzliche Pflicht – technisches Risiko – persönliche Verantwortung.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              Als Betreiber von raumluft- oder wassertechnischen Anlagen sind Sie gesetzlich verpflichtet, regelmäßige Hygieneprüfungen durchzuführen. Wir unterstützen Sie bei der Erfüllung aller Anforderungen gemäß:
            </p>
            <ul className="text-lg text-gray-700 mb-8 space-y-2">
              <li><strong>Trinkwasserverordnung (TrinkwV)</strong></li>
              <li><strong>VDI-Richtlinien 6022, 6023, 2047</strong></li>
              <li><strong>42. Bundesimmissionsschutzverordnung (BImSchV)</strong></li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-700">
              Wir beraten neutral, handeln dokumentiert und helfen Ihnen, im Falle einer Kontrolle alle Nachweise parat zu haben.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200"></div>

      {/* How We Work - Step-by-Step */}
      <section className="py-32 bg-white">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">So arbeiten wir</h2>
            <p className="text-xl text-gray-600">Von der Beratung bis zum fertigen Prüfbericht</p>
          </div>
          <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-gray-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Erstberatung</h3>
              <p className="text-gray-600">Bedarfsanalyse und Terminplanung</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-gray-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Vor-Ort-Inspektion</h3>
              <p className="text-gray-600">Anlagenprüfung und Fotodokumentation</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-gray-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Probenahme</h3>
              <p className="text-gray-600">Fachgerechte Entnahme nach Norm</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-gray-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Laboranalyse</h3>
              <p className="text-gray-600">Akkreditierte Untersuchung</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-gray-600">5</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Dokumentation</h3>
              <p className="text-gray-600">Prüfbericht mit Handlungsempfehlungen</p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200"></div>

      {/* Trust & Qualification */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Vertrauen & Qualifikation</h2>
              <p className="text-xl font-medium text-gray-900 mb-8">Erfahrung, die Verantwortung trägt.</p>
            </div>
            <div className="bg-white p-8 border border-gray-300 mb-8">
              <div className="flex items-start">
                <Users className="h-12 w-12 text-gray-500 mr-6 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    AB GM wird geleitet von <strong>Andreas Stefan Bartsch</strong>, Diplom-Ingenieur (FH) mit jahrzehntelanger Erfahrung in Hygieneanalytik und Betreiberberatung. Als akkreditierter Probenehmer und TÜV-zertifizierter Fachberater für Schimmelpilzschäden begleitet er Sie fachlich, rechtssicher und unabhängig.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 border border-gray-300">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Zertifizierungen & Qualifikationen</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• VDI 6022 (RLT-Anlagen)</li>
                    <li>• VDI 6023 (Trinkwasser)</li>
                    <li>• VDI 2047 (Rückkühlwerke)</li>
                    <li>• TRGS 519 (Asbest)</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• BGR 128 (Gefahrstoffe)</li>
                    <li>• Akkreditierter Wasser- & Luftprobenehmer</li>
                    <li>• TÜV-zertifizierter Schimmelpilz-Sachverständiger</li>
                    <li>• Fachberater für Schimmelpilzschäden</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200"></div>

      {/* Contact CTA */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sprechen Sie uns an – wir helfen Ihnen weiter.</h2>
            <p className="text-lg text-gray-600">Aktiv im Raum Mannheim – Heidelberg – Rhein-Neckar</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border border-gray-300 bg-gray-50 shadow-none">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-900 text-lg">
                    <Phone className="h-5 w-5 mr-2" />
                    Telefon
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 font-medium">0621 – 733628</p>
                  <p className="text-lg text-gray-700">Mobil: 0173 – 8771474</p>
                </CardContent>
              </Card>

              <Card className="border border-gray-300 bg-gray-50 shadow-none">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-900 text-lg">
                    <Mail className="h-5 w-5 mr-2" />
                    E-Mail
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">info@ab-gm.de</p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border border-gray-300 bg-gray-50 shadow-none">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900 text-lg">
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

      {/* Footer - Always bottom fixed */}
      <footer className="bg-gray-100 border-t border-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xl font-bold text-gray-900 mb-1">AB GM</p>
              <p className="text-base text-gray-600">
                Ingenieurbüro für Lufthygiene und Wasserhygiene
              </p>
            </div>
            <div className="flex space-x-8">
              <span className="text-base text-gray-500 cursor-default hover:text-gray-700 hover:underline transition-colors">Impressum</span>
              <span className="text-base text-gray-500 cursor-default hover:text-gray-700 hover:underline transition-colors">Datenschutz</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

