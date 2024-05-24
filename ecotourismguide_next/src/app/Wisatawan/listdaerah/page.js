import WisatawanContainer from "@/components/Container/DashboardWisatawan";
import DashboardDaerahWisatawanContent from "@/components/Content/DashboardWisatawan/listdaerah";

export default function Home() {
  return (
    <div className="">
      <WisatawanContainer>
        <DashboardDaerahWisatawanContent/>
      </WisatawanContainer>
    </div>
  );
}