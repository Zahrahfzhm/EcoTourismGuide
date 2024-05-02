import PageVerifikasi3 from "@/components/Container/PageAdminVerifikasi/page1";
import Sidebar from "@/components/Sidebar";

export default function Verifikasi3(){
    return( 
       <div className="flex space-x-6">
            <Sidebar/>
            <PageVerifikasi3/>
       </div> 
    );
}