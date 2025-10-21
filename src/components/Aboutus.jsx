import { motion } from "framer-motion";
import rightImg  from "../assets/aboutUs.png";

const variants = {
  fadeUp: { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } } },
  float:  { hover:  { y: -4, transition: { type: "spring", stiffness: 200, damping: 16 } } }
};

export default function GradientSplitGlass() {
  return (
    <section className="relative overflow-hidden">
      {/* GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_120%_at_20%_20%,#1e3a8a_0%,#0b2a63_35%,#001635_100%)]" />
      {/* yumuşak parlama */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-[40vw] h-[40vw] rounded-full blur-3xl opacity-25 bg-blue-400" />
      <div className="pointer-events-none absolute -bottom-20 right-0 w-[36vw] h-[36vw] rounded-full blur-3xl opacity-20 bg-cyan-300" />

      <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* SOL: GÖRSEL */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={rightImg}
                alt="Desibel İşitme Merkezi"
                className="w-full h-[420px] md:h-[520px] object-cover"
                loading="lazy"
              />
              {/* hafif gradient overlay okunurluk için */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/0" />
            </div>
          </motion.div>

          {/* SAĞ: İKİ GLASS KART */}
          <div className="order-2 space-y-6">
            {/* Kart 1 */}
            <motion.article
              variants={variants.fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              whileHover="hover"
              className="group relative rounded-3xl p-7 md:p-8 
                         bg-white/10 border border-white/15 
                         backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
            >
              {/* cam parıltısı */}
              <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.h3 variants={variants.float} className="text-white text-3xl font-bold">
                Desibel
              </motion.h3>
              <p className="mt-3 text-lg text-slate-100/90 leading-relaxed">
                İşitme cihazından maksimum fayda görebilmeniz için her ortamda en iyi anlama
                sağlayacak bilimsel uyarlama testlerini uyguluyoruz.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href="tel:02242235801"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 
                             bg-white/80 text-blue-900 font-semibold
                             hover:bg-white transition"
                >
                  Keşfet
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                </a>
                <span className="text-white/70 text-sm">Uzman odyologlarla birebir</span>
              </div>
            </motion.article>

            {/* Kart 2 */}
            <motion.article
              variants={variants.fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              whileHover="hover"
              className="group relative rounded-3xl p-7 md:p-8 
                         bg-white/10 border border-white/15 
                         backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
            >
              <div className="pointer-events-none absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-cyan-200/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.h3 variants={variants.float} className="text-white text-3xl font-bold">
                Uzman Kadromuz ile
              </motion.h3>
              <p className="mt-3 text-lg text-slate-100/90 leading-relaxed">
                Kanıtlanmış fitting yöntemleri ile kaybınıza en uygun cihazı seçip kişiye
                özel ayar ve takip planı oluşturuyoruz.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href="tel:02242235801"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 
                             bg-white/80 text-blue-900 font-semibold
                             hover:bg-white transition"
                >
                  Keşfet
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                </a>
                <span className="text-white/70 text-sm">Bilimsel test protokolleri</span>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}