import ScrollUpButton from "@/components/ScrollUpButton";
import NavBar from "@/components/NavBar";
import MobileNavbar from "@/components/MobileNavbar";
import ContactModal from "@/components/ContactModal";
import AboutMe from "@/components/AboutMe";
import Schedule from "@/components/Schedule";
import Services from "@/components/Services";
import Cases from "@/components/Cases";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollUpButton />
      <NavBar />
      <MobileNavbar />
      <ContactModal />
      <main className="h-auto px-8 py-6 bg-background grid grid-cols-12 place-items-center lg:place-items-start">
        <AboutMe />
        <Schedule />
        <Services />
        <Cases />
      </main>
      <Footer />
    </>
  );
}
