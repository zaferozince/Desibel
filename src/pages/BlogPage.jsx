// BlogPage.jsx
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import image1 from "../assets/product1.png";
// Marka
const BRAND = "#0D6EFD";

// Demo yazılar — kendi API’nizle doldurabilirsiniz
const RAW_POSTS = [
  {
    id: "b1",
    title: "İşitme Cihazı Seçerken 7 İpucu",
    category: "İşitme Cihazları",
    date: "2025-03-01",
    cover: image1,
    excerpt:
      "Yaşam tarzı, işitme kaybı tipi ve kulak anatomisi; doğru cihaz seçiminde belirleyici üç kriterdir. Peki başka neler?",
    content:
      "Uzun içerik örneği burada. Gerçek-Kulak Ölçümü, kalıp seçimi, bağlantı özellikleri…",
    author: "Desibel Ekibi",
  },
  {
    id: "b2",
    title: "Şarjlı mı Pil’li mi? Artıları Eksileri",
    category: "Bakım & Aksesuar",
    date: "2025-02-14",
    cover: image1,
    excerpt:
      "Lityum-iyon bataryalar günlük yaşamda büyük rahatlık sağlıyor. Pil’li modellerde ise değişim esnekliği öne çıkıyor.",
    content: "Metin…",
    author: "Odyolog Zeynep",
  },
  {
    id: "b3",
    title: "Gürültüde Konuşmayı Anlama Testi Nedir?",
    category: "Test & Tanı",
    date: "2025-01-30",
    cover: image1,
    excerpt:
      "S/N gürültü koşullarında yapılan değerlendirme, gerçek hayat performansını anlamak için kritik öneme sahiptir.",
    content: "Metin…",
    author: "Odyolog Mehmet",
  },
  {
    id: "b4",
    title: "Telefonla Doğrudan Bağlantı: Bluetooth Özellikleri",
    category: "İşitme Cihazları",
    date: "2024-12-22",
    cover: image1,
    excerpt:
      "İki cihaza aynı anda bağlanma, çağrı aktarımı, media streaming… Hepsi günlük konforu etkiliyor.",
    content: "Metin…",
    author: "Desibel Ekibi",
  },
  {
    id: "b5",
    title: "Filtre ve Dome Değişimi: Ne Zaman Gerekir?",
    category: "Bakım & Aksesuar",
    date: "2024-11-18",
    cover: image1,
    excerpt:
      "Tıkanan filtre ses kalitesini dramatik biçimde düşürür. Basit bakım adımlarıyla performansı koruyun.",
    content: "Metin…",
    author: "Odyolog Elif",
  },
  {
    id: "b6",
    title: "Gerçek-Kulak Ölçümü (REM) Neden Standart Olmalı?",
    category: "Test & Tanı",
    date: "2024-10-02",
    cover: image1,
    excerpt:
      "Kanal içindeki gerçek akustik yanıt ölçülmeden 'tam uyum'dan bahsetmek mümkün değil.",
    content: "Metin…",
    author: "Desibel Ekibi",
  },
  {
    id: "b7",
    title: "Cihaz Ayarı ve Kişiselleştirme",
    category: "İşitme Cihazları",
    date: "2024-08-12",
    cover: "",
    excerpt:
      "Sesleri kişiye özel konfor ve anlaşılırlığa getiren parametreler: kazanç, MPO, sıkıştırma ve daha fazlası.",
    content: "Metin…",
    author: "Desibel Ekibi",
  },
  {
    id: "b8",
    title: "Aksesuar Rehberi: TV Connector, Uzaktan Mikrofon",
    category: "Bakım & Aksesuar",
    date: "2024-07-01",
    cover: "",
    excerpt:
      "Evde TV izlerken veya toplantıda konuşmacıyı net duymak için doğru aksesuarı seçin.",
    content: "Metin…",
    author: "Desibel Ekibi",
  },
  {
    id: "b9",
    title: "Odyometrik Ölçüm Türleri",
    category: "Test & Tanı",
    date: "2024-05-25",
    cover: "",
    excerpt:
      "Saf ses, konuşma odyometrisi, timpanometri… Hangi ölçüm neyi gösterir?",
    content: "Metin…",
    author: "Desibel Ekibi",
  },
];

// küçük yardımcılar
const readMinutes = (text = "") =>
  Math.max(1, Math.round((text.split(/\s+/).length || 120) / 180));

