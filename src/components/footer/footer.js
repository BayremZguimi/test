import React from 'react';
import Icon from './icon';
import logofooter from './logofooter.png';
import icontel from './icontel.png';
import gpsicon from './gpsicon.png';
import clockicon from './clockicon.png';



export default function Footer() {
  return (
    <>
<div  style={{display:'flex',alignItems:'center',justifyContent:'space-between',backgroundColor:'#D9E2F1',marginTop:'184.5px'}}>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',marginBottom:'50px',marginTop:'49px',marginLeft:'149px'}} >
    <img src={logofooter} style={{width:'263px',height:'40px'}}/>
    <text className='font-face-gm' style={{width:'346px',height:'60px',fontSize:'13px',marginTop:'22px',color:'#121325'}}>Le logiciel Revit® BIM facilite l’architecture, l’ingénierie 
et la construction (AEC) créent des bâtiments et des 
infrastructures de grande qualité.</text>
    </div>
<ul style={{listStyle:'none',marginTop:'49px'}}>
    <li>    <Icon src={icontel} desc='(+216) 71 904 838' wt='16px' ht='16px' title='Téléphone'/>
</li>
<li style={{marginTop:'17px'}}>        <Icon src={clockicon} desc='Lun - Ven 8 AM - 5 PM Sam 8 AM - 1 PM' wt='20px' ht='20px' title='Horaire de travail'/>

</li>
<li style={{marginTop:'17px'}}>     <Icon src={gpsicon} desc='Tunis, Nabeul' wt='18px' ht='24.94px' title='Adresse' />
</li>
    
    

</ul>
<div  style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',marginTop:'49px',marginRight:'181px'}}>
    <ul className='font-face-gm' style={{listStyle:'none',fontSize:'13px'}}>
        <li>Liens Utiles</li>
        <li>L'école</li>
        <li>Nos partenaires</li>
        <li>Nos formations</li>
        <li>Devenir partenaire</li>
        <li>Blog</li>
        <li>Contact</li>

    </ul>


</div>
</div>
</>
  )
}
