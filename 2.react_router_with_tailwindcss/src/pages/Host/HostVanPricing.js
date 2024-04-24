import React from 'react'
import { useOutletContext } from 'react-router'

const HostVanPricing = () => {
  const {currentVan} = useOutletContext()
  return (
    <div>
      <h4>host van pricing</h4>
      <h2>{currentVan.price}</h2>
    </div>
  )
}

export default HostVanPricing
