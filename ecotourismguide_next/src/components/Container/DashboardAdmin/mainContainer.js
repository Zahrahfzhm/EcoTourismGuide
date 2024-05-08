export default function MainContainer({children}){
    return(
        <div className=" bg-gradient-to-b from-[#1EC28B] from-5% via-[#B9F4E0] via-35% to-gray-100 rounded-lg overflow-y-auto shadow-md w-3/4">
            {children}
        </div>
    )
}

//#1EC28B
//bg-[#B9F4E0]