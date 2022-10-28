import React from 'react'
import Button from '../button'
import Navbartext from './navbartext'

export default function Navbar() {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
        <Navbartext ml="250px" name="Accueil"/>
        <Navbartext ml="100px"  name="Apprenez Revit"/>
        <Navbartext ml="100px"  name="Pourquoi REVIT?"/>
        <Button ml="250px" mt="20px" wt="143px" name="Contact"/>
    </div>
  )
}
