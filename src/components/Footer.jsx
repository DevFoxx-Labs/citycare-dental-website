import React from 'react';
import { Smile, Phone, MapPin, Clock, Star, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 space-y-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-md">
                <Smile className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl font-black text-white tracking-tight">Citycare</span>
                <span className="ml-1 text-xs font-bold px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">Dental</span>
                <p className="text-xs text-slate-400 font-semibold">Health Clinic • Sulem Sarai</p>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Prayagraj's premier 4.9-star rated dental clinic for painless Root Canal Treatments, smile design, crowns, implants, and oral healthcare led by Dr. Pooja Pandey.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-white">4.9 Star Rating</span> (219 Google Reviews)
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Clinic</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Dental Treatments</a></li>
              <li><a href="#doctor" className="hover:text-cyan-400 transition-colors">Dr. Pooja Pandey</a></li>
              <li><a href="#triage" className="hover:text-cyan-400 transition-colors">Smile Assistant</a></li>
              <li><a href="#reviews" className="hover:text-cyan-400 transition-colors">Patient Reviews (4.9 ★)</a></li>
            </ul>
          </div>

          {/* Dental Specialties */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Treatments</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><span className="text-slate-400">Painless Root Canal (RCT)</span></li>
              <li><span className="text-slate-400">Teeth Whitening & Scaling</span></li>
              <li><span className="text-slate-400">Zirconia Crowns & Bridges</span></li>
              <li><span className="text-slate-400">Dental Implants</span></li>
              <li><span className="text-slate-400">Wisdom Tooth Surgery</span></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Contact & Hours</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>House 77, 1st Floor, Sulem Sarai, Prayagraj 211011</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="tel:+919335004598" className="text-white font-bold hover:underline">+91 93350 04598</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-emerald-300 font-semibold">Open Daily · Closes 9 PM</span>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="mt-3 w-full py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
            >
              Book Dental Visit
            </button>
          </div>

        </div>

        {/* Bottom copyright & agency credits */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="space-y-1 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Citycare Dental Health Clinic. All rights reserved.</p>
            <p className="text-slate-400">
              Designed &amp; Developed by{' '}
              <a
                href="https://devfoxxlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
              >
                DevFoxx Labs
              </a>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-600">Sulem Sarai, Prayagraj</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
