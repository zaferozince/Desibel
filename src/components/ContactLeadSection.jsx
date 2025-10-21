// ContactLeadSection.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import hero from "../assets/form-hero.jpg"; // sağ görseli buraya koy

const BRAND = "#0D6EFD";
const FORM_ENDPOINT = "/api/contact-lead.php"; // kendi endpoint’in

function normalizeTRPhoneToE164Like(input) {
  const digits = (input || "").replace(/\D+/g, "");
  if (!digits) return null;
  // 0XXXXXXXXXX  -> 90XXXXXXXXXX
  if (digits.length === 11 && digits.startsWith("0")) return "9" + digits;
  // 5XXXXXXXXX   -> 90XXXXXXXXXX
  if (digits.length === 10 && digits.startsWith("5")) return "90" + digits;
  // 90XXXXXXXXXX -> olduğu gibi
  if (digits.length === 12 && digits.startsWith("90")) return digits;
  return null; // geçersiz
}

export default function ContactLeadSection() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setErr("");

    const name = form.name.trim();
    const email = form.email.trim();
    const phoneNorm = normalizeTRPhoneToE164Like(form.phone);
    const message = form.message.trim();

    if (name.length < 3) return setErr("Lütfen ad soyadınızı doğru girin.");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setErr("Geçerli bir e-posta girin.");
    if (!phoneNorm) return setErr("Lütfen telefonunuzu 05xx xxx xx xx formatında girin.");

    try {
      setLoading(true);
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          name,
          email: email || null,
          phone_e164: phoneNorm,     // "90xxxxxxxxxx"
          message: message || null,
          source: "desibelisitme.com"
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && (data.status === "ok" || data.success)) {
        setOk(true);
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error(data.msg || "Gönderilemedi. Lütfen tekrar deneyin.");
      }
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* gradient arkaplan */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_0%_0%,#f3f7ff_0%,#eef4ff_35%,#ffffff_100%)]" />
      <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* SOL: glass form kartı */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white/60 backdrop-blur-xl rounded-3xl border border-white/70 shadow-[0_20px_60px_rgba(13,110,253,0.10)] p-6 sm:p-8"
          >
            <div className="text-[13px] font-semibold tracking-wider text-[#0D6EFD]">
              MEMNUNİYET ODAKLI İLETİŞİM
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-800">
              Formu doldurun, sizi arayalım
            </h2>
            <p className="mt-1 text-slate-600">
              Bilgilerinizi bırakın; uygun olduğunuz zamanda uzmanımız sizi arasın.
            </p>

            {!ok ? (
              <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Adınız</label>
                  <input
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 outline-none focus:border-[#0D6EFD] transition"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">E-posta</label>
                    <input
                      type="email"
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 outline-none focus:border-[#0D6EFD] transition"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="(opsiyonel)"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Telefon</label>
                    <input
                      inputMode="tel"
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 outline-none focus:border-[#0D6EFD] transition"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="05xx xxx xx xx"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">Mesajınız</label>
                  <textarea
                    rows={4}
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 outline-none focus:border-[#0D6EFD] transition"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Kısaca belirtmek ister misiniz? (opsiyonel)"
                  />
                </div>

                {err && (
                  <div className="text-sm text-red-600">{err}</div>
                )}

                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3
                               bg-[#0D6EFD] text-white font-semibold hover:opacity-90 disabled:opacity-60 transition"
                  >
                    {loading ? "Gönderiliyor..." : "Gönder"}
                    {!loading && (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    )}
                  </button>

                  <a
                    href={`https://wa.me/905533138834?text=${encodeURIComponent("Merhaba, bilgi almak istiyorum.")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-slate-200
                               font-semibold text-slate-700 hover:border-[#0D6EFD] hover:text-[#0D6EFD] transition"
                  >
                    WhatsApp’tan Yaz
                  </a>
                </div>
              </form>
            ) : (
              <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-6">
                <div className="text-xl font-semibold text-slate-800">Teşekkürler! 🎉</div>
                <p className="mt-1 text-slate-600">
                  Bilgileriniz bize ulaştı. En kısa sürede sizinle iletişime geçeceğiz.
                </p>
                <button
                  onClick={() => setOk(false)}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-slate-900 text-white hover:opacity-90"
                >
                  Bir form daha gönder
                </button>
              </div>
            )}
          </motion.div>

          {/* SAĞ: görsel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="rounded-[28px] overflow-hidden shadow-2xl">
              <img src={hero} alt="Mutlu danışan" className="w-full h-[580px] object-cover" />
            </div>
            {/* küçük brand vurgusu */}
            <div className="absolute -bottom-6 left-6 bg-white rounded-2xl border border-slate-200 shadow-xl px-5 py-4">
              <div className="text-2xl font-extrabold text-slate-800">%100</div>
              <div className="text-sm text-slate-600 -mt-1">Müşteri Memnuniyeti</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
