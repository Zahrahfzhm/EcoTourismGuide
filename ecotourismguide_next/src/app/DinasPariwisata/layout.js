import Sidebar from "@/components/Sidebar";
import AdminContainer from "@/components/Container/DashboardAdmin";
import MainContainer from "@/components/Container/DashboardAdmin/midContainer";
import AsideContainer from "@/components/Container/DashboardAdmin/asideContainer";



export default function Layout({ children }) {
    return (
        <div className="flex space-x-6">
            <Sidebar />
            <AdminContainer>
                {children}
            </AdminContainer>
        </div>
    );
  }
  