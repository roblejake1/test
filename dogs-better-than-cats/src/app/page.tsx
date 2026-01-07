"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Shield, Mountain, Star, Check, X, Quote } from "lucide-react";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-amber-200 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-black tracking-tighter text-amber-600">CANINE.SUPREMACY</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
            <a href="#reasons" className="hover:text-amber-600 transition-colors">Reasons</a>
            <a href="#comparison" className="hover:text-amber-600 transition-colors">Comparison</a>
            <a href="#author" className="hover:text-amber-600 transition-colors">About Jake</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=2000" 
            alt="Loyal Dog" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-amber-100 text-amber-700 rounded-full">
              The Definitive Thesis
            </span>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight text-slate-900 mb-8">
              Man&apos;s Best <br />
              <span className="text-amber-500">Only</span> Friend.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
              An objective, data-driven analysis on why dogs are structurally, emotionally, and socially superior to cats. Written by Jake.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all transform hover:scale-105">
                Read the Evidence
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Loyalty Rating", value: "100%" },
              { label: "Cat Disdain", value: "High" },
              { label: "Belly Rubs/Hour", value: "∞" },
              { label: "Good Boys", value: "All" }
            ].map((stat, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }}>
                <div className="text-4xl font-black text-amber-500 mb-2">{stat.value}</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Evidence */}
      <section id="reasons" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Core Proof of Superiority</h2>
            <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <ReasonCard 
              index={0}
              icon={<Heart className="w-8 h-8" />}
              title="Emotional Intelligence"
              description="A dog mirrors your soul. When you are sad, they rest their head on your lap. When you are happy, they celebrate your existence."
              image="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800"
            />
            <ReasonCard 
              index={1}
              icon={<Mountain className="w-8 h-8" />}
              title="Operational Utility"
              description="Search and rescue, bomb detection, guiding the blind. Dogs work for humanity. Cats work for themselves."
              image="https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=800"
            />
            <ReasonCard 
              index={2}
              icon={<Shield className="w-8 h-8" />}
              title="Unwavering Security"
              description="A dog is a biological home security system. A cat is just an unenthusiastic witness to your burglary."
              image="https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&q=80&w=800"
            />
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-32 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-16">The Objective Breakdown</h2>
          <div className="overflow-hidden rounded-3xl border border-slate-800">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-800/50">
                  <th className="p-6 text-sm font-bold uppercase tracking-widest">Feature</th>
                  <th className="p-6 text-sm font-bold uppercase tracking-widest text-amber-400 text-center">Dogs</th>
                  <th className="p-6 text-sm font-bold uppercase tracking-widest text-slate-400 text-center">Cats</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {[
                  { trait: "Greeting when you come home", dog: "Pure Ecstasy", cat: "Silence" },
                  { trait: "Can be trained to fetch", dog: true, cat: false },
                  { trait: "Likes to go on hikes", dog: true, cat: false },
                  { trait: "Secretly plotting your demise", dog: false, cat: "Likely" },
                  { trait: "Overall Vibe", dog: "Legendary", cat: "Questionable" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-6 font-medium border-r border-slate-800">{row.trait}</td>
                    <td className="p-6 text-center border-r border-slate-800">
                      {typeof row.dog === 'boolean' ? <Check className="mx-auto text-green-400" /> : row.dog}
                    </td>
                    <td className="p-6 text-center">
                      {typeof row.cat === 'boolean' ? <X className="mx-auto text-red-400" /> : row.cat}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Jake's Quote */}
      <section className="py-32 bg-amber-500">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <Quote className="w-16 h-16 mx-auto mb-8 opacity-30" />
          <h2 className="text-3xl md:text-5xl font-serif italic leading-tight mb-8">
            &quot;I&apos;ve never met a dog that didn&apos;t think I was the most important person in the world. I&apos;ve never met a cat that didn&apos;t think I was a glorified furniture piece.&quot;
          </h2>
          <div className="font-bold tracking-widest uppercase">— Jake, Author & Truth-Teller</div>
        </div>
      </section>

      {/* Author Profile */}
      <footer id="author" className="bg-white pt-32 pb-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div {...fadeIn} className="inline-block relative mb-12">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl mx-auto relative z-10">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" alt="Jake" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -inset-2 bg-amber-400 rounded-full blur-xl opacity-20 animate-pulse" />
          </motion.div>
          <h3 className="text-3xl font-black mb-4">Meet Jake</h3>
          <p className="max-w-xl mx-auto text-slate-500 mb-12 text-lg">
            Jake is a professional dog-translator and a vocal advocate for the abolition of the &apos;Cat Person&apos; label. He spends his weekends being dragged through mud by his Golden Retriever, Barnaby.
          </p>
          
          <div className="flex justify-center gap-6 mb-24">
            <button className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all">
              <Star className="w-5 h-5" />
            </button>
          </div>

          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-300">
            &copy; {new Date().getFullYear()} Canine Supremacy Agency &bull; All Dogs Are Good Boys
          </div>
        </div>
      </footer>
    </div>
  );
}

function ReasonCard({ icon, title, description, image, index }: { icon: React.ReactNode, title: string, description: string, image: string, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
    >
      <div className="h-64 overflow-hidden relative">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute top-6 right-6 bg-white p-3 rounded-2xl shadow-lg">
          {icon}
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-black mb-4">{title}</h3>
        <p className="text-slate-500 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
