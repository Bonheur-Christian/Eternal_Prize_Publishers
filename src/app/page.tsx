import Contact from "@/components/Contacts";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Records from "@/components/Records";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <Records />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
