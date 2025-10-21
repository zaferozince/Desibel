// src/data/blog.js
import image1 from "../assets/product1.png";

export const POSTS = [
  {
    id: "b1",
    title: "İşitme Cihazı Seçerken 7 İpucu",
    category: "İşitme Cihazları",
    date: "2025-03-01",
    cover: image1,
    excerpt:
      "Yaşam tarzı, işitme kaybı tipi ve kulak anatomisi; doğru cihaz seçiminde belirleyici üç kriterdir.",
    author: "Desibel Ekibi",
    content: `
## Neden doğru seçim önemli?
Doğru işitme cihazı; konuşma anlaşılırlığı, konfor ve **bağlantı** özellikleriyle günlük yaşam kalitesini artırır.

### 1. Yaşam tarzınızı analiz edin
Ev/iş/kalabalık ortam dağılımınıza göre cihazın gürültü yönetimi ihtiyaçlarınızı belirleyin.

### 2. İşitme kaybı tipiniz
Sensörinöral/iletim tipi/derece \`fit\` kararında belirleyicidir.

### 3. Kulak anatomisi
Kanal yapısı kalıp ve *receiver* seçiminde kritiktir.

> İpucu: REM (Gerçek-Kulak Ölçümü) ile kişisel ayarları doğrulayın.
    `,
  },
  {
    id: "b2",
    title: "Şarjlı mı Pil’li mi? Artıları Eksileri",
    category: "Bakım & Aksesuar",
    date: "2025-02-14",
    cover: image1,
    excerpt: "Şarj kolaylığı vs. değişim esnekliği: hangisi size uygun?",
    author: "Odyolog Zeynep",
    content: `
### Şarjlı modeller
+ Her gün düzenli kullanımda pratik.
+ Kılıf/stand ile gece şarjı.

### Pil’li modeller
+ Seyrek kullanımda avantajlı.
+ Ani pil değişimi mümkün.

Karar: Kullanım **yoğunluğu** ve **alışkanlıklar** belirleyici olur.
    `,
  },
  {
    id: "b3",
    title: "Gürültüde Konuşmayı Anlama Testi Nedir?",
    category: "Test & Tanı",
    date: "2025-01-30",
    cover: image1,
    excerpt: "Gerçek hayat koşullarını taklit eden kritik bir ölçüm.",
    author: "Odyolog Mehmet",
    content: `
Gürültü zemininde konuşma anlaşılırlığını ölçer; cihaz ayarlarında hedef **SNR**'a ulaşmayı amaçlarız.
    `,
  },
];
