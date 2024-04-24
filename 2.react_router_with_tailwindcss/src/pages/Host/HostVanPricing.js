import React from 'react'
import { useOutletContext } from 'react-router'

const HostVanPricing = () => {
  const {currentVan} = useOutletContext()
  return (
    <div>
    
      <h2 className="text-4xl">${currentVan.price}<span className="text-sm">/day</span></h2>
    </div>
  )
}

export default HostVanPricing
