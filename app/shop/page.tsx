"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Droplets, Shield, Settings, FileText, Cpu, Activity, Zap } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const products = [
  {
    id: "mini-compact-water-purification",
    name: "Mini / Standard Compact Water Purification System",
    desc: "Our Compact Water Purification System (CWPS) is a lightweight, portable water treatment unit. It is designed to be easily deployed for emergency response and used in remote locations. The system uses ultrafiltration silicon carbide ceramic membrane technology capable of filtering sub-micron-size particles, including bacteria and viruses.",
    image: "/products/mini-compact.png", 
    variants: [
      {
        name: "Mini System",
        specs: { Dimension: "52 x 40 x 22 cm", "Flow Rate": "Up to 150 L/hr", Weight: "15 kg" }
      },
      {
        name: "Standard System",
        specs: { Dimension: "63 x 50 x 30 cm", "Flow Rate": "Up to 500 L/hr", Weight: "30 kg" }
      }
    ],
    featuresTitle: "Includes:",
    features: [
      "Silicon Carbide Ceramic UF Membrane in PVC Housing",
      "12V DC Feed Pump & Filtration/Backwash Pump",
      "Heavy Duty Portable Case & UV sterilizer",
      "Internal Pipes, Valves and Fittings",
      "Controller Box and Connections",
      "Solar Panel (Optional)"
    ]
  },
  {
    id: "brackish-water-purification",
    name: "Brackish Water Purification System",
    desc: "Our Compact Brackish Water Suitcase RO System can handle a range of raw water with total dissolved solids (TDS) up to 2000 mg/l for recovery of up to 70%, meeting drinking water standard with TDS < 200mg/l. It comes with a pre-filter to remove suspended solids and extend the lifespan of the RO membrane.",
    image: "/products/brackish.png",
    variants: [
      {
        name: "Specifications",
        specs: { Dimension: "53 x 43 x 22 cm", "Flow Rate": "Up to 150 L/hr", Weight: "12 kg" }
      }
    ],
    featuresTitle: "Includes:",
    features: [
      "2 x 3012 Type RO Membrane & 1 x Guard Filter",
      "RO Pump, Pressure Gauge & Flowmeter",
      "Powered by 12V",
      "Heavy Duty Portable Case",
      "Solar Panel (Optional)"
    ]
  },
  {
    id: "seawater-reverse-osmosis",
    name: "Compact Water Purification System - Seawater RO",
    desc: "Our Compact Seawater Suitcase RO System can handle seawater with high energy efficiency while achieving drinking water standards of <200mg/L TDS. It comes with a pre-filter to remove suspended solids and extend the lifespan of the RO membrane.",
    image: "/products/seawater-ro.png",
    variants: [
      {
        name: "Specifications",
        specs: { Dimension: "78 x 52 x 40 cm", "Flow Rate": "Up to 750 L/day", Weight: "27.7 kg" }
      }
    ],
    featuresTitle: "Features:",
    features: [
      "Reverse Osmosis system with high energy efficiency",
      "Power Rating: 110W",
      "Salt Rejection: 99.5%",
      "Powered by 12V or 24V DC Power Supply",
      "Solar Panel (Optional)"
    ]
  },
  {
    id: "forward-osmosis-kase",
    name: "Forward Osmosis Compact-Kase (FOFT)",
    desc: "Featuring Aquaporin Inside® HFFO2 Membrane. A highly specialized forward osmosis suitcase designed for advanced water treatment processes and scientific applications.",
    image: "/products/forward-osmosis.png",
    variants: [
      {
        name: "Specifications",
        specs: { Dimension: "51 x 38.5 x 22.5 cm", "Flow Rate": "Up to 1300 L/day", Weight: "12 kg" }
      }
    ],
    featuresTitle: "Features:",
    features: [
      "Heavyduty pelican case & Full SS304 pressure gauge",
      "Pump variable speed controller & Push-fit valves",
      "2 Nos diaphragm pumps Flojet-Compact LC series",
      "Maximum recommended feed TDS: 20,000ppm",
      "Manual peristaltic feed & draw pump control",
      "1 x Aquaporin Inside® HFFO2 module (2.3m²)",
      "Solar Panel (Optional)"
    ]
  },
  {
    id: "ceramic-membrane-skid",
    name: "Ceramic Membrane Filtration Skid",
    desc: "Ceramic Membrane Filtration System is used in industrial applications for the physical separation of suspended solids, capable of filtering micron-size particles without the use of chemicals. It is designed to be fully automatic with PLC controlled cleaning function, complete with programmable timer to activate the backpulse and backwash functions. In addition, manual water backwash is incorporated to purge out impurities and residue that remain on the ceramic membrane after prolonged operation cycle.",
    image: "/products/ceramic-membrane.png",
    variants: [],
    featuresTitle: "",
    features: []
  },
  {
    id: "compact-seawater-ro-large",
    name: "Compact Seawater Reverse Osmosis System",
    desc: "High-capacity compact seawater and brackish water RO system built for intensive and continuous desalination operations.",
    image: "/products/seawater-ro-system.png",
    variants: [
      {
        name: "Specifications",
        specs: { Dimension: "120 x 90 x 120 cm", "Flow Rate": "Up to 1000 L/day", Weight: "100 kg" }
      }
    ],
    featuresTitle: "Specifications:",
    features: [
      "TDS of Raw Water (≤): 35000 mg/L",
      "TDS of Product Water (≤): 500 mg/L",
      "Desalination Rate (≤): 98.00 %",
      "Rated / Operating Power: 1.65 KW / 0.83 KW",
      "Operating Temperature: 25 ~ 35 °C (PH: 6 ~ 9)",
      "Operating Pressure (≤): 6 Mpa",
      "Voltage: 380 V | Solar Panel (Optional)"
    ]
  },
  {
    id: "mobile-unit-purification",
    name: "Compact Water Purification System - Mobile Unit",
    desc: "This model was designed for mobility and can be used in rural areas or respond to disaster stricken areas. It provides a portable water treatment solution that can treat any water source into high quality water that meets drinking water standards.",
    image: "/products/mobile-unit.png",
    variants: [
      {
        name: "Specifications",
        specs: { Dimension: "105.5 x 88 x 132.5 cm", "Flow Rate": "500-1000 L/hr", Weight: "100 kg" }
      }
    ],
    featuresTitle: "Includes:",
    features: [
      "Silicon Carbide Ceramic UF Membrane in PVC Housing",
      "230V AC Feed Pump & Filtration/Backwash Pump",
      "UV Sterilizer",
      "Internal Pipes, Valves and Fittings",
      "Controller Box and Connections",
      "Solar Panel (Optional)"
    ]
  },
  {
    id: "waterwall",
    name: "Waterwall - Household Water Purification System",
    desc: "Liquinex WaterWall is a revolutionary water purification system for use in homes in regions where potable water is not available off the tap. It uses Liqtech ultrafiltration ceramic membranes and PureFize UVC sterilization to produce high quality potable water.",
    image: "/products/waterwall.png",
    variants: [
      {
        name: "Specifications",
        specs: { Dimension: "98 x 47 x 137 cm", "Flow Rate": "Up to 1000 L/day", Weight: "105 kg" }
      }
    ],
    featuresTitle: "Features:",
    features: [
      "High Quality, Safe and Clean Tap Water in Every Household",
      "Caring for Health & Upgrade the living standard",
      "Environmentally Friendly by cutting use of plastic bottles",
      "Convenient access to clean water at home",
      "Temperature durability",
      "Ideal for homes, commercial, sports and healthcare facilities",
      "Solar Panel (Optional)"
    ]
  }
];

