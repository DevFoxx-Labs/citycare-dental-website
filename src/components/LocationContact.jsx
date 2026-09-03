import React from 'react';
import { MapPin, Phone, Clock, Navigation, Compass, ExternalLink } from 'lucide-react';

export default function LocationContact({ onOpenBooking }) {
  return (
    <section id="location" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-bold uppercase tracking-wider">
            Convenient Location in Sulem Sarai
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Clinic Address, Hours & Directions
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Easily accessible on the First Floor of House No. 77, Ramman Ka Pura, Sulem Sarai, Dhoomanganj, Prayagraj.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mt-12 items-start">

          {/* Left Contact Cards */}
          <div className="lg:col-span-5 space-y-6">

            {/* Address Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-6">

              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Clinic Address</h3>
                  <p className="text-xs text-slate-500 font-medium">Sulem Sarai, Prayagraj</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-700 font-medium leading-relaxed">
                <p className="font-semibold text-slate-900">Citycare Dental Health Clinic</p>
                <p>
                  House No. 77, First Floor,<br />
                  Ramman Ka Pura, Sulem Sarai,<br />
                  Dhoomanganj, Prayagraj, Uttar Pradesh 211011
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-3">
                <a
                  href="https://maps.google.com/?q=Citycare+Dental+Health+Clinic+Sulem+Sarai+Prayagraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm shadow-sm flex items-center justify-center gap-2 transition-all"
                >
                  <Navigation className="w-4 h-4" /> Open in Google Maps
                </a>
              </div>

            </div>

            {/* Hours & Phone Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-6">

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Contact Phone</h4>
                  <a
                    href="tel:+919335004598"
                    className="text-xl font-black text-slate-900 hover:text-cyan-700 transition-colors block mt-0.5"
                  >
                    +91 93350 04598
                  </a>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Call for appointments & dental emergencies</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Operating Timings</h4>
                  <div className="text-base font-extrabold text-slate-900 mt-0.5">
                    Open Daily till 9:00 PM
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Open Now · Closes 9:00 PM
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Map Card */}
          <div className="lg:col-span-7 space-y-6">

            <div className="rounded-3xl bg-white p-4 border border-slate-200 shadow-xl overflow-hidden space-y-4">
              <div className="flex items-center justify-between px-2 pt-2">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-cyan-600" />
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    Interactive Location Map
                  </span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  Ramman Ka Pura, Sulem Sarai
                </span>
              </div>

              {/* Embedded Map iframe */}
              <div className="relative w-full h-[360px] rounded-2xl overflow-hidden border border-slate-200">
                <iframe
                  title="Citycare Dental Health Clinic Location Map"
                  src="https://maps.google.com/maps?q=Citycare+Dental+Health+Clinic,+Sulem+Sarai,+Dhoomanganj,+Prayagraj&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-50/80 border border-cyan-200 text-xs text-slate-700 font-medium flex flex-wrap items-center justify-between gap-3">
                <span>📍 Location: House No. 77, 1st Floor, Sulem Sarai, Prayagraj</span>
                <a
                  href="https://maps.google.com/?q=Citycare+Dental+Health+Clinic+Sulem+Sarai+Prayagraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-cyan-800 hover:underline flex items-center gap-1"
                >
                  Get Navigation Directions <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
