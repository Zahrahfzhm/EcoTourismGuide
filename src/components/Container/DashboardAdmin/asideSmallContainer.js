
export default function AsideSmallContainer({children}){
    return(
        <div className="h-[10%]  bg-gradient-to-b from-[#1EC28B] from-5% via-[#B9F4E0] via-35% to-gray-100 rounded-lg shadow-md flex items-center">
            {children}
        </div>
    )
}