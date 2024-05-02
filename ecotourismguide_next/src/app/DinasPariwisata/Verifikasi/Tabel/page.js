import PageVerifikasi2 from "@/components/Container/PageAdminVerifikasi/page1";
import Sidebar from "@/components/Sidebar";

export default function Verifikasi2(){
    return( 
       <div className="flex space-x-6">
            <Sidebar/>
            <PageVerifikasi2/>
       </div> 
    );
}