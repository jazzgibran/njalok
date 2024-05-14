import WelcomeSection from "./components/welcome/welcome";
import MenuSection from "./components/menu/menu";
import AboutSection from "./components/about/about";
import ContactSection from "./components/contact/contact";
import ScrollToTopButton from "./components/ScrollToTop/ScrollToTopButton";
import ScrollToTop from "./components/ScrollToTop/scrollToTop";
import Gallery from "./components/gallery/gallery";
export default function Home() {
  return (
    <div>
      <ScrollToTop/>
      <ScrollToTopButton />
      <WelcomeSection />
      <MenuSection />
      <AboutSection />
      <Gallery/>
      <ContactSection/>
      
    </div>
  );
}
