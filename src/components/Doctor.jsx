import React from 'react';
import { Award, Clock, HeartHandshake, CheckCircle, Calendar, Star, ShieldCheck, Stethoscope, Smile } from 'lucide-react';

export default function Doctor({ onOpenBooking }) {
  return (
    <section id="doctor" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-bold uppercase tracking-wider">
            Lead Dental Surgeon
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet Your Dental Specialist
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Providing gentle, pain-free dental treatments with supportive care and modern clinical equipment.
          </p>
        </div>

        {/* Doctor Card */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8">
          <div className="grid md:grid-cols-12 gap-8 items-center">

            {/* Left Avatar & Badge */}
            <div className="md:col-span-4 flex flex-col items-center text-center space-y-4">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center font-black text-4xl shadow-xl">
                DPP
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-black text-slate-900">Dr. Pooja Pandey</h3>
                <p className="text-sm font-semibold text-cyan-700">BDS • Dental Surgeon</p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-200 mt-2">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> 4.9 ★ Patient Rating (219 Reviews)
                </div>
              </div>
            </div>

            {/* Right Bio & Info */}
            <div className="md:col-span-8 space-y-6 text-left">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-slate-900">About Dr. Pooja Pandey</h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Dr. Pooja Pandey is an experienced Dental Surgeon known for her gentle, supportive, and patient-centered approach. She specializes in single-sitting painless Root Canal Treatments (RCT), cosmetic smile design, dental crowns, tooth extractions, and preventive oral health care for patients of all ages in Prayagraj.
                </p>
              </div>

              {/* Clinical Expertise */}
              <div className="space-y-2">
                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Clinical Specializations</h5>
                <div className="grid grid-cols-2 gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-600 shrink-0" /> Pain-Free Root Canal (RCT)
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-600 shrink-0" /> Zirconia Crowns & Bridges
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-600 shrink-0" /> Teeth Whitening & Polishing
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-600 shrink-0" /> Wisdom Tooth Extraction
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-600 shrink-0" /> Dental Implants & Fillings
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-600 shrink-0" /> Pediatric Dental Care
                  </div>
                </div>
              </div>

              {/* Operating Hours Box */}
              <div className="p-4 rounded-2xl bg-cyan-50/80 border border-cyan-200 flex flex-wrap items-center justify-between text-xs sm:text-sm font-semibold text-cyan-900 gap-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-700" />
                  <span>Clinic Timings:</span>
                </div>
                <span className="font-extrabold text-cyan-950">Daily Open · Closes 9:00 PM</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" /> Book Consultation with Dr. Pooja Pandey
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
