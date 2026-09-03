import React from 'react';
import { Star, Quote, ExternalLink, CheckCircle } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: "Saurabh Srivastava",
      relation: "Sulem Sarai Patient",
      rating: 5,
      date: "Verified Google Review",
      text: "I got very good service and very supportive and friendly doctor and staff...",
      tag: "Root Canal & Scaling"
    },
    {
      name: "Vikas Shukla",
      relation: "Dhoomanganj Resident",
      rating: 5,
      date: "Verified Google Review",
      text: "Great Place Experienced Doctors I am happy with the treatment I got",
      tag: "Pain-Free Dental Care"
    },
    {
      name: "Kavita Tiwari",
      relation: "Prayagraj Resident",
      rating: 5,
      date: "Verified Google Review",
      text: "The office is in a great location, making visits convenient and stress-free. Dr. Pooja Pandey explains everything gently.",
      tag: "Convenient Location"
    },
    {
      name: "Rajesh Kumar Yadav",
      relation: "Local Patient",
      rating: 5,
      date: "Verified Google Review",
      text: "Painless RCT treatment and very clean clinic environment. Highly recommended dental health clinic in Sulem Sarai!",
      tag: "Painless RCT"
    }
  ];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-slate-800 pb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
              Verified Google Feedback
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              What Our Patients Say
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Read authentic feedback from 219+ patients in Sulem Sarai, Dhoomanganj, and Prayagraj.
            </p>
          </div>

          {/* Rating Summary Box */}
          <div className="p-6 rounded-3xl bg-slate-800/90 border border-slate-700/80 shadow-xl flex items-center gap-6 shrink-0">
            <div className="text-center">
              <div className="text-5xl font-black text-amber-400">4.9</div>
              <div className="flex items-center text-amber-400 justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="border-l border-slate-700 pl-6 space-y-1">
              <div className="font-bold text-white text-base">Google Review Summary</div>
              <div className="text-xs text-slate-400 font-medium">Based on 219+ Verified Ratings</div>
              <div className="inline-flex items-center gap-1 text-emerald-400 text-xs font-semibold">
                <CheckCircle className="w-3.5 h-3.5" /> High Patient Satisfaction
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-800/60 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-semibold border border-cyan-800">
                    {rev.tag}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-cyan-400/30" />

                <p className="text-base text-slate-200 leading-relaxed italic font-medium">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white text-sm">{rev.name}</div>
                  <div className="text-slate-400">{rev.relation}</div>
                </div>
                <div className="text-right text-slate-500 font-semibold">
                  {rev.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Button */}
        <div className="mt-12 text-center">
          <a
            href="https://maps.google.com/maps?q=Citycare+Dental+Health+Clinic+Prayagraj+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            <span>View All 219 Google Reviews</span>
            <ExternalLink className="w-4 h-4 text-cyan-600" />
          </a>
        </div>

      </div>
    </section>
  );
}
