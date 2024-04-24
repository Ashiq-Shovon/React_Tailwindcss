import React from 'react'
import { useOutletContext } from 'react-router'

const HostVanPhotos = () => {
  const {currentVan} = useOutletContext()
  return (
    <div>
      <h3>host van photo</h3>
      <img src={currentVan.imageUrl} />
    </div>
  )
}

export default HostVanPhotos
