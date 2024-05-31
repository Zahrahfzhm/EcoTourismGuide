import Image from "next/image";
import React from 'react';

export default function LokasiWisata() {
    return (
        <section className="bg-[#B9F4E0] min-h-screen">
            <div className="relative w-full h-[350px] bg-black">
                <Image 
                    src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWgefHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" 
                    alt="Bukit Holbung Samosir, Sumatera Utara" 
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                        <h1 className="text-4xl font-bold">Nama Wisata</h1>
                        <p className="text-xl">Daerah Wisata</p>
                    </div>
                </div>
            </div>

            <div className="flex-col space-y-6">
                <div className="max-w-[1024px] mx-auto flex flex-col space-y-5 mt-6 ml-35 mr-35 text-black font-poppins">
                    <div>
                        <h1 className="text-3xl font-bold mb-3">Lokasi Wisata</h1>
                        <p className="text-base text-justify">Jl. Sugihmukti, Kec. Pasirjambu, Kabupaten Bandung, Jawa Barat</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md relative">
                        <button className="absolute bottom-7 right-7 bg-[#2B294575] text-white text-xs px-4 py-2 rounded-full hover:bg-[#1F1E37]">
                            Buka di Google Maps
                        </button>
                        <Image 
                            src="/petalokasi.png" 
                            alt="Preview Peta Google Maps" 
                            layout="responsive"
                            width={800}
                            height={600}
                        />
                    </div>
                    <div className="mb-6"></div>
                </div>
            </div>
        </section>
    );
}