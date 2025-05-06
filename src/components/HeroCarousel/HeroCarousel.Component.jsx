import React, { useState } from 'react'
import Heroslider from "react-slick"

const HeroCarouselComponent = () => {
  const[image, setImages]=useState([
    //images
  ])
  return (
    <>
    <div className='lg:hidden'>
      <HeroCarouselComponent/>
      {
        image.map((image)=>{
         <div className='w-full h-56 md:h-80 py-3'> 
         <img src='' alt='herobanner' className='w-full h-full rounded-md object-cover'></img>
         
         </div>
        })
      }
    </div>
    <div className='hidden lg:block'></div>
    </>
  )
}

export default HeroCarouselComponent;
