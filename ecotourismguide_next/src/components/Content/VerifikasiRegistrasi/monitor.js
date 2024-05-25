"use client"

import { useRouter } from 'next/navigation';
import MainContainer from "@/components/Container/DashboardAdmin/midContainer";


export default function MonitorVerifikasi(){
    const router = useRouter();

    const handleClickTable = (event) => {
        event.preventDefault()
        router.push('/DinasPariwisata/Verifikasi/DaftarProposal');
    };

    return(
        <MainContainer>
            <p className="mx-6 mt-10 text-xl font-bold text-white">Verifikasi Registrasi</p>
            
            <div className="flex flex-col">
                <div className="flex flex-row mt-6">
                    <div className="basis-1/2 mx-6 px-4 py-2 bg-white rounded-lg shadow-md">
                        <p className="text-base font-semibold text-balance">Status dokumen tempat wisata</p>
                        <p className="mt-1.5 text-xs font-normal text-slate-500 text-pretty">Berikut tertera jumlah dokumen registrasi aktif tempat wisata. Mohon periksa dokumen proposal masuk secara berkala.</p>
                        <div className="my-2 px-4 pr-32 py-2 bg-white rounded-lg shadow-md" onClick={handleClickTable}>
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

                    <div className="basis-1/2 mr-6 px-4 py-2 bg-white rounded-lg shadow-md">
                        <p className="text-base font-semibold text-balance">Status dokumen UMKM</p>
                        <p className="mt-1.5 text-xs font-normal text-slate-500 text-pretty">Berikut tertera jumlah dokumen registrasi aktif UMKM. Mohon periksa dokumen proposal masuk secara berkala.</p>
                        <div className="my-2 px-4 pr-32 py-2 bg-white rounded-lg shadow-md">
                            <p className="text-sm font-semibold">Menunggu konfirmasi</p>
                            <p className="mt-2 text-xs font-normal text-slate-500">Total dokumen:</p>
                            <p className="mb-2 text-lg font-semibold">200</p>
                        </div>

                        <div className="my-2 px-4 pr-32 py-2 bg-white rounded-lg shadow-md">
                            <p className="text-sm font-semibold ">Diterima</p>
                            <p className="mt-2 text-xs font-normal text-slate-500">Total dokumen:</p>
                            <p className="mb-2 text-lg font-semibold">200</p>
                        </div>

                        <div className="my-2 px-4 pr-32 py-2 bg-white rounded-lg shadow-md">
                            <p className="text-sm font-semibold">Ditolak / dikembalikan</p>
                            <p className="mt-2 text-xs font-normal text-slate-500">Total dokumen:</p>
                            <p className="mb-2 text-lg font-semibold">200</p>
                        </div>
                    </div>
                </div>
                
                <div className="mx-6 my-4 px-4 pr-32 py-2 bg-white rounded-lg shadow-md">
                    <p className="text-sm font-semibold text-balance">Riwayat perlakuan dokumen</p>
                    <p className="mt-1.5 text-xs font-normal text-slate-500 text-pretty">Berikut merupakan riwayat dokumen yang telah dikonfirmasi, meliputi baik dokumen tempat wisata maupun UMKM</p>
                </div>
            </div>
        </MainContainer>
    );
}



