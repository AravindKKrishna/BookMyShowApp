import React from 'react'
import Navbar from '../components/Navbar/Navbar.Component'



const DefaultLayoutHoc = (Componenet) =>
    ({...props})=> {
  return (
    <div>
        <Navbar/>
       
      <Componenet {...props} />
      <div>Footer</div>
    </div>
  )
}

export default DefaultLayoutHoc


