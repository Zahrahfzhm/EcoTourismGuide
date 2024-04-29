"use client"

import Image from "next/image"

export default function DashboardAdminContainer() {
    return (
        <div className="flex space-x-6 mt-4">
            <div className="h-[802px] w-[868px] bg-[#B9F4E0] rounded-lg overflow-y-auto max-h-screen">
                <div className="flex flex-col justify-center max-w-[868px]">
                    <section className="flex flex-col px-6 pt-11 pb-5 w-full rounded-xl max-md:pl-5 max-md:max-w-full ">
                        <div className="flex gap-5 justify-between items-center px-px max-md:flex-wrap max-md:max-w-full">
                        <h1 className="self-stretch my-auto text-xl font-bold text-center text-black">Hi, ..... !</h1>
                        <div className="flex flex-col justify-center self-stretch my-auto whitespace-nowrap text-zinc-700 text-opacity-60">
                            <div className="flex gap-0 px-2 py-1 rounded-xl bg-zinc-50 bg-opacity-90">
                            <div className="justify-center p-1.5 text-lg font-medium text-center leading-[50.04px]">􀊫</div>
                            <div className="flex-1 my-auto text-lg tracking-tight leading-5">Search</div>
                            </div>
                        </div>
                        <div className="shrink-0 self-stretch w-10 h-10 bg-white rounded-full aspect-square">
                            <Image
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/82f59e5869c062c1d479551f5c1a986825cdeb8339e2d8a78ffa1a91d8056203?apiKey=2b13a1e2364a4d3f8744de572dd64729&"
                            alt="User profile"
                            width={10} // Adjust width and height as needed
                            height={10}
                            loading="lazy"
                            />
                        </div>
                        </div>
                        <h2 className="mt-8 text-xl font-bold text-left text-black max-md:mt-10 max-md:max-w-full">Data terbaru</h2>
                        <div className="px-0.5 mt-3.5 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow justify-center font-bold text-center text-white max-md:mt-3">
                                    <div className="flex overflow-hidden relative flex-col gap-0 justify-between items-end px-5 pt-20 pb-5 w-full aspect-[0.86]">
                                    <Image
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4cfe0ed407812cf4f05d18fe06a35b10a74e4ead7e1c9b90c7a0f83d68d222e?apiKey=2b13a1e2364a4d3f8744de572dd64729&"
                                        alt="Wisata 1"
                                        layout="fill"
                                        objectFit="cover"
                                        className="absolute inset-0"
                                    />
                                    <div className="relative flex mt-40 justify-between space-x-11">
                                        <h3 className="text-base ">Nama Wisata <br /> Nama UMKM</h3>
                                        <div className="text-base flex items-center">
                                            <p>Lokasi</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </article>
                            <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow justify-center font-bold text-center text-white max-md:mt-3">
                                    <div className="flex overflow-hidden relative flex-col gap-0 justify-between items-end px-5 pt-20 pb-5 w-full aspect-[0.86]">
                                    <Image
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4cfe0ed407812cf4f05d18fe06a35b10a74e4ead7e1c9b90c7a0f83d68d222e?apiKey=2b13a1e2364a4d3f8744de572dd64729&"
                                        alt="Wisata 1"
                                        layout="fill"
                                        objectFit="cover"
                                        className="absolute inset-0"
                                    />
                                    <div className="relative flex mt-40 justify-between space-x-11">
                                        <h3 className="text-base ">Nama Wisata <br /> Nama UMKM</h3>
                                        <div className="text-base flex items-center">
                                            <p>Lokasi</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </article>
                            <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow justify-center font-bold text-center text-white max-md:mt-3">
                                    <div className="flex overflow-hidden relative flex-col gap-0 justify-between items-end px-5 pt-20 pb-5 w-full aspect-[0.86]">
                                    <Image
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4cfe0ed407812cf4f05d18fe06a35b10a74e4ead7e1c9b90c7a0f83d68d222e?apiKey=2b13a1e2364a4d3f8744de572dd64729&"
                                        alt="Wisata 1"
                                        layout="fill"
                                        objectFit="cover"
                                        className="absolute inset-0"
                                    />
                                    <div className="relative flex mt-40 justify-between space-x-11">
                                        <h3 className="text-base ">Nama Wisata <br /> Nama UMKM</h3>
                                        <div className="text-base flex items-center">
                                            <p>Lokasi</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        </div>
                        <div className="flex gap-5 items-start px-4 pt-2.5 pb-20 mt-4 bg-white rounded-xl max-md:flex-wrap max-md:max-w-full h-[550px]">
                        <h2 className="flex-auto mt-3 text-xl font-bold text-center text-black">Statistik Wisata</h2>
                        <div className="flex overflow-hidden relative flex-col justify-center aspect-[2.42] w-[87px] ">
                            <Image
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9ad267811129c1e3b1768bd38bffd8181b4266bfda468d1e28feabfc3f2b611?apiKey=2b13a1e2364a4d3f8744de572dd64729&"
                            alt="Statistik Wisata"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0"
                            />
                            <div className="relative shrink-0 h-9 rounded-3xl border border-black border-solid bg-zinc-300 bg-opacity-0"></div>
                        </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="flex-col w-[257px] ">
                <div className="h-[77px]  bg-[#B9F4E0] rounded-lg">
                    
                </div>
                <div className="mt-2.5 h-[715px]  bg-[#B9F4E0] rounded-lg">
                </div>
            </div>
        </div>
    )
}