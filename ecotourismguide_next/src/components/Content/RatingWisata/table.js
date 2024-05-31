export default function DaftarRating(){
    return(
        <div className="flex flex-col mx-40">
            <p className="pt-10 text-white text-xl font-bold">Rating Wisata</p>

            <div className="mt-6 px-4 py-2 bg-white rounded-lg shadow-md">
                <p className="text-base font-semibold text-balance">Ulasan Saya</p>
                <p className="mt-1.5 text-xs font-normal text-slate-500 text-pretty">Berikut tertera jumlah dokumen registrasi aktif tempat wisata. Mohon periksa dokumen proposal masuk secara berkala.</p>
                
                <div className="flex flex-row mx-12 mt-4 gap-x-6 justify-center">
                    <div className="px-4 pr-8 py-2 bg-white rounded-lg shadow-md">
                        <p className="text-sm font-semibold">Menunggu Diulas</p>
                        <p className="mt-2 text-xs font-normal text-slate-500">Total tempat wisata/UMKM:</p>
                        <p className="text-lg font-semibold">200</p>
                    </div>

                    <div className="px-4 pr-8 py-2 bg-white rounded-lg shadow-md">
                        <p className="text-sm font-semibold">Telah Diulas</p>
                        <p className="mt-2 text-xs font-normal text-slate-500">Total tempat wisata/UMKM:</p>
                        <p className="text-lg font-semibold">200</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md my-4 overflow-hidden">
                    <table className="w-full border border-collapse border-slate-300 table-auto">
                        <thead className="bg-[#1EC28B] text-sm font-bold text-white">
                            <tr>
                                <th className="px-4 py-2 text-center font-semibold">No</th>
                                <th className="px-4 py-2 text-center font-semibold">Foto Destinasi</th>
                                <th className="px-4 py-2 text-center font-semibold">Nama Destinasi</th>
                                <th className="px-4 py-2 text-center font-semibold">Tanggal Kunjungan</th>
                                <th className="px-4 py-2 text-center font-semibold">Status</th>
                                <th className="px-4 py-2 text-center"></th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-normal">
                            <tr>
                                <td className="px-4 py-2 text-center">1</td>
                                <td className="px-4 py-2 text-center">
                                    <div className="flex justify-center">
                                        <div className="w-32 h-32 rounded-lg shadow-md overflow-hidden">
                                            <img src="https://picsum.photos/250/250?random=1" alt="Foto Destinasi 1" className="w-full h-full object-cover"/>
                                        </div>   
                                    </div>
                                    
                                </td>
                                <td className="px-4 py-2 text-center">Destinasi A</td>
                                <td className="px-4 py-2 text-center">01-01-2022</td>
                                <td className="px-4 py-2 text-center">Menunggu Diulas</td>
                                <td className="px-4 py-2 text-center">
                                    <button className="bg-[#FF8345] hover:bg-[#c17a3a] text-white font-medium py-2 px-2 rounded">
                                        Ulas Sekarang
                                    </button>
                                </td>
                            </tr>

                            <tr className="bg-gray-100">
                                <td className="px-4 py-2 text-center">2</td>
                                <td className="px-4 py-2 text-center">
                                    <div className="flex justify-center">
                                        <div className="w-32 h-32 rounded-lg shadow-md overflow-hidden">
                                            <img src="https://picsum.photos/200/200?random=2" alt="Foto Destinasi 2" className="w-full h-full object-cover"/>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-2 text-center">Destinasi B</td>
                                <td className="px-4 py-2 text-center">15-02-2022</td>
                                <td className="px-4 py-2 text-center">Telah Diulas</td>
                                <td className="px-4 py-2 text-center">
                                    <button className="bg-[#FF8345] hover:bg-[#c17a3a] text-white font-medium py-2 px-2 rounded">
                                        Lihat Ulasan
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    );
}