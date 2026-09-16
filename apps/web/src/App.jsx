import React from 'react';
import { Helmet } from 'react-helmet';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import HomePage from '@/pages/HomePage.jsx';

const SITE_URL = 'https://jjtrailer.no';
const SITE_NAME = 'JJ Trailer Norge';
const PAGE_TITLE = 'JJ Trailer Norge | Kvalitetshengere for norske behov';
const PAGE_DESCRIPTION = 'JJ Trailer Norge er en norsk tilhengerforhandler som selger JJ-Trailer Eagle kvalitetshengere i hele Norge. Se modeller, priser og kontakt salgsteamet i Skibotn.';

function App() {
  const trailers = [{
    type: 'JJ-Trailer Eagle - 4000-15',
    price: '125,000 NOK',
    dimensions: '1850x4000',
    weight: '1500 kg'
  }, {
    type: 'JJ-Trailer Eagle - 4500-15',
    price: '133,700 NOK',
    dimensions: '2100x4500',
    weight: '1500 kg'
  }, {
    type: 'JJ-Trailer Eagle - 4500-20',
    price: '151,800 NOK',
    dimensions: '2100x4500',
    weight: '2000 kg'
  }, {
    type: 'JJ-Trailer Eagle - 4500-25',
    price: '156,000 NOK',
    dimensions: '2100x4500',
    weight: '2500 kg'
  }, {
    type: 'JJ-Trailer Eagle - 5000-15',
    price: '148,000 NOK',
    dimensions: '2100x5000',
    weight: '1500 kg'
  }, {
    type: 'JJ-Trailer Eagle - 5000-20',
    price: '165,700 NOK',
    dimensions: '2100x5000',
    weight: '2000 kg'
  }, {
    type: 'JJ-Trailer Eagle - 5000-25',
    price: '169,000 NOK',
    dimensions: '2100x5000',
    weight: '2500 kg'
  }, {
    type: 'JJ-Trailer Eagle - 5000-27',
    price: '173,180 NOK',
    dimensions: '2100x5000',
    weight: '2700 kg'
  }, {
    type: 'JJ-Trailer Eagle - 5500-20',
    price: '172,000 NOK',
    dimensions: '2100x5500',
    weight: '2000 kg'
  }, {
    type: 'JJ-Trailer Eagle - 5500-25',
    price: '177,625 NOK',
    dimensions: '2100x5500',
    weight: '2500 kg'
  }, {
    type: 'JJ-Trailer Eagle - 5500-27',
    price: '183,270 NOK',
    dimensions: '2100x5500',
    weight: '2700 kg'
  }, {
    type: 'JJ-Trailer Eagle - 6000-20',
    price: '180,740 NOK',
    dimensions: '2100x6000',
    weight: '2000 kg'
  }, {
    type: 'JJ-Trailer Eagle - 6000-25',
    price: '183,560 NOK',
    dimensions: '2100x6000',
    weight: '2500 kg'
  }, {
    type: 'JJ-Trailer Eagle - 6000-27',
    price: '186,375 NOK',
    dimensions: '2100x6000',
    weight: '2700 kg'
  }, {
    type: 'JJ-Trailer Eagle - 6500-20',
    price: '183,800 NOK',
    dimensions: '2100x6500',
    weight: '2000 kg'
  }, {
    type: 'JJ-Trailer Eagle - 6500-25',
    price: '190,850 NOK',
    dimensions: '2100x6500',
    weight: '2500 kg'
  }, {
    type: 'JJ-Trailer Eagle - 6500-27',
    price: '192,500 NOK',
    dimensions: '2100x6500',
    weight: '2700 kg'
  }];
  const sellers = [{
    name: 'Thorstein Oppegård',
    phone: '+47 90 06 22 60',
    email: 'topp01@live.no',
    location: 'Sommersetlia 1, 9143 Skibotn'
  }, {
    name: 'Tor-Vidar Nystad',
    phone: '+47 91 32 61 32',
    email: 'tvnystad@hotmail.com',
    location: 'Sommersetlia 1, 9143 Skibotn'
  }];

  const siteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'no'
  };

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    description: 'Norsk tilhengerforhandler som selger JJ-Trailer Eagle kvalitetshengere til kunder i hele Norge. JJ Trailer Norge driver ikke med salg av personbiler.',
    knowsAbout: ['tilhengere', 'varehengere', 'JJ-Trailer Eagle'],
    image: [`${SITE_URL}/logo-main.png`, `${SITE_URL}/TrailerImage.png`],
    email: sellers.map((seller) => seller.email),
    telephone: sellers.map((seller) => seller.phone),
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sommersetlia 1',
      postalCode: '9143',
      addressLocality: 'Skibotn',
      addressCountry: 'NO'
    },
    areaServed: {
      '@type': 'Country',
      name: 'Norway'
    },
    contactPoint: sellers.map((seller) => ({
      '@type': 'ContactPoint',
      contactType: 'sales',
      name: seller.name,
      telephone: seller.phone,
      email: seller.email,
      areaServed: 'NO',
      availableLanguage: ['no', 'en']
    }))
  };

  const productsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'JJ Trailer modeller og priser',
    itemListElement: trailers.map((trailer, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: trailer.type,
        description: `${trailer.type} med dimensjoner ${trailer.dimensions} og totalvekt ${trailer.weight}.`,
        image: `${SITE_URL}/TrailerImage.png`,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'NOK',
          price: trailer.price.replace(/[^\d]/g, ''),
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: SITE_NAME
          },
          url: `${SITE_URL}/#pricing`
        }
      }
    }))
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [{
      '@type': 'Question',
      name: 'Hvor leverer JJ Trailer Norge hengere?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi leverer hengere over hele Norge og hjelper deg med riktig modell basert på behov og bruksområde.'
      }
    }, {
      '@type': 'Question',
      name: 'Er prisene oppgitt med merverdiavgift?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prisene er oppgitt som forhåndspris inkludert merverdiavgift. Frakt kommer i tillegg.'
      }
    }, {
      '@type': 'Question',
      name: 'Hvordan kontakter jeg salgsteamet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Du kan ringe eller sende e-post direkte til Thorstein Oppegård eller Tor-Vidar Nystad via kontaktinformasjonen på nettsiden.'
      }
    }]
  };

  return <>
      <Helmet>
        <html lang="no" />
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content={SITE_NAME} />
        <meta name="keywords" content="tilhengerforhandler, tilhenger, varehenger, trailer, JJ Trailer Norge, henger pris, tilhenger Norge, Skibotn" />
        <link rel="canonical" href={SITE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nb_NO" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={`${SITE_URL}/TrailerImage.png`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/TrailerImage.png`} />

        <script type="application/ld+json">{JSON.stringify(siteSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productsSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container">
          <div className="flex items-center h-20">
            <div className="flex items-center gap-3">
              <img src="/logo-main.png" alt="JJ Trailer Norge company logo, representing professional trailer sales services in Norway" className="h-12 w-auto" />
            </div>
            <div className="hidden md:flex items-center ml-auto gap-2">
              <Button asChild className="inline-flex">
                <a href="#hero">Hjem</a>
              </Button>
              <Button asChild className="inline-flex">
                <a href="#pricing">Priser</a>
              </Button>
              <Button asChild className="inline-flex">
                <a href="#contact">Ta kontakt</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HomePage />

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Våre henger modeller</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Velg fra vårt utvalg av profesjonelle hengere, hver bygget etter norske standarder med kvalitetsmaterialer og pålitelig konstruksjon. <br />Forh.pris  inkl.mva. Frakt medkommer. <br />Kontakt oss for mer informasjon.
            </p>
            <div className="max-w-4xl mx-auto mt-8 rounded-2xl border border-border/70 bg-muted/40 p-4 sm:p-6 shadow-sm">
              <img
                src="/TrailerImage.png"
                alt="JJ Trailer produktbilde"
                className="w-full h-auto rounded-xl object-contain mix-blend-multiply"
                loading="lazy"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto border-t border-border">
            <div className="divide-y divide-border">
              {trailers.map((trailer, index) => <div key={index} className="flex flex-col md:flex-row md:items-center justify-between py-4 px-2 hover:bg-muted/50 transition-colors duration-200">
                  <div className="font-semibold text-primary w-full md:w-[40%] text-lg md:text-base mb-1 md:mb-0">
                    {trailer.type}
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground w-full md:w-[35%] text-sm mb-2 md:mb-0">
                    <span>{trailer.dimensions}</span>
                    <span className="text-border/60">|</span>
                    <span>{trailer.weight}</span>
                  </div>
                  
                  <div className="font-bold text-foreground w-full md:w-[25%] md:text-right text-lg">
                    {trailer.price}
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Vanlige spørsmål</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Rask informasjon om levering, priser og kontakt.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Hvor leverer JJ Trailer Norge hengere?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Vi leverer hengere over hele Norge og hjelper deg med å velge modell basert på behov, last og kjøreforhold.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Er prisene oppgitt med merverdiavgift?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ja, prisene er oppgitt som forhåndspris inkludert mva. Frakt tilkommer.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Hvordan kontakter jeg salgsteamet?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ring til salgsrepresentantene våre i Skibotn for rask oppfølging.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Kontakt vårt salgsteam</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ta kontakt med våre erfarne salgsrepresentanter i Troms for personlig assistanse med ditt hengerkjøp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sellers.map((seller, index) => <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{seller.name}</CardTitle>
                  <CardDescription className="text-base">{seller.location}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a href={`tel:${seller.phone}`} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-200 group">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-200">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{seller.phone}</span>
                  </a>

                  <a href={`mailto:${seller.email}`} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-200 group">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-200">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="font-medium break-all">{seller.email}</span>
                  </a>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{seller.location}</span>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          <div className="max-w-5xl mx-auto mt-16">
            <Card className="overflow-hidden border-border/70 shadow-md">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">Finn oss i Skibotn</CardTitle>
                <CardDescription className="text-base">
                  Besøk oss på Sommersetlia 1, 9143 Skibotn.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-xl overflow-hidden border border-border/70 bg-muted/30">
                  <iframe
                    title="Google Maps for Sommersetlia 1, 9143 Skibotn"
                    src="https://www.google.com/maps?q=Sommersetlia%201,%209143%20Skibotn&output=embed"
                    className="h-[420px] w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <div className="flex justify-center">
                  <Button asChild>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Sommersetlia+1%2C+9143+Skibotn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Åpne i Google Maps
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src="https://horizons-cdn.hostinger.com/17487f3b-b290-48d1-a2e6-bc09942d517a/370fb9b7e18cb0da1a76dfc7be7d56bb.png" alt="JJ Trailer Norge company logo in white, displayed in the footer of the website" className="h-10 w-auto brightness-0 invert" />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 text-sm">
              <a href="#" className="hover:underline transition-all duration-200">Privacy Policy</a>
              <a href="#" className="hover:underline transition-all duration-200">Terms of Service</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} JJ Trailer Norge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>;
}
export default App;