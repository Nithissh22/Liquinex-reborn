import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ShieldCheck, Target, Users } from "lucide-react";

export default function CompanyPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-slate-950 pt-32 pb-40">
        
        {/* Background Image */}
        <Image 
          src="/about-bg.png" 
          alt="About Liquinex Background" 
          fill 
          priority
          className="object-cover absolute inset-0 z-0 opacity-40"
        />

        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-slate-950/40 z-0"></div>

        {/* Glowing Orbs for extra aesthetic */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] mix-blend-screen z-0"></div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-sm font-semibold tracking-widest text-slate-200 uppercase">
              Pioneering Water Technologies
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-8 tracking-tight drop-shadow-2xl">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">Liquinex</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg">
            Founded in 2015, we are a Singapore-based specialist engineering <span className="text-white font-medium">sustainable clean water</span> and wastewater treatment solutions for the future.
          </p>
          
          {/* Decorative accent line */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-transparent mt-14 rounded-full"></div>
        </div>
        
        {/* Bottom fading gradient to blend with the next section */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
      </section>

      {/* Company Identity Bento Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <SectionHeading title="Our Identity" centered />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
            
            {/* History (Spans 2 columns) */}
            <div className="col-span-1 lg:col-span-2 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center border border-primary/10 hover:shadow-xl transition-all duration-500 group">
              <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg border border-white/50">
                <Image
                  src="/about/history-hq.jpg"
                  alt="Liquinex History"
                  width={800}
                  height={800}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-4xl font-bold font-heading text-primary">History</h3>
                <p className="text-neutral leading-relaxed text-lg">
                  Established in 2015 as a specialized consultancy in water and wastewater treatment, Liquinex has rapidly evolved into a premier, fully-integrated Engineering, Procurement, Construction (EPC), and Operations & Maintenance (O&M) technology solutions provider.
                </p>
              </div>
            </div>

            {/* Founders (Spans 1 column) */}
            <div className="col-span-1 bg-gradient-to-bl from-accent/10 via-accent/5 to-transparent rounded-[2rem] p-8 md:p-12 flex flex-col gap-8 border border-accent/10 hover:shadow-xl transition-all duration-500 group">
              <div className="space-y-4">
                <h3 className="text-4xl font-bold font-heading text-accent">Founders</h3>
                <p className="text-neutral leading-relaxed">
                  Bashir Ahmad has been driving innovation in the engineering design, construction, and maintenance of water and wastewater treatment plants, alongside air pollution and marine technologies, since 2000.
                </p>
                <p className="text-neutral leading-relaxed">
                  Riaz Deen has specialized in industrial and marine engineering, large-scale fabrication, and precision manufacturing since 2013.
                </p>
              </div>
              <div className="w-full mt-auto overflow-hidden rounded-2xl shadow-lg border border-white/50">
                <Image
                  src="/about/founders.png"
                  alt="Liquinex Founders"
                  width={800}
                  height={800}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Mission (Spans 1 column) */}
            <div className="col-span-1 bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent rounded-[2rem] p-8 md:p-12 flex flex-col gap-8 border border-primary/10 hover:shadow-xl transition-all duration-500 group">
              <div className="w-full overflow-hidden rounded-2xl shadow-lg border border-white/50">
                <Image
                  src="/about/mission-hq.jpg"
                  alt="Liquinex Mission"
                  width={800}
                  height={800}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4 mt-auto">
                <h3 className="text-4xl font-bold font-heading text-primary">Mission</h3>
                <p className="text-neutral leading-relaxed text-lg">
                  Our mission is to engineer and deliver highly sustainable, resource-efficient water and wastewater treatment solutions that empower our clients to achieve their environmental and operational goals. Through relentless innovation and deep-rooted engineering expertise, we are dedicated to resolving the most complex water challenges across industrial, municipal, and humanitarian sectors worldwide.
                </p>
              </div>
            </div>

            {/* Vision (Spans 2 columns) */}
            <div className="col-span-1 lg:col-span-2 bg-gradient-to-tl from-accent/10 via-accent/5 to-transparent rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row-reverse gap-8 items-center border border-accent/10 hover:shadow-xl transition-all duration-500 group">
              <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg border border-white/50">
                <Image
                  src="/about/vision-hq-final.jpg"
                  alt="Liquinex Vision"
                  width={800}
                  height={800}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-4xl font-bold font-heading text-accent">Vision</h3>
                <p className="text-neutral leading-relaxed text-lg md:pr-12">
                  Our vision is to be the premier, globally trusted partner for organizations and communities who recognize water as their most vital asset. We aspire to lead the paradigm shift toward a sustainable future by continuously advancing water reclamation technologies, fostering environmental stewardship, and securing clean water access for generations to come.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-background border-t border-primary-light/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <SectionHeading title="Certifications & Standards" centered />
          
          <div className="flex justify-center mt-12">
            <div className="flex flex-col items-center p-8 bg-background border border-primary-light/30 rounded-2xl max-w-sm">
              <ShieldCheck className="w-16 h-16 text-accent mb-6" />
              <h3 className="font-heading font-bold text-2xl mb-2">BizSafe STAR</h3>
              <p className="text-neutral text-center">
                We maintain the highest level of workplace safety and health standards, recognized by the Workplace Safety and Health Council of Singapore.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
