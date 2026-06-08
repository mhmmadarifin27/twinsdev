"use client";

import React, { useState, useEffect, useRef } from "react";

// --- ANIMATED COUNTER COMPONENT ---
function AnimatedCounter({ target, suffix = "", duration = 1500 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

// --- PROJECT LIST DATA ---
interface Project {
  title: string;
  originalName: string;
  category: string;
  description: string;
  link?: string;
  image: string;
  screenshot?: string;
}

const projectsData: Project[] = [
  {
    title: "Eman Locksmith Portal",
    originalName: "Kunci kak eman",
    category: "UMKM & Jasa",
    description: "Platform pemesanan jasa duplikat kunci dan panggilan darurat 24 jam dengan integrasi kontak langsung.",
    link: "https://servis-kunci-eman.vercel.app/",
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "SoleCare Shoe Repair",
    originalName: "Jasa servis sol sepatu",
    category: "UMKM & Jasa",
    description: "Landing page premium penyedia layanan restorasi, pengecatan ulang, dan jahit sol sepatu.",
    link: "https://poles-jahit.vercel.app/",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Harapan Jaya Logistics",
    originalName: "Harapan jaya",
    category: "Company Profile",
    description: "Website profile resmi perusahaan ekspedisi logistik dan distribusi kargo darat nusantara.",
    link: "https://harapanjaya.web.id/",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "TwinsDev Solutions",
    originalName: "Web jual jasa",
    category: "Company Profile",
    description: "Portal agency digital TwinsDev untuk memasarkan jasa pembuatan website dan kustomisasi sistem.",
    link: "https://twins-dev.vercel.app/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Cendekia Foundation Portal",
    originalName: "Yayasan baznas",
    category: "Pendidikan & Sosial",
    description: "Platform informasi publik, donasi online, dan registrasi santri baru Pondok Pesantren Cendekia.",
    link: "https://ponpes-cendekia.vercel.app/",
    image: "https://images.unsplash.com/photo-1541829011-831c7b891152?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "BSO Vistara Corporate",
    originalName: "Web profil Vistara",
    category: "Company Profile",
    description: "Landing page interaktif profil organisasi kemahasiswaan dan dokumentasi kegiatan Vistara.",
    link: "https://bso-vistara.vercel.app/",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Tyler Durden Apparel",
    originalName: "E-commerce",
    category: "E-Commerce",
    description: "Web store e-commerce modern yang dilengkapi katalog pakaian, keranjang belanja, dan simulasi checkout.",
    link: "https://tylerdurden.vercel.app/",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Elsday Cafe QR Order",
    originalName: "Booking meja makan/Sistem qr order",
    category: "UMKM & Jasa",
    description: "Aplikasi reservasi meja cafe dan menu digital interaktif dengan integrasi pemesanan QR code.",
    link: "https://elsday-reservasi.vercel.app/",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Posyandu Care Digital Portal",
    originalName: "Web Posyandu",
    category: "Kesehatan",
    description: "Sistem pencatatan berkala kesehatan balita, imunisasi bulanan, dan visualisasi tumbuh kembang anak (Offline).",
    screenshot: "/posyandu_dashboard.png",
    image: "/posyandu_dashboard.png"
  }
];

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formWa, setFormWa] = useState("");
  const [formBudget, setFormBudget] = useState("Rp 750k - Rp 1.2jt");
  const [formDetails, setFormDetails] = useState("");

  // Projects State
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null);

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

      {/* --- STATS SECTION (Validasi Data Proyek) --- */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 mt-12 mb-12">
        <div className="bg-navy rounded-[2rem] shadow-xl border border-white/10 p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
          <div className="space-y-2 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8">
            <div className="text-4xl md:text-5xl font-black text-accentYellow">
              <AnimatedCounter target={100} suffix="+" />
            </div>
            <div className="text-sm font-bold text-coral uppercase tracking-wider">Proyek Sukses</div>
            <p className="text-xs text-gray-300 mt-1">Website & aplikasi digital yang telah kami rilis secara profesional.</p>
          </div>
          <div className="space-y-2 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:px-8">
            <div className="text-4xl md:text-5xl font-black text-accentYellow">
              <AnimatedCounter target={24} suffix="/7" />
            </div>
            <div className="text-sm font-bold text-coral uppercase tracking-wider">Bantuan</div>
            <p className="text-xs text-gray-300 mt-1">Layanan konsultasi dan support teknis yang selalu siap sedia.</p>
          </div>
          <div className="space-y-2 md:pl-8">
            <div className="text-4xl md:text-5xl font-black text-accentYellow">
              <AnimatedCounter target={5} suffix=" Tahun" />
            </div>
            <div className="text-sm font-bold text-coral uppercase tracking-wider">Pengalaman</div>
            <p className="text-xs text-gray-300 mt-1">Keahlian industri dalam merancang website modern yang fungsional.</p>
          </div>
        </div>
      </div>

      {/* --- SECTION: WHAT WE PROMISE --- */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-coral block font-semibold">KEUNGGULAN KAMI</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy">What We Promise</h2>
            <div className="w-16 h-1 bg-coral mx-auto rounded-full"></div>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Komitmen kami untuk memberikan standar kualitas tertinggi, dukungan berkelanjutan, dan transparansi di setiap proyek.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Mudah Dioperasikan",
                icon: (
                  <svg className="w-8 h-8 text-accentYellow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                )
              },
              {
                title: "Tutorial Penggunaan",
                icon: (
                  <svg className="w-8 h-8 text-accentYellow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )
              },
              {
                title: "Support Penggunaan",
                icon: (
                  <svg className="w-8 h-8 text-accentYellow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.425 10.071c-.054-4.534-3.714-8.071-8.177-8.071s-8.123 3.537-8.177 8.071c-.054.454.268.859.717.859h1.365c.449 0 .813-.364.813-.813 0-2.977 2.422-5.4 5.4-5.4s5.4 2.423 5.4 5.4c0 .449.364.813.813.813h1.365c.449 0 .771-.405.717-.859zM2 14v3c0 1.1.9 2 2 2h2v-7H4c-1.1 0-2 .9-2 2zm16-2h-2v7h2c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2z" />
                  </svg>
                )
              },
              {
                title: "Garansi Error & Bugs",
                icon: (
                  <svg className="w-8 h-8 text-accentYellow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                )
              },
              {
                title: "Free Maintenance",
                icon: (
                  <svg className="w-8 h-8 text-accentYellow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              },
              {
                title: "Biaya Sekali Bayar",
                icon: (
                  <svg className="w-8 h-8 text-accentYellow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Update security",
                icon: (
                  <svg className="w-8 h-8 text-accentYellow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "SEO Optimized",
                icon: (
                  <svg className="w-8 h-8 text-accentYellow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m0 0l-2-2m2 2l2-2" />
                  </svg>
                )
              },
              {
                title: "Google analytics & FB Pixel",
                icon: (
                  <svg className="w-8 h-8 text-accentYellow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              },
              {
                title: "Request Custom Fitur",
                icon: (
                  <svg className="w-8 h-8 text-accentYellow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              }
            ].map((promise, index) => (
              <div
                key={index}
                className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center gap-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300 min-h-[160px]"
              >
                <div className="w-14 h-14 rounded-2xl bg-coral/5 flex items-center justify-center">
                  {promise.icon}
                </div>
                <h3 className="text-sm font-bold text-navy leading-snug">{promise.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION: LAYANAN --- */}
      <section id="layanan" className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-coral block">LAYANAN UTAMA KAMI</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy">APA YANG BISA KAMI BANTU?</h2>
          <div className="w-16 h-1 bg-coral mx-auto rounded-full"></div>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">Kami fokus menghadirkan solusi digital yang clean, fungsional, dan siap membantu bisnis Anda berkembang.</p>
        </div>

        {/* Card Layanan dengan Frame Gambar Setengah */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all bg-white overflow-hidden group flex flex-col">
            <div className="h-48 w-full overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1547658719-da2b81169d42?auto=format&fit=crop&w=600&q=80"
                alt="Landing Page"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 bg-coral text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow-sm">
                01
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3 text-navy">Landing Page Bisnis</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Website satu halaman premium yang didesain khusus untuk meningkatkan konversi penjualan produk atau jasa Anda.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all bg-white overflow-hidden group flex flex-col">
            <div className="h-48 w-full overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
                alt="Company Profile"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 bg-coral text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow-sm">
                02
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3 text-navy">Company Profile</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Representasi digital profesional perusahaan Anda untuk membangun kepercayaan instan di hadapan klien dan partner bisnis.</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all bg-white overflow-hidden group flex flex-col">
            <div className="h-48 w-full overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
                alt="Custom Web Application"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 bg-coral text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow-sm">
                03
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3 text-navy">Custom Web Application</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Solusi sistem informasi berbasis web yang disesuaikan sepenuhnya dengan kebutuhan alur kerja internal industri Anda.</p>
              </div>
            </div>
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
            <div 
              onClick={() => handleSelectPackage("Paket Hemat (750 Ribu)")}
              className={`bg-white rounded-[2rem] border-2 cursor-pointer p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 ${
                selectedPackage === "Paket Hemat (750 Ribu)" 
                  ? "border-coral shadow-xl scale-[1.02] z-10" 
                  : "border-gray-200 hover:border-coral shadow-sm hover:shadow-md"
              }`}
            >
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
                className="w-full py-3.5 bg-navy hover:bg-coral text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md group-hover:shadow-navy/10"
              >
                Pilih Paket Ini
              </button>
            </div>

            {/* Paket 2 (POPULER / HIGHLIGHTED) */}
            <div 
              onClick={() => handleSelectPackage("Paket Standard (1,2 Juta)")}
              className={`bg-white rounded-[2rem] border-2 cursor-pointer p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 ${
                selectedPackage === "Paket Standard (1,2 Juta)"
                  ? "border-coral shadow-xl scale-[1.02] z-10"
                  : "border-gray-200 hover:border-coral shadow-sm hover:shadow-md"
              }`}
            >
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
                className="w-full py-4 bg-coral hover:bg-coral-hover text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-coral/10 hover:shadow-coral/20"
              >
                Pilih Paket Ini
              </button>
            </div>

            {/* Paket 3 */}
            <div 
              onClick={() => handleSelectPackage("Paket Kustom (2,5 Juta)")}
              className={`bg-white rounded-[2rem] border-2 cursor-pointer p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 ${
                selectedPackage === "Paket Kustom (2,5 Juta)"
                  ? "border-coral shadow-xl scale-[1.02] z-10"
                  : "border-gray-200 hover:border-coral shadow-sm hover:shadow-md"
              }`}
            >
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
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-coral">KARYA TERBARU</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-1">PROJEK YANG SUDAH KAMI SELESAIKAN</h2>
            </div>
            <p className="text-gray-400 max-w-md text-sm font-medium">Fokus kami adalah pada performa visual yang menawan serta fungsionalitas yang mulus untuk user pengguna.</p>
          </div>

          {/* Categories Tab Selector */}
          <div className="flex flex-wrap justify-start gap-2.5 mb-10">
            {["Semua", "Company Profile", "UMKM & Jasa", "E-Commerce", "Pendidikan & Sosial", "Kesehatan"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-coral text-white shadow-lg shadow-coral/25"
                    : "bg-white/5 hover:bg-white/10 text-gray-300 border border-white/5 cursor-pointer"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData
              .filter(p => activeCategory === "Semua" || p.category === activeCategory)
              .map((proj, idx) => (
                <div 
                  key={idx} 
                  className="group bg-white/5 border border-white/5 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-coral/30 hover:bg-white/[0.07] transition-all duration-300"
                >
                  <div>
                    {/* Project Image */}
                    <div className="aspect-video w-full overflow-hidden bg-gray-850 relative">
                      <img 
                        src={proj.image} 
                        alt={proj.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute top-4 left-4 bg-coral/90 backdrop-blur-sm text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-md shadow-sm">
                        {proj.category}
                      </div>
                    </div>

                    {/* Project Body */}
                    <div className="p-6 space-y-3">
                      <div className="space-y-1">
                        <h3 className="text-lg font-bold text-white group-hover:text-coral transition-colors">
                          {proj.title}
                        </h3>
                        <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                          <span className="font-semibold text-coral/80">Original:</span>
                          <span>{proj.originalName}</span>
                        </div>
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                        {proj.description}
                      </p>
                    </div>
                  </div>

                  {/* Project Footer Button */}
                  <div className="p-6 pt-0">
                    {proj.screenshot ? (
                      <button
                        onClick={() => setSelectedScreenshot(proj.screenshot || null)}
                        className="w-full py-3 bg-white/10 hover:bg-coral text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                      >
                        <span>Lihat Screenshot</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </button>
                    ) : (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 bg-white/10 hover:bg-coral text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md"
                      >
                        <span>Akses Live Demo</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
          </div>

        </div>
      </section>

      {/* --- MODAL FOR SCREENSHOT PREVIEW --- */}
      {selectedScreenshot && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
          onClick={() => setSelectedScreenshot(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#0b1836] rounded-3xl overflow-hidden border border-white/10 shadow-2xl p-6 md:p-8 flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={() => setSelectedScreenshot(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 w-9 h-9 rounded-full flex items-center justify-center transition-all text-sm font-bold cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>
            
            <div className="space-y-1 pr-8">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-coral/10 text-coral px-2.5 py-1 rounded-full">
                Kesehatan (Offline Preview)
              </span>
              <h3 className="text-xl md:text-2xl font-black text-white mt-2">Posyandu Care Digital Portal</h3>
              <p className="text-xs md:text-sm text-gray-300">
                Sistem informasi pencatatan berkala kesehatan balita, imunisasi bulanan, dan visualisasi tumbuh kembang anak (Laravel/Offline).
              </p>
            </div>
            
            <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-gray-950 border border-white/5 relative shadow-inner">
              <img 
                src={selectedScreenshot} 
                alt="Posyandu Project Screenshot" 
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setSelectedScreenshot(null)}
                className="px-6 py-2.5 bg-white/15 hover:bg-white/20 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                Tutup Preview
              </button>
            </div>
          </div>
        </div>
      )}

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
