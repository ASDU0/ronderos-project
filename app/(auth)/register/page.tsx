"use client";
import React, { useState } from 'react';

export default function RegisterForm() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e: any) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario, como validar y enviar la información.
    // Accede a los valores de userData para procesarlos o enviar una solicitud.
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded shadow-md text-gray-200"
      >
        <h2 className="text-2xl mb-4 text-red-600">Registro</h2>
        <div className="mb-4">
          <label className="block mb-1">Nombre:</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            className="w-full p-2 rounded border-gray-600 bg-gray-700"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            className="w-full p-2 rounded border-gray-600 bg-gray-700"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Contraseña:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            className="w-full p-2 rounded border-gray-600 bg-gray-700"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Repetir Contraseña:</label>
          <input
            type="password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleInputChange}
            className="w-full p-2 rounded border-gray-600 bg-gray-700"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-red-600 text-gray-200 rounded hover:bg-red-700"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

