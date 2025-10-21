// ClinicTrustSection.jsx
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero-oldman.jpeg";         // sağ görsel
import sgk from "../assets/logo.jpg";                      // örnek logo
import phonak from "../assets/logo.jpg";
import cochlear from "../assets/logo.jpg";
import philips from "../assets/logo.jpg";

const PHONE = "905533138834";
const WA = (msg) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(msg || "Merhaba, randevu almak istiyorum.")}`;

/* Görünürdeyken sayacı akıcı biçimde arttırır */
function useCountUpOnView(target = 20000, duration = 1200) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const from = 0;
          const to = target;

          const step = (t) => {
            const p = Math.min(1, (t - start) / duration);
            // easeOutCubic
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.floor(from + (to - from) * eased));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return { ref, val };
}

export default function ClinicTrustSection() {
  const { ref, val } = useCountUpOnView(20000, 1200);

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* yumuşak arka plan gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#EEF4FF] via-[#F6FAFF] to-white" />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Sol: içerik */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[#0D6EFD] font-semibold tracking-wide flex items-center gap-3">
              <span className="inline-block h-[2px] w-10 bg-[#0D6EFD] rounded-full" />
              BURSA DESİBEL İŞİTME MERKEZİMİZDE
            </div>

            <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-slate-800">
              Bize Güvenen <span className="text-[#0D6EFD]">{val.toLocaleString("tr-TR")}+</span> <br />
              Mutlu Hastamız
            </h2>

            <ul className="mt-5 space-y-2 text-slate-700">
              {[
                "Kulak arkası ve kanal içi işitme cihazları satışı",
                "Dünyanın en seçkin markalarından oluşan model çeşitliliğini değerlendirererek farklı model ve tiplerde işitme cihazı deneme imkanı",
                "Gerçek-Kulak Ölçümü ve İşitme cihazı test ölçüm cihazlarını kullanarak işitme kaybına en uygun ayar imkanı,",
                "S/N Gürültü içinde konuşmayı ayırt etme skorunun tespiti",
                "İşitme cihazı pil ve aksesuarları satışı",
                "FM Sistemleri satış ve uygulaması",
                "Serbest saha ölçümü ile işitme cihazlı eşik ölçümü",
                "İşitme eşiklerinin ölçümü (odyometrik ölçüm)",
                "Sosyal Güvenlik Kurumu mensuplarına işitme cihazı verilir.",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-[#0D6EFD]" />
                  <span className="text-lg">{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`tel:+${PHONE}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-3 bg-[#0D6EFD] text-lg text-white font-semibold hover:opacity-90 transition"
              >
                 Hemen Ara
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </a>
            </div>

            {/* Güven şeridi / marka logoları
            <div className="mt-8 flex flex-wrap items-center gap-6 opacity-80">
              <img src={sgk} alt="SGK" className="h-7" />
              <img src={phonak} alt="Phonak" className="h-6" />
              <img src={cochlear} alt="Cochlear" className="h-6" />
              <img src={philips} alt="Philips HearLink" className="h-6" />
            </div> */}
          </motion.div>

          {/* Sağ: görsel + glass istatistik kartı */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img src={heroImg} alt="Mutlu hastalarımız" className="w-full h-[340px] md:h-[420px] object-cover" />
            </div>

            {/* floating glass card */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              className="absolute left-8 -bottom-10 bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl shadow-xl px-6 py-5"
            >
              <div className="text-3xl font-extrabold text-slate-800">
                {val.toLocaleString("tr-TR")}+
              </div>
              <div className="text-lg text-slate-600 -mt-0.5">Hastaya Hizmet</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
