"use client";

import Image from "next/image";
import { ExternalLink, Trophy, Award, FileText, ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

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

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-white text-slate-800">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/news/global-recognition-bg.jpg" 
            alt="Global Recognition Background"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900" />
        </div> 
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center space-x-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-sm font-semibold tracking-wide text-cyan-50 uppercase">Global Impact</span>
            </motion.div>
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8"
            >
              Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">Recognition</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-sky-100 mb-10 max-w-2xl leading-relaxed font-light"
            >
              At Liquinex, we are proud to be recognised globally for our innovative water treatment technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Major Awards Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="lg:col-span-6 space-y-12"
            >
              <div className="space-y-6">
                <motion.div variants={fadeInUp} className="w-16 h-16 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center shadow-lg shadow-sky-100 mb-8">
                  <Trophy className="w-8 h-8 text-sky-600" />
                </motion.div>
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 leading-tight tracking-tight">
                  Mohammed bin Rashid Al Maktoum Global Water Award
                </motion.h2>
                <motion.div variants={fadeInUp} className="space-y-4 text-lg text-slate-600 font-light leading-relaxed">
                  <p>
                    Liquinex was awarded <strong className="text-sky-800 font-semibold">first place in the Innovative Research and Development (International Institutions) category</strong> in Dubai on 29th Jan 2020. A total of 96 applicants from over 30 countries were received for the 3 award categories.
                  </p>
                  <p>
                    The prestigious award supports R&D of new and innovative technologies that produce, desalinate and purify water to support the global position of the UAE in developing solutions for challenges that are faced by poverty- and disaster-stricken communities worldwide.
                  </p>
                </motion.div>
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-6">
                  <a href="https://gulfnews.com/uae/environment/top-innovators-win-1m-global-water-award-in-uae-1.69353595" target="_blank" rel="noreferrer" className="inline-flex justify-center items-center px-6 py-3 bg-sky-50 border border-sky-100 rounded-full text-sm font-bold text-sky-900 hover:bg-sky-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                    Gulf News Coverage <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                  <a href="https://asianwater.com.my/singapore-based-liquinex-group-wins-global-water-award/" target="_blank" rel="noreferrer" className="inline-flex justify-center items-center px-6 py-3 bg-sky-50 border border-sky-100 rounded-full text-sm font-bold text-sky-900 hover:bg-sky-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                    Asian Water News <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp} className="pt-8 border-t border-slate-100">
                <div className="flex items-start gap-6 bg-gradient-to-r from-sky-50 to-white p-6 rounded-3xl border border-sky-100 shadow-sm">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-sky-100 flex items-center justify-center flex-shrink-0 shadow-md">
                    <Award className="w-7 h-7 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Asia Invent 2020</h3>
                    <p className="text-slate-600 font-light leading-relaxed">
                      Awarded a gold medal in Asia Invent 2020 in Singapore in April. Featured in multiple publications and media coverage across the region.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Landscape Award Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:col-span-6 relative w-full"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-sky-900/10 border-4 border-white group flex items-center justify-center bg-white">
                <Image 
                  src="/news/dubai-award.jpg" 
                  alt="Mohammed bin Rashid Al Maktoum Global Water Award Ceremony"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Re-imagining water-scarcity solutions Video Section */}
      <section className="py-24 bg-sky-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-white to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 mb-6 tracking-tight">
              Re-imagining <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-800">water-scarcity solutions</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-600 font-light text-xl">
              Discover how our innovative approach to water treatment is transforming communities and providing sustainable access to clean water.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl shadow-sky-900/20 border-4 border-white bg-white">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/Q-nNGeVlf3M?si=e2T7yL7fQh_e-XzO" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Press Releases / Announcements Timeline */}
      <section className="py-24 lg:py-32 bg-sky-900 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-500/20 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6">Press Releases & Announcements</motion.h2>
            <motion.p variants={fadeInUp} className="text-sky-200 font-light text-xl">Our journey of launching new technologies and expanding our global reach.</motion.p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            
            {/* World Water Day Feature */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[3rem] bg-white text-slate-800 p-8 md:p-14 overflow-hidden shadow-2xl group hover:shadow-sky-900/50 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-sky-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-sky-100 transition-colors duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex flex-wrap gap-4 items-center mb-8">
                  <span className="px-4 py-2 rounded-full bg-sky-600 text-white text-xs font-bold tracking-widest uppercase shadow-md">22 March 2022</span>
                  <span className="text-sky-700 font-bold text-sm tracking-widest uppercase bg-sky-50 px-4 py-2 rounded-full border border-sky-100">World Water Day</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 mb-8 tracking-tight group-hover:text-sky-700 transition-colors duration-500">Liquinex Launches the WaterWall</h3>
                <div className="space-y-6 text-slate-600 font-light leading-relaxed text-lg">
                  <p>
                    Today is the World Water Day to raise awareness about the need for clean and safe drinking water around the world, particularly in developing countries. With a rapidly growing population, urbanization and economic development, the supply of drinking water in urban areas has become unsustainable. 
                  </p>
                  <p>
                    To help combat this issue, Liquinex today launches the <strong className="text-sky-800 font-semibold">WaterWall</strong>. An innovative water purification system for homes and small businesses that turns unsafe water into high quality, clean tap water. The Waterwall is an extension of Liquinex's award-winning Suitcase-size humanitarian water purification system and the name WaterWall is inspired by Tesla's Powerwall. Indonesia (Jakarta) will be the first Asian market to adopt this innovative technology.
                  </p>
                  <p className="pl-6 border-l-4 border-sky-500 text-slate-800 bg-sky-50/50 py-3 pr-4 rounded-r-xl italic">
                    Liquinex's WaterWall is connected to the public water system in the user's house to then purify and distribute clean and safe water to all water taps in the household.
                  </p>
                </div>
                <div className="mt-10">
                  <a href="https://www.purefize.com/news-and-documents/2022/newsletter-march-2022/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sky-900 font-bold bg-white border-2 border-sky-100 px-6 py-3 rounded-full hover:bg-sky-50 hover:border-sky-200 transition-all duration-300 shadow-sm hover:shadow-md">
                    <FileText className="w-5 h-5 mr-3 text-sky-600" /> Liquinex Press Release_22March2022
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Press Releases / Announcements Timeline */}
      <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-200/50 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-100/50 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 tracking-tight text-slate-900">
              Press Releases & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-800">Announcements</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-600 text-lg md:text-xl font-light">
              Stay updated with our latest milestones, partnerships, and media coverage across the globe.
            </motion.p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            {/* Timeline Grid (Masonry Layout) */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 pt-8">
              {[
                { date: "29 Mar 2022", tag: "Press Release", title: "Clean, safe water from every tap (purefize.com)", link: "https://www.purefize.com/news-and-documents/2022/press-release-29-march-2022/" },
                { date: "Sep/Oct 2022", tag: "Article", title: "YUMPU HOTSEAT ARTICLE: Liquinex's Solutions Pack a Punch", link: "https://www.yumpu.com/en/document/read/67214289/water-wastewater-asia-september-october-2022/49" },
                { date: "15 Feb 2023", tag: "Press Release", title: "LiqTech Enters Distribution Agreement with Liquinex in Singapore", link: "https://liqtech.com/investor/financial/liqtech-enters-distribution-agreement-with-liquinex-in-singapore/" },
                { date: "Ongoing", tag: "Feature", title: "WATER CHAMPION: Make Every Drop Count (pub.gov.sg)", link: "https://makeeverydropcount.pub.gov.sg/champions-of-water-sustainability/" },
                { date: "16 Jun 2023", tag: "Announcement", title: "Liquinex partners with Kay Holdings Sdn Bhd in Kualar Lumpur to launch products in Malaysia.", link: "https://www.linkedin.com/posts/liquinex_liquinex-kayholdings-water-innovation-activity-7075389028082987008-tJ9V" },
                { date: "23 Jun 2023", tag: "Announcement", title: "Liquinex partners with ChosenOne Land Development Corporation to launch solutions in the Philippines.", link: "https://www.linkedin.com/posts/liquinex_liquinex-chosenone-water-sustainability-activity-7077864319527264256-15zR", imageSrc: "/news/chosen-one.png" },
                { date: "06 Jul 2023", tag: "Newsletter", title: "PureFize® NEWSLETTER: Liquinex WaterWall out in the field", link: "https://www.purefize.com/news-and-documents/2023/newsletter-july-2023/" },
              ].map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  key={i}
                  className="break-inside-avoid mb-8 inline-block w-full"
                >
                  <div className="relative p-8 md:p-10 rounded-[2rem] bg-white border border-slate-100 hover:border-sky-300 transition-all duration-500 group overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(2,132,199,0.1)] hover:-translate-y-2">
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-8">
                        <span className="text-slate-400 font-bold text-xs tracking-widest uppercase">{item.date}</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-sky-600 bg-sky-50 px-4 py-2 rounded-full border border-sky-100 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-500">
                          {item.tag}
                        </span>
                      </div>
                      
                      {item.imageSrc && (
                        <div className="mb-8 relative w-full h-48 bg-slate-50 rounded-[1.5rem] overflow-hidden flex items-center justify-center p-6 border border-slate-100 group-hover:border-sky-200 transition-colors duration-500">
                          <Image src={item.imageSrc} alt={item.title} fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-700" />
                        </div>
                      )}
                      
                      <h4 className="text-2xl font-heading font-extrabold text-slate-900 leading-snug group-hover:text-sky-700 transition-colors duration-500">{item.title}</h4>
                      
                      <div className="mt-10 pt-8 border-t border-slate-100">
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between w-full text-sm font-bold tracking-widest uppercase text-sky-600 group-hover:text-sky-800 transition-colors">
                          <span>Read Article</span>
                          <span className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-all duration-500">
                            <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-500" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-24 lg:py-32 bg-sky-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="flex flex-col items-center text-center mb-20"
          >
            <motion.div variants={fadeInUp} className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-8 border border-sky-100">
              <ShieldCheck className="w-10 h-10 text-sky-600" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 mb-6 tracking-tight">Certificates & Recognition</motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-600 font-light text-xl max-w-2xl">A testament to our unwavering commitment to quality, safety, and operational excellence across the globe.</motion.p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
          >
            {[
              { id: "asianinvent-gold", name: "AsianInvent Gold", imageSrc: "/news/certificates/cert-1.png" },
              { id: "asianinvent-cover", name: "AsianInvent 2020", imageSrc: "/news/certificates/cert-2.png" },
              { id: "rotary-fellow", name: "Paul Harris Fellow", imageSrc: "/news/certificates/cert-3.png" },
              { id: "innovate-hubei", name: "Innovate Hubei", imageSrc: "/news/certificates/cert-4.png" },
              { id: "iso-45001", name: "ISO 45001", imageSrc: "/news/certificates/cert-5.png" },
              { id: "bqc-iso-45001", name: "BQC ISO 45001", imageSrc: "/news/certificates/cert-6.jpg" },
              { id: "swa", name: "SWA Certificate", imageSrc: "/news/certificates/cert-7.png" },
              { id: "bizsafe", name: "bizSAFE Star", imageSrc: "/news/certificates/cert-8.png" },
              { id: "pub", name: "PUB Singapore", imageSrc: "/news/certificates/cert-9.png" },
              { id: "uae", name: "Global Water Award", imageSrc: "/news/certificates/cert-10.png" }
            ].map((cert, i) => (
              <motion.div 
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                key={i} 
                className="aspect-[3/4] rounded-[2rem] bg-white border border-slate-100 flex flex-col items-center justify-center p-3 hover:border-sky-300 hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-sky-900/10 group relative overflow-hidden"
              >
                {cert.imageSrc ? (
                  <a href={cert.imageSrc} target="_blank" rel="noopener noreferrer" className="relative w-full h-full block rounded-[1.5rem] overflow-hidden cursor-pointer bg-slate-50">
                    <Image src={cert.imageSrc} alt={cert.name} fill className="object-contain p-2 group-hover:scale-105 transition-transform duration-700" />
                  </a>
                ) : (
                  <>
                    <FileText className="w-12 h-12 text-sky-200 mb-6 group-hover:text-sky-400 transition-colors duration-500 group-hover:scale-110 transform" />
                    <span className="text-sm font-bold tracking-widest text-slate-400 uppercase text-center">{cert.name}</span>
                    <span className="text-xs text-sky-500 mt-3 italic bg-sky-50 px-3 py-1.5 rounded-full border border-sky-100">[ Image Box ]</span>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
