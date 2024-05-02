"use client"


import Image from "next/image";
import InputSearch from "@/components/Content/DashboardAdmin/InputSearch";

export default function DashboardAdminContainer({ handleClick1, handleClick2, handleClick3, handleClick4, handleClick5, handleClick6, handleClick7 }) {
    const handleClick = () => {
        
      };
    return (
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5 mt-4 mb-4 w-full max-h-screen">
            <div className=" bg-[#B9F4E0] rounded-lg overflow-y-auto  shadow-md w-3/4">
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
            </div>
            <div className="flex-col w-1/4 pr-4 pb-2.5">
                <div className="h-[10%]  bg-[#B9F4E0] rounded-lg shadow-md flex items-center">
                    <button
                    className="flex flex-col gap-justify-center text-center whitespace-nowrap max-w-[273px]"
                    onClick={handleClick}
                    >
                    <div className="flex gap-16 px-8 py-3 rounded-xl">
                        <div className="shrink-0 gap-0 aspect-square fill-white w-[55px] ">
                        <Image
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/615a7be668fbfec1dfb974588e1241fa2c2de12f9db1cf429da65608115ee2e7?apiKey=2b13a1e2364a4d3f8744de572dd64729&"
                            alt="Profile Picture"
                            width={55}
                            height={55}
                        />
                        </div>
                        <div className="flex flex-col flex-1 my-auto">
                        <div className="text-left">
                            <div className="gap-0 text-sm font-bold text-black">Nama</div>
                            <div className="gap-0 mt-3 text-sm text-slate-800">Jabatan</div>
                        </div>
                        </div>
                    </div>
                    </button>
                </div>    
                <div className="mt-2.5 h-[90%]  bg-[#B9F4E0] rounded-lg overflow-y-auto shadow-md ">
                <div class="flex flex-col px-5 py-4 w-full rounded-xl">
                        <h2 class="text-xl font-bold text-stone-900">Data yang perlu diverifikasi</h2>
                        <article class="mt-6 w-full text-center ">
                        <button class="flex gap-3.5 py-2 pr-5 pl-2 bg-emerald-500 rounded-xl w-full shadow-md" onClick={handleClick1}>
                            <Image
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/da4140a1cde539818458283fa6d40d49e680665ed1cbaec28fe7163deca00ba9?apiKey=2b13a1e2364a4d3f8744de572dd64729&"
                                alt="Nama Wisata"
                                width={84}
                                height={84}
                            />
                            <div class="flex flex-col my-auto">
                            <strong className="text-[11px]">Nama Wisata</strong>
                            <div class="mt-5 text-[12px]">Nama UMKM</div>
                            </div>
                        </button>
                        </article>
                        <article class="mt-3.5 w-full text-center shadow-sm">
                        <button class="flex gap-3.5 py-2 pr-5 pl-2 bg-emerald-500 rounded-xl w-full shadow-md" onClick={handleClick2}>
                            <Image
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/da4140a1cde539818458283fa6d40d49e680665ed1cbaec28fe7163deca00ba9?apiKey=2b13a1e2364a4d3f8744de572dd64729&"
                                alt="Nama Wisata"
                                width={300}
                                height={200}
                            />
                            <div class="flex flex-col my-auto">
                            <strong  className="text-[11px]">Nama Wisata</strong>
                            <div class="mt-5">Nama UMKM</div>
                            </div>
                        </button>
                        </article>
                        <article class="mt-3.5 w-full text-center shadow-sm">
                        <button class="flex gap-3.5 py-2 pr-5 pl-2 bg-emerald-500 rounded-xl w-full shadow-md" onClick={handleClick3}>
                            <Image
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/da4140a1cde539818458283fa6d40d49e680665ed1cbaec28fe7163deca00ba9?apiKey=2b13a1e2364a4d3f8744de572dd64729&"
                                alt="Nama Wisata"
                                width={300}
                                height={200}
                            />
                            <div class="flex flex-col my-auto">
                            <strong>Nama Wisata</strong>
                            <div class="mt-5">Nama UMKM</div>
                            </div>
                        </button>
                        </article>
                        <article class="mt-3.5 w-full text-center shadow-sm">
                        <button class="flex gap-3.5 py-2 pr-5 pl-2 bg-emerald-500 rounded-xl w-full shadow-md" onClick={handleClick4}>
                            <Image
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/da4140a1cde539818458283fa6d40d49e680665ed1cbaec28fe7163deca00ba9?apiKey=2b13a1e2364a4d3f8744de572dd64729&"
                                alt="Nama Wisata"
                                width={300}
                                height={200}
                            />
                            <div class="flex flex-col my-auto">
                            <strong>Nama Wisata</strong>
                            <div class="mt-5">Nama UMKM</div>
                            </div>
                        </button>
                        </article>
                        <article class="mt-3.5 w-full text-center shadow-sm">
                        <button class="flex gap-3.5 py-2 pr-5 pl-2 bg-emerald-500 rounded-xl w-full shadow-md" onClick={handleClick5}>
                            <Image
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/da4140a1cde539818458283fa6d40d49e680665ed1cbaec28fe7163deca00ba9?apiKey=2b13a1e2364a4d3f8744de572dd64729&"
                                alt="Nama Wisata"
                                width={300}
                                height={200}
                            />
                            <div class="flex flex-col my-auto">
                            <strong>Nama Wisata</strong>
                            <div class="mt-5">Nama UMKM</div>
                            </div>
                        </button>
                        </article>
                        <article class="mt-3.5 w-full text-center shadow-sm">
                        <button class="flex gap-3.5 py-2 pr-5 pl-2 bg-emerald-500 rounded-xl w-full shadow-md" onClick={handleClick6}>
                            <Image
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/da4140a1cde539818458283fa6d40d49e680665ed1cbaec28fe7163deca00ba9?apiKey=2b13a1e2364a4d3f8744de572dd64729&"
                                alt="Nama Wisata"
                                width={300}
                                height={200}
                            />
                            <div class="flex flex-col my-auto">
                            <strong>Nama Wisata</strong>
                            <div class="mt-5">Nama UMKM</div>
                            </div>
                        </button>
                        </article>
                        <article class="mt-3.5 w-full text-center shadow-sm">
                        <button class="flex gap-3.5 py-2 pr-5 pl-2 bg-emerald-500 rounded-xl w-full shadow-md" onClick={handleClick7}>
                            <Image
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/da4140a1cde539818458283fa6d40d49e680665ed1cbaec28fe7163deca00ba9?apiKey=2b13a1e2364a4d3f8744de572dd64729&"
                                alt="Nama Wisata"
                                width={300}
                                height={200}
                            />
                            <div class="flex flex-col my-auto">
                            <strong>Nama Wisata</strong>
                            <div class="mt-5">Nama UMKM</div>
                            </div>
                        </button>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}