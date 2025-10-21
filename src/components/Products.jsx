// ProductsGrid.jsx
import React, { useMemo, useState } from "react";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.jpg";

const PHONE = "905533138834"; // WhatsApp için numarayı düz yaz (başına + koyma)
const WA = (msg) =>
    `https://wa.me/${PHONE}?text=${encodeURIComponent(
        msg || "Merhaba, ürün hakkında bilgi almak istiyorum."
    )}`;

const RAW_PRODUCTS = [
    {
        id: "p1",
        name: "Phonak Naída™ Paradise",
        brand: "Phonak",
        img: product1,
        desc: "İleri düzey, güçlü ses, akıllı telefonlara, televizyona ve çok daha fazlasına bağlanma özelliği ve destekleyici akıllı uygulamalara sahip power BTE işitme cihazı.",
        href: "#",
    },
    {
        id: "p2",
        name: "Phonak Audéo™ Paradise",
        brand: "Phonak",
        img: product2,
        desc: "Paradise ile duyamayacağınız bir ses yok. Yepyeni bir donanıma sahip Audéo Paradise, işitme performansıyla öne çıkar ve birçok gelişmiş özellik bulundurur.",
        href: "#",
    },
    {
        id: "p3",
        name: "miniRITE T R",
        brand: "Philips HearLink",
        img: product3,
        desc: "Bu işitme cihazının şarj edilebilir pili yalnızca 3 saatte şarj olur. Hafif ve ileri derece işitme kayıpları için farklı hoparlörlere sahiptir. Kulak içi alıcılı işitme cihazı",
        href: "#",
    },
    {
        id: "p4",
        name: "Philips Hearing IIC",
        brand: "Philips HearLink",
        img: product4,
        desc: "Ekstra küçük ve neredeyse görünmez kulak içi işitme cihazı. Kanal içi işitme cihazı hafif veya orta derece işitme kayıpları içindir. Kulak kanalı derinliğine yerleşir ve azami gizlilik için pratikte neredeyse görünmezdir.",
        href: "#",
    },
    {
        id: "p5",
        name: "Nucleus® 7 Ses İşlemcisi",
        brand: "Cochlear",
        img: product5,
        desc: "Nucleus® 7 Ses İşlemcisi en küçük ve en hafif kulak arkası koklear implant ses işlemcisidir. Uyumlu bir Apple veya Android™ cihazından doğrudan ses akışı sağlayan, dahili ve gelişmiş bir teknoloji içerir.",
        href: "#",
    },
    {
        id: "p6",
        name: "Baha® 6 Max Ses İşlemcisi",
        brand: "Cochlear",
        img: product6,
        desc: "Baha 6 Max performanstan ödün vermeyen, üstün güce sahip kemik iletimli bir ses işlemcisidir. Net, zengin ve doğal ses akışı sağlayan, küçük ve göze çarpmayacak şekilde tasarlanmıştır.",
        href: "#",
    },
];

export default function ProductsGrid() {
    const [brand, setBrand] = useState("Tümü");
    const [q, setQ] = useState("");

    const brands = useMemo(() => {
        const set = new Set(RAW_PRODUCTS.map((p) => p.brand));
        return ["Tümü", ...Array.from(set)];
    }, []);

    const products = useMemo(() => {
        let list = RAW_PRODUCTS;
        if (brand !== "Tümü") list = list.filter((p) => p.brand === brand);
        if (q.trim()) {
            const s = q.toLowerCase();
            list = list.filter(
                (p) =>
                    p.name.toLowerCase().includes(s) ||
                    p.desc.toLowerCase().includes(s) ||
                    p.brand.toLowerCase().includes(s)
            );
        }
        return list;
    }, [brand, q]);

    return (
        <section id="products" className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4">
                {/* Başlık */}
                <div className="text-center mb-10">
                    <div className="text-[#0D6EFD] font-semibold tracking-wide">
                        İŞİTME CİHAZLARI
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-800 mt-2">
                        Phonak, Cochlear, Philips HearLink
                    </h2>
                    <div className="w-16 h-1 bg-[#0D6EFD] mx-auto mt-4 rounded-full" />
                </div>

                {/* Filtre & Arama */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                    <div className="flex flex-wrap items-center gap-2">
                        {brands.map((b) => (
                            <button
                                key={b}
                                onClick={() => setBrand(b)}
                                className={`px-3.5 py-1.5 rounded-full text-sm border transition
                  ${brand === b
                                        ? "bg-[#0D6EFD] text-white border-[#0D6EFD]"
                                        : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                                    }`}
                            >
                                {b}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-72">
                        <input
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Ürün veya marka ara…"
                            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 px-3.5 pr-9 outline-none focus:border-[#0D6EFD] transition"
                        />
                        <svg
                            className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <circle cx="11" cy="11" r="7" />
                            <path d="M21 21l-4.3-4.3" />
                        </svg>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {products.map((p) => (
                        <article
                            key={p.id}
                            className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200
                            shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full
                            before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none
                            before:bg-[conic-gradient(from_180deg,rgba(13,110,253,0)_0%,rgba(13,110,253,.15)_25%,rgba(13,110,253,0)_50%,rgba(0,212,255,.15)_75%,rgba(13,110,253,0)_100%)]
                            before:opacity-0 hover:before:opacity-100 before:transition-opacity before:-z-10 relative z-0"
                        >
                            {/* Görsel alanı */}
                            <div className="relative bg-white">
                                <div className="aspect-[4/3] w-full overflow-hidden">
                                    <img
                                        src={p.img}
                                        alt={p.name}
                                        className="w-full h-full object-contain p-6 transition-transform duration-300 group-hover:scale-[1.04]"
                                        loading="lazy"
                                    />
                                </div>
                                {/* üst sağ marka etiketi */}
                                <span className="absolute top-3 right-3 rounded-full bg-white/90 border border-slate-200 text-lg font-semibold px-2 py-1">
                                    {p.brand}
                                </span>
                            </div>

                            {/* İçerik */}
                            <div className="p-5 flex flex-col items-center text-center gap-2 grow">
                                <h3 className="text-3xl font-semibold text-slate-800">
                                    {p.name}
                                </h3>
                                <p className="text-lg text-slate-600 leading-relaxed line-clamp-3">
                                    {p.desc}
                                </p>
                            </div>

                            {/* Alt aksiyonlar */}
                            <div className="p-5 border-t border-slate-100 flex items-center justify-center">
                                <a
                                    href={WA(
                                        `Merhaba, ${p.name} hakkında bilgi almak istiyorum.`
                                    )}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 bg-[#0D6EFD] text-white text-lg font-semibold hover:opacity-90 transition"
                                >
                                    Keşfet
                                    <svg
                                        className="w-6 h-6"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
