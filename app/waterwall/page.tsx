import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Download, Leaf, Activity, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export default function WaterwallPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-background">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-slate-950 pt-24 pb-24 border-b border-slate-800">
        
        {/* Background Image */}
        <Image 
          src="/waterwall-hero-bg.png" 
          alt="Clean Water Background" 
          fill 
          priority
          className="object-cover absolute inset-0 z-0 opacity-50"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-0"></div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
            <div className="w-full lg:w-3/5 space-y-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
                <span className="flex h-3 w-3 rounded-full bg-accent animate-pulse"></span>
                <span className="text-xs font-bold tracking-widest text-slate-200 uppercase">
                  New UV Technology Makes It Possible
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-white leading-[1.05] tracking-tighter drop-shadow-2xl">
                CLEAN WATER <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">FROM EVERY TAP.</span>
              </h1>
              
              <div className="pt-4 border-l-4 border-accent pl-6 bg-gradient-to-r from-accent/10 to-transparent py-4 rounded-r-2xl shadow-inner">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight drop-shadow-md">
                  INCREASE YOUR BUILDING'S VALUE
                </h2>
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light max-w-2xl drop-shadow-sm">
                  Liquinex WaterWall is a groundbreaking purification system using ultrafiltration and UV technology to clean the water entering into the building so everybody can drink, shower, and cook conveniently with safe water from their taps—<span className="text-white font-semibold">effectively eliminating the need for carrying water bottles.</span>
                </p>
              </div>

              <div className="pt-8 flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-10 py-7 text-lg bg-accent hover:bg-accent-light text-white font-bold transition-all shadow-[0_0_40px_rgba(30,195,255,0.4)] hover:shadow-[0_0_60px_rgba(30,195,255,0.6)]" asChild>
                  <Link href="#contact">
                    Act Now <ArrowRight className="ml-2 w-6 h-6" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="w-full lg:w-2/5 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[450px] aspect-[3/4]">
                <Image
                  src="/about/waterwall-hq.png"
                  alt="Liquinex Waterwall"
                  fill
                  className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)] hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Scandinavian Technology Showcase */}
      <section className="py-24 bg-white relative z-20 -mt-10 rounded-t-[3rem] border-t border-primary/10 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Waterwall
            </h2>
            <p className="text-2xl text-accent font-medium uppercase tracking-widest">
              High-end technology from Scandinavia
            </p>
            <p className="text-xl text-neutral leading-relaxed">
              Take advantage of the latest technology and install the WaterWall in your building. As the most effective solution on the market, the WaterWall is a great investment with several benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-primary/5 rounded-[2rem] p-10 flex flex-col items-center text-center border border-primary/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-foreground">Quality</h3>
              <p className="text-neutral text-lg">Improve the quality of life by clean water in every tap.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-accent/5 rounded-[2rem] p-10 flex flex-col items-center text-center border border-accent/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-foreground">Prevent</h3>
              <p className="text-neutral text-lg">Prevent the spread of diseases and protect your community.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-primary/5 rounded-[2rem] p-10 flex flex-col items-center text-center border border-primary/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Activity className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-foreground">Increase Value</h3>
              <p className="text-neutral text-lg">Increase the building’s value and appeal to new residents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Future of UV Technology */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-10">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                </span>
                <span className="text-sm font-semibold tracking-widest text-slate-200 uppercase">
                  Pioneering Innovation
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl font-heading font-extrabold leading-tight tracking-tight drop-shadow-2xl">
                The future of water purification is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">UV technology</span>
              </h2>
              
              <div className="space-y-6 text-xl text-slate-300 font-light leading-relaxed">
                <p>
                  Access to safe drinking water is vital for human life. Clean water goes hand in hand with good health, and lack of clean and safe drinking water is almost always responsible for sickness and disease.
                </p>
                <p>
                  In most of Europe and North America, clean tap water is taken for granted. However, in many other parts of the world, we are still battling unsafe levels of contaminants, including sediments, bacteria, viruses, parasites, heavy metals, or arsenic – a vast problem impairing the quality of life and causing severe health issues.
                </p>
                <p className="border-l-4 border-accent pl-6 py-3 bg-gradient-to-r from-accent/10 to-transparent rounded-r-xl">
                  According to medical professionals, several top causes of disease outbreaks are related to unsafe water. Liquinex is a Singapore water company determined to turn the tables and offer all communities clean water. Our new product, the Liquinex WaterWall, is a compact residential water purification system based on membrane filtration and PureFize UV technology that can clean and distribute <strong className="text-white font-bold">300 gallons of incoming water per day</strong>, giving everybody in the building access to high-quality tap water.
                </p>
              </div>
            </div>
            
            {/* Right Column: Visuals & Award */}
            <div className="lg:col-span-5 relative mt-16 lg:mt-0">
              {/* Main Image */}
              <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.5)] border border-white/10 group ml-auto max-w-md">
                <Image
                  src="/about/mission-hq.jpg" 
                  alt="Liquinex Clean Water Innovation"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              </div>

              {/* Floating Award Card */}
              <div className="absolute -bottom-10 -left-4 md:-left-16 bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 hover:border-accent/50 transition-colors duration-500 max-w-[320px]">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                  <ShieldCheck className="w-32 h-32 text-accent" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6 border border-accent/30">
                    <ShieldCheck className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white mb-3">
                    Global Water Award Winner
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    In 2020, Liquinex was awarded first place in the Innovative R&D category of the Global Water Award in Dubai.
                  </p>
                  <Button variant="outline" className="w-full rounded-full border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300" asChild>
                    <Link href="/Whitepaper_Waterwall.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 w-4 h-4" /> Download Whitepaper
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Benefits Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="ENJOY ALL THESE BENEFITS" 
            centered 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-7xl mx-auto px-4">
            
            {/* Benefit 1 */}
            <div className="group relative overflow-hidden rounded-[2.5rem] min-h-[500px] flex flex-col justify-end p-8 md:p-12 shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-800">
              <Image src="/waterwall-quality.jpg" alt="Increase quality of life" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-xl shadow-lg">
                  01
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mb-4 leading-snug group-hover:text-accent transition-colors duration-300">
                  Increase the quality of life and the building’s value
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed font-light">
                  With safe tap water, people can shower, cook and wash conveniently without worries. They no longer need to carry heavy water bottles, and the living habitat will be calmer with fewer transports to the building. As a result, the value of your facility will increase, making this an excellent investment.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="group relative overflow-hidden rounded-[2.5rem] min-h-[500px] flex flex-col justify-end p-8 md:p-12 shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-800">
              <Image src="/waterwall-health.jpg" alt="Improve health and prevent illness" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-xl shadow-lg">
                  02
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mb-4 leading-snug group-hover:text-accent transition-colors duration-300">
                  Improve health and prevent illness
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed font-light">
                  The WaterWall ensures that all residents, particularly children and the elderly, have easy access to safe water around the clock, protecting their health and preventing the spread of viruses that could make the whole neighborhood sick.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="group relative overflow-hidden rounded-[2.5rem] min-h-[500px] flex flex-col justify-end p-8 md:p-12 shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-800">
              <Image src="/waterwall-easy.png" alt="Easy installation and maintenance" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-xl shadow-lg">
                  03
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mb-4 leading-snug group-hover:text-accent transition-colors duration-300">
                  Easy installation and maintenance
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed font-light">
                  The WaterWall is an adaption of Liquinex’s award-winning suitcase-sized humanitarian water purification system for rural applications and disaster relief; thus, we knew how to make the WaterWall compact, user-friendly and reliable for urban settings.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="group relative overflow-hidden rounded-[2.5rem] min-h-[500px] flex flex-col justify-end p-8 md:p-12 shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-800">
              <Image src="/waterwall-cost.jpeg" alt="Cost-effective solution" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-xl shadow-lg">
                  04
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mb-4 leading-snug group-hover:text-accent transition-colors duration-300">
                  Invest in the most cost-effective solution
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed font-light">
                  The WaterWall is an affordable solution compared to alternative methods of supplying equivalent water quality—perfect for department buildings, residential areas, and medical facilities.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Green Profile & Signage (Split Layout) */}
      <section className="py-0 overflow-hidden">
        <div className="flex flex-col lg:flex-row w-full min-h-[500px]">
          
          {/* Left Side: Environment */}
          <div className="w-full lg:w-1/2 bg-primary text-white p-16 lg:p-24 flex flex-col justify-center relative group">
            <div className="absolute inset-0 bg-[url('/waterwall-green.jpg')] opacity-30 bg-cover bg-center mix-blend-overlay transition-transform duration-1000 group-hover:scale-105"></div>
            <div className="relative z-10 max-w-xl ml-auto">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-8">
                <Leaf className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Give your business a greener profile</h2>
              <p className="text-xl text-white/80 leading-relaxed font-light">
                WaterWall will contribute to a better environment by reducing oil consumption and plastic waste—an advantage you may use in your marketing and attract new residents with a strong conscience.
              </p>
            </div>
          </div>
          
          {/* Right Side: Signage */}
          <div className="w-full lg:w-1/2 bg-slate-50 text-foreground p-16 lg:p-24 flex flex-col justify-center relative group">
            {/* Soft decorative background shape */}
            <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] group-hover:bg-accent/10 transition-colors duration-1000"></div>
            <div className="relative z-10 max-w-xl mr-auto">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">Let people know your water is clean</h2>
              <p className="text-xl text-neutral leading-relaxed font-light mb-10">
                When the WaterWall is installed, Liquinex will provide you with a large sign informing people that the building has clean tap water.
              </p>
              
              {/* Actual Signage Graphic */}
              <div className="relative w-full max-w-sm aspect-[4/3] rounded-xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                <Image src="/waterwall-clean.jpg" alt="Certified Clean Water Sign" fill className="object-cover" />
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 6. How It Works (Technical) */}
      <section className="py-32 bg-background relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 z-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold tracking-wider text-primary uppercase">How It Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Two groundbreaking innovations in one solution
            </h2>
            <p className="text-xl text-neutral">
              Liquinex can offer this compact, affordable and effective solution by utilizing UV disinfection technology and a patented hybrid membrane from two Scandinavian companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Tech 1 */}
            <div className="bg-white rounded-[2rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-8 border-8 border-slate-50 shadow-inner group-hover:shadow-xl transition-shadow">
                <Image
                  src="/about/ceramic-membrane.png"
                  alt="Ceramic Membrane"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-bold font-heading text-primary mb-4">Hybrid Technology Membrane</h3>
              <p className="text-neutral text-lg leading-relaxed">
                <strong className="text-foreground">Filter that purifies at extreme levels.</strong> Patented membrane filtration technology provides unique and groundbreaking properties for ultrafiltration with a pore size of 60 nanometers (nm).
              </p>
            </div>

            {/* Tech 2 */}
            <div className="bg-white rounded-[2rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-8 border-8 border-slate-50 shadow-inner group-hover:shadow-xl transition-shadow flex items-center justify-center bg-white">
                <Image
                  src="/about/purefize-uv.png"
                  alt="PureFize UV Technology"
                  fill
                  className="object-cover scale-[1.15] group-hover:scale-[1.25] transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-bold font-heading text-primary mb-4">PureFize UV Disinfection</h3>
              <p className="text-neutral text-lg leading-relaxed">
                <strong className="text-foreground">UV disinfection to make perfectly clean.</strong> PureFize from LightLab in Sweden creates a unique UV light spectrum that peaks at 262 nm, the most effective wavelength to destroy bacteria and other microorganisms. The spectrum is broad enough to ensure that all bacteria, viruses, and germs are killed, eliminating any regrowth or so-called tailing.
              </p>
            </div>
          </div>
          
          {/* Video Embed Section */}
          <div className="mt-24 max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 group">
            <div className="relative aspect-video w-full bg-slate-900">
              <iframe
                src="https://www.youtube.com/embed/5b_IgfDxQpY?rel=0"
                title="Liquinex WaterWall Presentation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0 group-hover:scale-[1.01] transition-transform duration-700"
              ></iframe>
            </div>
          </div>

        </div>
      </section>

      {/* 7. CTA & Contact Section */}
      <section id="contact" className="py-32 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-heading font-extrabold text-slate-900 tracking-tight">
              Act now to be among the first with <span className="text-primary">clean tap water.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-600 font-normal leading-relaxed">
              At Liquinex, we aim to offer solutions that suit our customers’ particular needs. One of our representatives will come by to analyze your building and tell you more about our company and offer. So reply today and be among the first to install this groundbreaking technology in your neighborhood.
            </p>

            <div className="bg-white border border-slate-200 rounded-[2rem] p-10 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.05)] mt-12">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-800 mb-8 leading-tight">
                "I would like more information about Liquinex WaterWall and how easy and affordable it would be to secure clean water for all my residents."
              </h3>
              
              <div className="inline-flex flex-col items-center justify-center">
                <span className="text-sm font-semibold tracking-widest text-slate-400 uppercase mb-3">Speak to our experts</span>
                <div className="bg-slate-900 text-white rounded-full px-10 py-5 text-2xl font-bold hover:bg-slate-800 transition-colors shadow-md">
                  +65 97416479
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Footer / Bio inside the page */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h3 className="text-2xl font-heading font-extrabold text-slate-900 mb-6 tracking-widest">LIQUINEX</h3>
          <p className="text-slate-500 leading-relaxed text-lg mb-8">
            Liquinex is a Singapore water company specializing in compact water treatment and recycling systems using ceramic membranes (Liqtech, Denmark) and chip-scale broadband UVC disinfection (LightLab, Sweden) as core technologies.
          </p>
          <Button variant="outline" className="border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-full px-8 font-medium" asChild>
            <Link href="/company">About Liquinex</Link>
          </Button>
        </div>
      </section>
      
    </div>
  );
}
