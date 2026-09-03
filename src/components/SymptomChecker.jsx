import React, { useState } from 'react';
import { Smile, ArrowRight, CheckCircle2, RotateCcw, Calendar, AlertCircle, Sparkles } from 'lucide-react';

export default function SymptomChecker({ onOpenBooking }) {
  const [selectedIssue, setSelectedIssue] = useState(null);

  const dentalIssues = [
    {
      id: 'rct',
      label: 'Severe Toothache / Deep Decay',
      recommended: 'Pain-Free Root Canal Treatment (RCT)',
      doctor: 'Dr. Pooja Pandey (BDS)',
      advice: 'Severe tooth pain when chewing or sleeping usually indicates infection near the root canal nerve.',
      prep: 'Avoid extremely hot or cold food before your visit. You can gently rinse with warm salt water.'
    },
    {
      id: 'whitening',
      label: 'Yellow Teeth, Stains, or Bad Breath',
      recommended: 'Teeth Scaling, Cleaning & Laser Whitening',
      doctor: 'Dr. Pooja Pandey (BDS)',
      advice: 'Ultrasonic scaling removes calcified tartar & deep stains without scratching natural enamel.',
      prep: 'Maintain normal oral brushing before your scaling consultation.'
    },
    {
      id: 'missing',
      label: 'Missing Tooth / Difficulty Chewing',
      recommended: 'Dental Implant or Zirconia Crown Bridge',
      doctor: 'Dr. Pooja Pandey (BDS)',
      advice: 'Replacing missing teeth restores chewing force and prevents neighbouring teeth from shifting.',
      prep: 'Bring any previous dental X-rays if available.'
    },
    {
      id: 'wisdom',
      label: 'Back Jaw Pain / Impacted Wisdom Tooth',
      recommended: 'Wisdom Tooth Evaluation & Extraction',
      doctor: 'Dr. Pooja Pandey (BDS)',
      advice: 'Wisdom teeth growing sideways can push nearby teeth and cause localized gum swelling.',
      prep: 'Note down whether the pain radiates to your ear or jawline.'
    },
    {
      id: 'gums',
      label: 'Bleeding Gums / Swollen Gums',
      recommended: 'Pyorrhea Care & Deep Gum Scaling',
      doctor: 'Dr. Pooja Pandey (BDS)',
      advice: 'Gums bleeding during brushing is an early sign of gingivitis that responds quickly to cleaning.',
      prep: 'Use a soft-bristled toothbrush until evaluated.'
    }
  ];

  const currentSelection = dentalIssues.find(i => i.id === selectedIssue);

  return (
    <section id="triage" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-bold uppercase tracking-wider">
            Interactive Dental Triage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Smile & Symptom Assistant
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Select your dental concern to receive recommended treatment options and consultation preparation guidance.
          </p>
        </div>

        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-md space-y-8">

          {/* Select Issue */}
          <div className="space-y-3">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
              What dental problem are you facing?
            </label>
            <div className="grid sm:grid-cols-2 gap-3">
              {dentalIssues.map((issue) => (
                <button
                  key={issue.id}
                  onClick={() => setSelectedIssue(issue.id)}
                  className={`p-4 rounded-2xl border text-left font-semibold text-sm transition-all cursor-pointer flex items-center justify-between ${
                    selectedIssue === issue.id
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-cyan-400'
                  }`}
                >
                  <span>{issue.label}</span>
                  <ArrowRight className={`w-4 h-4 shrink-0 ml-2 ${selectedIssue === issue.id ? 'text-cyan-400' : 'text-slate-400'}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Result Card */}
          {currentSelection ? (
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950 via-slate-900 to-blue-950 text-white space-y-4 shadow-xl animate-in fade-in">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/30">
                  Recommended Treatment Plan
                </span>
                <button
                  onClick={() => setSelectedIssue(null)}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reset Selection
                </button>
              </div>

              <div className="space-y-1">
                <h4 className="text-xl font-bold text-cyan-300">{currentSelection.recommended}</h4>
                <p className="text-sm font-semibold text-slate-200">Surgeon: {currentSelection.doctor}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 space-y-1">
                  <div className="font-bold text-slate-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Guidance
                  </div>
                  <p className="text-slate-400 leading-relaxed">{currentSelection.advice}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 space-y-1">
                  <div className="font-bold text-slate-300 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-blue-400" /> Prep Tips
                  </div>
                  <p className="text-slate-400 leading-relaxed">{currentSelection.prep}</p>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" /> Book Appointment for {currentSelection.recommended}
                </button>
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-900 text-xs font-semibold flex items-center gap-2">
              <Smile className="w-4 h-4 shrink-0 text-cyan-700" />
              Select any concern above to view recommended dental treatments and visit prep tips.
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
