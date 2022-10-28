import React from 'react'
import Logo from '../logo/logo'
import Navbar from '../navbar/navbar'

export default function Header() {
  return (
    <div style={{display:'flex',alignItems:'center',flexDirection:'row',backgroundColor:'#eaf0fb'}}>
    <Logo/><Navbar/>
    </div>
  )
}
