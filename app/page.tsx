import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Factory, Droplets, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { LogoMarquee } from "@/components/ui/logo-marquee";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary">
        {/* Placeholder for Hero Video/Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/about/hero-bg.jpg" 
            alt="Liquinex clean water technology facility"
            fill
            className="object-cover opacity-80 mix-blend-overlay"
            priority
          />
          {/* Dark overlay to ensure white text is perfectly legible */}
          <div className="absolute inset-0 bg-slate-900/60" />
          {/* Bottom gradient to smoothly blend into the next section */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center mt-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 tracking-tight">
            Engineering Clean Water <br className="hidden md:block" />
            <span className="text-accent">for the Future</span>
          </h1>
          <p className="text-neutral-light text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Award-Winning Water Purification Technology. Providing sustainable, state-of-the-art water solutions to rural communities, municipal bodies, and industrial companies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-white border-white hover:bg-white hover:text-primary">
              <Link href="/enquiry">Get in Touch</Link>
            </Button>
          </div>
        </div>

        {/* Quick Nav Pills */}
        <div className="absolute bottom-8 left-0 right-0 z-10 hidden md:block">
          <div className="container mx-auto px-4 flex justify-center gap-4">
            {[
              "Industrial Water Treatment",
              "Humanitarian Purification",
              "Municipal Systems",
              "Oil & Gas Produced Water"
            ].map((category) => (
              <div key={category} className="bg-primary/50 backdrop-blur-sm border border-primary-light/50 px-6 py-3 rounded-full text-sm font-medium text-white hover:bg-accent transition-colors cursor-pointer">
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      <LogoMarquee />

      {/* Partners Section */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="inline-block text-sm font-bold tracking-widest text-accent uppercase mb-4">
                  Global Impact
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight leading-[1.1] mb-6">
                  Partners Working With <br />
                  <span className="text-primary">Big and Small.</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-neutral leading-relaxed">
                <p>
                  Since 2015, we have provided state of the art solutions to rural communities, municipal and industrial companies to help them meet hydration, hygiene and sanitation needs as well as regulatory compliance during pandemic period.
                </p>
                
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-primary/10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <h3 className="font-heading font-bold text-xl mb-3 text-primary flex items-center gap-2">
                    <Droplets className="w-5 h-5" /> Compact Water Purification
                  </h3>
                  <p className="text-base text-neutral-dark">
                    Our system provides potable water, is easy to transport, powered by 12V Car battery or solar panels and can produce up to 3000 litres/day of bottled-water quality drinking water for over 600 people. It is perfectly suited for humanitarian relief and remote or rural applications.
                  </p>
                </div>
              </div>
              
              <div className="pt-4">
                <Button size="lg" className="rounded-full px-8 bg-foreground hover:bg-primary text-white transition-colors shadow-xl" asChild>
                  <Link href="/solutions">
                    Discover Our Systems
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-7 relative h-[600px] md:h-[700px] w-full mt-10 lg:mt-0">
              {/* Image 1: Industrial */}
              <div className="absolute top-0 right-0 w-[80%] h-[60%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-10 group">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700 z-10" />
                <Image 
                  src="/about/partners-1.jpg"
                  alt="Industrial water purification system"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Image 2: Rural Suitcase */}
              <div className="absolute bottom-0 left-0 w-[60%] h-[55%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-20 group hover:z-30">
                <Image 
                  src="/about/partners-2.jpg"
                  alt="Compact rural water purification"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Decorative Element */}
              <div className="absolute top-1/2 left-[10%] w-32 h-32 bg-accent/20 rounded-full blur-3xl z-0" />
            </div>
            
          </div>
        </div>
      </section>

      {/* Video Feature */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeading 
            title="See Liquinex in Action"
            subtitle="Our compact water purification systems are built to perform in the toughest conditions."
            centered
            className="text-white [&>p]:text-neutral-light"
          />
          
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-primary-light shadow-2xl aspect-video bg-black relative">
            <video 
              src="/home-video.mp4" 
              className="absolute inset-0 w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Innovation Highlight: Waterwall */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-background border-t border-primary/10">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-primary/10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 overflow-hidden relative group">
            
            {/* Background decorative blob */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[80px] group-hover:bg-accent/20 transition-colors duration-700 pointer-events-none"></div>

            <div className="w-full lg:w-1/2 space-y-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                <span className="text-sm font-bold tracking-wider text-accent uppercase">
                  Next Generation Technology
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-heading font-extrabold text-foreground tracking-tight leading-tight">
                Liquinex <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Waterwall</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-xl text-neutral leading-relaxed font-medium">
                  Our next generation purifying technology will be coming to residential and commercial establishments! It is engineered to work flawlessly even when you are located completely off-grid.
                </p>
                
                <div className="flex gap-4 p-6 rounded-2xl bg-primary/5 border border-primary/10">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-lg text-neutral leading-relaxed">
                    Households in developing countries will be able to enjoy tap water quality similar to, or even better than, developed countries.
                  </p>
                </div>
                
                <div className="pt-4">
                  <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-accent text-white transition-all shadow-xl hover:shadow-accent/30 group" asChild>
                    <Link href="/waterwall">
                      Learn More <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative z-10 flex justify-center">
              <div className="relative">
                {/* Image Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl scale-110 -z-10 group-hover:scale-125 transition-transform duration-700"></div>
                <Image
                  src="/about/waterwall-hq.png"
                  alt="Liquinex Waterwall"
                  width={600}
                  height={800}
                  className="w-full max-w-[400px] h-auto object-contain drop-shadow-2xl transition-transform duration-700 group-hover:-translate-y-4"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Technical Solutions */}
      <section className="py-24 lg:py-32 bg-[#f5f5f7] border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Image Side */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center bg-white">
              <Image 
                src="/about/tech-solutions-v2.png"
                alt="Liquinex Technical Solutions Machine"
                fill
                className="object-contain p-8 hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Content Side */}
            <div className="space-y-8">
              <div>
                <span className="inline-block text-sm font-bold tracking-widest text-primary uppercase mb-4">
                  Technical Solutions
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                  Singapore's Water & Wastewater <br />
                  <span className="text-slate-400">Technology Specialist.</span>
                </h2>
              </div>
              
              <div className="space-y-6">
                {[
                  "Provide proven technology-based solutions to customers.",
                  "Focus on innovation to optimize performance & operational efficiencies, as well as cost-effectiveness.",
                  "Specializing in ceramic membranes to provide industrial wastewater treatment and recycling solutions to treat and recover industrial wastewater, including premium process chemicals and solvents for recycling/reuse."
                ].map((text, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed font-medium">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Goals */}
      <section className="relative py-24 lg:py-32 bg-[#0a192f] overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-screen" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold tracking-widest uppercase mb-6">
                <Leaf className="w-4 h-4" /> Our Commitment
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Delivering Innovation <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">& Sustainability.</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
                We combine improved water initiatives with energy efficiency to conserve resources and make our clients' businesses remarkably more efficient.
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 px-8 py-5 rounded-2xl shadow-2xl">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Certified</p>
                  <p className="font-heading font-bold text-white text-xl">BizSafe STAR</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { 
                icon: Leaf, 
                title: "Environment", 
                desc: "Reducing waste and energy use across operations, steadily moving toward completely sustainable business practices." 
              },
              { 
                icon: Factory, 
                title: "Energy Efficiency", 
                desc: "Delivering energy-efficient solutions that drastically reduce operating costs, carbon footprint, and meet environmental targets." 
              },
              { 
                icon: ShieldCheck, 
                title: "Occupational Safety", 
                desc: "Maintaining a BizSafe STAR certified safety-first workplace culture that protects our team and our clients globally." 
              }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 p-8 lg:p-10 rounded-[2rem] hover:bg-white/10 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-4 -translate-y-4 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700">
                  <feature.icon className="w-32 h-32 text-white" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed font-light">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
