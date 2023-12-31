"use client";
import React, { useState } from 'react';
import {signIn, useSession} from "next-auth/react";

type LoginButtonType = {
    provider: string;
    icon: string;
    color: string;
    };
export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario, por ejemplo, iniciar sesión.
    // Puedes acceder a los valores de email, password y rememberMe para enviar la solicitud.
  };

  const LoginComponentButton=({provider,icon,color}: LoginButtonType)=>{
    const [isProviderLoading, setProviderLoading] = useState(false)
    const { data: session } = useSession()

    const handleProviderLogin = async () => {
      try {
        console.log(session)
        setProviderLoading(true);
        await signIn(provider, { redirect: true, callbackUrl: 'http://localhost:3000' })
      } catch (error) {
        console.error(error);
      }
      finally {
        setProviderLoading(false)
      }
    }
    return (
        <>
          <button onClick={handleProviderLogin} className={`flex gap-2 rounded mt-2 justify-center ${color} p-2 w-full text-white font-bold`}>
            <img src={icon} alt="" className="h-6" />
            {isProviderLoading ? <span className="animate-pulse">Loading...</span> : `Login with ${provider}`
            }                                    </button>
        </>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
      <form
        onSubmit={handleFormSubmit}
        className="bg-gray-800 space-y-4 p-8 rounded shadow-md text-gray-300"
      >
        <h2 className="text-2xl  text-red-600">Inicio de Sesión</h2>
        <div className="">
          <label className="block mb-1">Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded border-gray-600 bg-gray-700"
          />
        </div>
        <div className="">
          <label className="block mb-1">Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded border-gray-600 bg-gray-700"
          />
        </div>
        <div className="">
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
        <div className="flex gap-3">
          <span className="bg-gray-300 w-full h-[2px] mt-2"></span>
          <span className="text-gray-400 text-sm ">OR</span>
          <span className="bg-gray-300 w-full h-[2px] mt-2"></span>
        </div>
        <LoginComponentButton provider={'google'} icon={'google.svg'} color={"bg-blue-800"}/>
        <LoginComponentButton provider={'facebook'} icon={'facebook.svg'} color={"bg-blue-800"}/>
      </form>
    </div>
  );
};
