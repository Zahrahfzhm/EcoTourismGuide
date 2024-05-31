<<<<<<< HEAD
import Header from "../components/Navbar/header";
import Footer from "../components/Navbar/footer";
import DashboardWisatawanContainer from "../components/Container/DashboardWisatawan";
=======
import WisatawanContainer from "@/components/Container/DashboardWisatawan";
import Header from "@/components/Navbar/header";
import Footer from "@/components/Navbar/footer";
import DashboardWisatawanContent from "@/components/Content/DashboardWisatawan/index";
>>>>>>> 4f7d51d9bb3c5b2ad15125529162c72943d1825d

export default function Home() {
  return (
    <div className="">
      <Header />
      <WisatawanContainer>
        <DashboardWisatawanContent/>
      </WisatawanContainer>
      <Footer />
    </div>
  );
}
