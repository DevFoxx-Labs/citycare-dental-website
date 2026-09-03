import React from 'react';
import { Star, Calendar, Phone, MapPin, Sparkles, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-cyan-50/80 via-sky-50/40 to-slate-50 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/80">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-cyan-200/30 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-200/90 shadow-xs">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-800">4.9 Rating</span>
              <span className="text-xs text-slate-400">•</span>
              <a href="#reviews" className="text-xs font-medium text-cyan-700 hover:underline">
                219 Google Reviews
              </a>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Gentle & Advanced <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Dental Health Care</span> in Prayagraj
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
              Welcome to Citycare Dental Health Clinic in Sulem Sarai. Led by Dr. Pooja Pandey (BDS), we provide pain-free Root Canal (RCT), teeth whitening, dental implants, braces, and full oral healthcare.
            </p>

            {/* Featured Google Review quote */}
            <div className="p-4 rounded-2xl bg-white/90 border border-cyan-100 shadow-xs flex items-start gap-3.5 max-w-xl">
              <div className="p-2 rounded-xl bg-cyan-50 text-cyan-600 shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm italic font-medium text-slate-700">
                  "I got very good service and very supportive and friendly doctor and staff..."
                </p>
                <p className="text-xs text-slate-400 mt-1 font-semibold">— Verified Patient Review on Google (4.9 ★)</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold text-base shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                Book Dental Appointment
              </button>

              <a
                href="tel:+919335004598"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200 shadow-sm transition-all"
              >
                <Phone className="w-5 h-5 text-cyan-600" />
                Call Clinic
              </a>

              <a
                href="#location"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-cyan-700 hover:text-cyan-800 font-semibold text-sm hover:underline"
              >
                <MapPin className="w-4 h-4 text-cyan-600" />
                Sulem Sarai Location
              </a>
            </div>

            {/* Key Props */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-200/60 text-xs sm:text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                Pain-Free RCT Care
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                Experienced Surgeon
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                Open Till 9:00 PM
              </div>
            </div>

          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-gradient-to-br from-white to-cyan-50/50 p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">

              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-600 text-white flex items-center justify-center font-bold shadow-md">
                    4.9
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Citycare Dental</h3>
                    <p className="text-xs text-slate-500 font-medium">Health Clinic • Prayagraj</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Open · Closes 9 PM
                </span>
              </div>

              {/* Treatment Cards inside visual */}
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-white border border-cyan-100 hover:border-cyan-300 transition-colors shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold">
                      🦷
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Pain-Free Root Canal (RCT)</h4>
                      <p className="text-xs text-slate-500">Advanced single-sitting RCT & ceramic crown placing</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-blue-100 hover:border-blue-300 transition-colors shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                      ✨
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Teeth Whitening & Aligners</h4>
                      <p className="text-xs text-slate-500">Smile design, tooth scaling, cleaning & invisible braces</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="p-4 rounded-2xl bg-slate-900 text-slate-100 text-xs space-y-2">
                <div className="flex items-center justify-between font-semibold text-cyan-400">
                  <span>📍 House No. 77, 1st Floor</span>
                  <span>Sulem Sarai</span>
                </div>
                <p className="text-slate-300 leading-snug">
                  Ramman Ka Pura, Sulem Sarai, Dhoomanganj, Prayagraj, UP 211011
                </p>
                <div className="pt-1 flex items-center justify-between text-slate-400 font-medium">
                  <span>📞 +91 93350 04598</span>
                  <a href="#location" className="text-cyan-300 hover:underline font-bold">Directions →</a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
