import PageVerifikasi1 from "@/components/Container/PageAdminVerifikasi/page1";
import Sidebar from "@/components/Sidebar";

export default function Verifikasi(){
    return( 
       <div className="flex space-x-6">
            <Sidebar/>
            <PageVerifikasi1/>
       </div> 
    );
}