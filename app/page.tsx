import WelcomeSection from "./components/welcome/welcome";
import MenuSection from "./components/menu/menu";
import AboutSection from "./components/about/about";
import ContactSection from "./components/contact/contact";
import ScrollToTopButton from "./components/ScrollToTop/ScrollToTopButton";
import ScrollToTop from "./components/ScrollToTop/scrollToTop";
export default function Home() {
  return (
    <div>
      <ScrollToTop/>
      <ScrollToTopButton />
      <WelcomeSection />
      <MenuSection />
      <ContactSection/>
      <AboutSection />
      
    </div>
  );
}