export default function ShopPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 selection:bg-sky-200 selection:text-sky-900">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/news/global-recognition-bg.jpg" 
            alt="Product Catalog Background"
            fill
            className="object-cover opacity-30 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900" />
        </div> 
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
            className="max-w-4xl text-center mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center space-x-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full">
              <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-pulse"></span>
              <span className="text-sm font-semibold tracking-wide text-sky-100 uppercase">Discover Our Solutions</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8">
              Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">Catalog</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              We have summarized the basic information on the products shown on this page. For products with no price tag, please contact us for more information by clicking the button at the bottom of the product, and we will get back to you on the price.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-50/50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">
                Our <span className="text-sky-600">Technology</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-slate-600 mb-6 leading-relaxed">
                All of our products uses <strong className="text-slate-900">Nano Ceramic Membrane</strong>. By using ceramic materials, the lifespan of our membrane is longer and more durable.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg text-slate-600 mb-6 leading-relaxed">
                The process flow for all of our systems is designed such that it will be able to withstand the worst water quality without clogging the membrane (membrane fouling), and at the same time able to produce a high flux rate.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                Lastly, our system can process any water source regardless of its quality and turn it into clean water free from bacteria, parasite and virus.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <a href="#" className="inline-flex items-center text-sky-700 font-bold hover:text-sky-500 transition-colors bg-sky-50 px-6 py-3 rounded-xl border border-sky-100 hover:border-sky-200">
                  <FileText className="w-5 h-5 mr-3" />
                  Discover our product concept (PDF)
                </a>
              </motion.div>
            </div>
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6">
              {[
                { icon: Shield, title: "Highly Durable", desc: "Nano ceramic construction extends lifespan" },
                { icon: Settings, title: "Zero Clogging", desc: "Withstands worst water quality without fouling" },
                { icon: Droplets, title: "High Flux", desc: "Produces high volume output efficiently" },
                { icon: Activity, title: "Total Purity", desc: "Removes bacteria, parasites and viruses" }
              ].map((feature, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-sky-200 transition-colors group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-sky-600">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="space-y-32">
            {products.map((product, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                >
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-white shadow-xl shadow-slate-200/50 border border-slate-100 group flex items-center justify-center">
                      <Image 
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-8 group-hover:scale-105 transition-transform duration-1000 ease-out"
                      />
                      <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                      {product.name}
                    </h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {product.desc}
                    </p>

                    {/* Specs Grids */}
                    {product.variants.length > 0 && (
                      <div className="mb-8 space-y-6">
                        {product.variants.map((variant, i) => (
                          <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                            <h4 className="text-sm font-bold text-sky-600 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">{variant.name}</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                              {Object.entries(variant.specs).map(([key, value]) => (
                                <div key={key}>
                                  <div className="text-xs text-slate-400 font-medium uppercase mb-1">{key}</div>
                                  <div className="text-sm font-semibold text-slate-800">{value}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Features List */}
                    {product.features.length > 0 && (
                      <div className="mb-10">
                        <h4 className="text-sm font-bold text-slate-900 mb-4">{product.featuresTitle}</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {product.features.map((feat, i) => (
                            <li key={i} className="flex items-start text-sm text-slate-600">
                              <span className="mr-2 mt-0.5 text-sky-500">
                                <Zap className="w-4 h-4" />
                              </span>
                              <span className="leading-snug">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <Link href={`/enquiry?product=${product.id}`}>
                        <button className="group inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-sky-600 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1">
                          Click here to enquire
                          <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