const categories = ["Tümü", "İşitme Cihazları", "Bakım & Aksesuar", "Test & Tanı"];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function BlogPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Tümü");
  const [page, setPage] = useState(1);
  const PER_PAGE = 6;

  const filtered = useMemo(() => {
    let list = [...RAW_POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));
    if (cat !== "Tümü") list = list.filter((p) => p.category === cat);
    if (q.trim()) {
      const s = q.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(s) ||
          p.excerpt.toLowerCase().includes(s) ||
          p.category.toLowerCase().includes(s)
      );
    }
    return list;
  }, [q, cat]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const slice = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function changeCat(next) {
    setCat(next);
    setPage(1);
  }

  return (
    <main className="min-h-screen">
      {/* HERO (gradient + glass) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_10%_10%,#eef4ff_0%,#f6faff_40%,#ffffff_100%)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 text-[13px] font-semibold tracking-wider text-[#0D6EFD]">
              <span className="h-[2px] w-10 bg-[#0D6EFD] rounded-full" />
              DESİBEL BLOG
            </div>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800">
              Daha İyi Duymanın Rehberi
            </h1>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              İşitme cihazları, bakım & aksesuarlar ve test yöntemleri hakkında güncel yazılar.
            </p>

            {/* Arama */}
            <div className="mt-6 mx-auto max-w-xl">
              <div className="relative">
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Makale veya konu ara…"
                  className="w-full rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm px-4 py-3 pr-10 outline-none focus:border-[#0D6EFD] transition"
                />
                <svg
                  className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Kategori çipleri (glass) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => changeCat(c)}
                className={`px-4 py-2 rounded-full text-sm border backdrop-blur
                  ${cat === c
                    ? "bg-white text-slate-900 border-white shadow-sm"
                    : "bg-white/50 text-slate-700 border-slate-200 hover:bg-white"} transition`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="relative">
        <div className="relative max-w-7xl mx-auto px-6 pb-16 sm:pb-20 lg:pb-24">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {slice.map((p) => (
              <motion.article
                variants={item}
                key={p.id}
                className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200
                           shadow-sm hover:shadow-xl transition-shadow flex flex-col"
              >
                {/* Kapak */}
                <div className="relative">
                  {p.cover ? (
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={p.cover}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center">
                      <span className="text-slate-400">Kapak görseli yok</span>
                    </div>
                  )}
                  {/* kategori rozeti */}
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 border border-slate-200 text-xs font-semibold px-2 py-1">
                    {p.category}
                  </span>
                </div>

                {/* Metin */}
                <div className="p-5 flex flex-col gap-2 grow">
                  <h3 className="text-lg font-semibold text-slate-800 group-hover:text-[#0D6EFD] transition">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {p.excerpt}
                  </p>
                </div>

                {/* Alt bilgi */}
                <div className="p-5 pt-0 text-xs text-slate-500 flex items-center justify-between">
                  <span>
                    {new Date(p.date).toLocaleDateString("tr-TR")} • {readMinutes(p.content)} dk okuma
                  </span>
                  <a
                    href={`/blog/${p.id}`}
                    className="inline-flex items-center gap-1 text-[#0D6EFD] font-semibold"
                  >
                    Oku
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Sayfalama */}
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-2 rounded-lg border border-slate-200 text-sm disabled:opacity-50"
            >
              Önceki
            </button>
            {Array.from({ length: pageCount }).map((_, i) => {
              const n = i + 1;
              return (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`size-9 rounded-lg text-sm border transition
                    ${page === n ? "bg-[#0D6EFD] text-white border-[#0D6EFD]" : "bg-white border-slate-200 hover:border-slate-300"}`}
                >
                  {n}
                </button>
              );
            })}
            <button
              onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
              disabled={page === pageCount}
              className="px-3 py-2 rounded-lg border border-slate-200 text-sm disabled:opacity-50"
            >
              Sonraki
            </button>
          </div>
        </div>
      </section>

      {/* Alt CTA şeridi (site bütünlüğü) */}
      <section className="relative py-12">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_100%_0%,#eef4ff_0%,#ffffff_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white shadow-[0_10px_40px_rgba(13,110,253,0.10)] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-800">Ücretsiz İşitme Testi Randevusu</h3>
              <p className="text-slate-600 text-sm">Uygun olduğunuz zamanı belirtin, sizi arayalım.</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/905533138834?text=Merhaba%2C%20randevu%20almak%20istiyorum."
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-[#0D6EFD] text-white font-semibold hover:opacity-90 transition"
              >
                WhatsApp’tan Yaz
              </a>
              <a
                href="tel:+905533138834"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-slate-200 font-semibold text-slate-700 hover:border-[#0D6EFD] hover:text-[#0D6EFD] transition"
              >
                Hemen Ara
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
