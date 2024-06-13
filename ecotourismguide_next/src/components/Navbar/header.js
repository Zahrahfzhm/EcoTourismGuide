"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();

    const handleClicklogo = (event) => {
        event.preventDefault()
        router.push('/');
    };
    return(
        <nav className="shadow-md">
            <div className="flex items-center justify-between mt-0 text-lg bg-white h-[70px]">
                <button className="ml-5 p-2 " onClick={handleClicklogo}> 
                    <Image className="px-4 py-2" src="/logo_landscape.png" alt="Logo" width={200} height={120}  /> 
                </button> 
                <div className="space-x-20 mr-5 p-2">
                    <button className="hover:bg-[#1EC28B] hover:shadow-md hover:text-white text-black px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out">
                        Contact Us
                    </button>
                    <button className=" hover:bg-[#1EC28B] hover:shadow-md hover:text-white text-black px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out">
                        About Us
                    </button>
                </div>
            </div>
        </nav>
    )
}