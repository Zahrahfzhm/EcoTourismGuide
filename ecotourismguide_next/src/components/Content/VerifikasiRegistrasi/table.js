export default function TabelVerifikasi(){
    return(
        <div>
            <div className="flex justify-center">
                <div className="max-w-xs mx-2 my-6 px-6 py-6 rounded-lg shadow-md flex-grow">
                    <div>
                        <p className="text-xl font-semibold">Menunggu Konfirmasi</p>
                        <p className="text-base font-normal">Total dokumen:</p>
                        <p className="text-lg font-semibold">200</p>
                    </div>
                </div>

                <div className="max-w-xs mx-2 my-6 px-6 py-6 rounded-lg shadow-md flex-grow">
                    <div>
                        <p className="text-xl font-semibold">Diterima</p>
                        <p className="text-base font-normal">Total dokumen:</p>
                        <p className="text-lg font-semibold">200</p>
                    </div>
                </div>

                <div className="max-w-xs mx-2 my-6 px-6 py-6 rounded-lg shadow-md flex-grow">
                    <div>
                        <p className="text-xl font-semibold">Ditolak / Dikembalikan</p>
                        <p className="text-base font-normal">Total dokumen:</p>
                        <p className="text-lg font-semibold">200</p>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-lg mx-auto shadow-md">
                <table className="w-full table-auto">
                    <thead className="border bg-[#1EC28B] text-white">
                        <tr>
                            <th className="px-4 py-2 text-left font-medium">No</th>
                            <th className="px-4 py-2 text-left font-medium">Column Name</th>
                            <th className="px-4 py-2 text-left font-medium">Column Name</th>
                            <th className="px-4 py-2 text-left font-medium">Column Name</th>
                            <th className="px-4 py-2 text-left font-medium">Column Name</th>
                            <th className="px-4 py-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">Content</td>
                            <td className="px-4 py-2">Content</td>
                            <td className="px-4 py-2">Content</td>
                            <td className="px-4 py-2">Content</td>
                            <td className="px-4 py-2">
                                <button className="bg-[#FF8345] hover:bg-[#c17a3a] text-white font-medium py-2 px-2 rounded">
                                    Button
                                </button>
                            </td>
                        </tr>

                        <tr className="bg-[#E0E0E0]">
                            <td className="px-4 py-2">2</td>
                            <td className="px-4 py-2">Content</td>
                            <td className="px-4 py-2">Content</td>
                            <td className="px-4 py-2">Content</td>
                            <td className="px-4 py-2">Content</td>
                            <td className="px-4 py-2">
                                <button className="bg-[#FF8345] hover:bg-[#c17a3a] text-white font-medium py-2 px-2 rounded">
                                    Button
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}