"use client"

import Image from "next/image";
import AsideLargeContainer from "@/components/Container/DashboardAdmin/asideLargeContainer";

export default function LargeContent(handleClick1, handleClick2, handleClick3, handleClick4, handleClick5, handleClick6, handleClick7){
    const handleClick = () => {

    };
    return(
        <AsideLargeContainer>
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
    </AsideLargeContainer>
    )
}