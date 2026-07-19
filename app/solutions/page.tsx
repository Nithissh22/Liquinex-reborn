import Image from "next/image";
import Link from "next/link";
import { Download, ExternalLink, ArrowRight, Droplets, Factory, Waves, Beaker, Hexagon } from "lucide-react";

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-[#f5f5f7]">
      
      {/* 1. Grand Hero */}
      <section className="relative w-full py-32 lg:py-48 overflow-hidden bg-[#0a192f]">
        <div className="absolute inset-0 bg-[url('/solutions/core-solutions-bg.png')] opacity-20 bg-cover bg-center mix-blend-luminosity" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold tracking-widest uppercase mb-6">
              Our Capabilities
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-extrabold text-white leading-[0.9] tracking-tighter">
              CORE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">SOLUTIONS.</span>
            </h1>
            <p className="mt-8 text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
              Award-winning water purification technology designed for humanitarian relief, industrial applications, and remote municipal deployments worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Suitcase Series (Portable) */}
      <section className="py-24 lg:py-32 bg-[#f5f5f7] border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-16">
            
            {/* Sticky Intro */}
            <div className="xl:col-span-4 xl:sticky top-32 h-fit">
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Portable<br />
                <span className="text-primary">Water Purification.</span>
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                Designed to be easily deployed for emergency response and used in remote locations. Clean Water Anywhere, from a Suitcase.
              </p>
            </div>

            {/* Suitcase Cards */}
            <div className="xl:col-span-8 space-y-12">
              
              {/* Compact Suitcase */}
              <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100 flex flex-col md:flex-row gap-12 group hover:shadow-2xl transition-shadow duration-500">
                <div className="w-full md:w-1/2 space-y-6">
                  <h3 className="text-3xl font-heading font-bold text-slate-900">Compact Water Purification Suitcase</h3>
                  <p className="text-slate-600 leading-relaxed font-light">
                    Our compact water purification suitcase is a portable water treatment unit. The system makes use of ultrafiltration ceramic membrane technology which is capable of filtering sub-micron-size particles including bacteria and viruses.
                  </p>
                  <a 
                    href="/solutions/Compact-Water-Purification-System.pdf" 
                    target="_blank"
                    download
                    className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white font-medium rounded-full hover:bg-primary transition-colors group-hover:scale-105 duration-300"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Brochure (PDF)
                  </a>
                </div>
                <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto rounded-[1.5rem] overflow-hidden bg-slate-50 border border-slate-100 min-h-[300px]">
                  <Image
                    src="/solutions/compact-suitcase.png"
                    alt="Compact Water Purification Suitcase"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Forward Osmosis Suitcase */}
              <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100 flex flex-col md:flex-row gap-12 group hover:shadow-2xl transition-shadow duration-500">
                <div className="w-full md:w-1/2 space-y-6">
                  <h3 className="text-3xl font-heading font-bold text-slate-900">Novel Forward Osmosis Suitcase</h3>
                  <p className="text-slate-600 leading-relaxed font-light">
                    Working with Aquaporin (Denmark), we developed our Forward Osmosis suitcase using Aquaporin's biomimetic membrane that can draw pure water out of wastewater.
                  </p>
                  <a 
                    href="/solutions/Forward-Osmosis-System.pdf" 
                    target="_blank"
                    download
                    className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white font-medium rounded-full hover:bg-primary transition-colors group-hover:scale-105 duration-300"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Brochure (PDF)
                  </a>
                </div>
                <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto rounded-[1.5rem] overflow-hidden bg-slate-100 border border-slate-200 min-h-[300px]">
                  <Image
                    src="/solutions/forward-osmosis.jpg"
                    alt="Novel Forward Osmosis Suitcase field testing"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. Silicon Carbide Ceramic Membrane */}
      <section className="py-24 lg:py-32 bg-[#050b14] text-white overflow-hidden relative border-t border-white/5">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 blur-[120px] bg-accent/30 rounded-full pointer-events-none transform translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full opacity-10 blur-[100px] bg-primary rounded-full pointer-events-none transform -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-2xl mb-8">
                <Hexagon className="w-10 h-10 text-accent" />
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight leading-[1.1]">
                Silicon Carbide<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">Ceramic Membrane.</span>
              </h2>
              <p className="text-xl text-slate-300 font-light leading-relaxed">
                Liquinex is the proud distributor and systems-solution partner of LiqTech, Denmark. Our state-of-the-art Silicon Carbide Ceramic Membranes are integrated across all of our high-performance products to ensure unmatched filtration quality.
              </p>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6 relative">
              <div className="relative aspect-[4/5] rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden group transition-colors duration-500 backdrop-blur-md shadow-2xl">
                <Image
                  src="/solutions/membrane-module.jpg"
                  alt="Silicon Carbide Ceramic Membrane Module"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative aspect-[4/5] rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden group transition-colors duration-500 translate-y-12 backdrop-blur-md shadow-2xl">
                <Image
                  src="/solutions/membrane-rods.png"
                  alt="Individual Silicon Carbide Ceramic Membrane elements"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.1 Silicon Carbide Features & Advantages - Extraordinary Redesign */}
      <section className="py-24 lg:py-32 bg-[#020408] relative overflow-hidden border-t border-white/5 flex flex-col items-center justify-center min-h-[900px]">
        {/* Massive Background Typography */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
          <h2 className="text-[10rem] md:text-[15rem] lg:text-[20rem] font-heading font-black text-white/[0.03] whitespace-nowrap tracking-tighter leading-none">
            SiC MEMBRANE
          </h2>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] pointer-events-none z-0" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          
          <div className="text-center mb-16 lg:mb-24">
            <span className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold tracking-widest uppercase backdrop-blur-md shadow-2xl">
              <Hexagon className="w-5 h-5 text-accent" />
              Why Silicon Carbide?
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
            
            {/* Features (Left side) */}
            <div className="lg:col-span-4 space-y-8 lg:pr-4">
              {[
                { title: "Exceptional Chemical & Thermal Resistance", desc: "Withstands highly corrosive chemicals and extreme temperatures." },
                { title: "High Filtration Performance", desc: "High permeability with precise pore size distribution for efficient removal." },
                { title: "Superior Mechanical Strength", desc: "Excellent resistance to pressure and wear for long-term stability." }
              ].map((item, i) => (
                <div key={i} className="group relative p-6 md:p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 overflow-hidden lg:-mr-12 z-20 lg:text-right hover:-translate-x-2 shadow-xl">
                  <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block" />
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 lg:hidden" />
                  <p className="text-primary text-xs font-bold tracking-widest uppercase mb-2">Feature 0{i+1}</p>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-slate-400 font-light text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Central Product Showcase */}
            <div className="lg:col-span-4 relative h-[400px] lg:h-[600px] w-full flex items-center justify-center z-10">
              {/* Spinning Orbital Rings */}
              <div className="absolute inset-4 lg:inset-0 rounded-full border border-white/10 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-12 lg:inset-8 rounded-full border border-dashed border-white/20 animate-[spin_40s_linear_infinite_reverse]" />
              
              {/* Image Portal */}
              <div className="relative w-56 h-56 lg:w-80 lg:h-80 rounded-full bg-black border-4 border-white/10 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] z-20 group">
                <Image
                  src="/solutions/membrane-rods.png"
                  alt="Silicon Carbide Ceramic Membrane"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-accent/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
              </div>
            </div>

            {/* Advantages (Right side) */}
            <div className="lg:col-span-4 space-y-8 lg:pl-4">
              {[
                { title: "Low Operating & Maintenance Cost", desc: "High fouling resistance and excellent cleanability reduce downtime." },
                { title: "Reliable in Harsh Conditions", desc: "Maintains consistent filtration under chemically aggressive environments." },
                { title: "Sustainable & Cost-Effective", desc: "High water recovery and long lifespan for sustainable water treatment." }
              ].map((item, i) => (
                <div key={i} className="group relative p-6 md:p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 overflow-hidden lg:-ml-12 z-20 text-left hover:translate-x-2 shadow-xl">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className="text-accent text-xs font-bold tracking-widest uppercase mb-2">Advantage 0{i+1}</p>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-slate-400 font-light text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. Industrial Water Treatment & 15D System */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#000,transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Content Side */}
            <div className="space-y-8">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center border border-slate-200 shadow-sm mb-6">
                <Factory className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Industrial Water Treatment <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">& 15D System.</span>
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                Our system can be configured to be automatic or semi-automatic to minimize human intervention during operation. Additional options include remote monitoring and control systems. 
              </p>
              <p className="text-lg text-slate-500 font-light leading-relaxed">
                Our engineers will assess your plant specifications in order to recommend the appropriate capacity, configuration, and integration strategy for maximum operational efficiency.
              </p>
              
              <div className="pt-8 flex flex-col sm:flex-row gap-4">
                <a 
                  href="/solutions/Compact-Water-Treatment-System.pdf" 
                  target="_blank"
                  download
                  className="group inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <Download className="w-5 h-5 mr-3 group-hover:-translate-y-1 transition-transform" />
                  Compact Treatment System PDF
                </a>
                <a 
                  href="/solutions/Scrubber-Waste-Water-Treatment.pdf" 
                  target="_blank"
                  download
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-full border border-slate-200 hover:border-accent hover:text-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <Download className="w-5 h-5 mr-3 group-hover:-translate-y-1 transition-transform" />
                  Scrubber Water Treatment PDF
                </a>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative w-full aspect-[4/3] lg:aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-slate-50 rounded-[3rem] transform rotate-3 scale-105 border border-slate-200" />
              <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 group">
                <Image
                  src="/solutions/industrial-system-new.png"
                  alt="Industrial Water Treatment System"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-xl border border-white/20">
                  <span className="text-slate-900 font-bold tracking-wider text-sm uppercase flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    15D System Active
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Reverse Osmosis Editorial */}
      <section className="py-24 lg:py-32 bg-[#0a192f] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-screen" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <Waves className="w-8 h-8 text-primary-light" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-[1.1]">
                Reverse Osmosis<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-white">(BWRO & SWRO)</span>
              </h2>
              <h3 className="text-2xl font-semibold text-accent">
                Potable water from the seas and rivers.
              </h3>
              <div className="space-y-6 text-lg text-slate-300 font-light leading-relaxed">
                <p>
                  Liquinex's reverse osmosis systems have been in service in some countries such as Malaysia, Indonesia, and the Philippines. Many places in the world do not have access to tap water, and for the residents of these places, their main source of water comes from nearby rivers and oceans.
                </p>
                <p>
                  Some rivers contains a certain level of salinity. These type of waters are known as brackish water. Although ultrafiltration technology can be used to treat water into potable water, ultrafiltration is unable to remove salts, flouride, and other dissolved solids in water. For such sources of water, a brackish water reverse osmosis (BWRO) system will be required. 
                </p>
                <p>
                  In the event seawater is the only available water source, a seawater reverse osmosis (SWRO) system will be required instead. Our reverse osmosis systems in service has been providing locals within these areas with an easily accessible high quality potable water.
                </p>
              </div>
            </div>

            {/* Images Collage */}
            <div className="relative h-[600px] w-full order-1 lg:order-2">
              <div className="absolute top-10 right-0 w-[75%] h-[65%] rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm shadow-2xl overflow-hidden z-10 group">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700 z-10" />
                <Image
                  src="/solutions/dirty-river.jpg"
                  alt="Locals testing river water"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute bottom-10 left-0 w-[65%] h-[60%] rounded-[2rem] bg-white/10 border border-white/20 backdrop-blur-md shadow-2xl overflow-hidden z-20 group hover:z-30">
                <Image
                  src="/solutions/ro-machine.png"
                  alt="Reverse Osmosis Machine"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-accent/30 rounded-full blur-[60px] z-0 pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* 6. Waterwall Spotlight */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 lg:p-24 overflow-hidden relative shadow-2xl">
            
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
              <div className="space-y-8 text-white">
                <Droplets className="w-12 h-12 text-primary" />
                <h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight leading-[1.1]">
                  Waterwall<br />
                  <span className="text-slate-500">For Homes & Establishments.</span>
                </h2>
                <h3 className="text-2xl font-semibold text-slate-300">
                  World class drinkable water from every tap.
                </h3>
                <div className="space-y-6 text-lg text-slate-400 font-light leading-relaxed">
                  <p>
                    From an infographic published by QS supplies, the quality of drinking water can be graded with an EPI scoring system (0 to 100). An EPI score of 100 indicates that the water is the safest in the world for consumption directly from tap.
                  </p>
                  <p>
                    Many countries in the world have an EPI score that suggest that their tap water are not very safe for direct consumption. The concept of Liquinex's waterwall is to provide quality world-class potable water in countries with lower water quality EPI score by treating water within the walls of homes and establishments, while keeping a lower profile in the shape of a wall.
                  </p>
                  <p>
                    Similar to the Compact Water Purification Suitcase, the waterwall system makes use of ultrafiltration ceramic membrane technology which is capable of filtering sub-micron-size particles including bacteria and viruses. The Deep UV technology adds on another level of safeguard that kills bacteria and viruses.
                  </p>
                </div>
                
                <div className="pt-8 flex flex-col sm:flex-row gap-4">
                  <a href="https://www.liquinex-waterwall.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-colors">
                    Visit Waterwall Website
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </a>
                  <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors">
                    Learn about EPI Scores
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-8">
                 <div className="w-full flex-1 rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden relative min-h-[300px]">
                    <Image
                      src="/solutions/waterwall-1-new.png"
                      alt="Waterwall installed in office environment"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                 </div>
                 <div className="w-full flex-1 rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden relative min-h-[300px]">
                    <Image
                      src="/solutions/waterwall-2-new.png"
                      alt="Waterwall installed in kitchen environment"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Other Solutions (Bento Grid) */}
      <section className="py-24 lg:py-32 bg-[#f5f5f7]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Other Solutions.<br />
              <span className="text-slate-400 text-3xl md:text-4xl">For various applications.</span>
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              Liquinex also provide various other solutions such as filtration systems for solvent recovery in aerospace industries, algae extraction, starch removal in rice noodle factory, non-potable water filtration purposes for swimming pools, aquaculture water treatment, oil-water separation etc.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            
            {/* Pools */}
            <div className="bg-white rounded-[2rem] p-8 border border-slate-200 flex flex-col justify-between hover:shadow-xl transition-shadow duration-500 lg:col-span-1 lg:row-span-1 group overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">Swimming Pools</h3>
                <p className="text-slate-600 font-light mt-4">Water treatment for swimming pools.</p>
              </div>
              <div className="mt-6 flex-1 w-full rounded-xl overflow-hidden relative border border-slate-100 shadow-inner">
                <Image src="/solutions/swimming-pools.png" alt="Swimming Pool Water Treatment" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

            {/* Coal Mines */}
            <div className="bg-slate-900 text-white rounded-[2rem] p-8 border border-slate-800 flex flex-col justify-between hover:shadow-xl transition-shadow duration-500 lg:col-span-2 lg:row-span-1 group overflow-hidden relative">
              <div className="relative z-10 flex flex-col h-full lg:w-1/2 lg:pr-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary-light transition-colors">Coal Mines</h3>
                <p className="text-slate-400 font-light mt-4">Water treatment for coal mines to remove large quantities of tailings containing coal and sand particles that heavily pollute the environment.</p>
              </div>
              <div className="mt-6 lg:mt-0 lg:absolute lg:right-6 lg:top-6 lg:bottom-6 lg:w-[45%] flex-1 w-full rounded-xl overflow-hidden relative border border-slate-700/50">
                <Image src="/solutions/coal-mines.png" alt="Coal Mine Water Treatment" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

            {/* RevUltra */}
            <div className="bg-primary text-white rounded-[2rem] p-8 border border-primary-light flex flex-col justify-between hover:shadow-xl transition-shadow duration-500 lg:col-span-1 lg:row-span-2 group overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold">RevUltra</h3>
                <p className="text-blue-100 font-light mt-4">Combined Reverse Osmosis and Ultrafiltration system used to treat contaminated water from washing waste chemical drums.</p>
              </div>
              <div className="mt-6 flex-1 w-full rounded-xl overflow-hidden relative border border-primary-light/30 shadow-inner min-h-[200px]">
                <Image src="/solutions/revultra.png" alt="RevUltra System" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

            {/* Algae Extraction */}
            <div className="bg-white rounded-[2rem] p-8 border border-slate-200 flex flex-col justify-between hover:shadow-xl transition-shadow duration-500 lg:col-span-1 lg:row-span-2 group overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">Algae Extraction</h3>
                <p className="text-slate-600 font-light mt-4">Filtration system for Algae Extraction.</p>
              </div>
              <div className="mt-6 flex-1 w-full rounded-xl overflow-hidden relative border border-slate-100 shadow-inner min-h-[200px]">
                <Image src="/solutions/algae-new.png" alt="Algae Extraction System" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

            {/* Solvent Recovery */}
            <div className="bg-white rounded-[2rem] p-8 border border-slate-200 flex flex-col justify-between hover:shadow-xl transition-shadow duration-500 lg:col-span-1 lg:row-span-2 group overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">Solvent Recovery</h3>
                <p className="text-slate-600 font-light mt-4">Solvent recovery ultrafiltration system used to clean hot process fluids. Premium solvent can be recovered, allowing the chemicals to be reused.</p>
              </div>
              <div className="mt-6 flex-1 w-full rounded-xl overflow-hidden relative border border-slate-100 shadow-inner min-h-[200px]">
                <Image src="/solutions/solvent-recovery.png" alt="Solvent Recovery System" fill className="object-cover group-hover:scale-105 transition-transform duration-700 object-top" />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
