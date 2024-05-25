"use client"
import { useRouter } from 'next/navigation';

export default function AksesTransportasi(){
    const router = useRouter();

    const handleBusClick = (event) => {
        event.preventDefault()
        router.push('');
    };

    const handleAirplaneClick = (event) => {
        event.preventDefault()
        router.push('');
    };

    const handleOnlineTransportClick= (event) => {
        event.preventDefault()
        router.push('');
    };

    const handleTrainClick= (event) => {
        event.preventDefault()
        router.push('');
    };


    return(
        <div class="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
            <div class="flex flex-col items-center px-20 pt-8 pb-14 mt-44 max-w-full rounded-xl bg-zinc-300 w-[459px] max-md:px-5 max-md:mt-10">
                <div class="text-3xl font-bold text-black">Akses Transportasi</div>
                <div class="flex gap-5 justify-between mt-12 max-md:mt-10">
                <div class="flex flex-col text-sm font-bold text-right whitespace-nowrap text-zinc-400">
                    <div class="flex flex-col justify-center">
                    <button onclick={handleBusClick}>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a4452cce2216e05fbdbff5d36792001a160df2b47975421fad9c7dea2dc0f45?apiKey=2b13a1e2364a4d3f8744de572dd64729&" class="self-center aspect-[1.2] w-[60px]" />
                        <div class="mt-4">Bus</div>
                    </button>
                    </div>
                    <div class="flex flex-col justify-center mt-16 max-md:mt-10">
                    <button onclick={handleAirplaneClick}>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f8b798ae111fff6d5c753c91a0722a62bc798134d1ae12380bc675cdd3f1df3?apiKey=2b13a1e2364a4d3f8744de572dd64729&" class="self-center aspect-[1.2] w-[60px]" />
                        <div class="mt-4">Airplane</div>
                    </button>
                    </div>
                </div>
                <div class="flex flex-col self-start mt-2.5">
                    <div class="flex flex-col flex-wrap justify-center content-center">
                    <div class="flex gap-4">
                        <button onclick={handleOnlineTransportClick}>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7557e2f16a848c296f8f7191f1bcc774b783dd2c706c875ddd61ccc557d5d3a?apiKey=2b13a1e2364a4d3f8744de572dd64729&" class="shrink-0 aspect-[1.27] w-[52px]" />
                        </button>
                        <button onclick="handleOnlineTransportClick()">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca1f5729ca9130ce8daac1f997870bf6712eb142768576ec06747664962c7615?apiKey=2b13a1e2364a4d3f8744de572dd64729&" class="shrink-0 aspect-[1.27] w-[52px]" />
                        </button>
                    </div>
                    <div class="mt-4 text-sm font-bold text-center text-zinc-400">Online Transportation</div>
                    </div>
                    <div class="flex flex-col justify-center self-center mt-14 text-sm font-bold text-right whitespace-nowrap text-zinc-400 w-[52px] max-md:mt-10">
                    <button onclick={handleTrainClick}>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d7198a34e21d405aad888274be25a6bbfa3bd652dc0bf8103e827009ad9c664?apiKey=2b13a1e2364a4d3f8744de572dd64729&" class="self-center w-full aspect-[1.04]" />
                        <div class="mt-4">Train</div>
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}



