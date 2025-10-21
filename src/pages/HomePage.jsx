// pages/HomePage.jsx
import HeroSwiperSplitGlass from "../components/HeroSwiperSplitGlass.jsx";
import ServicesSection from "../components/Services.jsx";
import AboutSection from "../components/Aboutus.jsx";
import ProductsGrid from "../components/Products.jsx";
import ClinicTrustSection from "../components/ClinicTrustSection.jsx";
import ContactLeadSection from "../components/ContactLeadSection.jsx";
import blueImg from "../assets/18.png";
import slider1 from "../assets/desibel-isitme-4.jpg";
import slider2 from "../assets/slider2.jpg";

export default function HomePage() {
  const slides = [
    {
      headlineTop: "Her İhtiyaca Uygun",
      headlineBold: "İşitme Cihazları",
      body:
        "Günümüz teknolojisinin geldiği noktada her yaştan insan için işitme kaybı bir engel olmaktan çıkmıştır. Hayatı duyarak yaşamanın tadına bizimle varın.",
      ctaText: "Şimdi Bize Ulaşın",
      onCta: () => (window.location.href = "tel:+902242230214"),
      leftWaveUrl: blueImg,
      rightImageUrl: slider1,
    },
    {
      headlineTop: "Dünyanın Önde Gelen",
      headlineBold: "İşitme Cihazları Phonak, Cochlear, Philips",
      body:
        "Ürün yelpazesini genişleten Desibel İşitme Merkezimiz, işitme cihazından fayda göremeyen işitme kayıplı bireylere alanında uzman ekibimizle hizmet vermektedir.",
      ctaText: "Cihazları Keşfet",
      onCta: () => (window.location.href = "tel:+902242230214"),
      leftWaveUrl: blueImg,
      rightImageUrl: slider2,
    },
  ];

  return (
    <>
      <HeroSwiperSplitGlass slides={slides} />
      <ServicesSection />
      <AboutSection />
      <ProductsGrid />
      <ClinicTrustSection />
      <ContactLeadSection />
    </>
  );
}
