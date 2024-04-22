
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-[#2B2945] py-4 flex justify-left  absolute bottom-0 h-[200px] w-full">
            <div className="ml-4 p-2">
                <div className="flex justify-between w-[220px]">
                    <Link href='/' className="text-white text-md">
                        Developer 
                    </Link>
                    <Link href='/' className="text-white text-md">
                        About Us
                    </Link>
                </div>
                <div className="mt-6 text-white text-md">
                    <Link href='/'>
                        Sosmed
                    </Link>
                </div>
            </div>
        </footer>
    )
}