import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctor from './components/Doctor';
import SymptomChecker from './components/SymptomChecker';
import Reviews from './components/Reviews';
import LocationContact from './components/LocationContact';
import Faq from './components/Faq';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-cyan-500 selection:text-white">
      <Navbar onOpenBooking={openBooking} />
      <main>
        <Hero onOpenBooking={openBooking} />
        <Services onOpenBooking={openBooking} />
        <Doctor onOpenBooking={openBooking} />
        <SymptomChecker onOpenBooking={openBooking} />
        <Reviews />
        <LocationContact onOpenBooking={openBooking} />
        <Faq onOpenBooking={openBooking} />
      </main>
      <Footer onOpenBooking={openBooking} />
      <AppointmentModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}
