
export default function nav() {
    return(
        <nav>
            <div className="flex items-center justify-between mt-0 text-lg bg-white h-[70px]">
                <div className="ml-4 p-2"> 
                    <h1 className="text-xl font-bold">Eco Tourism Guide</h1>
                </div> 
                <div className="space-x-20 mr-4 p-2">
                    <button className="hover:bg-[#1EC28B] hover:shadow-md hover:text-white text-black px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out">
                        Contact Us
                    </button>
                    <button className=" hover:bg-[#1EC28B] hover:shadow-md hover:text-white text-black px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out">
                        About Us
                    </button>
                    <button className=" hover:bg-[#1EC28B] hover:shadow-md hover:text-white text-black px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out">
                        Akun
                    </button>
                </div>
            </div>
        </nav>
    )
}