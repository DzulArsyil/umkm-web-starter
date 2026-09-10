import { siteConfig } from "./config/site";
import { Navbar, Footer } from "./components/layout/Layout";
import {
  Hero,
  Highlights,
  Services,
  Products,
  About,
  Features,
  Gallery,
  Testimonials,
  FAQ,
  Location,
  ContactCTA,
} from "./components/sections/Sections";
import { WhatsAppButton } from "./components/ui/WhatsAppButton";

export default function App() {
  const { sections, business } = siteConfig;

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <main>
        {sections.hero && <Hero />}
        {sections.highlights && <Highlights />}
        {sections.services && <Services />}
        {sections.products && <Products />}
        {sections.about && <About />}
        {sections.features && <Features />}
        {sections.gallery && <Gallery />}
        {sections.testimonials && <Testimonials />}
        {sections.faq && <FAQ />}
        {sections.location && <Location />}
        {sections.contact && <ContactCTA />}
      </main>
      <Footer />

      {/* Mobile Floating WhatsApp Button */}
      <div className="fixed bottom-4 right-4 z-40 md:hidden">
        <WhatsAppButton
          phone={business.whatsapp}
          label="Chat"
          variant="floating"
          className="shadow-lg"
        />
      </div>
    </div>
  );
}
