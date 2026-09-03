import React, { useState } from 'react';
import { Phone, Clock, MapPin, Sparkles, Menu, X, Calendar, Smile } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Banner Bar */}
      <div className="bg-slate-900 text-slate-100 text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5 font-medium text-emerald-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Open Today · Closes 9:00 PM
            </span>
            <span className="hidden md:inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              Sulem Sarai, Dhoomanganj, Prayagraj
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+919335004598"
              className="flex items-center gap-1.5 font-semibold text-cyan-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              +91 93350 04598
            </a>
            <a
              href="#location"
              className="hidden sm:inline-flex items-center gap-1 text-slate-300 hover:text-white text-xs underline decoration-cyan-400 decoration-2"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <Smile className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Citycare</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-900 border border-cyan-200">Dental</span>
            </div>
            <p className="text-xs font-semibold text-slate-500 tracking-wide">Health Clinic • Sulem Sarai</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 font-medium text-slate-700 text-sm">
          <a href="#about" className="hover:text-cyan-600 transition-colors">About</a>
          <a href="#services" className="hover:text-cyan-600 transition-colors">Treatments</a>
          <a href="#doctor" className="hover:text-cyan-600 transition-colors">Dr. Pooja Pandey</a>
          <a href="#triage" className="hover:text-cyan-600 transition-colors">Smile Assistant</a>
          <a href="#reviews" className="hover:text-cyan-600 transition-colors">Reviews (4.9 ★)</a>
          <a href="#faq" className="hover:text-cyan-600 transition-colors">FAQs</a>
          <a href="#location" className="hover:text-cyan-600 transition-colors">Contact</a>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer text-sm"
          >
            <Calendar className="w-4 h-4" />
            Book Appointment
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="px-3 py-1.5 rounded-lg bg-cyan-600 text-white text-xs font-semibold sm:hidden"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-3 text-slate-700 font-medium text-base pt-2">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50">About Clinic</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50">Dental Treatments</a>
            <a href="#doctor" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50">Dr. Pooja Pandey</a>
            <a href="#triage" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50">Smile Symptom Checker</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50">Patient Reviews (4.9 ★)</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50">FAQs</a>
            <a href="#location" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50">Location & Hours</a>
          </div>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full py-3 rounded-xl bg-cyan-600 text-white font-semibold text-center shadow-md"
            >
              Book Dental Appointment Now
            </button>
            <a
              href="tel:+919335004598"
              className="w-full py-2.5 rounded-xl border border-slate-300 text-slate-800 font-semibold text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-cyan-600" />
              Call Clinic: +91 93350 04598
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
