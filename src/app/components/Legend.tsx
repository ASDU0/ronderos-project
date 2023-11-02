import React from 'react'

const crimenTypes = [
  'asalto_mano_armado',
  'brujijero',
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
    <div>
        <p>Tipo de crimen</p>
        <div style={{ display: 'flex', gap: 10 }}>
          {
            crimenTypes.map((image, index) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', maxWidth: 100 }}>
                <img src={`assets/images/${image}.png`} alt={image} width={40} />
                <label style={{ textAlign: 'center' }} htmlFor="nose">{image.replace(/_/g, ' ').toUpperCase()}</label>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Legend