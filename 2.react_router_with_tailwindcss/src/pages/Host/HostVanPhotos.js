import React from 'react'
import { useOutletContext } from 'react-router'

const HostVanPhotos = () => {
  const {currentVan} = useOutletContext()
  return (
    <div>
      
      <img className="w-32 h-32" src={currentVan.imageUrl} />
    </div>
  )
}

export default HostVanPhotos
