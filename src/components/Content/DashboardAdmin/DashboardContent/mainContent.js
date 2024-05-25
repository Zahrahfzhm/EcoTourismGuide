"use client"

import Image from "next/image";
import InputSearch from "@/components/Content/DashboardAdmin/InputSearch";
import MidContainer from "@/components/Container/DashboardAdmin/midContainer";


export default function MainContent () {
    const handleClick = () => {

    };
    return(
        <MidContainer>
            <div className="flex flex-col justify-center max-w-full">
                <section className="flex flex-col px-6 pt-5 pb-5 w-full rounded-xl max-md:pl-5 max-md:max-w-full ">
                    <div className="flex justify-between items-center px-px max-md:flex-wrap max-md:max-w-full">
                    <h1 className="self-stretch my-auto text-xl font-bold text-center text-black">Hi, ..... !</h1>
                    <div className="flex flex-col justify-center self-stretch my-auto whitespace-nowrap text-zinc-700 text-opacity-60">
                        <InputSearch />
                    </div>
                    </div>
                    <h2 className="mt-8 text-xl font-bold text-left text-black max-md:mt-10 max-md:max-w-full">Data terbaru</h2>
                    <div className="px-0.5 mt-3.5 max-md:max-w-full">
                    <div className="grid grid-cols-1 gap-4 max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <article className="flex flex-col">
                            <div className="flex flex-col grow justify-center font-bold text-center text-white max-md:mt-3 ">
                                <div className="flex overflow-hidden relative flex-col gap-0 justify-between items-end px-5 pt-20 pb-5 w-full aspect-[0.86] ">
                                <Image
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4cfe0ed407812cf4f05d18fe06a35b10a74e4ead7e1c9b90c7a0f83d68d222e?apiKey=2b13a1e2364a4d3f8744de572dd64729&"
                                    alt="Wisata 1"
                                    layout="fill"
                                    objectFit="cover"
                                    className="absolute inset-0 "
                                />
                                <div className="relative flex mt-[80%] justify-between space-x-8">
                                    <h3 className="text-[10px] text-left">Nama Wisata <br /> Nama UMKM</h3>
                                    <div className="text-[10px] flex items-center">
                                        <p>Lokasi</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col">
                            <div className="flex flex-col grow justify-center font-bold text-center text-white max-md:mt-3">
                                <div className="flex overflow-hidden relative flex-col gap-0 justify-between items-end px-5 pt-20 pb-5 w-full aspect-[0.86]">
                                <Image
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4cfe0ed407812cf4f05d18fe06a35b10a74e4ead7e1c9b90c7a0f83d68d222e?apiKey=2b13a1e2364a4d3f8744de572dd64729&"
                                    alt="Wisata 1"
                                    layout="fill"
                                    objectFit="cover"
                                    className="absolute inset-0"
                                />
                                <div className="relative flex  mt-[100px] justify-between space-x-8">
                                    <h3 className="text-[10px] text-left">Nama Wisata <br /> Nama UMKM</h3>
                                    <div className="text-[10px] flex items-center">
                                        <p>Lokasi</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col">
                            <div className="flex flex-col grow justify-center font-bold text-center text-white max-md:mt-3">
                                <div className="flex overflow-hidden relative flex-col gap-0 justify-between items-end px-5 pt-20 pb-5 w-full aspect-[0.86]">
                                <Image
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4cfe0ed407812cf4f05d18fe06a35b10a74e4ead7e1c9b90c7a0f83d68d222e?apiKey=2b13a1e2364a4d3f8744de572dd64729&"
                                    alt="Wisata 1"
                                    layout="fill"
                                    objectFit="cover"
                                    className="absolute inset-0"
                                />
                                <div className="relative flex  mt-[100px] justify-between space-x-8">
                                    <h3 className="text-[10px] text-left">Nama Wisata <br /> Nama UMKM</h3>
                                    <div className="text-[10px] flex items-center">
                                        <p>Lokasi</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col">
                            <div className="flex flex-col grow justify-center font-bold text-center text-white max-md:mt-3">
                                <div className="flex overflow-hidden relative flex-col gap-0 justify-between items-end px-5 pt-20 pb-5 w-full aspect-[0.86]">
                                <Image
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4cfe0ed407812cf4f05d18fe06a35b10a74e4ead7e1c9b90c7a0f83d68d222e?apiKey=2b13a1e2364a4d3f8744de572dd64729&"
                                    alt="Wisata 1"
                                    layout="fill"
                                    objectFit="cover"
                                    className="absolute inset-0"
                                />
                                <div className="relative flex  mt-[100px] justify-between space-x-8">
                                    <h3 className="text-[10px] text-left">Nama Wisata <br /> Nama UMKM</h3>
                                    <div className="text-[10px] flex items-center">
                                        <p>Lokasi</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    </div>
                    <div className="flex gap-5 items-start px-4 pt-2.5 pb-20 mt-4 bg-white rounded-xl max-md:flex-wrap max-md:max-w-full h-[443px] shadow-md">
                    <h2 className="flex-auto mt-3 text-xl font-bold text-center text-black">Statistik Wisata</h2>
                    <div className="flex overflow-hidden mt-3 relative flex-col justify-center aspect-[2.42] w-[87px] ">
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
        </MidContainer>
    )
}