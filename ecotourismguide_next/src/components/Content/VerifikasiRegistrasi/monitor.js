export default function MonitorVerifikasi(){
    return(
        <div>
            <p className="mx-6 mt-10 text-base font-bold">Verifikasi registrasi tempat wisata</p>
            <p className="mx-6 mt-2 text-xs font-normal text-slate-500">Silahkan periksa dokumen proposal masuk secara berkala.</p>

           <div className="flex flex-row">
            <div className="mx-6 my-4">
                <p className="text-base font-semibold">Status dokumen</p>

                <div className="my-2 px-4 pr-32 py-2 bg-white rounded-lg shadow-md">
                    <p className="text-sm font-semibold">Menunggu konfirmasi</p>
                    <p className="mt-2 text-xs font-normal text-slate-500">Total dokumen:</p>
                    <p className="mb-2 text-lg font-semibold">200</p>
                </div>

                <div className="my-2 px-4 pr-32 py-2 bg-white rounded-lg shadow-md">
                    <p className="text-sm font-semibold">Diterima</p>
                    <p className="mt-2 text-xs font-normal text-slate-500">Total dokumen:</p>
                    <p className="mb-2 text-lg font-semibold">200</p>
                </div>

                <div className="my-2 px-4 pr-32 py-2 bg-white rounded-lg shadow-md">
                    <p className="text-sm font-semibold">Ditolak / dikembalikan</p>
                    <p className="mt-2 text-xs font-normal text-slate-500">Total dokumen:</p>
                    <p className="mb-2 text-lg font-semibold">200</p>
                </div>
            </div>

            <div className="mt-6 px-4 pr-32 py-2 bg-white rounded-lg shadow-md">
                <p className="text-sm font-semibold">Riwayat perlakuan dokumen</p>
                 <hr className="my-2 border"></hr>
            </div>

        </div> 
        </div>
        
        
    );
}



