import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle2, MessageSquare, Smile } from 'lucide-react';

export default function AppointmentModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [step, setStep] = useState('form'); // 'form' | 'success'
  const [formData, setFormData] = useState({
    treatment: 'Root Canal Treatment (RCT)',
    doctor: 'Dr. Pooja Pandey (BDS)',
    date: new Date().toISOString().split('T')[0],
    time: '11:00 AM',
    patientName: '',
    age: '',
    phone: '',
    symptoms: ''
  });

  const [bookingRef, setBookingRef] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomRef = 'CCD-' + Math.floor(10000 + Math.random() * 90000);
    setBookingRef(randomRef);
    setStep('success');
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Citycare Dental Clinic, I want to book an appointment.\nRef: ${bookingRef}\nPatient: ${formData.patientName} (${formData.age} yrs)\nTreatment: ${formData.treatment}\nDate: ${formData.date} at ${formData.time}\nPhone: ${formData.phone}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95">

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-cyan-700 to-blue-700 p-6 text-white flex items-center justify-between">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-xs font-semibold backdrop-blur-xs">
              <Smile className="w-3.5 h-3.5" /> Book Online Dental Consultation
            </div>
            <h3 className="text-xl sm:text-2xl font-black">Dental Appointment</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">

            {/* Treatment Selector */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                Select Dental Treatment
              </label>
              <select
                value={formData.treatment}
                onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 font-semibold text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="Root Canal Treatment (RCT)">Root Canal Treatment (Pain-free Single Sitting RCT)</option>
                <option value="Teeth Whitening & Cleaning">Teeth Scaling, Cleaning & Whitening</option>
                <option value="Zirconia Crown / Bridge">Dental Crown or Bridge Fitting</option>
                <option value="Dental Implant">Dental Implant Consultation</option>
                <option value="Braces & Clear Aligners">Braces & Invisible Aligners</option>
                <option value="Wisdom Tooth Surgery">Wisdom Tooth Pain / Surgical Removal</option>
                <option value="Pediatric Dental Care">Child Dentistry & Decay Filling</option>
                <option value="General Dental Checkup">General Dental Checkup & X-Ray</option>
              </select>
            </div>

            {/* Doctor */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                Attending Dental Surgeon
              </label>
              <input
                type="text"
                disabled
                value="Dr. Pooja Pandey (BDS, Dental Surgeon)"
                className="w-full p-3 rounded-xl border border-slate-200 bg-slate-100 font-bold text-slate-700 text-sm cursor-not-allowed"
              />
            </div>

            {/* Date & Time */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 font-medium text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Time Slot (Open till 9 PM)
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 font-semibold text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="10:30 AM">10:30 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="04:30 PM">04:30 PM</option>
                  <option value="06:00 PM">06:00 PM</option>
                  <option value="07:30 PM">07:30 PM</option>
                  <option value="08:30 PM">08:30 PM</option>
                </select>
              </div>
            </div>

            {/* Patient Name & Age */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2 space-y-1.5">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Patient Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Verma"
                  value={formData.patientName}
                  onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 font-medium text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Age
                </label>
                <input
                  type="number"
                  required
                  placeholder="e.g. 32"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 font-medium text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                Mobile Phone Number
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 9335004598"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 font-medium text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            {/* Symptoms */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                Dental Concern / Note (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Severe back tooth pain, bleeding gums..."
                value={formData.symptoms}
                onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 font-medium text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold text-base shadow-lg transition-all cursor-pointer"
            >
              Confirm Appointment Booking
            </button>
          </form>
        ) : (
          <div className="p-8 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                Booking Ref: {bookingRef}
              </span>
              <h4 className="text-2xl font-extrabold text-slate-900">Dental Slot Confirmed!</h4>
              <p className="text-slate-600 text-sm">
                Your appointment is reserved for <strong>{formData.patientName}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2 font-medium">
              <div className="flex justify-between border-b border-slate-200 pb-1.5">
                <span className="text-slate-500">Treatment:</span>
                <span className="font-bold text-slate-900">{formData.treatment}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1.5">
                <span className="text-slate-500">Surgeon:</span>
                <span className="font-bold text-slate-900">Dr. Pooja Pandey (BDS)</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1.5">
                <span className="text-slate-500">Date & Slot:</span>
                <span className="font-bold text-slate-900">{formData.date} at {formData.time}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1.5">
                <span className="text-slate-500">Location:</span>
                <span className="font-bold text-slate-900">House 77, 1st Floor, Sulem Sarai</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Clinic Helpline:</span>
                <span className="font-bold text-cyan-700">+91 93350 04598</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={`https://wa.me/919335004598?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" /> Send Confirmation on WhatsApp
              </a>

              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
