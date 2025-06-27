
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
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation - Burger Menu */}
      <nav className="bg-white border-b border-blue-100 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-900">AB GM</span>
            </div>
            <button 
              onClick={toggleMenu} 
              className="p-2 transition-all duration-300 ease-in-out relative z-50"
              aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
            >
              {isMenuOpen ? (
                <X className="h-8 w-8 text-blue-900" />
              ) : (
                <Menu className="h-8 w-8 text-blue-900" />
              )}
            </button>
          </div>
        </div>

        {/* Full-screen Menu Overlay */}
        <div className={`fixed inset-0 bg-white z-40 transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="h-full overflow-y-auto">
            <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 min-h-full flex flex-col">
              <div className="max-w-4xl mx-auto w-full flex-1">
                <div className="space-y-8 sm:space-y-12">
                  <div className="space-y-6 sm:space-y-8">
                    <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-blue-900 cursor-default hover:text-blue-700 transition-colors">Startseite</span>
                    <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-400 font-light cursor-default hover:text-blue-600 transition-colors">Portrait</span>
                    <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-400 font-light cursor-default hover:text-blue-600 transition-colors">Leistungen</span>
                    <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-400 font-light cursor-default hover:text-blue-600 transition-colors">Referenzen</span>
                    <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-blue-900 cursor-default hover:text-blue-700 transition-colors">Kontakt</span>
                  </div>

                  {/* Contact Details in Menu */}
                  <div className="border-t border-blue-200 pt-8 sm:pt-12 mt-auto">
                    <div className="space-y-4 sm:space-y-6">
                      <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium text-blue-700 break-all">0621 – 733628</p>
                      <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium text-blue-700 break-all">info@ab-gm.de</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Height */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
        <div className="max-w-6xl mx-auto text-center w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-900 mb-6 sm:mb-8 leading-tight">
            Klarheit, Verantwortung, Hygiene.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-700 mb-6 sm:mb-8 max-w-5xl mx-auto leading-relaxed font-medium px-4">
            AB GM – Ihr zertifizierter Partner für Hygieneinspektionen, Gefährdungsanalysen und Laboruntersuchungen nach VDI 6022, VDI 6023, VDI 2047 und TrinkwV.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-600 mb-8 sm:mb-12 max-w-4xl mx-auto font-light px-4">
            Wir sichern Ihre Anlagenhygiene – unabhängig, nachvollziehbar und rechtssicher.
          </p>
          <Button className="bg-blue-800 text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 text-lg sm:text-xl hover:bg-blue-700 rounded-lg shadow-lg">
            Jetzt beraten lassen
          </Button>
        </div>
      </section>

      {/* Intro Text - Problem/Solution */}
      <section className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              Viele Betreiber wissen: Hygieneprüfungen sind Pflicht – aber die Umsetzung ist komplex.
              Als unabhängiges Ingenieurbüro helfen wir Ihnen dabei, gesetzliche Vorgaben zuverlässig zu erfüllen und Risiken zu vermeiden.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              Wir prüfen Ihre Anlagen, analysieren relevante Hygienedaten und liefern klare Ergebnisse mit konkreten Empfehlungen – für Ihre Sicherheit und die Ihrer Nutzer.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-900">
              RLT-Anlage, Trinkwasser, Rückkühlwerk – wir prüfen, analysieren, dokumentieren.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-blue-100"></div>

      {/* Benefits Section - Ihre Vorteile */}
      <section className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">Ihre Vorteile mit AB GM</h2>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <Card className="text-center border-2 border-blue-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-300">
              <CardHeader className="pb-6">
                <Shield className="h-12 sm:h-14 lg:h-16 w-12 sm:w-14 lg:w-16 mx-auto text-blue-600 mb-4 sm:mb-6" />
                <CardTitle className="text-xl sm:text-2xl text-blue-900 leading-tight">Rechtssicherheit & Nachvollziehbarkeit</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Hygieneprüfungen nach VDI 6022, 6023, 2047 & TrinkwV – mit klarer Dokumentation für Behörden & Betreiberpflicht.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-300">
              <CardHeader className="pb-6">
                <Award className="h-12 sm:h-14 lg:h-16 w-12 sm:w-14 lg:w-16 mx-auto text-blue-600 mb-4 sm:mb-6" />
                <CardTitle className="text-xl sm:text-2xl text-blue-900 leading-tight">Anerkannte Fachkompetenz</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Zertifizierter Probenehmer, TÜV-geprüfter Fachberater für Schimmelpilz – praxisnahe Beratung auf höchstem Niveau.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-300 md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-6">
                <CheckCircle className="h-12 sm:h-14 lg:h-16 w-12 sm:w-14 lg:w-16 mx-auto text-blue-600 mb-4 sm:mb-6" />
                <CardTitle className="text-xl sm:text-2xl text-blue-900 leading-tight">Effizient & lösungsorientiert</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Schnelle Ergebnisse mit Fotodokumentation, Laborwerten und konkreten Handlungsempfehlungen.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="border-t border-blue-100"></div>

      {/* Service Overview - Leistungsbereiche */}
      <section className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">Unsere Leistungsbereiche</h2>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-blue-50 p-6 sm:p-8 lg:p-10 border-2 border-blue-200 hover:bg-blue-100 hover:border-blue-300 transition-all duration-300 cursor-default rounded-lg">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-8">Lufthygiene (RLT-Anlagen)</h3>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <li className="flex items-start">
                  <ArrowRight className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <span className="text-base sm:text-lg text-gray-700">Hygieneinspektionen nach VDI 6022</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <span className="text-base sm:text-lg text-gray-700">Luftkeimmessungen & Raumluftanalysen</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <span className="text-base sm:text-lg text-gray-700">Gefährdungsbeurteilungen & Gutachten</span>
                </li>
              </ul>
              <p className="text-sm sm:text-base text-blue-400 font-light">Demnächst mehr erfahren</p>
            </div>

            <div className="bg-blue-50 p-6 sm:p-8 lg:p-10 border-2 border-blue-200 hover:bg-blue-100 hover:border-blue-300 transition-all duration-300 cursor-default rounded-lg">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-8">Trinkwasserhygiene</h3>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <li className="flex items-start">
                  <ArrowRight className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <span className="text-base sm:text-lg text-gray-700">Legionellenprüfung gemäß Trinkwasserverordnung</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <span className="text-base sm:text-lg text-gray-700">Hygieneinspektion nach VDI 6023</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <span className="text-base sm:text-lg text-gray-700">Gefährdungsanalyse bei Grenzwertüberschreitung</span>
                </li>
              </ul>
              <p className="text-sm sm:text-base text-blue-400 font-light">Demnächst mehr erfahren</p>
            </div>

            <div className="bg-blue-50 p-6 sm:p-8 lg:p-10 border-2 border-blue-200 hover:bg-blue-100 hover:border-blue-300 transition-all duration-300 cursor-default rounded-lg">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-8">Kühlwasserhygiene (Rückkühlwerke)</h3>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <li className="flex items-start">
                  <ArrowRight className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <span className="text-base sm:text-lg text-gray-700">Hygieneprüfungen gemäß 42. BImSchV</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <span className="text-base sm:text-lg text-gray-700">Laboranalytik und Gefährdungsbeurteilung</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <span className="text-base sm:text-lg text-gray-700">VDI 2047-konforme Dokumentation</span>
                </li>
              </ul>
              <p className="text-sm sm:text-base text-blue-400 font-light">Demnächst mehr erfahren</p>
            </div>

            <div className="bg-blue-50 p-6 sm:p-8 lg:p-10 border-2 border-blue-200 hover:bg-blue-100 hover:border-blue-300 transition-all duration-300 cursor-default rounded-lg">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-8">Gefahrstoffmessung & Raumluftanalytik</h3>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <li className="flex items-start">
                  <ArrowRight className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <span className="text-base sm:text-lg text-gray-700">Schimmel- und Asbestuntersuchungen</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <span className="text-base sm:text-lg text-gray-700">VOC-, PCB-Messungen nach TRGS 519</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <span className="text-base sm:text-lg text-gray-700">Raumluftqualität nach BGR 128</span>
                </li>
              </ul>
              <p className="text-sm sm:text-base text-blue-400 font-light">Demnächst mehr erfahren</p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-blue-100"></div>

      {/* Legal Compliance - Pflichten & Recht */}
      <section className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-8 sm:mb-12">Pflichten & Recht</h2>
            <p className="text-xl sm:text-2xl font-semibold text-blue-900 mb-6 sm:mb-8">
              Gesetzliche Pflicht – technisches Risiko – persönliche Verantwortung.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700 mb-6 sm:mb-10">
              Als Betreiber von raumluft- oder wassertechnischen Anlagen sind Sie gesetzlich verpflichtet, regelmäßige Hygieneprüfungen durchzuführen. Wir unterstützen Sie bei der Erfüllung aller Anforderungen gemäß:
            </p>
            <ul className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-10 space-y-3 max-w-3xl mx-auto">
              <li><strong>Trinkwasserverordnung (TrinkwV)</strong></li>
              <li><strong>VDI-Richtlinien 6022, 6023, 2047</strong></li>
              <li><strong>42. Bundesimmissionsschutzverordnung (BImSchV)</strong></li>
            </ul>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700">
              Wir beraten neutral, handeln dokumentiert und helfen Ihnen, im Falle einer Kontrolle alle Nachweise parat zu haben.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-blue-100"></div>

      {/* How We Work - So arbeiten wir */}
      <section className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">So arbeiten wir</h2>
            <p className="text-xl sm:text-2xl text-blue-600">Von der Beratung bis zum fertigen Prüfbericht</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
            <div className="text-center">
              <div className="w-20 sm:w-24 h-20 sm:h-24 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
                <span className="text-2xl sm:text-3xl font-bold text-blue-900">1</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-3 sm:mb-4">Erstberatung</h3>
              <p className="text-base sm:text-lg text-gray-600">Bedarfsanalyse und Terminplanung</p>
            </div>
            <div className="text-center">
              <div className="w-20 sm:w-24 h-20 sm:h-24 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
                <span className="text-2xl sm:text-3xl font-bold text-blue-900">2</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-3 sm:mb-4">Vor-Ort-Inspektion</h3>
              <p className="text-base sm:text-lg text-gray-600">Anlagenprüfung und Fotodokumentation</p>
            </div>
            <div className="text-center">
              <div className="w-20 sm:w-24 h-20 sm:h-24 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
                <span className="text-2xl sm:text-3xl font-bold text-blue-900">3</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-3 sm:mb-4">Probenahme</h3>
              <p className="text-base sm:text-lg text-gray-600">Fachgerechte Entnahme nach Norm</p>
            </div>
            <div className="text-center">
              <div className="w-20 sm:w-24 h-20 sm:h-24 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
                <span className="text-2xl sm:text-3xl font-bold text-blue-900">4</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibend text-blue-900 mb-3 sm:mb-4">Laboranalyse</h3>
              <p className="text-base sm:text-lg text-gray-600">Akkreditierte Untersuchung</p>
            </div>
            <div className="text-center sm:col-span-2 md:col-span-3 lg:col-span-1">
              <div className="w-20 sm:w-24 h-20 sm:h-24 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
                <span className="text-2xl sm:text-3xl font-bold text-blue-900">5</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-3 sm:mb-4">Dokumentation</h3>
              <p className="text-base sm:text-lg text-gray-600">Prüfbericht mit Handlungsempfehlungen</p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-blue-100"></div>

      {/* Trust & Qualification - Vertrauen & Qualifikation */}
      <section className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">Vertrauen & Qualifikation</h2>
            <p className="text-xl sm:text-2xl font-semibold text-blue-900 mb-6 sm:mb-8">Erfahrung, die Verantwortung trägt.</p>
          </div>
          <div className="bg-white p-6 sm:p-8 lg:p-12 border-2 border-blue-200 mb-6 sm:mb-10 rounded-lg shadow-lg">
            <div className="flex flex-col sm:flex-row items-start">
              <Users className="h-12 sm:h-14 lg:h-16 w-12 sm:w-14 lg:w-16 text-blue-600 mb-4 sm:mb-0 sm:mr-6 lg:mr-8 mt-0 sm:mt-2 flex-shrink-0" />
              <div>
                <p className="text-lg sm:text-xl leading-relaxed text-gray-700 mb-6 sm:mb-8">
                  AB GM wird geleitet von <strong>Andreas Stefan Bartsch</strong>, Diplom-Ingenieur (FH) mit jahrzehntelanger Erfahrung in Hygieneanalytik und Betreiberberatung. Als akkreditierter Probenehmer und TÜV-zertifizierter Fachberater für Schimmelpilzschäden begleitet er Sie fachlich, rechtssicher und unabhängig.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 sm:p-8 lg:p-12 border-2 border-blue-200 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6 sm:mb-8">Zertifizierungen & Qualifikationen</h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg text-gray-700">
                  <li>• VDI 6022 (RLT-Anlagen)</li>
                  <li>• VDI 6023 (Trinkwasser)</li>
                  <li>• VDI 2047 (Rückkühlwerke)</li>
                  <li>• TRGS 519 (Asbest)</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg text-gray-700">
                  <li>• BGR 128 (Gefahrstoffe)</li>
                  <li>• Akkreditierter Wasser- & Luftprobenehmer</li>
                  <li>• TÜV-zertifizierter Schimmelpilz-Sachverständiger</li>
                  <li>• Fachberater für Schimmelpilzschäden</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-blue-100"></div>

      {/* Contact CTA - Kontaktbereich */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">Sprechen Sie uns an – wir helfen Ihnen weiter.</h2>
            <p className="text-lg sm:text-xl text-blue-600">Aktiv im Raum Mannheim – Heidelberg – Rhein-Neckar</p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-6 sm:mb-10">
            <Card className="border-2 border-blue-200 bg-blue-50 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-900 text-lg sm:text-xl">
                  <Phone className="h-5 sm:h-6 w-5 sm:w-6 mr-3" />
                  Telefon
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg sm:text-xl text-blue-800 font-semibold break-all">0621 – 733628</p>
                <p className="text-lg sm:text-xl text-blue-800 break-all">Mobil: 0173 – 8771474</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-900 text-lg sm:text-xl">
                  <Mail className="h-5 sm:h-6 w-5 sm:w-6 mr-3" />
                  E-Mail
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg sm:text-xl text-blue-800 break-all">info@ab-gm.de</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="border-2 border-blue-200 bg-blue-50 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-900 text-lg sm:text-xl">
                <MapPin className="h-5 sm:h-6 w-5 sm:w-6 mr-3" />
                Anschrift
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg sm:text-xl text-blue-800">
                Andreas Stefan Bartsch<br />
                Reiherstraße 1<br />
                68309 Mannheim
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-100 border-t border-blue-200 py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            <div>
              <p className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">AB GM</p>
              <p className="text-base sm:text-lg text-blue-700">
                Ingenieurbüro für Lufthygiene und Wasserhygiene
              </p>
            </div>
            <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-10">
              <span className="text-base sm:text-lg text-blue-600 cursor-default hover:text-blue-800 hover:underline transition-all">Startseite</span>
              <span className="text-base sm:text-lg text-blue-600 cursor-default hover:text-blue-800 hover:underline transition-all">Portrait</span>
              <span className="text-base sm:text-lg text-blue-600 cursor-default hover:text-blue-800 hover:underline transition-all">Leistungen</span>
              <span className="text-base sm:text-lg text-blue-600 cursor-default hover:text-blue-800 hover:underline transition-all">Kontakt</span>
              <span className="text-base sm:text-lg text-blue-600 cursor-default hover:text-blue-800 hover:underline transition-all">Impressum</span>
              <span className="text-base sm:text-lg text-blue-600 cursor-default hover:text-blue-800 hover:underline transition-all">Datenschutz</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
