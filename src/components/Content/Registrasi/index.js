"use client"

import React, { useState } from 'react';

export default function RegistrasiForm() {
  const [nama_pelaku, setNama] = useState('');
  const [password, setPassword] = useState('');
  const [nama_wisata, setNamaWisata] = useState('');
  const [alamat, setAlamat] = useState('');
  const [Deskripsi_wisata, setDeskripsi] = useState('');
  const [no_telpon, setNoTelepon] = useState('');
  const [email, setEmail] = useState('');
  const [fasilitas, setFasilitas] = useState('');
  const [tarif, setTarif] = useState('');

  const handleRegistrasi = async (event) => {
    event.preventDefault();
    const data = {
      nama_pelaku,
      password,
      nama_wisata,
      alamat,
      Deskripsi_wisata,
      no_telpon,
      email,
      fasilitas,
      tarif
    };

    try {
      const response = await fetch("api/v1/registrasi", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Registrasi error:', error);
    }
  };

  return (
    <div className="mx-36 mb-36">
      <p className="pt-10 text-xl font-bold">Form Registrasi</p>
      <div className="flex flex-col mt-6 px-4 py-2 bg-white rounded-lg shadow-md">
        <form onSubmit={handleRegistrasi} className="registrasi-form">
          {[
            { label: 'Nama', type: 'text', id: 'nama', value: nama_pelaku, onChange: setNama },
            { label: 'Password', type: 'password', id: 'password', value: password, onChange: setPassword },
            { label: 'Nama Wisata', type: 'text', id: 'namaWisata', value: nama_wisata, onChange: setNamaWisata },
            { label: 'Alamat', type: 'text', id: 'alamat', value: alamat, onChange: setAlamat },
            { label: 'Deskripsi', type: 'textarea', id: 'deskripsi', value: Deskripsi_wisata, onChange: setDeskripsi },
            { label: 'No Telepon', type: 'text', id: 'noTelepon', value: no_telpon, onChange: setNoTelepon },
            { label: 'Email', type: 'email', id: 'email', value: email, onChange: setEmail },
            { label: 'Fasilitas', type: 'text', id: 'fasilitas', value: fasilitas, onChange: setFasilitas },
            { label: 'Tarif', type: 'number', id: 'tarif', value: tarif, onChange: setTarif }
          ].map((input, index) => (
            <div key={index} className="form-group mb-4">
              <label htmlFor={input.id} className="block text-gray-700 text-sm font-bold mb-2">{input.label}:</label>
              {input.type === 'textarea' ? (
                <textarea
                  id={input.id}
                  name={input.id}
                  value={input.value}
                  onChange={(e) => input.onChange(e.target.value)}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              ) : (
                <input
                  type={input.type}
                  id={input.id}
                  name={input.id}
                  value={input.value}
                  onChange={(e) => input.onChange(e.target.value)}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              )}
            </div>
          ))}
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline">Register</button>
        </form>
      </div>
    </div>
  );
}


