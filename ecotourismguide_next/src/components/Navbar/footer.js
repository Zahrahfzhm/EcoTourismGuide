
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-[#2B2945] py-4 flex justify-left  relativeig bottom-0 h-[200px] w-full">
            <div className="ml-4 p-2">
                <div className="flex justify-between w-[220px]">
                    <Link href='/' className="text-white text-md hover:transform hover:scale-110 transition-transform duration-300 ">
                        Developer 
                    </Link>
                    <Link href='/' className="text-white text-md hover:transform hover:scale-110 transition-transform duration-300">
                        About Us
                    </Link>
                </div>
                <div className="flex mt-6">
                    <Link href='/' className="text-white text-md hover:transform hover:scale-110 transition-transform duration-300">
                        Sosmed
                    </Link>
                </div>
            </div>
        </footer>
    )
}