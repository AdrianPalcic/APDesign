"use client"
  import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Zap, Globe, Smartphone, Settings, Shield, Star, CheckCircle, Layout } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {



const [email, setEmail] = useState("");
const [status, setStatus] = useState(""); 

const handleSubmit = async () => {
  try {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("_subject", "Novi lead s web stranice!");
    formData.append("_captcha", "false");

    const response = await fetch("https://formsubmit.co/appropriatepage.design@gmail.com", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  } catch (error) {
    console.error(error);
    setStatus("error");
  }
};

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-xl  z-50 p-2">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">

            <Image alt="Web design and development agency" src={"/cropped.png"} width={80} height={80}   className="w-10 sm:w-14 md:w-20 h-auto"></Image>
          </div>
          <nav className="flex items-center space-x-8">
            <Button
              variant="outline"

              className="border-gray-700 text-black bg-white hover:bg-white/80 hover:text-black"
            >
              <Link href={"#kontakt"}>Kontakt</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
          <div className="container mx-auto px-4 lg:px-6 py-10 lg:py-32 relative">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="outline" className="border-gray-700 text-gray-300 bg-gray-900/50">
                <Zap className="w-3 h-3 mr-1" />
                Brži razvoj s modernim web tehnologijama
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Izgradite{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  budućnost
                </span>{" "}
                vašeg poslovanja
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Kreiramo nevjerojatno brze, skalabilne web stranice i aplikacije koje pretvaraju posjetitelje u kupce. Od ideje do implementacije - mi upravljamo svime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6">
                  <Link href={"#kontakt"}>Pokrenite svoj projekt</Link>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

              </div>
<div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400 pt-8">
  <div className="flex items-center space-x-2">
    <CheckCircle className="w-4 h-4 text-green-400" />
    <span>Isporuka u 14 dana</span>
  </div>
  <div className="flex items-center space-x-2">
    <CheckCircle className="w-4 h-4 text-green-400" />
    <span>Zadovoljstvo garantirano</span>
  </div>
  <div className="flex items-center space-x-2">
    <CheckCircle className="w-4 h-4 text-green-400" />
    <span>Korisnička podrška</span>
  </div>
</div>

            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-gray-950/50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold">
               Sve potrebno da {" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  dominirate na internetu
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                 Full-stack development koji raste zajedno s vama
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
  {
    icon: Globe,
    title: "Web Aplikacije",
    description: "Custom web aplikacije izrađene s modernim frameworkima za vrhunske performanse.",
    features: ["React/Next.js", "TypeScript", "Responsive Design"],
  },

  {
    icon: Layout,
    title: "Website Development",
    description: "Kompletna izrada visokokvalitetnih web stranica s naglaskom na korisničko iskustvo i funkcionalnost.",
    features: ["Moderni CMS sustavi", "Brzo učitavanje", "SEO optimizacija"],
  },
    {
    icon: Smartphone,
    title: "Responzivan dizajn",
    description: "Responzivni dizajni koji besprijekorno funkcioniraju na svim uređajima.",
    features: ["Mobile Optimized", "Cross-Browser", "Pristupačnost"],
  },
  {
    icon: Zap,
    title: "Optimizacija Performansi",
    description: "Brzina i optimizacija čitavog projekta za bolji SEO ranking i korisničko iskustvo.",
    features: ["Brzinsko optimiziranje", "SEO Ready", "Performansna analitika"],
  },
  {
    icon: Shield,
    title: "Sigurnost i Održavanje",
    description: " Sigurnosne mjere, redovita ažuriranja i kontinuirana podrška.",
    features: ["Sigurnosni auditi", "Redovita ažuriranja", "24/7 monitoring"],
  },
  {
    icon: Code,
    title: "Custom Riješenja",
    description: "Personalizirana rješenja za unikatne poslovne zahtjeve i procese.",
    features: ["Prilagođene funkcionalnosti", "Integracije", "Arhitektura"],
  },

              ].map((service, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 group"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-gray-800 text-gray-300 text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold">
                Partner{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  rastućih poduzeća
                </span>
              </h2>
              <p className="text-xl text-gray-400">Pridružite se i otključajte puni potencijal interneta.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  quote:
                    "APDesign nam je pomogao transformirati kostur prošle stranicu u nešto što prikazuje naš brend u pravome svijetlu",
                  author: "Davor",
                  role: "Artificial grass specialist",
                  rating: 5,
                },
                {
                  quote:
                    "Več dugi niz godina želimo našu facebook stranicu prenest na web. Sa APDesignom smo to konačno napravili",
                  author: "Tvornica team",
                  role: "Tvornica Vjenčanja",
                  rating: 5,
                },
                {
                  quote:
                    "Željela sam imat svoj brend na internetu kako bi me se uvijek moglo pronaći, sada ne samo da imam web nego imam i brend",
                  author: "Simone",
                  role: "Magic Gloves",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="kontakt" className="py-24 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold">
                Spremni za{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ubrzan
                </span>{" "}
                rast?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Zatražite ponudu prilagođenu vašim potrebama. Odgovaram u roku od 24 sata i zajedno prolazimo kroz sve detalje.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center align-center max-w-md mx-auto">
                <Input
                  placeholder="Unesite vaš email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 py-5"
                />
                <Button
                  onClick={handleSubmit}
                  size="default"
                  className="bg-white text-black hover:bg-gray-100 whitespace-nowrap"
                >
                  Započnite
                </Button>
              </div>
              {status === "success" && (
                <p className="text-green-400">Hvala! Vaša poruka je poslana.</p>
              )}
              {status === "error" && (
                <p className="text-red-400">Došlo je do greške. Pokušajte ponovno.</p>
              )}
              <p className="text-sm text-gray-500">• Besplatne konzultacije • Bez obveze • Odgovor unutar 24 sata</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 lg:px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">

                  <Image alt="Web design and development agency" src={"/cropped.png"} width={100} height={100} className="mix-blend-lighten" />
                

              </div>
              <p className="text-gray-400">Gradimo vašu online prisutnost – korak po korak.</p>
            </div>



          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 APDesign. Sva prava zadržana.</p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <Link href="/404" className="hover:text-white transition-colors">
                Politika Privatnosti
              </Link>
              <Link href="404" className="hover:text-white transition-colors">
                Uvjeti Korištenja
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
