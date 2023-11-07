"use client";
import React, { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario, por ejemplo, iniciar sesión.
    // Puedes acceder a los valores de email, password y rememberMe para enviar la solicitud.
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form
        onSubmit={handleFormSubmit}
        className="bg-gray-800 p-8 rounded shadow-md text-gray-300"
      >
        <h2 className="text-2xl mb-4 text-red-600">Inicio de Sesión</h2>
        <div className="mb-4">
          <label className="block mb-1">Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded border-gray-600 bg-gray-700"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded border-gray-600 bg-gray-700"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-2"
            />
            Mantenerme conectado
          </label>
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-red-600 text-gray-200 rounded hover:bg-red-700"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};
