const FooterCiudad = () => {
  return ( 
    <div className="w-100 px-6 py-4 flex justify-between md:items-center bg-rose-500 gap-x-2 flex-col md:flex-row gap-y-4 text-left md:text-center">
      <p className="text-xl sm:text-2xl md:text-3xl xl:text-4xl text-gray-200 font-extrabold px-6 border-l-4 md:border-l-0">
        OTRAS ESTADISTICAS
      </p>
      <p className="text-xl sm:text-2xl md:text-3xl xl:text-4xl text-gray-200 font-extrabold border-l-4 px-6">
        87692 DENUNCAS
      </p>
      <p className="text-xl sm:text-2xl md:text-3xl xl:text-3xl text-gray-200 font-extrabold border-l-4 px-6">
        *1 Ciudad con mas denuncias en el Peru
      </p>
    </div>
   );
}
 
export default FooterCiudad;