import WelcomeSection from "./components/welcome/welcome";
import MenuSection from "./components/menu/menu";
import AboutSection from "./components/about/about";
import ContactSection from "./components/contact/contact";

export default function Home() {
  return (
    <div>
      <WelcomeSection />
      <MenuSection />
      <ContactSection/>
      <AboutSection />
    </div>
  );
}
