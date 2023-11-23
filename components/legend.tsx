import Image from 'next/image';
import React from 'react';

const crimenTypes = [
  { image: 'mano_armada', color: '#542700' },
  { image: 'brujijeros', color: '#464646' },
  { image: 'carterista', color: '#c78392' },
  { image: 'cogoteo', color: '#460046' },
  { image: 'falso_taxista', color: '#000077' },
  { image: 'hurto', color: '#628ba1' },
  { image: 'marca', color: '#568d56' },
  { image: 'pepera', color: '#a3a300' },
  { image: 'raquetero', color: '#8b5700' },
  { image: 'secuestro', color: '#770000' }
];

const Legend = () => {
  return (
    <div className="flex flex-wrap items-center bg-zinc-800">
      <div className="w-full xl:w-1/6 h-24 flex items-center justify-center px-4">
        <p className="text-gray-200 text-xl font-bold text-center select-none">
          TIPO DE CRIMEN
        </p>
      </div>
      {crimenTypes.map((cryme, index) => (
        <div
          key={index}
          className="flex flex-col w-1/6 xl:w-1/6 h-24  px-4 items-center justify-center cursor-pointer hover:opacity-80 transition"
          style={{ backgroundColor: cryme.color }}
        >
          <Image
            src={`/assets/images/${cryme.image}.png`}
            alt={cryme.image}
            width={25}
            height={25}
          />
          <label className=" text-center mt-2 font-medium text-gray-200 capitalize select-none text-xs xl:text-sm px-3" htmlFor="nose">
            {cryme.image.replace(/_/g, ' ')}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Legend;