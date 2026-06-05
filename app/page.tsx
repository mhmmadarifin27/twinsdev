"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formWa, setFormWa] = useState("");
  const [formBudget, setFormBudget] = useState("Rp 750k - Rp 1.2jt");
  const [formDetails, setFormDetails] = useState("");

  // Testimonials Slider State
  const [testiIndex, setTestiIndex] = useState(0);

  const testimonials = [
    {
      name: "Hendra Wijaya",
      role: "Pemilik UMKM Kuliner",
      text: "Pengerjaan website landing page dagangan kami sangat cepat, rapi, dan konversi penjualan naik signifikan sejak tampilan web diganti menjadi lebih profesional oleh TwinsDev.",
      initial: "H"
    },
    {
      name: "Siti Rahma",
      role: "Manajer Operasional Startup",
      text: "Respons komunikasinya luar biasa. Sangat transparan mengenai alur pengerjaan dari awal brief hingga website siap dipublikasikan ke publik. Sangat direkomendasikan!",
      initial: "S"
    },
    {
      name: "Budi Santoso",
      role: "Founder E-Commerce Lokal",
      text: "Fitur kustomnya mantap, integrasi payment gateway dan booking sistem berjalan lancar tanpa kendala. Klien kami sangat puas dengan UI-nya.",
      initial: "B"
    },
    {
      name: "Rina Kartika",
      role: "Direktur Lembaga Pendidikan",
      text: "TwinsDev membantu kami mendigitalisasi sistem pendaftaran siswa baru. Sangat menghemat waktu administrasi kami hingga 80%.",
      initial: "R"
    },
    {
      name: "Ahmad Fauzi",
      role: "Agen Properti Mandiri",
      text: "Tampilan portofolio properti saya sekarang terlihat sangat eksklusif. Banyak prospek langsung chat WA karena navigasinya yang sangat mudah.",
      initial: "A"
    }
  ];

  // Auto-scroll Testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestiIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const prevTesti = () => {
    setTestiIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextTesti = () => {
    setTestiIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleSelectPackage = (packageName: string) => {
    setSelectedPackage(packageName);
    if (packageName.includes("750")) {
      setFormBudget("Di bawah Rp 1 Juta");
    } else if (packageName.includes("1,2")) {
      setFormBudget("Rp 1 Juta - Rp 2 Juta");
    } else if (packageName.includes("2,5")) {
      setFormBudget("Rp 2 Juta - Rp 5 Juta");
    }
    const contactSection = document.getElementById("kontak");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formName || !formWa || !formEmail) {
      alert("Harap isi Nama Lengkap, Email, dan No WA!");
      return;
    }

    const message = `Halo TwinsDev, saya tertarik untuk berdiskusi mengenai jasa pembuatan website.

Berikut detail informasi saya:
- *Nama Lengkap*: ${formName}
- *Email*: ${formEmail}
- *No WA*: ${formWa}
- *Pilihan Paket*: ${selectedPackage || "Belum Memilih Paket"}
- *Estimasi Anggaran*: ${formBudget}
- *Detail Project*: ${formDetails || "-"}

Mohon segera hubungi saya kembali. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/6281234567890?text=${encodedMessage}`;
    
    window.open(waUrl, "_blank");
  };

  return (
    <div className="min-h-screen font-sans antialiased text-gray-900 bg-white selection:bg-coral selection:text-white">
      
      {/* --- NAVBAR --- */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-6 md:px-12">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-coral flex items-center justify-center text-white font-bold text-xl shadow-md">
              T
            </div>
            <span className="text-xl font-bold tracking-tight text-white">twins<span className="text-coral">dev</span></span>
          </div>

          {/* Menu Link */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-white/90">
            <a href="#home" className="hover:text-coral transition-colors">HOME</a>
            <a href="#layanan" className="hover:text-coral transition-colors">LAYANAN</a>
            <a href="#harga" className="hover:text-coral transition-colors">HARGA</a>
            <a href="#projek" className="hover:text-coral transition-colors">PROJEK</a>
            <a href="#testimoni" className="hover:text-coral transition-colors">TESTIMONI</a>
            <a href="#kontak" className="hover:text-coral transition-colors">KONTAK</a>
          </div>

          {/* CTA Button */}
          <div>
            <a 
              href="#kontak" 
              className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-coral rounded-md hover:bg-coral-hover transition-all shadow-lg hover:shadow-coral/20"
            >
              LET'S TALK
            </a>
          </div>
        </nav>
      </header>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative bg-navy pt-32 pb-44 md:pt-40 md:pb-56 overflow-hidden">
        {/* Elemen Dekorasi Kuning Kiri Atas */}
        <div className="absolute top-12 left-6 text-accentYellow text-2xl opacity-40 select-none hidden md:block">
          ● ●<br />● ●
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Sisi Kiri: Teks */}
          <div className="md:col-span-7 text-white space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accentYellow block">
              JASA PEMBUATAN WEBSITE LAYANAN PROFESIONAL
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight uppercase">
              GET WEBSITES <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">WITH RESULTS</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-xl font-medium">
              Kami tidak sekadar membuat kode. Kami membangun platform digital berkinerja tinggi yang siap mengonversi pengunjung menjadi pelanggan setia bisnis Anda.
            </p>
            <div className="pt-4">
              <a 
                href="#harga" 
                className="px-8 py-4 bg-coral hover:bg-coral-hover text-white text-sm font-bold uppercase tracking-wider rounded-md transition-all inline-block shadow-xl shadow-coral/10 hover:shadow-coral/30"
              >
                LIHAT PILIHAN PAKET
              </a>
            </div>
          </div>

          {/* Sisi Kanan: Gambar Masking Melengkung */}
          <div className="md:col-span-5 relative flex justify-center">
            {/* Dekorasi V Kuning di Belakang Gambar */}
            <div className="absolute -top-6 left-4 text-accentYellow font-bold text-3xl transform -rotate-12 hidden md:block">
              &gt;&gt;
            </div>

            {/* Frame Gambar Melengkung Sesuai Referensi */}
            <div className="w-full max-w-[380px] aspect-[4/5] bg-gray-200 rounded-[2.5rem] rounded-tr-[7rem] overflow-hidden border-4 border-white/10 shadow-2xl relative bg-cover bg-center"
                 style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80')` }}>
              {/* Overlay gradasi tipis */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent"></div>
            </div>

            {/* Dekorasi Banyak V Kuning Kanan Bawah */}
            <div className="absolute -bottom-8 -right-4 text-accentYellow font-bold text-xl grid grid-cols-4 gap-1 opacity-70 hidden md:grid">
              {"vvvvvvvv".split("").map((v, i) => <span key={i} className="transform rotate-12">&gt;</span>)}
            </div>
          </div>

        </div>

        {/* Efek Wave Putih Melengkung yang Indah & Responsif */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[60px] md:h-[120px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,112C672,128,768,192,864,208C960,224,1056,192,1152,154.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* --- FLOATING STATS (Validasi Data Proyek) --- */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 -mt-16 md:-mt-24 mb-12">
        <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2 border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-8">
            <div className="text-4xl md:text-5xl font-black text-navy">100+</div>
            <div className="text-sm font-bold text-coral uppercase tracking-wider">Proyek Sukses</div>
            <p className="text-xs text-gray-500 mt-1">Website & aplikasi digital yang telah kami rilis secara profesional.</p>
          </div>
          <div className="space-y-2 border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:px-8">
            <div className="text-4xl md:text-5xl font-black text-navy">24/7</div>
            <div className="text-sm font-bold text-coral uppercase tracking-wider">Bantuan</div>
            <p className="text-xs text-gray-500 mt-1">Layanan konsultasi dan support teknis yang selalu siap sedia.</p>
          </div>
          <div className="space-y-2 md:pl-8">
            <div className="text-4xl md:text-5xl font-black text-navy">5 Tahun</div>
            <div className="text-sm font-bold text-coral uppercase tracking-wider">Pengalaman</div>
            <p className="text-xs text-gray-500 mt-1">Keahlian industri dalam merancang website modern yang fungsional.</p>
          </div>
        </div>
      </div>

      {/* --- SECTION: LAYANAN --- */}
      <section id="layanan" className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-coral block">LAYANAN UTAMA KAMI</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy">APA YANG BISA KAMI BANTU?</h2>
          <div className="w-16 h-1 bg-coral mx-auto rounded-full"></div>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">Kami fokus menghadirkan solusi digital yang clean, fungsional, dan siap membantu bisnis Anda berkembang.</p>
        </div>

        {/* Card Layanan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all bg-white group">
            <div className="w-12 h-12 rounded-xl bg-navy/5 text-navy flex items-center justify-center font-bold text-xl group-hover:bg-coral group-hover:text-white transition-all mb-6">01</div>
            <h3 className="text-xl font-bold mb-3 text-navy">Landing Page Bisnis</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Website satu halaman premium yang didesain khusus untuk meningkatkan konversi penjualan produk atau jasa Anda.</p>
          </div>
          <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all bg-white group">
            <div className="w-12 h-12 rounded-xl bg-navy/5 text-navy flex items-center justify-center font-bold text-xl group-hover:bg-coral group-hover:text-white transition-all mb-6">02</div>
            <h3 className="text-xl font-bold mb-3 text-navy">Company Profile</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Representasi digital profesional perusahaan Anda untuk membangun kepercayaan instan di hadapan klien dan partner bisnis.</p>
          </div>
          <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all bg-white group">
            <div className="w-12 h-12 rounded-xl bg-navy/5 text-navy flex items-center justify-center font-bold text-xl group-hover:bg-coral group-hover:text-white transition-all mb-6">03</div>
            <h3 className="text-xl font-bold mb-3 text-navy">Custom Web Application</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Solusi sistem informasi berbasis web yang disesuaikan sepenuhnya dengan kebutuhan alur kerja internal industri Anda.</p>
          </div>
        </div>
      </section>

      {/* --- SECTION: HARGA & PAKET (3 Frame & Tombol Pilih) --- */}
      <section id="harga" className="py-24 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-coral block">PILIHAN HARGA</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy">PAKET LAYANAN TRANSPARAN</h2>
            <div className="w-16 h-1 bg-coral mx-auto rounded-full"></div>
            <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
              Pilih paket yang paling sesuai dengan skala kebutuhan bisnis Anda. Tanpa biaya tersembunyi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Paket 1 */}
            <div className="bg-white rounded-[2rem] border border-gray-100 p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
              <div>
                <div className="space-y-2 mb-6">
                  <h3 className="text-lg font-bold text-navy">Paket Hemat (Landing Page)</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-navy">Rp 750k</span>
                    <span className="text-sm text-gray-400 line-through font-medium">Rp 1 jt</span>
                  </div>
                  <span className="inline-block text-[10px] font-bold uppercase bg-coral/10 text-coral px-2.5 py-1 rounded-full">
                    Diskon 25% (Asli 1 Juta)
                  </span>
                </div>
                
                <hr className="border-gray-100 my-6" />

                <ul className="space-y-4 mb-8">
                  {[
                    "Desain Premium",
                    "5 Halaman Utama",
                    "Responsif Mobile",
                    "SEO dasar",
                    "free domain .com 1 tahun"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <span className="text-coral font-bold text-base">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => handleSelectPackage("Paket Hemat (750 Ribu)")}
                className="w-full py-3.5 bg-navy hover:bg-coral text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md group-hover:shadow-navy/10"
              >
                Pilih Paket Ini
              </button>
            </div>

            {/* Paket 2 (POPULER / HIGHLIGHTED) */}
            <div className="bg-white rounded-[2rem] border-2 border-coral p-8 flex flex-col justify-between shadow-lg relative overflow-hidden transform lg:-translate-y-4 z-10">
              <div className="absolute top-0 right-0 bg-coral text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-xl">
                Terpopuler
              </div>

              <div>
                <div className="space-y-2 mb-6">
                  <h3 className="text-lg font-bold text-navy">Paket Standard (Company Profile)</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-navy">Rp 1,2 jt</span>
                    <span className="text-sm text-gray-400 line-through font-medium">Rp 1,5 jt</span>
                  </div>
                  <span className="inline-block text-[10px] font-bold uppercase bg-coral/10 text-coral px-2.5 py-1 rounded-full">
                    Diskon 20% (Asli 1,5 Juta)
                  </span>
                </div>
                
                <hr className="border-gray-100 my-6" />

                <ul className="space-y-4 mb-8">
                  {[
                    "Desain Premium",
                    "Hingga 7 Halaman+Video player",
                    "Responsif Mobile",
                    "Sistem Manajemen Konten (CMS)",
                    "SEO Lanjut",
                    "Integrasi Media Sosial",
                    "Formulir Kontak Kustom",
                    "free domain .com/.id 1 tahun"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <span className="text-coral font-bold text-base">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => handleSelectPackage("Paket Standard (1,2 Juta)")}
                className="w-full py-4 bg-coral hover:bg-coral-hover text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-coral/10 hover:shadow-coral/20"
              >
                Pilih Paket Ini
              </button>
            </div>

            {/* Paket 3 */}
            <div className="bg-white rounded-[2rem] border border-gray-100 p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
              <div>
                <div className="space-y-2 mb-6">
                  <h3 className="text-lg font-bold text-navy">Paket Kustom (Custom Web System)</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-navy">Rp 2,5 jt</span>
                  </div>
                  <span className="inline-block text-[10px] font-bold uppercase bg-navy/5 text-navy px-2.5 py-1 rounded-full">
                    Desain Kustom & Fitur Lengkap
                  </span>
                </div>
                
                <hr className="border-gray-100 my-6" />

                <ul className="space-y-4 mb-8">
                  {[
                    "Desain premium Kustom",
                    "fitur Kustom",
                    "Halaman Tidak Terbatas+Video player",
                    "Responsif di All Device",
                    "SEO Lanjut",
                    "Integrasi Media Sosial",
                    "Sistem Manajemen Konten (CMS)",
                    "Formulir Kontak Kustom",
                    "Dukungan 24/7",
                    "free domain .com/.id 1 tahun"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <span className="text-coral font-bold text-base">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => handleSelectPackage("Paket Kustom (2,5 Juta)")}
                className="w-full py-3.5 bg-navy hover:bg-coral text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md group-hover:shadow-navy/10"
              >
                Pilih Paket Ini
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION: PROJEK / SHOWCASE --- */}
      <section id="projek" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-coral">KARYA TERBARU</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-1">PROJEK YANG SUDAH KAMI SELESAIKAN</h2>
            </div>
            <p className="text-gray-400 max-w-md text-sm">Fokus kami adalah pada performa visual yang menawan serta fungsionalitas yang mulus untuk user pengguna.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group cursor-pointer">
              <div className="aspect-video w-full rounded-2xl bg-gray-800 overflow-hidden mb-4 relative">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" alt="Fitarena Application" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80" />
              </div>
              <h3 className="text-xl font-bold group-hover:text-coral transition-colors">Fitarena — Aplikasi Booking Lapangan Olahraga</h3>
              <p className="text-gray-400 text-sm mt-1">Platform modern pemesanan venue olahraga secara realtime dan integrasi payment gateway.</p>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-video w-full rounded-2xl bg-gray-800 overflow-hidden mb-4 relative">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80" alt="Posyandu Web Digital" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80" />
              </div>
              <h3 className="text-xl font-bold group-hover:text-coral transition-colors">Portal Layanan Posyandu Digital</h3>
              <p className="text-gray-400 text-sm mt-1">Sistem informasi pencatatan tumbuh kembang anak terintegrasi untuk efisiensi administrasi desa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION: TESTIMONI (Auto & Manual Slide Carousel) --- */}
      <section id="testimoni" className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-coral block">TESTIMONI</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy">APA KATA MEREKA?</h2>
          <div className="w-16 h-1 bg-coral mx-auto rounded-full"></div>
        </div>

        {/* Carousel Slider */}
        <div className="relative max-w-3xl mx-auto overflow-hidden px-4 md:px-12 py-4">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${testiIndex * 100}%)` }}>
            {testimonials.map((testi, i) => (
              <div key={i} className="w-full flex-shrink-0 px-4">
                <div className="p-8 md:p-10 bg-gray-50 rounded-[2rem] border border-gray-100 relative min-h-[220px] flex flex-col justify-between shadow-sm">
                  <div>
                    <span className="text-6xl text-coral/20 font-serif absolute top-4 left-4">“</span>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed relative z-10 pt-4 italic">
                      "{testi.text}"
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-3 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-bold text-base shadow-sm">
                      {testi.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm md:text-base text-navy">{testi.name}</h4>
                      <p className="text-xs md:text-sm text-gray-400 font-medium">{testi.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigasi Manual (Panah Kiri Kanan) */}
          <button 
            onClick={prevTesti}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center text-navy hover:text-coral transition-colors z-20 focus:outline-none"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button 
            onClick={nextTesti}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center text-navy hover:text-coral transition-colors z-20 focus:outline-none"
            aria-label="Next testimonial"
          >
            →
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setTestiIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${testiIndex === idx ? "bg-coral w-6" : "bg-gray-200 hover:bg-gray-300"}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION: KONTAK (Formulir & Integrasi WhatsApp) --- */}
      <section id="kontak" className="py-24 bg-navy text-white relative overflow-hidden">
        {/* Dekorasi blur di background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accentYellow/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Teks Kiri */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accentYellow block">MULAI PROJEK ANDA</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight uppercase">
              SIAP MEMILIKI WEBSITE YANG <br />MENGHASILKAN DAMPAK?
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Silakan isi formulir di samping untuk mendiskusikan ide digital Anda bersama tim kami. Kami siap memberikan konsultasi terbaik secara gratis dan langsung mengirimkan penawaran instan via WhatsApp.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-accentYellow font-bold text-sm">
                  ✓
                </div>
                <span className="text-sm font-semibold text-gray-200">Konsultasi Gratis & Cepat</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-accentYellow font-bold text-sm">
                  ✓
                </div>
                <span className="text-sm font-semibold text-gray-200">Penawaran Harga Transparan</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-accentYellow font-bold text-sm">
                  ✓
                </div>
                <span className="text-sm font-semibold text-gray-200">Terintegrasi Langsung ke WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Form Kanan */}
          <div className="lg:col-span-7">
            <div className="bg-white text-gray-900 rounded-[2rem] p-8 md:p-10 shadow-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-navy mb-6">Formulir Konsultasi Proyek</h3>
              <form onSubmit={handleSendWhatsApp} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Nama Lengkap</label>
                    <input 
                      type="text" 
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Nama Lengkap Anda"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-coral text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Email Anda</label>
                    <input 
                      type="email" 
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="email@contoh.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-coral text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">No WA yang bisa dihubungi</label>
                    <input 
                      type="tel" 
                      required
                      value={formWa}
                      onChange={(e) => setFormWa(e.target.value)}
                      placeholder="Contoh: 081234567890"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-coral text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Anggaran kisaran proyek Anda</label>
                    <select
                      value={formBudget}
                      onChange={(e) => setFormBudget(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-coral text-sm bg-white"
                    >
                      <option value="Di bawah Rp 1 Juta">Di bawah Rp 1 Juta</option>
                      <option value="Rp 1 Juta - Rp 2 Juta">Rp 1 Juta - Rp 2 Juta</option>
                      <option value="Rp 2 Juta - Rp 5 Juta">Rp 2 Juta - Rp 5 Juta</option>
                      <option value="Di atas Rp 5 Juta">Di atas Rp 5 Juta</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Pilih Paket</label>
                  <select
                    value={selectedPackage}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-coral text-sm bg-white"
                  >
                    <option value="">-- Belum Memilih Paket --</option>
                    <option value="Paket Hemat (750 Ribu)">Paket Hemat (750 Ribu) - Landing Page</option>
                    <option value="Paket Standard (1,2 Juta)">Paket Standard (1,2 Juta) - Company Profile</option>
                    <option value="Paket Kustom (2,5 Juta)">Paket Kustom (2,5 Juta) - Custom Web System</option>
                    <option value="Kustom / Custom Lainnya">Kustom / Custom Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Detail Project</label>
                  <textarea 
                    rows={4}
                    value={formDetails}
                    onChange={(e) => setFormDetails(e.target.value)}
                    placeholder="Jelaskan kebutuhan website Anda (contoh: referensi desain, target audiens, fitur utama...)"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-coral text-sm resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-coral hover:bg-coral-hover text-white text-sm font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-coral/20 flex items-center justify-center gap-2 mt-4"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.031 2c-5.506 0-9.969 4.463-9.969 9.969 0 1.912.544 3.738 1.575 5.319l-1.637 4.969 5.162-1.575c1.506.969 3.269 1.506 5.106 1.506 5.506 0 9.969-4.463 9.969-9.969S17.537 2 12.031 2zm6.656 14.169c-.275.769-1.338 1.488-2.2 1.594-.581.075-1.338.113-2.1-.113-1.075-.313-2.288-.862-3.325-1.519-1.925-1.225-3.419-2.994-4.525-4.881-.469-.8-.825-1.669-.994-2.588-.138-.725-.013-1.475.469-2.075.438-.525.969-.65 1.381-.65.206 0 .388.013.525.025.325.025.488.063.706.513.25.525.862 2.112.938 2.275.075.163.125.35.025.55-.1.2-.213.338-.363.513-.15.175-.325.388-.463.525-.15.15-.313.313-.125.638.388.65.862 1.25 1.413 1.763.713.663 1.55 1.188 2.463 1.525.288.113.463.088.638-.113.2-.238.862-1.013 1.088-1.363.225-.35.45-.288.75-.175.3.113 1.913.9 2.2 1.038.288.138.481.206.55.325.069.119.069.694-.206 1.463z"/>
                  </svg>
                  Kirim via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0b1836] text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
        {/* Grid dekoratif tipis di background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
            {/* Kolom 1: Profil Brand */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-coral flex items-center justify-center text-white font-bold text-xl shadow-md">
                  T
                </div>
                <span className="text-xl font-bold tracking-tight text-white">twins<span className="text-coral">dev</span></span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Kami membangun platform digital berkinerja tinggi yang menggabungkan desain eksklusif, teknologi mutakhir, dan strategi pemasaran modern untuk pertumbuhan bisnis Anda.
              </p>
              {/* Icon sosial media sederhana & premium */}
              <div className="flex items-center gap-3">
                {["instagram", "facebook", "linkedin", "github"].map((social) => (
                  <a 
                    key={social}
                    href={`https://${social}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-coral hover:text-white transition-all flex items-center justify-center text-gray-400 hover:text-white text-xs uppercase font-bold"
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>

            {/* Kolom 2: Layanan */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-accentYellow">Layanan Kami</h4>
              <ul className="space-y-2 text-sm text-gray-400 font-medium">
                <li><a href="#layanan" className="hover:text-coral transition-colors">Landing Page Premium</a></li>
                <li><a href="#layanan" className="hover:text-coral transition-colors">Company Profile Bisnis</a></li>
                <li><a href="#layanan" className="hover:text-coral transition-colors">Custom Web Application</a></li>
                <li><a href="#layanan" className="hover:text-coral transition-colors">E-Commerce System</a></li>
              </ul>
            </div>

            {/* Kolom 3: Navigasi */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-accentYellow">Navigasi</h4>
              <ul className="space-y-2 text-sm text-gray-400 font-medium">
                <li><a href="#home" className="hover:text-coral transition-colors">Home</a></li>
                <li><a href="#layanan" className="hover:text-coral transition-colors">Layanan</a></li>
                <li><a href="#harga" className="hover:text-coral transition-colors">Harga</a></li>
                <li><a href="#projek" className="hover:text-coral transition-colors">Projek</a></li>
                <li><a href="#testimoni" className="hover:text-coral transition-colors">Testimoni</a></li>
                <li><a href="#kontak" className="hover:text-coral transition-colors">Kontak</a></li>
              </ul>
            </div>

            {/* Kolom 4: Info Kontak */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-accentYellow">Hubungi Kami</h4>
              <ul className="space-y-3 text-sm text-gray-400 font-medium">
                <li className="flex items-start gap-2.5">
                  <span className="text-coral">✉</span>
                  <span>hello@twinsdev.com</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-coral">☎</span>
                  <span>+62 812-3456-7890</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-coral">📍</span>
                  <span>Jakarta, Indonesia</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
            <p>&copy; {new Date().getFullYear()} TwinsDev. All rights reserved.</p>
            <p className="tracking-widest uppercase text-gray-400">Double the Focus • Digital Excellence</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
