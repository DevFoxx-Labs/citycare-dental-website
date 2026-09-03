import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Smile, ChevronRight, Check, Activity, HeartHandshake } from 'lucide-react';

export default function Services({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('cosmetic');

  const cosmeticTreatments = [
    {
      icon: "✨",
      title: "Teeth Whitening & Polishing",
      desc: "Advanced laser dental whitening, removal of tough tobacco & tea stains, plus scaling and polishing for a radiant smile.",
      tags: ["Stain Removal", "Laser Whitening", "Polishing"]
    },
    {
      icon: "😬",
      title: "Clear Aligners & Braces",
      desc: "Invisible teeth aligners, ceramic braces, and traditional metal orthodontic braces to correct crooked teeth or gaps.",
      tags: ["Invisible Aligners", "Teeth Alignment"]
    },
    {
      icon: "💎",
      title: "Veneers & Smile Designing",
      desc: "Custom dental veneers, composite bonding, and digital smile designing for cracked, discolored, or chipped teeth.",
      tags: ["Smile Makeover", "Veneers"]
    }
  ];

  const restorativeTreatments = [
    {
      icon: "🦷",
      title: "Pain-Free Root Canal (RCT)",
      desc: "Single-sitting precision Root Canal Treatment using rotary endodontics to eliminate severe tooth pain and preserve natural teeth.",
      tags: ["Single Sitting RCT", "Pain-Free"]
    },
    {
      icon: "👑",
      title: "Dental Crowns & Bridges",
      desc: "High-strength Zirconia crowns, porcelain-fused-to-metal (PFM) bridges, and ceramic tooth caps for durable dental restoration.",
      tags: ["Zirconia Crowns", "Tooth Caps"]
    },
    {
      icon: "🔩",
      title: "Dental Implants",
      desc: "Permanent titanium implant solutions for missing teeth, restoring full chewing power, natural aesthetics, and jawbone stability.",
      tags: ["Tooth Replacement", "Implants"]
    },
    {
      icon: "🩹",
      title: "Wisdom Tooth Surgery & Extraction",
      desc: "Gentle surgical extraction of impacted wisdom teeth, painless tooth removal, and post-extraction oral care.",
      tags: ["Painless Surgery", "Wisdom Tooth"]
    },
    {
      icon: "👶",
      title: "Pediatric Dentistry",
      desc: "Child-friendly tooth decay treatments, pit & fissure sealants, fluoride gel applications, and habit correction for kids.",
      tags: ["Child Dental Care", "Cavity Fillings"]
    },
    {
      icon: "🩸",
      title: "Gum Disease & Scaling",
      desc: "Ultrasonic scaling for bleeding gums, pyorrhea treatment, deep root planing, and comprehensive oral hygiene care.",
      tags: ["Bleeding Gums", "Gum Health"]
    }
  ];

  const currentTreatments = activeTab === 'cosmetic' ? cosmeticTreatments : restorativeTreatments;

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100/80 text-cyan-900 text-xs font-bold uppercase tracking-wider">
            Comprehensive Dental Care
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Specialized Dental Treatments
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Painless procedures, modern sterilization standards, and supportive care for your family's oral health.
          </p>

          {/* Toggle Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 mt-6 shadow-inner">
            <button
              onClick={() => setActiveTab('cosmetic')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all cursor-pointer ${
                activeTab === 'cosmetic'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>✨</span>
              Cosmetic & Smile Design
            </button>
            <button
              onClick={() => setActiveTab('restorative')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all cursor-pointer ${
                activeTab === 'restorative'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>🦷</span>
              RCT, Implants & Surgery
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {currentTreatments.map((treatment, index) => (
            <div
              key={index}
              className="group p-6 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:border-cyan-400 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-2xl shadow-xs group-hover:scale-110 transition-transform">
                  {treatment.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                  {treatment.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {treatment.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {treatment.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-0.5 rounded-md bg-slate-200/60 text-slate-700 text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-bold text-cyan-700 hover:text-cyan-900 flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  Book <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-cyan-900 via-slate-900 to-blue-950 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-black tracking-tight">Experiencing Severe Tooth Pain or Sensitivity?</h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Consult Dr. Pooja Pandey at Sulem Sarai, Prayagraj. Open daily till 9:00 PM for supportive & stress-free dental care.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 text-slate-950 font-bold shadow-lg text-sm shrink-0 transition-transform hover:scale-105 cursor-pointer"
          >
            Schedule Dental Visit
          </button>
        </div>

      </div>
    </section>
  );
}
