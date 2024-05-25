"use client"

import Image from "next/image";
import InputSearch from "@/components/Content/DashboardAdmin/InputSearch";
import MidContainer from "@/components/Container/DashboardAdmin/midContainer";


export default function MainContent () {
    const handleClick = () => {

    };
    return(
        <MidContainer>
            <div class="flex flex-col justify-center text-xl font-bold text-black">
            <div class="flex flex-col px-8 py-10 w-full rounded-xl max-md:px-5 max-md:max-w-full">
                <div class="text-center max-md:max-w-full">Preview Konten</div>
                <div class="flex flex-col px-8 py-8 mt-7 whitespace-nowrap bg-white rounded-xl max-md:px-5 max-md:max-w-full  max-md:max-w-full">
                <div class="self-center">Judul</div>
                <div class="shrink-0 mt-5 rounded-xl bg-zinc-300 h-[279px] max-md:max-w-full"></div>
                <div class="shrink-0 mt-4 rounded-xl shadow-sm bg-zinc-300 h-[390px] max-md:max-w-full"></div>
                </div>
                <div class="flex gap-5 justify-between self-end mt-6 text-base font-medium text-center text-white max-md:flex-wrap">
                <button class="flex justify-center px-10 py-3 rounded-xl bg-neutral-900 max-md:px-5 max-md:max-w-full onClick={handleEditContent}">
                    <div class="px-1 pt-3 pb-1 rounded-xl bg-neutral-900">Edit Konten</div>
                </button>
                <button class="flex justify-center px-10 py-3 rounded-xl bg-neutral-900 max-md:px-5 max-md:max-w-full onClick={handleEditContent}">
                    <div class="px-1 pt-3 pb-1 rounded-xl bg-neutral-900">Simpan Sebagai Draft</div>
                </button>
                <button class="flex justify-center px-10 py-3 rounded-xl bg-neutral-900 max-md:px-5 max-md:max-w-full onClick={handleEditContent}">
                    <div class="px-1 pt-3 pb-1 rounded-xl bg-neutral-900">Upload</div>
                </button>
                </div>
            </div>
            </div>
        </MidContainer>
    )
}