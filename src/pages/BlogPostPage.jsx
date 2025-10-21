import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { POSTS } from "../data/blog";

const BRAND = "#0D6EFD";

const readMinutes = (text = "") =>
  Math.max(1, Math.round((text.split(/\s+/).length || 300) / 180));

export default function BlogPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const postIndex = useMemo(() => POSTS.findIndex(p => p.id === id), [id]);
  const post = postIndex >= 0 ? POSTS[postIndex] : null;

  // 404
  useEffect(() => {
    if (!post) document.title = "Yazı bulunamadı | Desibel Blog";
    else document.title = `${post.title} | Desibel Blog`;
    window.scrollTo(0, 0);
  }, [post]);

  // Okuma ilerleme barı
  const articleRef = useRef(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handler = () => {
      const el = articleRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.scrollHeight - window.innerHeight * 0.6; // biraz erken dolsun
      const scrolled = Math.min(Math.max(window.scrollY - el.offsetTop + window.innerHeight * 0.2, 0), total);
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  if (!post) {
    return (
      <main className="min-h-[60vh] flex items-center justify-center px-6 text-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Yazı bulunamadı</h1>
          <p className="mt-2 text-slate-600">Aradığınız içerik kaldırılmış veya taşınmış olabilir.</p>
          <Link to="/blog" className="mt-4 inline-block rounded-lg px-4 py-2 bg-[#0D6EFD] text-white font-semibold">
            Blog Anasayfa
          </Link>
        </div>
      </main>
    );
  }

  const sorted = useMemo(
    () => [...POSTS].sort((a, b) => new Date(b.date) - new Date(a.date)),
    []
  );
  const iSorted = sorted.findIndex(p => p.id === post.id);
  const prev = iSorted > 0 ? sorted[iSorted - 1] : null;
  const next = iSorted < sorted.length - 1 ? sorted[iSorted + 1] : null;

  const related = useMemo(
    () => POSTS.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3),
    [post]
  );

  const shareWhatsApp = () => {
    const url = window.location.href;
    window.open(`https://wa.me/?text=${encodeURIComponent(post.title + " — " + url)}`, "_blank");
  };
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Bağlantı kopyalandı ✅");
    } catch {
      alert("Kopyalanamadı, lütfen manuel kopyalayın.");
    }
  };

  return (
    <main className="min-h-screen">
      {/* Progress bar */}
      <div className="sticky top-0 z-[60] h-1 bg-slate-200/50">
        <div
          className="h-full bg-[#0D6EFD] transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_10%_10%,#eef4ff_0%,#f6faff_40%,#ffffff_100%)]" />
        <div className="relative max-w-7xl mx-auto px-6 pt-10 pb-6 sm:pt-14">
          <nav className="text-sm text-slate-600">
            <Link to="/" className="hover:text-[#0D6EFD]">Anasayfa</Link>
            <span className="mx-2 opacity-60">/</span>
            <Link to="/blog" className="hover:text-[#0D6EFD]">Blog</Link>
            <span className="mx-2 opacity-60">/</span>
            <span className="text-slate-900">{post.title}</span>
          </nav>

          <div className="mt-4 grid gap-6 lg:grid-cols-3 items-end">
            {/* Başlık + meta (glass) */}
            <div className="lg:col-span-2 rounded-3xl bg-white/70 backdrop-blur-xl border border-white shadow-[0_10px_40px_rgba(13,110,253,0.10)] p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0D6EFD]">
                <span className="h-[2px] w-10 bg-[#0D6EFD] rounded-full" />
                {post.category}
              </div>
              <h1 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800">
                {post.title}
              </h1>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600">
                <span>{new Date(post.date).toLocaleDateString("tr-TR")}</span>
                <span>•</span>
                <span>{readMinutes(post.content)} dk okuma</span>
                <span>•</span>
                <span>Yazar: {post.author}</span>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                {/* <button
                  onClick={shareWhatsApp}
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-2 bg-[#0D6EFD] text-white text-sm font-semibold hover:opacity-90"
                >
                  WhatsApp ile paylaş
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button> */}
                <button
                  onClick={copyLink}
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-slate-200 text-sm font-semibold hover:border-[#0D6EFD] hover:text-[#0D6EFD]"
                >
                  Bağlantıyı kopyala
                </button>
              </div>
            </div>

            {/* Kapak */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              {post.cover ? (
                <img src={post.cover} alt={post.title} className="w-full h-[220px] object-cover" />
              ) : (
                <div className="w-full h-[220px] bg-gradient-to-br from-slate-100 to-slate-50" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section ref={articleRef} className="relative">
        <div className="relative max-w-7xl mx-auto px-6 pb-14">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Makale */}
            <article className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 leading-relaxed text-slate-800">
              {/* Basit markdown-ish render: başlıkları ve paragrafları koru */}
              {post.content.split("\n").map((line, i) => {
                if (/^### /.test(line)) {
                  return <h3 key={i} className="mt-6 text-xl font-bold">{line.replace(/^### /, "")}</h3>;
                }
                if (/^## /.test(line)) {
                  return <h2 key={i} className="mt-8 text-2xl font-extrabold">{line.replace(/^## /, "")}</h2>;
                }
                if (/^> /.test(line)) {
                  return <blockquote key={i} className="mt-4 border-l-4 border-slate-200 pl-4 italic text-slate-600">{line.replace(/^> /, "")}</blockquote>;
                }
                if (/^\s*[-+*] /.test(line)) {
                  return <li key={i} className="list-disc ml-6">{line.replace(/^\s*[-+*] /, "")}</li>;
                }
                if (/^```/.test(line)) {
                  // Kısa tutuyoruz; gerçek markdown için react-markdown tercih edebilirsin.
                  return null;
                }
                const trimmed = line.trim();
                if (!trimmed) return <br key={i} />;
                // inline code
                const parts = trimmed.split(/`([^`]+)`/g);
                return (
                  <p key={i} className="mt-3">
                    {parts.map((p, idx) =>
                      idx % 2 === 1 ? (
                        <code key={idx} className="rounded bg-slate-100 px-1 py-0.5 text-sm">{p}</code>
                      ) : (
                        p
                      )
                    )}
                  </p>
                );
              })}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="rounded-2xl bg-white/70 backdrop-blur-xl border border-white shadow-[0_10px_40px_rgba(13,110,253,0.10)] p-6">
                <h4 className="text-lg font-bold text-slate-800">Hızlı İletişim</h4>
                <p className="mt-1 text-sm text-slate-600">Sorularınız için bize ulaşın.</p>
                <div className="mt-4 flex gap-2">
                  <a href="https://wa.me/905533138834?text=Merhaba%2C%20blog%20yazısıyla%20ilgili%20soru%20sormak%20istiyorum."
                     target="_blank" rel="noreferrer"
                     className="inline-flex items-center gap-2 rounded-lg px-3 py-2 bg-[#0D6EFD] text-white text-sm font-semibold hover:opacity-90">
                    WhatsApp
                  </a>
                  <a href="tel:+905533138834"
                     className="inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-slate-200 text-sm font-semibold hover:border-[#0D6EFD] hover:text-[#0D6EFD]">
                    Ara
                  </a>
                </div>
              </div>

              {/* İlgili yazılar */}
              {related.length > 0 && (
                <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6">
                  <h4 className="text-lg font-bold text-slate-800">İlgili Yazılar</h4>
                  <div className="mt-4 grid grid-cols-1 gap-4">
                    {related.map(r => (
                      <Link
                        key={r.id}
                        to={`/blog/${r.id}`}
                        className="group flex gap-3 rounded-xl border border-slate-200 hover:border-[#0D6EFD] transition p-3"
                      >
                        <div className="w-24 h-16 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                          {r.cover ? (
                            <img src={r.cover} alt={r.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform" />
                          ) : null}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-800 group-hover:text-[#0D6EFD]">{r.title}</div>
                          <div className="text-xs text-slate-500">{new Date(r.date).toLocaleDateString("tr-TR")}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>

          {/* Prev / Next */}
          <div className="mt-10 flex items-center justify-between">
            {prev ? (
              <Link to={`/blog/${prev.id}`} className="text-sm rounded-lg px-3 py-2 border border-slate-200 hover:border-[#0D6EFD]">
                ← {prev.title}
              </Link>
            ) : <span />}

            {next ? (
              <Link to={`/blog/${next.id}`} className="text-sm rounded-lg px-3 py-2 border border-slate-200 hover:border-[#0D6EFD]">
                {next.title} →
              </Link>
            ) : <span />}
          </div>
        </div>
      </section>
    </main>
  );
}
