import Image from "next/image";
import React from 'react';

export default function DetailWisata() {
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
                <div class="max-w-[1024px] mx-auto flex flex-col space-y-5 mt-6 ml-35 mr-35 text-black font-poppins">
                    <div>
                        <h1 className="text-3xl font-bold">Nama Wisata</h1>
                    </div>
                    <div>
                        <p class="text-base text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div>
                        <h2 className="text3xl font-semibold">Fasilitas</h2>
                        <div class="grid grid-cols-4 gap-4">
                            <div>
                                <ul class="list-disc list-inside"> 
                                    <li class="ml-8">Lorem</li>
                                    <li class="ml-8">Ipsum</li>
                                    <li class="ml-8">Dolor</li>
                                </ul>
                            </div>
                            <div>
                                <ul class="list-disc list-inside"> 
                                    <li class="ml-8">Lorem</li>
                                    <li class="ml-8">Ipsum</li>
                                    <li class="ml-8">Dolor</li>
                                </ul>
                            </div>
                            <div>
                                <ul class="list-disc list-inside"> 
                                    <li class="ml-8">Lorem</li>
                                    <li class="ml-8">Ipsum</li>
                                    <li class="ml-8">Dolor</li>
                                </ul>
                            </div>
                            <div>
                                <ul class="list-disc list-inside"> 
                                    <li class="ml-8">Lorem</li>
                                    <li class="ml-8">Ipsum</li>
                                    <li class="ml-8">Dolor</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                        <div>
                            <h2 className="text3xl font-semibold">Lokasi</h2>
                            <p>Lembang, Kabupaten Bandung Barat, Jawa Barat</p>
                        </div>
                        <div>
                            <h2 className="text3xl font-semibold">Jam Operasional</h2>
                            <div class="grid grid-cols-4">
                                <div>
                                    <ul> 
                                        <li class="ml-8">Weekdays</li>
                                        <li class="ml-8">Weekend</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul> 
                                        <li>08:00 - 20:00</li>
                                        <li>08:00 - 21:00</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text3xl font-semibold">Harga Tiket</h2>
                            <p>Rp25.000/orang</p>
                        </div>
                        <div>
                            <h2 className="text3xl font-semibold">Keterangan Tambahan</h2>
                            <ul class="list-decimal list-inside">
                                <li class="ml-4">Ketentuan atau peraturan yang berlaku</li>
                                <li class="ml-4">Hal-hal yang perlu diperhatikan</li>
                                <li class="ml-4">Larangan</li>
                                <li class="ml-4">Contact Person</li>
                            </ul>
                            <div class="mb-6"></div>
                        </div>
                    </div>
            </div>

        <div className="flex justify-center gap-4 mx-16"> 
            <div className="w-5/12 p-4 bg-white rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'black' }}>Review Wisata</h3>
                <div className="flex items-center mb-4">
                    <p className="font-medium text-4xl mr-2" style={{ color: 'gray' }}>4.5</p>
                    <span className="text-yellow-500 text-4xl">★★★★☆</span>
                </div>
                <ul className="mt-2 space-y-4">
                    <li style={{ color: 'black' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="https://via.placeholder.com/30" alt="Budi profile" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
                            <span style={{ fontWeight: 'bold' }}>Budi (@budi123)</span>
                        </div>
                        <div style={{ fontSize: 'smaller' }}>"Tempat yang sangat indah! Lorem ipsum dolor sit amet, consectetur adipiscing elit"</div>
                    </li>
                    <li style={{ color: 'black' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="https://via.placeholder.com/30" alt="Siti profile" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
                            <span style={{ fontWeight: 'bold' }}>Siti (@siti456)</span>
                        </div>
                        <div style={{ fontSize: 'smaller' }}>"Pelayanan memuaskan.Lorem ipsum dolor sit amet, consectetur adipiscing elit"</div>
                    </li>
                    <li style={{ color: 'black' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="https://via.placeholder.com/30" alt="Ahmad profile" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
                            <span style={{ fontWeight: 'bold' }}>Ahmad (@ahmad789)</span>
                        </div>
                        <div style={{ fontSize: 'smaller' }}>"View yang luar biasa! Lorem ipsum dolor sit amet, consectetur adipiscing elit"</div>
                    </li>
                    
                </ul>
                <button className="bg-green-500 text-white rounded px-4 py-2 mt-2 hover:bg-green-600">Akses Review</button>
            </div>
            <div className="w-6/12 p-4 bg-white rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'black' }}>Info Detail Lokasi Wisata</h3>
                <div className="mb-2">
                    <img src="https://via.placeholder.com/400x200.png?text=Preview+Peta+Lokasi+Wisata" alt="Preview Peta Lokasi Wisata" style={{ width: '100%', height: 'auto' }} />
                </div>
                <p style={{ color: 'black' }}>Klik untuk melihat lokasi wisata di Google Maps.</p>
                <button className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600">Lihat Lokasi</button>
            </div>
            
        </div>



        </section>
    );
}