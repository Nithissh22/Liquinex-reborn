"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sky-50 text-slate-600 pt-24 pb-12 border-t-4 border-primary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Top CTA Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-16 mb-16 border-b border-slate-200">
          <div className="max-w-2xl text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 mb-4 tracking-tight">
              Ready to secure your water future?
            </h3>
            <p className="text-lg text-slate-600 font-light">
              Join industry leaders in deploying the world's most advanced compact water purification systems.
            </p>
          </div>
          <div className="flex w-full lg:w-auto">
            <Link href="/enquiry" className="w-full lg:w-auto bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl shadow-primary/20 flex items-center justify-center group">
              Contact Our Engineers
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Certification */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="inline-block relative w-48 h-12">
              <Image 
                src="/logo-v2.png" 
                alt="Liquinex Logo" 
                fill 
                className="object-contain"
              />
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              Engineering clean water for the future. Singapore-based water/wastewater treatment and recycling technology specialist since 2015.
            </p>
            
            <div className="inline-flex items-center gap-3 bg-white border border-slate-200 shadow-sm rounded-xl p-4 mt-4 hover:bg-slate-50 hover:shadow-md transition-all">
              <ShieldCheck className="w-8 h-8 text-emerald-500" />
              <div>
                <p className="text-slate-900 font-bold text-sm leading-none mb-1">BizSafe STAR</p>
                <p className="text-emerald-600 text-xs font-semibold uppercase tracking-wider">Certified Safe Workplace</p>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-heading font-bold text-slate-900 text-lg mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", path: "/company" },
                { name: "Our Projects", path: "/projects" },
                { name: "Sustainability", path: "/sustainability" },
                { name: "News & Media", path: "/news" },
                { name: "Equipment Shop", path: "/shop" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-slate-600 hover:text-primary transition-colors flex items-center group text-sm font-medium">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-slate-900 text-lg mb-6 tracking-wide">Solutions</h4>
            <ul className="space-y-4">
              {[
                { name: "Industrial Treatment", path: "/solutions" },
                { name: "Humanitarian Tech", path: "/solutions" },
                { name: "Municipal Systems", path: "/solutions" },
                { name: "Oil & Gas Produced", path: "/solutions" },
                { name: "The WaterWall", path: "/waterwall" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-slate-600 hover:text-primary transition-colors flex items-center group text-sm font-medium">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3 lg:col-start-10">
            <h4 className="font-heading font-bold text-slate-900 text-lg mb-6 tracking-wide">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group cursor-default">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm text-slate-600 leading-relaxed mt-1 group-hover:text-slate-900 transition-colors">
                  2021 Bukit Batok St 23, #04-224<br />Bukit Batok Industrial Estate Park A<br />Singapore 659526
                </span>
              </li>
              <li className="flex items-center gap-4 group cursor-default">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                  <p className="font-medium">6909 3588</p>
                  <p className="text-xs opacity-70">Mon-Fri 8:30am-5:30pm</p>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <a href="mailto:lqxgroup@liquinex.com" className="text-sm text-slate-600 font-medium hover:text-primary transition-colors">
                  lqxgroup@liquinex.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-500 font-medium">
            © {currentYear} Liquinex Group Pte Ltd. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 border-r border-slate-300 pr-6 mr-2">
              <Link href="#" className="text-slate-500 hover:text-primary transition-colors text-sm font-medium">LinkedIn</Link>
              <Link href="#" className="text-slate-500 hover:text-primary transition-colors text-sm font-medium">Twitter</Link>
              <Link href="#" className="text-slate-500 hover:text-primary transition-colors text-sm font-medium">Facebook</Link>
            </div>
            <Link href="/privacy" className="text-slate-500 hover:text-primary transition-colors text-sm font-medium">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-500 hover:text-primary transition-colors text-sm font-medium">Terms of Use</Link>
            <Link href="/sitemap" className="text-slate-500 hover:text-primary transition-colors text-sm font-medium">Site Map</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
