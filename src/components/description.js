import React from 'react'
import Button from './button'
import Navbartext from './navbar/navbartext'

export default function Description() {
  return (
    <div style={{marginLeft:'80px'}}>
        <div>
    <text className='font-face-gm' style={{fontSize:'50px',width:'565px',color:'#284384',height:'150px'}}>APPRENEZ REVIT ARCHITECTURE 
    <text style={{color:'#F71715'}}> .</text>
     </text> 
     </div>
     <div style={{width:'449px'}}>
     <text style={{fontFamily:'sans-serif',fontSize:'24px',color:'#121325'}}>
        Revit est l'avenir de la modélisation 3D Apprenez REVIT et ayez une certification officiel d'<text style={{color:'#1C1B4B'}}>Autodesk</text>.
     </text>
     </div>
     <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:'37px'}}>
        <Button wt="237px" name="Contact"></Button>
        <Navbartext ml='28px' name="Pourquoi REVIT?"></Navbartext>
     </div>
     </div>
       )
}
