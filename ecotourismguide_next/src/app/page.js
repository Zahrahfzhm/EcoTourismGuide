import Header from "../components/Navbar/header";
import Footer from "@/components/Navbar/footer";
import DashboardWisatawanContainer from "@/components/Container/DashboardWisatawan";

export default function Home() {
  return (
    <div className="">
      <Header />
      <DashboardWisatawanContainer />
      <Footer />
    </div>
  );
}
