import React from 'react'
import image from '../../assets/image/logo.png'
import './LogoSection.css'
import './LogoResponsive.css'

export default function LogoSection() {
  return (

    <>

      <div className='img-div'>
        <img src={image} alt="This is logo img" className='img-div-img' />
      </div>


    </>

  )
}
