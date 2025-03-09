"use client";

import { useState, useEffect } from "react";
import VastNetLoadingLogo from "./vastnet-loading-logo";
import WhatsappFly from "@/components/whatsapp-fly";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Paket from "@/components/paket";
import Fitur from "@/components/fitur";
import Cta from "@/components/cta";
import Testimoni from "@/components/testimoni";
import Kontak from "@/components/kontak";
import Footer from "@/components/footer";

export default function VastNetLanding() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen">
      {loading && <VastNetLoadingLogo />}

      {/* WhatsApp Button */}
      <WhatsappFly />

      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Paket Section */}
        <Paket />

        {/* Fitur Section */}
        <Fitur />

        {/* CTA Section */}
        <Cta />

        {/* Testimonials Section */}
        <Testimoni />

        {/* Contact Section */}
        <Kontak />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
