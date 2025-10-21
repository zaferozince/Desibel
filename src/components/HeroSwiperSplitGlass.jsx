// src/components/HeroSwiperSplitGlass.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


function SlideContent({
  headlineTop,
  headlineBold,
  body,
  ctaText,
  onCta,
  leftWaveUrl,   // mavi dalga PNG (18.png)
  rightImageUrl, // sarı panel görseli
}) {
  return (
    <section className="relative isolate overflow-hidden min-h-[100svh] lg:min-h-[100svh] xl:min-h-[100svh]">
      {/* SOL MAVİ ZEMİN (ARKA KATMAN) */}
      <div className="absolute inset-0 bg-[#086AD8] z-0" />

      {/* SAĞ SARI PANEL (z-9) */}
      {rightImageUrl && (
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 hidden h-full w-[55%] min-w-[560px] lg:block z-[9]"
        >
          <img
            src={rightImageUrl}
            alt=""
            className="h-full w-full object-cover"
            loading="eager"
          />
          {/* Sarının soluna doğru hafif solma */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#0d6adf]/0 via-[#0d6adf]/0 to-[#0d6adf]/20" />
        </div>
      )}

      {/* MAVİ DALGA PNG (sağ tarafta, z-10) */}
      {leftWaveUrl && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[60%] lg:block z-[10]"
          style={{
            backgroundImage: `url(${leftWaveUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "right bottom",
          }}
        />
      )}

      {/* İÇERİK (her zaman üste) */}
      <div className="relative z-[20] mx-auto max-w-7xl px-6 py-6 md:py-20 sm:py-24 lg:py-28 xl:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-3">
          <motion.div className="lg:col-span-2"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="rounded-3xl bg-white/10 p-8 ring-1 ring-white/20 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] sm:p-10 lg:p-12">
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl leading-tight tracking-tight text-white sm:text-5xl lg:text-5xl"
              >
                {headlineTop}
                <br />
                <span className="font-bold">{headlineBold}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="mt-6 max-w-2xl text-white/90 sm:text-lg lg:text-2xl"
              >
                {body}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-8"
              >
                <button
                  onClick={onCta}
                  className="inline-flex items-center gap-2 rounded-full border border-white/60 px-6 py-3 text-white shadow-sm transition hover:bg-white/10 hover:ring-2 hover:ring-white/40 focus:outline-none"
                >
                  {ctaText}
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Mobilde sağ görsel */}
          {/* <div className="lg:hidden">
            {rightImageUrl && (
              <img
                src={rightImageUrl}
                alt=""
                className="mt-6 w-full rounded-2xl object-cover shadow-lg"
                loading="lazy"
              />
            )}
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default function HeroSwiperSplitGlass({
  slides = [],
  autoplay = true,
}) {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        slidesPerView={1}
        loop
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        pagination={{ clickable: true, el: ".hero-pagination" }}
        autoplay={autoplay ? { delay: 6000, disableOnInteraction: false } : false}
        speed={800}
        a11y={{ enabled: true }}
        className="hero-swiper h-[100svh] md:h-[100svh]"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <SlideContent {...s} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Oklar */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 z-[30] hidden -translate-y-1/2 items-center justify-between px-4 lg:flex">
        <button
          aria-label="Önceki"
          className="hero-prev pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white ring-1 ring-white/30 backdrop-blur-md transition hover:bg-white/30"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button
          aria-label="Sonraki"
          className="hero-next pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white ring-1 ring-white/30 backdrop-blur-md transition hover:bg-white/30"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>

      {/* Pagination */}
      <div className="hero-pagination absolute bottom-6 left-1/2 z-[30] -translate-x-1/2" />

      {/* Swiper dot CSS */}
      <style>{`
        .hero-swiper .swiper-pagination-bullet {
          width: 10px; height: 10px; opacity: 0.5; background: #fff; margin: 0 6px !important;
        }
        .hero-swiper .swiper-pagination-bullet-active { opacity: 1; }
      `}</style>
    </div>
  );
}
