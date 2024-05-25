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
    <div className="registrasi-container bg-blue-100 p-8 rounded-lg shadow-lg">
      <form onSubmit={handleRegistrasi} className="registrasi-form">
        <div className="form-group mb-4">
          <label htmlFor="nama" className="block text-gray-700 text-sm font-bold mb-2">Nama:</label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={nama_pelaku}
            onChange={(e) => setNama(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="namaWisata" className="block text-gray-700 text-sm font-bold mb-2">Nama Wisata:</label>
          <input
            type="text"
            id="namaWisata"
            name="namaWisata"
            value={nama_wisata}
            onChange={(e) => setNamaWisata(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="alamat" className="block text-gray-700 text-sm font-bold mb-2">Alamat:</label>
          <input
            type="text"
            id="alamat"
            name="alamat"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="deskripsi" className="block text-gray-700 text-sm font-bold mb-2">Deskripsi:</label>
          <textarea
            id="deskripsi"
            name="deskripsi"
            value={Deskripsi_wisata}
            onChange={(e) => setDeskripsi(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="noTelepon" className="block text-gray-700 text-sm font-bold mb-2">No Telepon:</label>
          <input
            type="text"
            id="noTelepon"
            name="noTelepon"
            value={no_telpon}
            onChange={(e) => setNoTelepon(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="fasilitas" className="block text-gray-700 text-sm font-bold mb-2">Fasilitas:</label>
          <input
            type="text"
            id="fasilitas"
            name="fasilitas"
            value={fasilitas}
            onChange={(e) => setFasilitas(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="form-group mb-6">
          <label htmlFor="tarif" className="block text-gray-700 text-sm font-bold mb-2">Tarif:</label>
          <input
            type="number"
            id="tarif"
            name="tarif"
            value={tarif}
            onChange={(e) => setTarif(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button type="submit" className="registrasi-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
      </form>
    </div>
  );
}

