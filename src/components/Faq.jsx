import React, { useState } from 'react';
import { ChevronDown, PhoneCall, Smile } from 'lucide-react';

export default function Faq({ onOpenBooking }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What are the operating hours at Citycare Dental Health Clinic?",
      a: "The clinic is open daily until 9:00 PM. We offer flexible morning, afternoon, and evening appointment slots to suit your daily schedule."
    },
    {
      q: "Is Root Canal Treatment (RCT) painful?",
      a: "At Citycare Dental Health Clinic, RCT is performed using local anesthesia and advanced rotary endodontic equipment under Dr. Pooja Pandey, making the entire procedure virtually pain-free."
    },
    {
      q: "Where is the clinic located in Sulem Sarai?",
      a: "The clinic is located at House No. 77, First Floor, Ramman Ka Pura, Sulem Sarai, Dhoomanganj, Prayagraj, Uttar Pradesh 211011."
    },
    {
      q: "What dental treatments are available at the clinic?",
      a: "We offer Root Canal Treatment (RCT), Zirconia crowns, dental bridges, teeth whitening, scaling & polishing, braces & invisible aligners, dental implants, wisdom tooth extractions, and child dental care."
    },
    {
      q: "How can I book an appointment with Dr. Pooja Pandey?",
      a: "You can book an appointment online using our booking drawer on this website or call the clinic directly at +91 93350 04598."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-bold uppercase tracking-wider">
            Patient Support
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base">
            Answers to common dental treatment & appointment queries.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-slate-50/60 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full p-5 text-left font-bold text-slate-900 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/80"
              >
                <span className="text-base sm:text-lg">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-cyan-600 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>

              {openIdx === idx && (
                <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-200/40 bg-white">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-cyan-50 border border-cyan-200 text-center space-y-3">
          <h4 className="font-bold text-slate-900 text-base">Need immediate advice or tooth pain guidance?</h4>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919335004598"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm shadow-xs"
            >
              <PhoneCall className="w-4 h-4" /> Call +91 93350 04598
            </a>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm border border-slate-300 shadow-xs cursor-pointer"
            >
              Book Dental Visit
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
