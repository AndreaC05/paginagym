import "../style/Home.css";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Nosotros from "../components/Nosotros";
import Servicios from "../components/Servicios";
import Planes from "../components/Planes";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Nosotros />
      <Servicios />
      <Planes />
      <Contacto />
      <Footer />
    </>
  );
}
