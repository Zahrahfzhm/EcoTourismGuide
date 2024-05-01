import MainContainer from "@/components/Container/DashboardAdmin";
import Sidebar from "@/components/Sidebar"

export default function Home() {
  return (
    <div className="flex space-x-6">
      <Sidebar />
      <MainContainer />
    </div>
  )
}
