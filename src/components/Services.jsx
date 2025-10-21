// ServicesSection.jsx
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import hizmet1 from "../assets/hizmet1.png";
import hizmet2 from "../assets/hizmet2.png";
import hizmet3 from "../assets/hizmet3.png";
import hizmet4 from "../assets/hizmet4.png";
import hizmet5 from "../assets/hizmet5.png";

const PHONE = "02242235801";

const services = [
  { id: "01", title: "İşitme Cihazı Satışı",
    desc: "Görünmez, kulak içi ya da kulak arkası işitme cihazlarında geniş model ve renk seçenekleriyle hizmet veriyoruz.",
    img: hizmet1, cta: "TÜM CİHAZLAR" },
  { id: "02", title: "Piller ve Aksesuarlar",
    desc: "Doğru pil seçimi cihaz ömrünü uzatır. Hangi pili kullanmanız gerektiği için bize danışın.",
    img: hizmet2, cta: "HANGİ PİLİ KULLANMALIYIM?" },
  { id: "03", title: "Size Özel Kalıplar",
    desc: "İşitme cihazı kulak kalıbının sesi kulak zarına en iyi şekilde iletmek, istenmeyen ıslık sesini engellemek, işitme cihazının kulaktan çıkıp düşmesini engellemektir",
    img: hizmet3, cta: "ŞİMDİ İNCELE" },
  { id: "04", title: "İşitme Testi",
    desc: "İşitme kaybı ilerleyen yaşlarda ortaya çıkması söz konusu olmayıp bazen çocuklar da bazen de yetişkinlerde ortaya çıkabilmektedir.",
    img: hizmet4, cta: "RANDEVU AL" },
  { id: "05", title: "Ekibimizle Tanışın",
    desc: "1998 senesinden günümüze uzman kadromuzla işitme kaybı işitme cihazı kullanmak isteyen hastalarımıza deneyimimiz paylaşıyoruz.",
    img: hizmet5, cta: "BİZİ ZİYARET EDİN" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22,1,0.36,1] } },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-[#0D6EFD] text-2xl lg:text-3xl font-semibold tracking-wide">
            DESİBEL İŞİTME MERKEZİ
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-800 mt-2">Hizmetlerimiz</h2>
          <div className="w-16 h-1 bg-[#0D6EFD] mx-auto mt-4 rounded-full" />
        </div>

        {/* SLIDER */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <Swiper
            modules={[Pagination, A11y]}
            navigation
            pagination={{ clickable: true }}
            loop={false}
            speed={500}
            slidesPerView={1}
            slidesPerGroup={1}   // tek tek ilerlesin
            spaceBetween={24}
            breakpoints={{
              1024: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 32 },
            }}
            className="!pb-12"  // pagination için alt boşluk
          >
            {services.map((s, i) => (
              <SwiperSlide key={s.id} className="!h-auto flex">
                <motion.article
                  variants={cardVariant}
                  whileHover={{ y: -4 }}
                  className="group h-full min-h-[220px] md:min-h-[240px] lg:min-h-[260px] rounded-2xl bg-white p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_44px_rgba(0,0,0,0.10)] transition-shadow"
                >
                  {/* Yatay düzen */}
                  <div className="h-full flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                    {/* Sol: görsel + halka */}
                    <div className="relative shrink-0 w-36 h-36 md:w-40 md:h-40 mx-auto md:mx-0">
                      <motion.div
                        aria-hidden
                        className="absolute inset-0 rounded-full bg-[#dbe9ff]"
                        animate={{ boxShadow: ["0 0 0 0 rgba(13,110,253,0)","0 0 0 12px rgba(13,110,253,0.08)","0 0 0 0 rgba(13,110,253,0)"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: i * 0.25 }}
                      />
                      <div className="absolute inset-3 rounded-full bg-[#bcd4fb] shadow-[0_12px_24px_rgba(13,110,253,0.25)]" />
                      <motion.div
                        className="relative z-10 w-full h-full rounded-full flex items-center justify-center"
                        whileHover={{ y: -3, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 220, damping: 16 }}
                      >
                        <img src={s.img} alt={s.title} className="w-22 h-22 md:w-28 md:h-28 object-contain drop-shadow-md" />
                      </motion.div>
                    </div>

                    {/* Sağ: içerik */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-800">{s.title}</h3>
                      <p className="mt-3 text-slate-600 leading-relaxed">{s.desc}</p>

                      <div className="mt-6 flex items-center justify-between">
                        <span className="text-4xl font-extrabold text-slate-300 select-none">{s.id}</span>
                        <a
                          href={`tel:${PHONE}`}
                          className="relative inline-flex items-center gap-2 font-semibold text-slate-800 hover:text-[#0D6EFD] transition-colors"
                        >
                          <span className="relative">
                            {s.cta}
                            <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 bg-[#0D6EFD] transition-all duration-300 group-hover:w-full" />
                          </span>
                          <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            whileHover={{ x: 3 }}
                            transition={{ type: "spring", stiffness: 300, damping: 18 }}
                          >
                            <path d="M9 18l6-6-6-6" />
                          </motion.svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
