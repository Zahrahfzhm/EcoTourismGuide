"use client"

import { useEffect, useState } from 'react';

export default function DashboardUMKMContent() {
    const [nama, setNama] = useState('');

    useEffect(() => {
        const userDataFromStorage = sessionStorage.getItem('data');
        if (userDataFromStorage) {
            const parsedData = JSON.parse(userDataFromStorage);
            setNama(parsedData.user.nama_pelaku);
        } else {
            console.error('User name not found in sessionStorage');
        }
    }, []);
      
    return (
        <div className="flex flex-col mx-24">
            <p className="pt-10 text-xl font-bold text-white">Dashboard UMKM</p>
            <div className="mt-6 px-4 py-2 bg-white rounded-lg shadow-md">
                <p className="mt-1 text-base font-semibold text-balance">Selamat Datang {nama} di <span className="text-[#1EC28B]">EcoTourismGuide</span>, apa yang baru hari ini?</p>
                <p className="mt-1 text-xs font-normal text-slate-500 text-pretty">Silahkan periksa kebutuhan anda</p>
                <div className="flex flex-col">
                    <p className="mt-6 text-sm font-semibold text-balance">Katalog usaha/tempat wisata anda</p>
                    <div className="mt-1.5 py-2 flex flex-row gap-4 bg-white rounded-lg shadow-md">
                        <div className="ml-5 my-2.5 w-56 h-64 bg-blue-300 rounded-lg shadow-md"></div>
                        <div className="my-2.5 w-56 h-64 bg-blue-300 rounded-lg shadow-md"></div>
                        <div className="my-2.5 w-56 h-64 bg-blue-300 rounded-lg shadow-md"></div>
                        <div className="my-2.5 w-56 h-64 bg-blue-300 rounded-lg shadow-md"></div>
                        <div className="mr-5 my-2.5 w-56 h-64 bg-blue-300 rounded-lg shadow-md"></div>
                    </div>
                    <p className="mt-6 text-sm font-semibold text-balance">Status registrasi/tempat wisata</p>
                    <div className="mt-1.5 py-2 flex flex-row gap-4 bg-white rounded-lg shadow-md">
                        <p>Hello</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
