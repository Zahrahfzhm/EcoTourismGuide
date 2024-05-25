import MainContainer from "@/components/Container/DashboardAdmin";

export default function InspeksiVerifikasi(){
    return(
        <MainContainer>
            <div className="max-w-sm mx-auto my-6 px-6 py-6 rounded-lg shadow-md">
                <div>
                    <p className="text-xl font-semibold">Menunggu Konfirmasi</p>
                    <p className="mt-16 text-base font-normal">Total dokumen:</p>
                    <p className="text-lg font-semibold">200</p>
                </div>
                <hr className="my-5 "></hr>
                <div>
                    <p className="text-xl font-semibold">Diterima</p>
                    <p className="mt-16 text-base font-normal">Total dokumen:</p>
                    <p className="text-lg font-semibold">200</p>
                </div>
                <hr className="my-5 w-full"></hr>
                <div>
                    <p className="text-xl font-semibold">Ditolak / Dikembalikan</p>
                    <p className="mt-16 text-base font-normal">Total dokumen:</p>
                    <p className="text-lg font-semibold">200</p>
                </div>
            </div>
        </MainContainer>
    );
}