export default function AsideLargeContainer({children}){
    return(
        <div className="mt-2.5 h-[90%] bg-gradient-to-b from-[#1EC28B] from-5% via-[#B9F4E0] via-35% to-gray-100 rounded-lg overflow-y-auto shadow-md ">
            {children}
        </div>
    )
}