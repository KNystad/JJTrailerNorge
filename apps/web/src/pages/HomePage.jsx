
import React from 'react';
import { Button } from '@/components/ui/button';

function HomePage() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://horizons-cdn.hostinger.com/17487f3b-b290-48d1-a2e6-bc09942d517a/140915543_1152637898526411_2922714028777977723_n-hpuud.jpg" 
          alt="Professional trailer on the road in Norway" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70"></div>
      </div>
      
      <div className="container relative z-10 text-center text-white py-24">
        <div className="flex items-center justify-center gap-4 mb-6">
          <img 
            src="/Logo-alt.png"
            alt="JJ Trailer Norge logo"
            className="h-20 md:h-40 w-auto"
          />
        </div>
        <h1 className="mb-6 text-white text-2xl md:text-5xl">
          Kvalitets hengere bygget for norske veier og nordmenns behov
        </h1>
        <p className="text-base md:text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
          JJ Trailer Norge er en norsk tilhengerforhandler som selger JJ-Trailer Eagle kvalitetshengere over hele Norge.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary" className="text-base">
            <a href="#pricing">Se priser</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base bg-white/10 hover:bg-white/20 text-white border-white/30">
            <a href="#contact">Kontakt salg</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
