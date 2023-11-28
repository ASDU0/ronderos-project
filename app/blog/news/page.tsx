import React from 'react';
import noticiasData from './data.json';
import Image from 'next/image';


export default function Page() {
  const noticias = noticiasData.noticias;
  const noticiasOrdenadas = [...noticias].sort((a, b) => b.puntuacionPromedio - a.puntuacionPromedio);
  const ultimaNoticia = noticiasOrdenadas.length > 0 ? noticiasOrdenadas[0] : null;
  const otrasNoticias = noticiasOrdenadas.slice(1, 4); 

  return (
    <div className="grid grid-cols-2 bg-stone-50 h-screen">
      {/* col Izquierda */}
      <div className="p-12 mr-6 h-full border-red-700 h-3/4 border-r-4">
        <div className='contenedor-1 p-4 h-full flex flex-col justify-between'>
          <h2 className="text-4xl font-extrabold dark:text-white">ÚLTIMAS NOTICIAS</h2>
          {ultimaNoticia && (
            <>
              <img src={ultimaNoticia.imagen} alt={ultimaNoticia.titulo} className="w-full h-auto mb-2 rounded-md" />
              <h2 className="text-black text-2xl font-medium font-semibold">{ultimaNoticia.titulo}</h2>
              <p className="text-black">{ultimaNoticia.contenido.slice(0, 250)}..</p> 
              <a
                href={ultimaNoticia.enlace}
                className="hover:underline font-bold"
                target="_blank" 
                rel="noopener noreferrer" 
              >
                VER MÁS
              </a>
            </>
          )}
        </div>
      </div>

      {/*col  Derecha */}
      <div className="p-12 ml-6 h-full flex flex-col">
        <div className='contenedor-2 grid grid-rows-3 flex-grow'>
          {otrasNoticias.map((noticia, index) => (
            <div key={index} className={`row-${index + 1}  p-4 mb-4 flex items-stretch`}>
              <img src={noticia.imagen} alt={noticia.titulo} className="w-1/3 h-full object-cover mr-4 rounded-md" />
              <div className="w-2/3 flex flex-col justify-start ">
                <h2 className="text-black text-2xl font-semibold pb-4">{noticia.titulo}</h2>
                <p className="text-black">{noticia.contenido.slice(0, 175)}... 
                    <a
                    href={noticia.enlace}
                    className="hover:underline font-bold"
                    target="_blank" 
                    rel="noopener noreferrer" 
                  >
                    Ver más
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
