import { Star } from "@phosphor-icons/react/dist/ssr";

export default function RatingWisata(){
    return(
        <div className="mx-36 pb-24">
            <p className="pt-10 text-white text-xl font-bold">Rating Wisata</p>

            <div className="mt-6 px-4 py-2 bg-white rounded-lg shadow-md">
                <div className="flex mt-4">
                    <div className="w-32 h-32 rounded-lg shadow-md overflow-hidden mr-4">
                        <img src="https://picsum.photos/250/250?random=1" alt="TelU Ocean View" className="w-full h-full object-cover"/>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-base font-semibold text-balance">TelU Ocean View</p>
                        <p className="mt-1 text-xs font-normal text-slate-500 text-pretty">Graha Merah Putih, The Telkom Hub, Jl. Gatot Subroto No.Kav. 52, RT.6/RW.1, Kuningan Bar., Kec. Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12710</p>
                        <p className="text-xs font-normal text-slate-500 text-pretty">Dikunjungi pada tanggal dd/mm/yy.</p>
                    </div>
                </div>
                <div className="flex flex-row justify-center mt-6">
                    <Star size={46} className=""/>
                    <Star size={46} className=""/>
                    <Star size={46} className=""/>
                    <Star size={46} className=""/>
                    <Star size={46} className=""/>
                </div>
                
                <p className="mt-8 text-sm font-semibold text-balance">Berikan ulasanmu, apa yang bikin kamu puas?</p>    
                <textarea type="text" className="mt-1.5 px-4 py-2 h-36 w-full border border-gray-300 rounded-lg text-xs text-top" style={{ lineHeight: '1' }} placeholder="Yuk, ceritain kepuasanmu tentang kualitas tempat wisata dan pelayanannya" />

                <p className="mt-6 text-sm font-semibold text-balance">Unggah pengalaman mengesankanmu</p>
                <div className="mt-1.5 p-4 border border-gray-300 rounded-lg">
                    <div className="">
                        <p className="text-xs text-gray-500">Foto yang diunggah akan ditampilkan di sini.</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {/* Tempat untuk menampilkan foto yang diunggah */}
                        </div>
                        <input type="file" className="mt-4 text-sm" accept=".jpg, .png, .mp4"/>
                    </div>
                </div>
                    
                <div className="mt-8 mb-2">
                    <button className="bg-[#1EC28B] hover:bg-[#169b6b] text-white font-medium py-2 px-4 rounded-lg">
                        Kirim Ulasan
                    </button>
                </div>
            </div>
        </div>
    );
}