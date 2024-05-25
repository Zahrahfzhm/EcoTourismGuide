"use client"

import Image from "next/image";
import AsideLargeContainer from "@/components/Container/DashboardAdmin/asideLargeContainer";

export default function LargeContent(handleClick1, handleClick2, handleClick3, handleClick4, handleClick5, handleClick6, handleClick7){
    const handleClick = () => {

    };
    return(
        <AsideLargeContainer>
                        <div class="flex flex-col px-5 py-4 w-full rounded-xl">
            <h2 class="text-xl font-bold text-stone-900">Draft Konten</h2>
            <article class="mt-6 w-full text-center ">
            <button class="flex gap-3.5 py-2 pr-5 pl-2 bg-emerald-500 rounded-xl w-full shadow-md" onClick={handleClick1}>
                <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/da4140a1cde539818458283fa6d40d49e680665ed1cbaec28fe7163deca00ba9?apiKey=2b13a1e2364a4d3f8744de572dd64729&"
                    alt="Nama Wisata"
                    width={84}
                    height={84}
                />
                <div class="flex flex-col my-auto justify-center items-center">
                <strong className="text-xxl">Judul Konten</strong>
                </div>
            </button>
            </article>
        </div>
        </AsideLargeContainer>
    )
}