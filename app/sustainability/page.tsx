"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Leaf, Zap, Shield, Award, ExternalLink } from "lucide-react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

function AnimatedCounter({ value, className }: { value: number; className: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const spring = useSpring(0, { bounce: 0, duration: 2500 });
  
  useEffect(() => {
    if (isInView) {
      spring.set(value);
    } else {
      spring.set(0);
    }
  }, [isInView, spring, value]);

  const display = useTransform(spring, (current) => Math.round(current) + "%");

  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function SustainabilityPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-[#f5f5f7]">
      
      {/* 1. Grand Hero */}
      <section className="relative w-full py-32 lg:py-48 overflow-hidden flex items-center min-h-[70vh]">
        <Image
          src="/about/sustainability-hero.jpg"
          alt="Sustainability Goals Forest"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#f5f5f7] via-transparent to-transparent opacity-90"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 mt-16">
          <div className="max-w-5xl">
            <span className="inline-block text-sm font-bold tracking-widest text-white uppercase mb-6 drop-shadow-md">
              Our Commitment
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-extrabold text-white leading-[0.9] tracking-tighter drop-shadow-xl">
              SUSTAINABILITY<br />
              <span className="text-emerald-300">GOALS.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Values Grid (Bento/Staggered) */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight mb-6">
              Liquinex Sustainability Values Adopted
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full"></div>
          </div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            {/* Health & Safety */}
            <motion.div variants={fadeInUp} className="bg-slate-50 p-10 md:p-14 rounded-[2rem] border border-slate-100 group hover:-translate-y-2 hover:bg-primary hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 ease-out overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
              <ShieldCheck className="w-12 h-12 text-primary group-hover:text-white group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-500 mb-8" />
              <h3 className="text-3xl font-heading font-bold text-slate-900 group-hover:text-white transition-colors duration-500 mb-6">Health & Safety</h3>
              <p className="text-lg text-slate-600 group-hover:text-white/90 leading-relaxed font-light transition-colors duration-500 relative z-10">
                The health, safety, and well-being of our workforce remain paramount at Liquinex. We cultivate a secure, ergonomically optimized environment that prioritizes occupational safety, thereby minimizing operational downtime and maximizing overall productivity.
              </p>
            </motion.div>

            {/* Environment */}
            <motion.div variants={fadeInUp} className="bg-slate-50 p-10 md:p-14 rounded-[2rem] border border-slate-100 group hover:-translate-y-2 hover:bg-primary hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 ease-out overflow-hidden relative md:mt-12">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
              <Leaf className="w-12 h-12 text-primary group-hover:text-white group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-500 mb-8" />
              <h3 className="text-3xl font-heading font-bold text-slate-900 group-hover:text-white transition-colors duration-500 mb-6">Environment</h3>
              <p className="text-lg text-slate-600 group-hover:text-white/90 leading-relaxed font-light transition-colors duration-500 relative z-10">
                Across all initiatives, we conduct rigorous environmental impact assessments. This data-driven approach ensures optimal resource utilization, maximizing efficiency in both water conservation and energy consumption.
              </p>
            </motion.div>

            {/* Energy Efficient */}
            <motion.div variants={fadeInUp} className="bg-slate-50 p-10 md:p-14 rounded-[2rem] border border-slate-100 group hover:-translate-y-2 hover:bg-primary hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 ease-out overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
              <Zap className="w-12 h-12 text-primary group-hover:text-white group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-500 mb-8" />
              <h3 className="text-3xl font-heading font-bold text-slate-900 group-hover:text-white transition-colors duration-500 mb-6">Energy Efficient</h3>
              <p className="text-lg text-slate-600 group-hover:text-white/90 leading-relaxed font-light transition-colors duration-500 relative z-10">
                We continuously innovate to minimize energy consumption by integrating advanced, energy-efficient technologies into our core infrastructure. Crucially, these sustainable enhancements are engineered to reduce our carbon footprint without compromising the high-performance water treatment standards our clients expect.
              </p>
            </motion.div>

            {/* Integrity */}
            <motion.div variants={fadeInUp} className="bg-slate-50 p-10 md:p-14 rounded-[2rem] border border-slate-100 group hover:-translate-y-2 hover:bg-primary hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 ease-out overflow-hidden relative md:mt-12">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
              <Shield className="w-12 h-12 text-primary group-hover:text-white group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-500 mb-8" />
              <h3 className="text-3xl font-heading font-bold text-slate-900 group-hover:text-white transition-colors duration-500 mb-6">Integrity</h3>
              <p className="text-lg text-slate-600 group-hover:text-white/90 leading-relaxed font-light transition-colors duration-500 relative z-10">
                Uncompromising integrity forms the bedrock of our corporate philosophy. We go beyond strict regulatory compliance to proactively build and sustain unwavering trust with our partners, clients, and global communities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Monumental Stats Section */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mb-24">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-8">
              A Record of Excellence
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
              Through the exceptional technical acumen of our engineering teams and an unwavering commitment to client success, Liquinex has rapidly established a distinguished track record of global project deliveries, continually exceeding industry benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="flex flex-col items-start md:px-8 first:pl-0">
              <AnimatedCounter value={85} className="text-7xl md:text-8xl lg:text-9xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 tracking-tighter" />
              <span className="text-xl font-medium text-slate-300 mt-4 uppercase tracking-widest">Customer Satisfaction</span>
            </div>
            <div className="flex flex-col items-start md:px-8 pt-12 md:pt-0">
              <AnimatedCounter value={88} className="text-7xl md:text-8xl lg:text-9xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent tracking-tighter" />
              <span className="text-xl font-medium text-slate-300 mt-4 uppercase tracking-widest">Project Deliverables</span>
            </div>
            <div className="flex flex-col items-start md:px-8 pt-12 md:pt-0">
              <AnimatedCounter value={65} className="text-7xl md:text-8xl lg:text-9xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-emerald-600 tracking-tighter" />
              <span className="text-xl font-medium text-slate-300 mt-4 uppercase tracking-widest">Moving Towards Sustainability</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Water Champions Callout */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 bg-white/10 backdrop-blur-sm rounded-[3rem] p-12 lg:p-20 border border-white/20 shadow-2xl">
            <div className="w-full lg:w-1/2 space-y-8">
              <Award className="w-16 h-16 text-accent" />
              <h2 className="text-5xl md:text-6xl font-heading font-extrabold tracking-tight leading-tight">
                Water Champions
              </h2>
              <p className="text-2xl text-blue-100 font-light leading-relaxed">
                Liquinex has been officially recognized by the Singapore Public Utilities Board (PUB) as a definitive Champion of Water Sustainability, reflecting our profound impact on national resource conservation.
              </p>
              <a 
                href="https://www.pub.gov.sg" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center text-lg font-bold text-white hover:text-accent transition-colors mt-4 border-b-2 border-accent pb-1"
              >
                WATER CHAMPION : Make Every Drop Count <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center relative">
              <div className="relative w-full max-w-2xl aspect-[4/3] rounded-[2rem] overflow-hidden bg-transparent flex items-center justify-center shadow-2xl group border-4 border-white/20">
                 <Image
                    src="/sustainability/water-champions.png"
                    alt="PUB Water Champion"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Ceramic vs PFAS Magazine Spread */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Sticky Header Column */}
            <div className="lg:col-span-5 lg:sticky top-32 h-fit">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
                Silicon Carbide<br />
                <span className="text-slate-400">Ceramic Membranes.</span>
              </h2>
              <div className="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl bg-slate-50">
                 <Image
                    src="/about/membrane2.jpg"
                    alt="Silicon Carbide Ceramic Membrane"
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-700 p-4"
                 />
              </div>
            </div>

            {/* Rich Text Column */}
            <div className="lg:col-span-7 space-y-12 text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              <p>
                According to industry insights from <a href="https://www.thembrsite.com/blog/pvdf-membranes-and-pfas-whats-the-difference/" target="_blank" rel="noreferrer" className="text-primary font-semibold hover:underline">The MBR Site (1)</a>, PVDF is currently the most prevalent material utilized in conventional filtration membranes; however, it is frequently classified under the umbrella of PFAS materials. 
              </p>
              
              <div className="p-10 bg-slate-50 border-l-4 border-slate-900 rounded-r-[2rem]">
                <p className="text-lg text-slate-800 font-medium">
                  PFAS (polyfluoroalkyl substances), commonly referred to as 'forever chemicals', are characterized by their extreme environmental persistence. Once discharged, they resist natural degradation indefinitely.
                </p>
              </div>

              <p>
                The unchecked accumulation of PFAS poses a severe, irreversible ecological threat. Conventional polymeric membranes carry the inherent risk of degrading or leaching these toxic chemical compounds, directly exacerbating global PFAS contamination.
              </p>

              <p>
                Critically, when such compromised filtration systems are deployed for potable water treatment, the risk of human consumption of leached PFAS chemicals becomes a dangerous reality.
              </p>

              <div className="p-10 bg-primary text-white rounded-[2rem] shadow-xl">
                <p className="font-semibold">
                  In stark contrast, Liquinex exclusively engineers advanced ceramic-based membranes. Our highly robust, completely inert ceramic architecture guarantees zero chemical leaching, ensuring the absolute purity and safety of the filtered medium.
                </p>
              </div>
              
              <p className="text-sm text-slate-400 pt-8 border-t border-slate-100 break-all">
                (1) https://www.thembrsite.com/blog/pvdf-membranes-and-pfas-whats-the-difference/
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Recycled Water Full Width Image */}
      <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src="/about/recycled-water.png"
          alt="Treated water being recycled back"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
           <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-white tracking-tight mb-4 drop-shadow-lg">
             Treated water being recycled back.
           </h2>
        </div>
      </section>

      {/* 7. Treated Water Recycling Details */}
      <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Text Side */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="w-full lg:w-1/2 space-y-8"
            >
              <div>
                <motion.span variants={fadeInUp} className="inline-block text-sm font-bold tracking-widest text-sky-600 uppercase mb-4">
                  Sustainable Resource Management
                </motion.span>
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                  Treated Water <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-800">Recycling</span>
                </motion.h2>
              </div>
              
              <motion.div variants={fadeInUp} className="prose prose-lg text-slate-600 leading-relaxed">
                <p>
                  This visual represents the culmination of our advanced water treatment lifecycle—a state where highly purified water is successfully reclaimed and recycled for continuous reuse, effectively eliminating unnecessary waste discharge.
                </p>
                <p>
                  Following purification, the treated water is safely secured in dedicated reservoirs and systematically redistributed via specialized pipeline networks for high-demand industrial and municipal utility applications. This strategic recycling drastically curbs fresh water dependency, significantly mitigates ecological impact, and drives down long-term operational expenditures.
                </p>
                <p>
                  Ultimately, this sophisticated closed-loop engineering model fortifies regional water security, empowering industries to operate with maximum efficiency and uncompromising environmental responsibility.
                </p>
              </motion.div>
            </motion.div>

            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full lg:w-1/2"
            >
              <div className="relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden bg-white shadow-2xl shadow-sky-900/10 border-[12px] border-white group">
                <Image 
                  src="/sustainability/treated-water-recycling.png"
                  alt="Treated Water Recycling Process"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

    </div>
  );
}
