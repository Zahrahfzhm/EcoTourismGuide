import RegistrasiForm from "@/components/Content/Registrasi";
import Footer from "@/components/Navbar/Footer"; // Corrected import path for Footer
import Header from "@/components/Navbar/Header"; // Corrected import path for Header

export default function Registrasi() {
  return (
    <div>
        <Header/>
        <RegistrasiForm/>
        <Footer/>
    </div>
  );
}