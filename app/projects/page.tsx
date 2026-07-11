"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Search, Star, Quote } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Filtration of training pool for flight attendants",
    subtitle: "Ceramic Membrane Ultrafiltration",
    image: "/projects/project-1.jpg",
    beforeAfter: { before: "/projects/pool-before.png", after: "/projects/pool-after.png" },
    desc: "A water treatment system for training pools that requires very little maintenance and only 1/3 of the space required by common swimming pool water treatment systems. With our ceramic membrane ultrafiltration system, it is capable of maintaining pristine water quality with much less wastage of water during back-washing, ensuring a safe training environment for flight attendants.",
    tags: ["Compact Design", "High Clarity", "Water Conservation"]
  },
  {
    title: "Containerized Water Treatment System",
    subtitle: "Rapid Deployment & Portability",
    image: "/projects/containerized-water-hq.jpg",
    beforeAfter: null,
    desc: "Our containerized water treatment systems are designed for rapid deployment, portability, and ease of use. They are fully self-contained and pre-assembled in standard shipping containers, making them ideal for remote areas, disaster relief, and temporary construction sites.",
    tags: ["Portable", "Plug & Play", "Disaster Relief"]
  },
  {
    title: "Rice Water Recycling System",
    subtitle: "10m³/hr",
    image: "/projects/rice-water-recycling-hq.jpg",
    desc: "The rice washing process in rice noodle factory is a highly water-intensive process that produces a significant amount of pale white starchy wastewater.",
    tags: ["Food & Beverage", "Resource Recovery", "Efficiency"]
  },
  {
    title: "River Water Treatment For Municipal Drinking Water Plant",
    subtitle: "Drinking Water Plant Upgrade",
    image: "/projects/river-water-plant.jpg",
    desc: "Liquinex planned and designed the upgrading of a river water treatment plant in Malaysia in 2018. Situated in a remote mining area, the water key challenge was the removal of heavy metals such as iron, lead, aluminium and manganese. Our system was able to remove these contaminants without the use of chemical flocculants.",
    tags: ["Municipal", "Heavy Metal Removal", "Chemical-Free"]
  },
  {
    title: "Solvent Recovery System",
    subtitle: "Hot Process Fluids",
    image: "/projects/solvent-recovery-system.jpg",
    desc: "Apart from water, our ceramic membrane ultrafiltration system is also used to clean hot process fluids. It is being used in the Aerospace industry to recover premium solvent and extend the life of the chemical. The precious solvent can then be reused for an extended period of time instead of being disposed. This in turns save the company significant amount of cost.",
    tags: ["Aerospace", "Solvent Recovery", "Extreme Conditions"]
  }
];

