import React from 'react'
import Brands from './Brands'

function Brand() {
  return (
    <>
    <div className="brand-main">
    <h1 className='Brand-text'>Brand's</h1>
    <div className="brand-data">
        <Brands/>
        <Brands/>
        <Brands/>
        <Brands/>
    </div>
    </div>
    </>
  )
}

export default Brand