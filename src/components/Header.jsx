import React, { useEffect, useState } from "react";
import { MapPin,Mail,Phone,Clock,Facebook,Instagram,Twitter,Linkedin} from 'lucide-react';
import Logo from "../assets/logo.jpg"
const BlueTopBar = () => (
  <div className="hidden md:block bg-[#0D6EFD] text-white text-sm">
    <div className="max-w-6xl mx-auto px-4 py-8 h-10 flex items-center justify-between gap-4">
      <div className="flex items-center gap-5">
        <span className="inline-flex items-center gap-2">
          <MapPin />
          <span className="hidden text-lg sm:inline" style={{ fontWeight: "600"}}>İnönü Cad. Hüzmen Plaza No:29, D:1</span>
        </span>
        <span className="opacity-50  hidden sm:inline">|</span>
        <a href="mailto:info@desibelisitme.com" className="inline-flex text-lg items-center gap-2 hover:underline">
          <Mail />
          <span style={{ fontWeight: "600"}}>Info@desibelisitme.com</span>
        </a>
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden md:inline-flex items-center gap-2">
          <Clock />
          <span className="text-lg" style={{ fontWeight: "600"}}>09:00 – 18:00</span>
        </span>
        <a href="tel:05533138834" aria-label="Facebook" className="opacity-90 hover:opacity-100"><Facebook /></a>
        <a href="tel:05533138834" aria-label="Twitter" className="opacity-90 hover:opacity-100"><Twitter /></a>
        <a href="tel:05533138834" aria-label="LinkedIn" className="opacity-90 hover:opacity-100"><Linkedin /></a>
      </div>
    </div>
  </div>
);

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="px-4 py-2 text-[18px] font-medium text-slate-700 hover:text-slate-900"
  >
    {children}
  </a>
);

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ÜST MAVİ BAR (sticky değil) */}
      <BlueTopBar />

      {/* ALT BEYAZ BAR (sticky) */}
      <header
        className={`sticky top-0 z-50 bg-white ${scrolled ? "shadow-sm" : ""} border-b border-slate-100`}
      >
        <div className="max-w-6xl mx-auto px-4 py-12 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 shrink-0">
            {/* Kendi logonu kullan: /public/logo.png */}
            <img src={Logo} alt="Desibel İşitme" className="h-12 w-auto" />
          </a>

          {/* Desktop Menü */}
          <nav className="hidden lg:flex items-center justify-center gap-2" style={{ fontSize: "18px"}}>
            <NavLink href="/">ANASAYFA</NavLink>
            <NavLink href="/#services">HİZMETLERİMİZ</NavLink>
            <NavLink href="/#products">ÜRÜNLER</NavLink>
            <NavLink href="/blog">BLOG</NavLink>
            <NavLink href="/#contact">İLETİŞİM</NavLink>
          </nav>

          {/* Sağ Çağrı Kutusu */}
          <div className="hidden md:flex items-center gap-3 pl-6 border-l border-slate-200">
            <div className="text-[#0D6EFD]"><Phone width={36} height={36}/></div>
            <div className="leading-5">
              <div className="text-xl text-slate-500">Şimdi Bizi Ara</div>
              <a href="tel:05533138834" className="font-semibold text-xl text-slate-800 hover:underline">
                0553 313 88 34
              </a>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-200"
            onClick={() => setOpen(v => !v)}
            aria-label="Menü"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menü Paneli */}
        {open && (
          <div className="lg:hidden border-t border-slate-200 bg-white">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col">
              <NavLink href="#hero" onClick={() => setOpen(false)}>ANASAYFA</NavLink>
              <NavLink href="#services" onClick={() => setOpen(false)}>HİZMETLERİMİZ</NavLink>
              <NavLink href="#products" onClick={() => setOpen(false)}>ÜRÜNLER</NavLink>
              <NavLink href="/blog" onClick={() => setOpen(false)}>BLOG</NavLink>
              <NavLink href="#contact" onClick={() => setOpen(false)}>İLETİŞİM</NavLink>

              <a
                href="tel:05533138834"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2"
              >
                <Phone />
                <span className="font-semibold">0553 313 88 34</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