const reviews = [
  {
    id: 1,
    client: "Global Humanitarian NGO",
    industry: "Disaster Relief",
    rating: 5,
    text: "Liquinex's compact WaterWall systems have been a game-changer for our rapid deployment teams. The ability to generate thousands of liters of clean water from practically any source without heavy infrastructure is incredible.",
  },
  {
    id: 2,
    client: "Municipal Water Authority, Malaysia",
    industry: "Municipal Water",
    rating: 5,
    text: "The river water treatment plant upgrade exceeded our expectations. Removing heavy metals without chemical flocculants saved us significant operational costs while ensuring the safety of the rural community.",
  },
  {
    id: 3,
    client: "Leading Aerospace Manufacturer",
    industry: "Industrial Manufacturing",
    rating: 5,
    text: "Their ceramic membrane ultrafiltration system for solvent recovery paid for itself within the first year. We've drastically reduced our chemical disposal costs and extended the life of our hot process fluids.",
  },
  {
    id: 4,
    client: "Regional Food & Beverage Producer",
    industry: "Food & Beverage",
    rating: 5,
    text: "Treating starchy wastewater from our rice noodle production was a major headache. Liquinex provided a highly efficient 10m³/hr recycling system that helped us hit our sustainability targets and lower freshwater usage.",
  },
];

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredReviews = useMemo(() => {
    return reviews.filter(review => 
      review.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-24 pb-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/projects/projects-hero-bg.png" 
            alt="Projects background"
            fill
            className="object-cover object-top opacity-50 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-slate-900/95" />
        </div>

        {/* Animated Orbs */}
        <motion.div 
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/30 rounded-full blur-[100px] z-0 pointer-events-none" 
        />
        <motion.div 
          animate={{ y: [0, 40, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-[100px] z-0 pointer-events-none" 
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium backdrop-blur-md">
                Global Deployments
              </span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 tracking-tight">
                Our Approach <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-accent">
                  & Projects
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                Liquinex projects are executed with carefully planned implementation to ensure our customers' deliverables are met. Discover how our ceramic membrane systems perform across various industries and environments globally.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom wave/gradient transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
      </section>

      {/* Premium Partners Grid */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
              Trusted Globally
            </h2>
            <p className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Working with Big and Small
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12 items-center justify-center">
            {[...Array(17)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, rotateX: 60, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.05,
                  type: "spring",
                  stiffness: 120,
                  damping: 12
                }}
                className="relative w-full aspect-video flex items-center justify-center transition-all duration-500 hover:scale-[1.3] hover:-translate-y-4 hover:z-50 cursor-pointer group/logo"
              >
                <div className="absolute inset-0 bg-primary/0 group-hover/logo:bg-white rounded-2xl transition-all duration-500 shadow-none group-hover/logo:shadow-[0_20px_40px_-15px_rgba(2,132,199,0.3)]" />
                <Image
                  src={`/partners/partner-${i + 1}.png`}
                  alt={`Partner ${i + 1}`}
                  fill
                  className="object-contain p-4 filter grayscale group-hover/logo:grayscale-0 transition-all duration-500 relative z-10"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex flex-col gap-12 lg:gap-20 items-center ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute -inset-4 bg-primary/5 rounded-2xl transform rotate-2 transition-transform group-hover:rotate-1" />
                  
                  {/* @ts-ignore */}
                  {project.beforeAfter ? (
                    <div className="relative flex gap-4 h-full">
                      <div className="relative w-1/2 aspect-[3/4] rounded-xl overflow-hidden shadow-xl group/before">
                        {/* @ts-ignore */}
                        <Image src={project.beforeAfter.before} alt="Before" fill className="object-cover transition-transform duration-700 group-hover/before:scale-105" />
                        <div className="absolute top-4 left-4 bg-red-500/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md">Before</div>
                      </div>
                      <div className="relative w-1/2 aspect-[3/4] rounded-xl overflow-hidden shadow-xl group/after">
                        {/* @ts-ignore */}
                        <Image src={project.beforeAfter.after} alt="After" fill className="object-cover transition-transform duration-700 group-hover/after:scale-105" />
                        <div className="absolute top-4 left-4 bg-emerald-500/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md">After</div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  {project.subtitle && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      {project.subtitle}
                    </div>
                  )}
                  
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                    {project.title}
                  </h2>
                  
                  <p className="text-lg text-neutral leading-relaxed">
                    {project.desc}
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-3 pt-4">
                    {project.tags.map((tag) => (
                      <li key={tag} className="flex items-center gap-2 text-foreground/80 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="container mx-auto px-4 md:px-6 mt-32 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-medium text-foreground/90 max-w-4xl mx-auto leading-relaxed border-t border-primary/10 pt-16"
          >
            In summary, Liquinex's ceramic membrane systems are used in various industries, performing in a range of different environments.
          </motion.p>
        </div>
      </section>

      {/* Searchable Customer Reviews Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 mb-6 tracking-tight">
              Client <span className="text-primary">Testimonials</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Hear what our global partners across various industries have to say about our water purification and resource recovery solutions.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                className="w-full pl-14 pr-6 py-4 rounded-full border-2 border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm text-lg"
                placeholder="Search reviews by industry, keyword, or client..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filteredReviews.length > 0 ? (
                filteredReviews.map((review) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={review.id}
                    className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-slate-100 relative group hover:shadow-[0_10px_40px_rgba(2,132,199,0.08)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors duration-300 rotate-180" />
                    <div className="flex gap-1 mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-slate-700 text-lg leading-relaxed mb-8 relative z-10 italic">
                      "{review.text}"
                    </p>
                    <div className="border-t border-slate-100 pt-6 mt-auto">
                      <h4 className="font-bold text-slate-900">{review.client}</h4>
                      <span className="text-sm font-semibold text-primary tracking-widest uppercase mt-1 block">
                        {review.industry}
                      </span>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  layout
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                  className="col-span-full text-center py-20"
                >
                  <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-10 h-10 text-slate-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">No reviews found</h3>
                  <p className="text-slate-500">We couldn't find any testimonials matching "{searchQuery}"</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/5 border-t border-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Ready to Upgrade Your Water Systems?
            </h2>
            <p className="text-lg text-neutral">
              Contact us to discuss how our ceramic membrane filtration technology can solve your specific wastewater and resource recovery challenges.
            </p>
            <Button size="lg" asChild className="group">
              <Link href="/enquiry">
                Discuss Your Project
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
