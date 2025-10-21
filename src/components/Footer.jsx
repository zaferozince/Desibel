import React from "react";
import Logo from "../assets/logo1.png"
import { MapPin,Mail,Phone,Clock,Facebook,Instagram,Twitter,Linkedin, MapIcon} from 'lucide-react';
/**
 * Desibel Footer (React + Tailwind)
 * - Görseldeki düzeni referans alır.
 * - Tam responsive grid.
 * - Telefon ve e‑posta linkleri tıklanabilir.
 * - Sağ altta WhatsApp butonu.
 *
 * Kullanım:
 * <Footer />
 *
 * Notlar:
 * - Logoyu /public içine koyup src yolunu güncelleyin (logo-desibel.png örnek).
 * - WhatsApp linkindeki numarayı değiştirin.
 */
export default function Footer() {
  return (
    <footer className="relative bg-[#0d2746] text-slate-200">
      {/* Üst içerik */}
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="grid gap-12 py-16 md:grid-cols-12">
          {/* Sol: Logo + açıklama */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-4">
              <img
                src={Logo}
                alt="Desibel İşitme Merkezleri Bursa"
                className="h-16 w-auto object-contain"
                loading="lazy"
              />
            </div>
            <p className="mt-6 max-w-md text-slate-300 leading-relaxed text-lg">
              İşitme Cihazları yedek parça, pil ve aksesuar hizmetlerimizle %100
              Müşteri memnuniyetiyle hizmet vermekteyiz.
            </p>
          </div>

          {/* Sağ: 3 sütun */}
          <div className="md:col-span-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Şube 1 */}
            <div>
              <h3 className="text-2xl font-semibold text-white">Şube 1</h3>
              <address className="not-italic mt-4 space-y-2 text-slate-300">
                <div className="font-medium text-lg text-slate-100">
                  Bursa İşitme Cihazları Merkezi
                </div>
                <div className="text-lg">Altıparmak Cad. No:64/A</div>
                <div className="text-lg">Osmangazi/Bursa</div>
              </address>
              <div className="mt-4 space-y-2">
                <a href="tel:+902242230214" className="block text-lg hover:text-white transition-colors">
                  0224 223 02 14
                </a>
                <a href="tel:+905412230214" className="block text-lg hover:text-white transition-colors">
                  0541 223 02 14
                </a>
              </div>
            </div>

            {/* Şube 2 */}
            <div>
              <h3 className="text-2xl font-semibold text-white">Şube 2</h3>
              <address className="not-italic mt-4 space-y-2 text-slate-300">
                <div className="font-medium text-slate-100 text-lg">
                  Desibel 1 İşitme Cihazları Merkezi
                </div>
                <div className="text-lg">Doğanköy, Gümüş Cd. 19/2, 16110</div>
                <div className="text-lg">Nilüfer/Bursa</div>
              </address>
              <div className="mt-4 space-y-2">
                <a href="tel:+902242249991" className="block text-lg hover:text-white transition-colors">
                  0224 224 99 91
                </a>
                <a href="tel:+905530670968" className="block text-lg hover:text-white transition-colors">
                  0553 067 09 68
                </a>
              </div>
            </div>

            {/* Merkez Şube */}
            <div>
              <h3 className="text-2xl font-semibold text-lg text-white">Merkez Şube</h3>

              <div className="mt-4 space-y-4">
                {/* Adres */}
                <div className="flex items-start gap-3">
                  <MapPin width={48} height={48} />
                  <address className="not-italic text-lg text-slate-300">
                    İnönü Cad. Hüzmen Plaza No:29, D:1, 16040
                    <br /> Osmangazi/Bursa
                  </address>
                </div>

                {/* E-posta */}
                <div className="flex items-center gap-3">
                  <Mail width={24} height={24} />
                  <div>
                    <a
                      href="mailto:info@desibelisitme.com"
                      className="block hover:text-white text-lg transition-colors"
                    >
                      info@desibelisitme.com
                    </a>
                    <a
                      href="mailto:desibel16@hotmail.com"
                      className="block hover:text-white text-lg transition-colors"
                    >
                      desibel16@hotmail.com
                    </a>
                  </div>
                </div>

                {/* Telefon */}
                <div className="flex items-center gap-3">
                  <Phone />
                  <div>
                    <a href="tel:+902242235801" className="block hover:text-white text-lg transition-colors">
                      0224 223 58 01
                    </a>
                    <a href="tel:+905533138834" className="block hover:text-white text-lg transition-colors">
                      0553 313 88 34
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alt çubuk */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-8 text-md text-slate-300 sm:px-8">
          <p>
            © Copyright 2022. <span className="whitespace-nowrap">Desibel İşitme Merkezleri Bursa</span>
          </p>
          <a href="/" className="hover:text-white text-lg transition-colors">
            Anasayfa
          </a>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/905553138834" // numarayı değiştirin
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile yazın"
        className="fixed bottom-6 right-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366] shadow-lg ring-1 ring-black/10 transition hover:scale-105 focus:outline-none"
        style={{ zIndex: 9999 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-white"
          aria-hidden
        >
          <path d="M19.11 17.48c-.27-.14-1.6-.79-1.84-.88-.25-.09-.43-.14-.62.14-.18.27-.71.88-.87 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.33-1.56-1.49-1.83-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.46-.16 0-.34-.02-.52-.02-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.34.98 2.63 1.11 2.81.14.18 1.92 2.95 4.66 4.14.65.29 1.16.46 1.56.59.65.2 1.25.17 1.73.1.53-.08 1.6-.65 1.83-1.29.23-.64.23-1.18.16-1.29-.07-.11-.25-.18-.52-.32z" />
          <path d="M27.5 4.49C24.48 1.47 20.37 0 16.06 0 7.2 0 .01 7.19.01 16.05c0 2.83.74 5.59 2.16 8.02L0 31.94l7.99-2.1a15.92 15.92 0 008.07 2.15h.01c8.86 0 16.05-7.19 16.05-16.05 0-4.31-1.47-8.42-4.49-11.45zm-11.45 24.6h-.01a13.5 13.5 0 01-6.88-1.89l-.5-.3-4.74 1.25 1.27-4.62-.32-.53a13.53 13.53 0 01-2.08-7.2c0-7.47 6.08-13.55 13.56-13.55 3.62 0 7.02 1.41 9.58 3.97a13.4 13.4 0 013.98 9.57c0 7.48-6.09 13.55-13.56 13.55z" />
        </svg>
      </a>
    </footer>
  );
}
