import MainContainer from "@/components/Container/DashboardAdmin/mainContainer";

export default function TabelVerifikasi(){
    return(
        <MainContainer>
            <p className="mx-6 mt-10 text-xl font-bold">Daftar proposal</p>
            
            <div className="mx-6 mt-6">
                <div className="flex flex-row gap-x-4">
                    <div className="flex flex-col">
                        <p className="mb-2 text-sm font-semibold text-white">Tempat wisata</p>
                        <div className="border border-2 border-white"></div>
                    </div>
                    
                    <p className="mb-2 text-sm font-semibold">UMKM</p> 
                </div>
                
                <hr className="border border-white"></hr>
            </div>
            

            <div className="flex flex-col mx-6">
                <div className="flex flex-row mx-6 mt-4 gap-x-3">
                    <div className="basis-1/3 px-4 py-2 bg-white rounded-lg shadow-md">
                        <p className="text-sm font-semibold">Menunggu konfirmasi</p>
                        <p className="mt-2 text-xs font-normal text-slate-500">Total dokumen:</p>
                        <p className="text-lg font-semibold">200</p>
                    </div>

                    <div className="basis-1/3 px-4 py-2 bg-white rounded-lg shadow-md">
                        <p className="text-sm font-semibold">Diterima</p>
                        <p className="mt-2 text-xs font-normal text-slate-500">Total dokumen:</p>
                        <p className="text-lg font-semibold">200</p>
                    </div>

                    <div className="basis-1/3 px-4 py-2 bg-white rounded-lg shadow-md">
                        <p className="text-sm font-semibold">Ditolak / dikembalikan</p>
                        <p className="mt-2 text-xs font-normal text-slate-500">Total dokumen:</p>
                        <p className="text-lg font-semibold">200</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md my-4 overflow-hidden">
                    <table className="w-full border border-collapse border-slate-300 table-auto">
                        <thead className="bg-[#1EC28B] text-sm font-bold text-white">
                            <tr>
                                <th className="px-4 py-2 text-left font-semibold">No</th>
                                <th className="px-4 py-2 text-left font-semibold">Column Name</th>
                                <th className="px-4 py-2 text-left font-semibold">Column Name</th>
                                <th className="px-4 py-2 text-left font-semibold">Column Name</th>
                                <th className="px-4 py-2 text-left font-semibold">Column Name</th>
                                <th className="px-4 py-2"></th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-normal">
                            <tr>
                                <td className="px-4 py-2">1</td>
                                <td className="px-4 py-2">Content</td>
                                <td className="px-4 py-2">Content</td>
                                <td className="px-4 py-2">Content</td>
                                <td className="px-4 py-2">Content</td>
                                <td className="px-4 py-2">
                                    <button className="bg-[#FF8345] hover:bg-[#c17a3a] text-white font-medium py-2 px-2 rounded">
                                        Button
                                    </button>
                                </td>
                            </tr>

                            <tr className="bg-gray-100">
                                <td className="px-4 py-2">2</td>
                                <td className="px-4 py-2">Content</td>
                                <td className="px-4 py-2">Content</td>
                                <td className="px-4 py-2">Content</td>
                                <td className="px-4 py-2">Content</td>
                                <td className="px-4 py-2">
                                    <button className="bg-[#FF8345] hover:bg-[#c17a3a] text-white font-medium py-2 px-2 rounded">
                                        Button
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>        
            

            
        </MainContainer>
    );
}