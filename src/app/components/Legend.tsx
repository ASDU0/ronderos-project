import Image from 'next/image'
import React from 'react'

const crimenTypes = [
  'mano_armada',
  'brujijeros',
  'carterista',
  'cogoteo',
  'falso_taxista',
  'hurto',
  'marca',
  'pepera',
  'raquetero',
  'secuestro'
]

const Legend = () => {
  return (
    <div className="flex gap-1 flex-wrap items-center"> 
        <p>Tipo de crimen:</p>
        {
          crimenTypes.map((image, index) => (
            <div key={index} className="flex flex-col items-center m-4">
              <Image src={`/assets/images/${image}.png`} alt={image} width={25} height={25}/>
              <label className="mt-2 text-sm" htmlFor="nose">{image.replace(/_/g, ' ').toUpperCase()}</label>
            </div>
          ))
        }
    </div>
  )
}

export default Legend